import SplitFeature from '../templates/SplitFeature.jsx';
import { materialDetail } from './teklaSoundContent';
import { teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaMaterialDetailSection 섹션
 *
 * 직물 표면 근접 사진을 왼쪽에, 소재 카피를 오른쪽에 둔 점토색 분할 섹션.
 *
 * Props:
 * @param {{src: string, alt: string}} image - 근접 사진 [Optional]
 * @param {string} eyebrow - 소제목 라벨 [Optional]
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {string[]} body - 본문 줄 목록 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaMaterialDetailSection />
 */
function TeklaMaterialDetailSection({ image = materialDetail.image, eyebrow = materialDetail.eyebrow, headline = materialDetail.headline, body = materialDetail.body, sx }) {
  return (
    <SplitFeature
      component="section"
      image={image}
      eyebrow={eyebrow}
      headline={headline}
      body={body}
      imageSide="left"
      bgcolor={teklaColors.clay}
      color={teklaColors.inkDeep}
      headingFontSize="clamp(3rem, 5vw, 6rem)"
      bodySx={{ maxWidth: 'none', wordBreak: 'normal' }}
      sx={{ ...typeSx, ...sx }}
    />
  );
}

export default TeklaMaterialDetailSection;
