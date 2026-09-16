import Button from '@mui/material/Button';

import { typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * UnderlineButton 컴포넌트
 *
 * 글자 아래 1px 밑줄만 있는 텍스트 버튼. 헤더 링크와 제품 카드의 Explore 에 쓴다.
 *
 * Props:
 * @param {ReactNode} children - 버튼 텍스트 [Required]
 * @param {string} href - 이동할 링크. 있으면 a 태그로 렌더 [Optional]
 * @param {function} onClick - 클릭 시 실행할 함수 [Optional]
 * @param {number} weight - 글자 굵기 [Optional, 기본값: 600]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <UnderlineButton href="#listening" weight={500}>Private listening</UnderlineButton>
 */
function UnderlineButton({ children, href, onClick, weight = 600, sx }) {
  return (
    <Button color="inherit" href={href} onClick={onClick} sx={{ ...typeSx, fontWeight: weight, borderBottom: '1px solid currentColor', px: 0, ...sx }}>
      {children}
    </Button>
  );
}

export default UnderlineButton;
