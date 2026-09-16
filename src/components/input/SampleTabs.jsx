import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { teklaColors, typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * SampleTabs 컴포넌트
 *
 * 번호가 붙은 작은 텍스트 탭. 선택된 항목만 진하게, 밑줄로 표시된다.
 *
 * Props:
 * @param {Array<{label: string}>} items - 탭 목록 [Required]
 * @param {number} activeIndex - 선택된 인덱스 [Required]
 * @param {function} onSelect - 탭 선택 시 (index) => void [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SampleTabs items={samples} activeIndex={activeSample} onSelect={selectSample} />
 */
function SampleTabs({ items, activeIndex, onSelect, sx }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, md: 2 }} sx={sx}>
      {items.map((item, index) => {
        const selected = activeIndex === index;
        return (
          <Button
            key={item.label}
            type="button"
            color="inherit"
            aria-pressed={selected}
            onClick={() => onSelect(index)}
            sx={{ ...typeSx, minWidth: 0, px: 0, pb: .5, borderRadius: 0, borderBottom: selected ? `1px solid ${teklaColors.inkDeep}` : '1px solid transparent', fontSize: 10, fontWeight: selected ? 600 : 400, letterSpacing: '.08em', color: selected ? teklaColors.inkDeep : 'rgba(23,21,18,.48)' }}
          >
            {String(index + 1).padStart(2, '0')} {item.label}
          </Button>
        );
      })}
    </Stack>
  );
}

export default SampleTabs;
