import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import SlideDots from '../media/SlideDots.jsx';
import { atmosphereImages } from './teklaSoundContent';
import { teklaColors } from './teklaSoundTokens';

/**
 * TeklaAtmosphereSlideshow 섹션
 *
 * 화면 폭을 가득 채우는 분위기 사진 세 장이 일정 간격으로 교차 페이드된다.
 * 하단 점을 누르면 그 사진으로 바로 넘어간다.
 *
 * Props:
 * @param {Array<{src: string, label: string}>} images - 슬라이드 이미지 [Optional]
 * @param {number} intervalMs - 자동 전환 간격(ms) [Optional, 기본값: 5000]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaAtmosphereSlideshow />
 */
function TeklaAtmosphereSlideshow({ images = atmosphereImages, intervalMs = 5000, sx }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <Box component="section" aria-label="TEKLA SOUND immersive listening scene" sx={{ position: 'relative', bgcolor: teklaColors.paper, ...sx }}>
      {images.map((item, index) => (
        <Box component="img" key={item.label} src={item.src} alt={index === activeSlide ? item.label : ''} aria-hidden={index !== activeSlide} sx={{ position: index === 0 ? 'relative' : 'absolute', inset: index === 0 ? 'auto' : 0, width: '100%', height: { xs: 480, md: '88vh' }, minHeight: { md: 680 }, display: 'block', objectFit: 'cover', objectPosition: index === 0 ? { xs: '72% center', md: '60% center' } : { xs: '62% center', md: 'center' }, transform: index === 0 ? 'scale(1.06)' : 'none', opacity: index === activeSlide ? 1 : 0, transition: 'opacity 800ms ease-in-out', '@media (prefers-reduced-motion: reduce)': { transitionDuration: '1ms' } }} />
      ))}
      <SlideDots items={images} activeIndex={activeSlide} onSelect={setActiveSlide} sx={{ position: 'absolute', left: '50%', bottom: { xs: 22, md: 30 }, zIndex: 2, transform: 'translateX(-50%)' }} />
    </Box>
  );
}

export default TeklaAtmosphereSlideshow;
