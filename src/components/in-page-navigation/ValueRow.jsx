import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * ValueRow 컴포넌트
 *
 * 번호, 제목, 설명, + 표시가 한 줄에 놓인 선택형 행. 선택되면 배경이 옅게 깔리고 + 가 45도 돌아 x 모양이 된다.
 *
 * Props:
 * @param {string} id - 행 번호 텍스트 (예: '01') [Required]
 * @param {string} title - 제목 [Required]
 * @param {string} body - 설명 [Required]
 * @param {boolean} isActive - 선택 여부 [Optional, 기본값: false]
 * @param {function} onSelect - 클릭 시 실행할 함수 [Required]
 *
 * Example usage:
 * <ValueRow id="01" title="Natural material" body="..." isActive={active === '01'} onSelect={() => setActive('01')} />
 */
function ValueRow({ id, title, body, isActive = false, onSelect }) {
  return (
    <Box component="button" type="button" onClick={onSelect} aria-pressed={isActive} sx={{ width: '100%', appearance: 'none', border: 0, borderBottom: '1px solid rgba(27,26,24,.22)', bgcolor: isActive ? 'rgba(27,26,24,.045)' : 'transparent', color: 'inherit', textAlign: 'left', display: 'grid', gridTemplateColumns: { xs: '48px 1fr', md: '100px minmax(220px, .7fr) 1fr 28px' }, gap: 2, py: 4, px: { xs: 1, md: 2 }, cursor: 'pointer', transition: 'background-color 180ms ease', '&:hover, &:focus-visible': { bgcolor: 'rgba(27,26,24,.06)', outline: 'none' } }}>
      <Typography sx={{ ...typeSx, fontWeight: 500 }}>{id}</Typography>
      <Typography sx={{ ...typeSx, fontSize: 22, fontWeight: 500 }}>{title}</Typography>
      <Typography sx={{ ...typeSx, gridColumn: { xs: '2', md: 'auto' }, maxWidth: 560, fontSize: 17, lineHeight: 1.7, fontWeight: 300, wordBreak: 'keep-all' }}>{body}</Typography>
      <Typography aria-hidden="true" sx={{ ...typeSx, gridColumn: { xs: '2', md: 'auto' }, justifySelf: 'end', fontSize: 22, fontWeight: 300, transform: isActive ? 'rotate(45deg)' : 'none', transition: 'transform 180ms ease' }}>+</Typography>
    </Box>
  );
}

export default ValueRow;
