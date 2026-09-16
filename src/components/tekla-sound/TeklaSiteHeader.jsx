import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import UnderlineButton from '../input/UnderlineButton.jsx';
import { siteHeader } from './teklaSoundContent';
import { sectionPaddingX, typeSx } from './teklaSoundTokens';

/**
 * TeklaSiteHeader 섹션
 *
 * 히어로 위에 겹쳐 뜨는 얇은 헤더. 왼쪽 브랜드 워드마크, 오른쪽 밑줄 링크 하나.
 *
 * Props:
 * @param {string} brand - 워드마크 텍스트 [Optional, 기본값: 'TEKLA SOUND']
 * @param {{label: string, href: string}} link - 오른쪽 링크 [Optional, 기본값: Private listening]
 * @param {'absolute'|'relative'|'static'} position - 배치 방식. 페이지에서는 absolute 로 히어로 위에 겹친다 [Optional, 기본값: 'absolute']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaSiteHeader />
 */
function TeklaSiteHeader({ brand = siteHeader.brand, link = siteHeader.link, position = 'absolute', sx }) {
  return (
    <Box component="header" sx={{ position, inset: '0 0 auto', zIndex: 2, px: sectionPaddingX, py: 3, ...sx }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ ...typeSx, fontSize: 15, fontWeight: 600, letterSpacing: '0.08em' }}>{brand}</Typography>
        <UnderlineButton href={link.href} weight={500}>{link.label}</UnderlineButton>
      </Stack>
    </Box>
  );
}

export default TeklaSiteHeader;
