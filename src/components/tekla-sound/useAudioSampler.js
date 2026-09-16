import { useEffect, useRef, useState } from 'react';

/**
 * useAudioSampler 훅
 *
 * 숨겨진 audio 엘리먼트 하나로 샘플 트랙을 재생·전환·페이드아웃한다.
 *
 * 동작 흐름:
 * 1. 사용자가 전원을 ON 하면 현재 선택된 샘플이 재생된다
 * 2. 재생 중 다른 샘플을 고르면 곧바로 그 트랙으로 바뀐다
 * 3. 전원을 OFF 하면 0.5초 동안 볼륨이 줄어든 뒤 멈추고 처음으로 되감긴다
 * 4. 브라우저가 자동 재생을 막으면 전원 표시가 OFF 로 돌아간다
 *
 * @param {Array<{label: string, src: string, volume: number}>} samples - 샘플 트랙 목록 [Required]
 * @returns {{ audioRef: object, isSpeakerOn: boolean, activeSample: number, setSpeakerPower: function, selectSample: function }}
 *
 * Example usage:
 * const { audioRef, isSpeakerOn, activeSample, setSpeakerPower, selectSample } = useAudioSampler(samples);
 * <Box component="audio" ref={audioRef} preload="metadata" loop sx={{ display: 'none' }} />
 */
export default function useAudioSampler(samples) {
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  const [activeSample, setActiveSample] = useState(0);
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);

  useEffect(() => () => {
    if (fadeTimerRef.current) window.clearInterval(fadeTimerRef.current);
  }, []);

  const clearAudioFade = () => {
    if (fadeTimerRef.current) {
      window.clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  };

  const playSample = async (sampleIndex) => {
    const audio = audioRef.current;
    if (!audio) return;
    clearAudioFade();
    const nextSource = samples[sampleIndex].src;
    const resolvedSource = new URL(nextSource, window.location.href).href;
    if (audio.currentSrc !== resolvedSource) {
      audio.pause();
      audio.src = nextSource;
      audio.load();
    }
    audio.volume = samples[sampleIndex].volume;
    try {
      await audio.play();
    } catch (error) {
      if (error?.name !== 'AbortError') setIsSpeakerOn(false);
    }
  };

  const setSpeakerPower = (nextState) => {
    const audio = audioRef.current;
    setIsSpeakerOn(nextState);
    if (nextState) {
      playSample(activeSample);
      return;
    }
    if (!audio || audio.paused) return;
    clearAudioFade();
    const startVolume = audio.volume;
    let step = 0;
    fadeTimerRef.current = window.setInterval(() => {
      step += 1;
      audio.volume = Math.max(0, startVolume * (1 - step / 10));
      if (step >= 10) {
        clearAudioFade();
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 0.35;
      }
    }, 50);
  };

  const selectSample = async (sampleIndex) => {
    setActiveSample(sampleIndex);
    if (isSpeakerOn) await playSample(sampleIndex);
  };

  return { audioRef, isSpeakerOn, activeSample, setSpeakerPower, selectSample };
}
