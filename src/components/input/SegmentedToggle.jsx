import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { teklaColors, typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * SegmentedToggle 컴포넌트
 *
 * 알약 트랙 안에서 하나만 켜지는 세그먼트 토글. 선택된 칸은 흰색으로 떠오른다.
 *
 * 동작 흐름:
 * 1. 사용자가 칸을 누르면 그 칸이 흰색 배경으로 올라온다
 * 2. onChange 가 선택된 값과 함께 호출된다
 *
 * Props:
 * @param {Array<{value: any, label: string}>} options - 칸 목록 [Required]
 * @param {any} value - 현재 선택된 값 [Required]
 * @param {function} onChange - 선택 변경 시 (value) => void [Required]
 * @param {string} ariaLabel - 그룹 접근성 라벨 [Optional]
 * @param {object} sx - 트랙 추가 스타일 [Optional]
 *
 * Example usage:
 * <SegmentedToggle options={[{ value: true, label: 'ON' }, { value: false, label: 'OFF' }]} value={isOn} onChange={setIsOn} />
 */
function SegmentedToggle({ options, value, onChange, ariaLabel, sx }) {
  return (
    <Box role="group" aria-label={ariaLabel} sx={{ display: 'flex', gap: '2px', border: '1px solid rgba(23,21,18,.12)', borderRadius: '999px', bgcolor: 'rgba(213,206,195,.72)', p: '3px', boxShadow: 'inset 0 1px 2px rgba(23,21,18,.08)', backdropFilter: 'blur(12px)', ...sx }}>
      {options.map((option) => {
        const selected = value === option.value;
        return (
          <Button
            key={String(option.value)}
            type="button"
            color="inherit"
            aria-pressed={selected}
            onClick={() => onChange(option.value)}
            sx={{ ...typeSx, minWidth: 50, minHeight: 32, px: 1.75, py: .5, borderRadius: '999px', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', bgcolor: selected ? 'rgba(255,255,255,.94)' : 'transparent', color: selected ? teklaColors.inkDeep : 'rgba(23,21,18,.5)', boxShadow: selected ? '0 1px 4px rgba(23,21,18,.18), 0 1px 1px rgba(23,21,18,.08)' : 'none', transition: 'background-color 180ms ease, color 180ms ease, box-shadow 180ms ease', '&:hover': { bgcolor: selected ? '#FFF' : 'rgba(255,255,255,.34)' } }}
          >
            {option.label}
          </Button>
        );
      })}
    </Box>
  );
}

export default SegmentedToggle;
