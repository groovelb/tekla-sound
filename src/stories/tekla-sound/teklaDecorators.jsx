import { createElement } from 'react';
import Box from '@mui/material/Box';

import { teklaColors, typeSx } from '../../components/tekla-sound/teklaSoundTokens';

/**
 * TEKLA SOUND 스토리 공통 프레임. 랜딩 루트와 같은 종이색 배경·잉크색 글자·Pretendard 서체를 깐다.
 * 섹션과 컴포넌트를 단독으로 렌더해도 페이지 안에서와 같은 바탕 위에 보인다.
 */
export const withTeklaFrame = (Story) => (
  <Box sx={{ ...typeSx, bgcolor: teklaColors.paper, color: teklaColors.ink, minHeight: '100%' }}>
    { createElement(Story) }
  </Box>
);

/** 절대 배치 헤더처럼 기준 상자가 필요한 스토리용 프레임 (높이 240px). */
export const withRelativeStage = (Story) => (
  <Box sx={{ ...typeSx, position: 'relative', height: 240, bgcolor: teklaColors.paper, color: teklaColors.ink }}>
    { createElement(Story) }
  </Box>
);
