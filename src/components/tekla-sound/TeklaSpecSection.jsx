import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SectionContainer from '../container/SectionContainer.jsx';
import Eyebrow from '../typography/Eyebrow.jsx';
import DisplayHeading from '../typography/DisplayHeading.jsx';
import LineBreakText from '../typography/LineBreakText.jsx';
import SpecCard from '../data-display/SpecCard.jsx';
import { specSection } from './teklaSoundContent';
import { teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaSpecSection 섹션
 *
 * 헤드라인과 한 줄 설명이 나란히 놓이고, 그 아래 얇은 선으로 나뉜 스펙 그리드(3열)와 각주가 이어진다.
 *
 * Props:
 * @param {string} eyebrow - 소제목 라벨 [Optional]
 * @param {string[]} headline - 헤드라인 줄 목록 [Optional]
 * @param {string[]} body - 설명 줄 목록 [Optional]
 * @param {Array<{label: string, value: string, detail: string}>} specs - 스펙 목록 [Optional]
 * @param {string} footnote - 하단 각주 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaSpecSection />
 */
function TeklaSpecSection({ eyebrow = specSection.eyebrow, headline = specSection.headline, body = specSection.body, specs = specSection.specs, footnote = specSection.footnote, sx }) {
  return (
    <Box component="section" sx={{ ...typeSx, bgcolor: teklaColors.sand, color: teklaColors.inkDeep, py: { xs: 10, md: 15 }, ...sx }}>
      <SectionContainer>
        <Eyebrow size={11}>{eyebrow}</Eyebrow>
        <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'minmax(0, .8fr) minmax(0, 1.2fr)' }, gap: { xs: 5, md: 10 }, alignItems: 'end' }}>
          <DisplayHeading lines={headline} fontSize="clamp(2.6rem, 5vw, 5.8rem)" />
          <LineBreakText lines={body} sx={{ maxWidth: 720, fontSize: { xs: 16, md: 19 }, lineHeight: 1.75, fontWeight: 300, wordBreak: 'keep-all' }} />
        </Box>
        <Box sx={{ mt: { xs: 7, md: 10 }, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' }, borderTop: '1px solid rgba(23,21,18,.3)', borderLeft: { lg: '1px solid rgba(23,21,18,.18)' } }}>
          {specs.map((spec) => (
            <SpecCard key={spec.label} label={spec.label} value={spec.value} detail={spec.detail} />
          ))}
        </Box>
        {footnote && <Typography sx={{ ...typeSx, mt: 3, fontSize: 11, lineHeight: 1.6, fontWeight: 300, color: 'rgba(23,21,18,.55)' }}>{footnote}</Typography>}
      </SectionContainer>
    </Box>
  );
}

export default TeklaSpecSection;
