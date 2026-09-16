import Typography from '@mui/material/Typography';

import { eyebrowSx } from '../tekla-sound/teklaSoundTokens';

/**
 * Eyebrow 컴포넌트
 *
 * 섹션 위에 놓이는 대문자 소제목. 넓은 자간의 작은 라벨로 섹션의 주제를 먼저 알린다.
 *
 * Props:
 * @param {ReactNode} children - 라벨 텍스트 [Required]
 * @param {number} size - 글자 크기(px) [Optional, 기본값: 12]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <Eyebrow>ARCHITECTURAL SOUND</Eyebrow>
 */
function Eyebrow({ children, size = 12, sx }) {
  return <Typography sx={{ ...eyebrowSx, fontSize: size, ...sx }}>{children}</Typography>;
}

export default Eyebrow;
