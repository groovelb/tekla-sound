import Button from '@mui/material/Button';

import { teklaColors, typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * PillButton 컴포넌트
 *
 * 반투명 유리 위에 테라코타 외곽선을 두른 알약형 CTA 버튼.
 *
 * Props:
 * @param {ReactNode} children - 버튼 텍스트 [Required]
 * @param {string} href - 이동할 링크 [Optional]
 * @param {function} onClick - 클릭 시 실행할 함수 [Optional]
 * @param {string} accent - 외곽선과 글자 색 [Optional, 기본값: 테라코타]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <PillButton onClick={openBooking}>Book a private listening</PillButton>
 */
function PillButton({ children, href, onClick, accent = teklaColors.terracotta, sx }) {
  return (
    <Button
      variant="outlined"
      href={href}
      onClick={onClick}
      sx={{
        ...typeSx,
        px: 4,
        py: 1.5,
        borderRadius: '999px',
        border: `1px solid ${accent}`,
        bgcolor: 'rgba(255,255,255,.22)',
        color: accent,
        fontWeight: 600,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.5), 0 6px 20px rgba(23,21,18,.06)',
        backdropFilter: 'blur(14px)',
        textTransform: 'none',
        '&:hover': { border: `1px solid ${accent}`, bgcolor: 'rgba(255,255,255,.38)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,.65), 0 8px 24px rgba(23,21,18,.08)' },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}

export default PillButton;
