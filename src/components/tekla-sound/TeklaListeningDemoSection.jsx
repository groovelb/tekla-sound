import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SectionContainer from '../container/SectionContainer.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import SegmentedToggle from '../input/SegmentedToggle.jsx';
import SampleTabs from '../input/SampleTabs.jsx';
import useAudioSampler from './useAudioSampler';
import { listeningDemo } from './teklaSoundContent';
import { landingKeyframesSx, teklaColors, typeSx } from './teklaSoundTokens';

const powerOptions = [
  { value: true, label: 'ON' },
  { value: false, label: 'OFF' },
];

/**
 * TeklaListeningDemoSection 섹션
 *
 * 왼쪽은 브랜드 스토리, 오른쪽은 세로형 제품 사진과 전원 토글, 샘플 트랙 탭.
 *
 * 동작 흐름:
 * 1. 사용자가 ON 을 누르면 선택된 샘플이 재생되고 제품 사진이 미세하게 진동한다
 * 2. 트랙 탭을 바꾸면 재생 중인 곡이 바뀐다
 * 3. OFF 를 누르면 소리가 서서히 줄며 멈추고 진동도 멎는다
 *
 * Props:
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {{brand: string, brandTail: string, lines: string[]}} story - 브랜드 스토리 문단 [Optional]
 * @param {{src: string, alt: string}} image - 세로형 제품 사진 [Optional]
 * @param {Array<{label: string, src: string, volume: number}>} samples - 샘플 트랙 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaListeningDemoSection />
 */
function TeklaListeningDemoSection({ headline = listeningDemo.headline, story = listeningDemo.story, image = listeningDemo.image, samples = listeningDemo.samples, sx }) {
  const { audioRef, isSpeakerOn, activeSample, setSpeakerPower, selectSample } = useAudioSampler(samples);
  return (
    <Box component="section" sx={{ ...typeSx, pt: { xs: 5, md: 8 }, pb: { xs: 10, md: 16 }, bgcolor: teklaColors.paper, color: teklaColors.inkDeep, ...landingKeyframesSx, ...sx }}>
      <SectionContainer sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'minmax(0, 1.05fr) minmax(0, .95fr)' }, alignItems: 'center', gap: { xs: 6, md: 7 } }}>
        <Box sx={{ minWidth: 0 }}>
          <DisplayHeading lines={headline} fontSize={{ xs: 'clamp(1.35rem, 5.5vw, 2rem)', md: 'clamp(2.4rem, 4.3vw, 5rem)' }} />
          <Typography sx={{ ...typeSx, maxWidth: 850, mt: { xs: 5, md: 7 }, fontSize: { xs: 16, md: 20 }, fontWeight: 300, lineHeight: 1.8, wordBreak: 'keep-all' }}>
            <Box component="span" sx={{ display: 'block' }}><Box component="span" sx={{ fontWeight: 600 }}>{story.brand}</Box>{story.brandTail}</Box>
            {story.lines.map((line) => (
              <Box component="span" key={line} sx={{ display: 'block' }}>{line}</Box>
            ))}
          </Typography>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifySelf: 'center' }}>
          <Box component="img" src={image.src} alt={image.alt} sx={{ width: 'min(100%, 520px)', maxHeight: { xs: 620, md: 760 }, display: 'block', objectFit: 'contain', transformOrigin: 'center', willChange: isSpeakerOn ? 'transform' : 'auto', animation: isSpeakerOn ? 'speakerVibration .42s infinite linear' : 'none', '@media (prefers-reduced-motion: reduce)': { animation: 'none', willChange: 'auto' } }} />
          <SegmentedToggle options={powerOptions} value={isSpeakerOn} onChange={setSpeakerPower} ariaLabel="제품 음향 상태" sx={{ mt: 2 }} />
          <SampleTabs items={samples} activeIndex={activeSample} onSelect={selectSample} sx={{ mt: 2.5 }} />
          <Box component="audio" ref={audioRef} preload="metadata" loop sx={{ display: 'none' }} />
        </Box>
      </SectionContainer>
    </Box>
  );
}

export default TeklaListeningDemoSection;
