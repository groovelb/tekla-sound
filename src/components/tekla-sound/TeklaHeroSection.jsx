import Box from '@mui/material/Box';

import SectionContainer from '../container/SectionContainer.jsx';
import Eyebrow from '../typography/Eyebrow.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import LineBreakText from '../typography/LineBreakText.jsx';
import { hero } from './teklaSoundContent';

/**
 * TeklaHeroSection 섹션
 *
 * 화면을 가득 채우는 히어로. 배경 사진 위에 왼쪽에서 오른쪽으로 옅어지는 어둠을 깔고,
 * 하단에 아이브로우·대형 헤드라인·본문을 흰색으로 얹는다.
 *
 * Props:
 * @param {{src: string, alt: string}} image - 배경 이미지 [Optional, 기본값: 쇼룸 히어로]
 * @param {string} eyebrow - 소제목 라벨 [Optional]
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {string[]} body - 본문 줄 목록 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaHeroSection />
 */
function TeklaHeroSection({ image = hero.image, eyebrow = hero.eyebrow, headline = hero.headline, body = hero.body, sx }) {
  return (
    <Box component="section" sx={{ minHeight: '100svh', position: 'relative', display: 'grid', alignItems: 'end', overflow: 'hidden', ...sx }}>
      <Box component="img" src={image.src} alt={image.alt} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(20,18,14,.48) 0%, rgba(20,18,14,.08) 55%, transparent 75%)' }} />
      <SectionContainer sx={{ position: 'relative', zIndex: 1, pb: { xs: 7, md: 10 }, color: '#fff' }}>
        <Eyebrow sx={{ mb: 2 }}>{eyebrow}</Eyebrow>
        <DisplayHeading component="h1" lines={headline} fontSize="clamp(3.5rem, 8vw, 8.5rem)" sx={{ ml: '-0.04em', maxWidth: 780, lineHeight: { xs: 'calc(1em + 7.5px)', md: 'calc(1em + 12px)' } }} />
        <LineBreakText lines={body} sx={{ mt: '30px', maxWidth: 620, fontSize: { xs: 17, md: 20 }, fontWeight: 300, lineHeight: 1.65, wordBreak: 'keep-all' }} />
      </SectionContainer>
    </Box>
  );
}

export default TeklaHeroSection;
