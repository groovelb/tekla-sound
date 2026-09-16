import Box from '@mui/material/Box';

import Eyebrow from '../typography/Eyebrow.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import PillButton from '../input/PillButton.jsx';
import { listeningCta } from './teklaSoundContent';
import { teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaListeningCtaSection 섹션
 *
 * 청음실 사진을 옅게 깔고 가운데에 아이브로우·헤드라인·알약형 CTA 를 놓는 마무리 섹션.
 * 헤더의 Private listening 링크가 이 섹션(id)으로 이동한다.
 *
 * Props:
 * @param {string} id - 앵커 id [Optional, 기본값: 'listening']
 * @param {string} backgroundImage - 배경 사진 경로 [Optional]
 * @param {string} eyebrow - 소제목 라벨 [Optional]
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {string} ctaLabel - 버튼 텍스트 [Optional]
 * @param {function} onCtaClick - 버튼 클릭 시 실행할 함수 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaListeningCtaSection onCtaClick={openBooking} />
 */
function TeklaListeningCtaSection({ id = listeningCta.id, backgroundImage = listeningCta.backgroundImage, eyebrow = listeningCta.eyebrow, headline = listeningCta.headline, ctaLabel = listeningCta.ctaLabel, onCtaClick, sx }) {
  return (
    <Box id={id} component="section" sx={{ ...typeSx, minHeight: '72vh', color: teklaColors.inkDeep, display: 'grid', placeItems: 'center', textAlign: 'center', px: 3, py: 10, backgroundImage: `linear-gradient(rgba(243,239,231,.66), rgba(243,239,231,.66)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: { xs: '62% center', md: 'center 42%' }, ...sx }}>
      <Box>
        <Eyebrow>{eyebrow}</Eyebrow>
        <DisplayHeading lines={headline} fontSize="clamp(2.24rem, 4.9vw, 5.6rem)" sx={{ mt: 2, maxWidth: 980 }} />
        <PillButton onClick={onCtaClick} sx={{ mt: 6 }}>{ctaLabel}</PillButton>
      </Box>
    </Box>
  );
}

export default TeklaListeningCtaSection;
