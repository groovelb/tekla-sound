import { useState } from 'react';
import Box from '@mui/material/Box';

import SectionContainer from '../container/SectionContainer.jsx';
import Eyebrow from '../typography/Eyebrow.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import SwatchPicker from '../input/SwatchPicker.jsx';
import { colorwaySection } from './teklaSoundContent';
import { teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaColorwaySection 섹션
 *
 * 한 가지 형태, 다섯 가지 컬러. 큰 제품 사진 아래 컬러 칩이 있고,
 * 칩에 마우스를 올리면 사진이 그 컬러로 바뀌고 벗어나면 첫 컬러로 돌아온다.
 *
 * Props:
 * @param {string} eyebrow - 소제목 라벨 [Optional]
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {Array<{id: string, label: string, color: string, image: string}>} colorways - 컬러 목록 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaColorwaySection />
 */
function TeklaColorwaySection({ eyebrow = colorwaySection.eyebrow, headline = colorwaySection.headline, colorways = colorwaySection.colorways, sx }) {
  const [activeColor, setActiveColor] = useState(colorways[0]);
  const restorePrimary = () => setActiveColor(colorways[0]);
  return (
    <Box component="section" sx={{ ...typeSx, py: { xs: 10, md: 16 }, bgcolor: teklaColors.sand, ...sx }}>
      <SectionContainer>
        <Eyebrow>{eyebrow}</Eyebrow>
        <DisplayHeading lines={headline} fontSize="clamp(2.8rem, 5vw, 5.5rem)" sx={{ mt: 2 }} />
        <Box sx={{ mt: 5, mb: { xs: 0.4375, md: 0.75 }, minHeight: { xs: 240, md: 520 }, display: 'grid', placeItems: 'center' }}>
          <Box component="img" src={activeColor.image} alt={`${activeColor.label} 직물 마감의 TEKLA SOUND Wall Wide`} sx={{ width: 'min(100%, 1250px)', display: 'block', objectFit: 'contain', transition: 'opacity 180ms ease' }} />
        </Box>
        <SwatchPicker items={colorways} activeId={activeColor.id} onSelect={setActiveColor} onReset={restorePrimary} frameColor={teklaColors.sand} />
      </SectionContainer>
    </Box>
  );
}

export default TeklaColorwaySection;
