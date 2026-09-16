import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * SpecCard 컴포넌트
 *
 * 라벨을 위에, 값과 부연을 아래에 두는 스펙 한 칸. 얇은 선으로만 구분되는 그리드 셀로 쓴다.
 *
 * Props:
 * @param {string} label - 항목 이름 (대문자 라벨) [Required]
 * @param {string} value - 대표 값 [Required]
 * @param {string} detail - 부연 설명 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SpecCard label="SYSTEM OUTPUT" value="1,200 W RMS" detail="Up to 116 dB SPL target" />
 */
function SpecCard({ label, value, detail, sx }) {
  return (
    <Box sx={{ minHeight: 190, p: { xs: '28px 0', sm: 3.5, md: 4 }, borderRight: { sm: '1px solid rgba(23,21,18,.18)' }, borderBottom: '1px solid rgba(23,21,18,.18)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ...sx }}>
      <Typography sx={{ ...typeSx, fontSize: 10, fontWeight: 600, letterSpacing: '.13em', color: 'rgba(23,21,18,.55)' }}>{label}</Typography>
      <Box sx={{ mt: 5 }}>
        <Typography sx={{ ...typeSx, fontSize: { xs: 24, md: 28 }, fontWeight: 400, letterSpacing: '-.025em' }}>{value}</Typography>
        {detail && <Typography sx={{ ...typeSx, mt: 1, fontSize: 13, lineHeight: 1.5, fontWeight: 300, color: 'rgba(23,21,18,.68)' }}>{detail}</Typography>}
      </Box>
    </Box>
  );
}

export default SpecCard;
