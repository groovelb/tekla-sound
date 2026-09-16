import Box from '@mui/material/Box';

import Eyebrow from '../typography/Eyebrow.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import LineBreakText from '../typography/LineBreakText.jsx';
import { splitSectionSx, splitImageSx, teklaColors } from '../tekla-sound/teklaSoundTokens';

/**
 * SplitFeature 템플릿
 *
 * 한쪽은 꽉 찬 이미지, 다른 쪽은 아이브로우·헤드라인·본문·액션이 세로 중앙에 놓이는 좌우 분할 섹션.
 * 데스크탑에서는 imageSide 로 이미지 위치를 고르고, 모바일에서는 이미지가 항상 위에 온다.
 *
 * Props:
 * @param {{src: string, alt: string, objectPosition?: string}} image - 이미지 [Required]
 * @param {string} eyebrow - 소제목 라벨 [Required]
 * @param {string[]} headline - 헤드라인 줄 목록 [Required]
 * @param {string[]} body - 본문 줄 목록 [Required]
 * @param {ReactNode} action - 본문 아래 액션 (예: UnderlineButton) [Optional]
 * @param {'left'|'right'} imageSide - 데스크탑에서 이미지가 놓이는 쪽 [Optional, 기본값: 'left']
 * @param {string} bgcolor - 배경색 [Optional, 기본값: paper]
 * @param {string} color - 글자색 [Optional]
 * @param {string} headingFontSize - 헤드라인 크기 [Optional, 기본값: 'clamp(2.8rem, 5vw, 5.8rem)']
 * @param {object} bodySx - 본문 추가 스타일 [Optional]
 * @param {string} component - 루트 태그 [Optional, 기본값: 'div']
 * @param {object} sx - 루트 추가 스타일 [Optional]
 *
 * Example usage:
 * <SplitFeature image={{ src, alt }} eyebrow="STILL SERIES / WALL" headline={['The wall', 'becomes sound.']} body={['...']} imageSide="right" />
 */
function SplitFeature({
  image,
  eyebrow,
  headline,
  body,
  action,
  imageSide = 'left',
  bgcolor = teklaColors.paper,
  color,
  headingFontSize = 'clamp(2.8rem, 5vw, 5.8rem)',
  bodySx,
  component = 'div',
  sx,
}) {
  const imageOrder = imageSide === 'right' ? 2 : 1;
  return (
    <Box component={component} sx={{ ...splitSectionSx, bgcolor, color, ...sx }}>
      <Box component="img" src={image.src} alt={image.alt} sx={{ ...splitImageSx, objectPosition: image.objectPosition || 'center', order: { md: imageOrder } }} />
      <Box sx={{ minWidth: 0, height: '100%', p: { xs: 4, md: 8, lg: 12 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', order: { md: 3 - imageOrder } }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <DisplayHeading lines={headline} fontSize={headingFontSize} sx={{ mt: 2 }} />
        <LineBreakText lines={body} sx={{ mt: 4, maxWidth: 560, fontSize: 18, fontWeight: 300, lineHeight: 1.7, wordBreak: 'keep-all', ...bodySx }} />
        {action}
      </Box>
    </Box>
  );
}

export default SplitFeature;
