import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SectionContainer from '../container/SectionContainer.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import ValueAccordion from '../in-page-navigation/ValueAccordion.jsx';
import TeklaValueVisual from './TeklaValueVisual.jsx';
import { valueSection } from './teklaSoundContent';
import { landingKeyframesSx, typeSx } from './teklaSoundTokens';

/**
 * TeklaValueSection 섹션
 *
 * 브랜드가 집중하는 가치 세 가지. 헤드라인과 리드 아래 선택형 행 목록이 있고,
 * 행을 고르면 그 아래 비주얼이 바뀐다(선택할 때마다 비주얼이 새로 등장한다).
 *
 * Props:
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {string} lead - 리드 문장 [Optional]
 * @param {Array<{id: string, title: string, body: string}>} items - 가치 행 목록 [Optional]
 * @param {string} initialValue - 처음 선택된 행 id [Optional, 기본값: '01']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaValueSection />
 */
function TeklaValueSection({ headline = valueSection.headline, lead = valueSection.lead, items = valueSection.items, initialValue = '01', sx }) {
  const [activeValue, setActiveValue] = useState(initialValue);
  return (
    <SectionContainer component="section" sx={{ ...typeSx, py: { xs: 10, md: 18 }, ...landingKeyframesSx, ...sx }}>
      <DisplayHeading lines={headline} fontSize="clamp(2.8rem, 6vw, 6.5rem)" sx={{ maxWidth: 900, lineHeight: 'calc(1.34em - 10px)' }} />
      <Typography sx={{ ...typeSx, mt: 3, fontSize: { xs: 20, md: 28 }, fontWeight: 400 }}>{lead}</Typography>
      <ValueAccordion items={items} activeId={activeValue} onSelect={setActiveValue} sx={{ mt: { xs: 8, md: 14 } }} />
      <Box key={activeValue} sx={{ mt: { xs: 6, md: 8 }, overflow: 'hidden' }}>
        <TeklaValueVisual activeValue={activeValue} />
      </Box>
    </SectionContainer>
  );
}

export default TeklaValueSection;
