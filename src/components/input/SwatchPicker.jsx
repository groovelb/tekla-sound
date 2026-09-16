import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { teklaColors, typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * SwatchPicker 컴포넌트
 *
 * 컬러 칩 다섯 개를 가로로 늘어놓은 선택기. 칩 위에 마우스를 올리거나 포커스하면 그 색이 선택되고,
 * 영역을 벗어나면 onReset 으로 기본 색으로 돌아간다.
 *
 * Props:
 * @param {Array<{id: string, label: string, color: string}>} items - 컬러 목록 [Required]
 * @param {string} activeId - 선택된 컬러 id [Required]
 * @param {function} onSelect - 칩 hover/focus 시 (item) => void [Required]
 * @param {function} onReset - 영역 이탈/blur 시 [Optional]
 * @param {string} frameColor - 칩 바깥 테두리 색 (섹션 배경과 같게) [Optional, 기본값: sand]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SwatchPicker items={colorways} activeId={active.id} onSelect={setActive} onReset={restorePrimary} />
 */
function SwatchPicker({ items, activeId, onSelect, onReset, frameColor = teklaColors.sand, sx }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(5, minmax(0, 1fr))' }, columnGap: { xs: 2, md: 4 }, rowGap: 3, width: 'min(100%, 720px)', mx: 'auto', ...sx }} onMouseLeave={onReset}>
      {items.map((item) => {
        const selected = activeId === item.id;
        return (
          <Box component="button" key={item.id} type="button" aria-label={`${item.label} 컬러 보기`} aria-pressed={selected} onMouseEnter={() => onSelect(item)} onFocus={() => onSelect(item)} onBlur={onReset} sx={{ appearance: 'none', border: 0, bgcolor: 'transparent', p: 0, width: '100%', minWidth: 0, cursor: 'pointer', color: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center', ...typeSx }}>
            <Box sx={{ width: { xs: 34, md: 44 }, height: { xs: 34, md: 44 }, flexShrink: 0, bgcolor: item.color, border: selected ? `2px solid ${teklaColors.ink}` : '1px solid rgba(27,26,24,.25)', outline: `3px solid ${frameColor}`, outlineOffset: selected ? 3 : 0, transition: 'outline-offset 160ms ease' }} />
            <Typography component="span" sx={{ ...typeSx, display: 'block', width: '100%', mt: 1.5, fontSize: 12, lineHeight: 1.4, textAlign: 'center', whiteSpace: 'nowrap', fontWeight: selected ? 600 : 400 }}>{item.label}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default SwatchPicker;
