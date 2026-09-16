import Box from '@mui/material/Box';

import { teklaColors } from '../tekla-sound/teklaSoundTokens';

/**
 * SlideDots 컴포넌트
 *
 * 슬라이드쇼 하단의 점 인디케이터. 현재 슬라이드 점만 채워지고 살짝 커진다.
 *
 * Props:
 * @param {Array<{label: string}>} items - 슬라이드 목록 (label 은 접근성 라벨에 쓰임) [Required]
 * @param {number} activeIndex - 현재 슬라이드 인덱스 [Required]
 * @param {function} onSelect - 점 클릭 시 (index) => void [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SlideDots items={images} activeIndex={active} onSelect={setActive} />
 */
function SlideDots({ items, activeIndex, onSelect, sx }) {
  return (
    <Box sx={{ display: 'flex', gap: 1.25, ...sx }}>
      {items.map((item, index) => {
        const selected = activeIndex === index;
        return (
          <Box component="button" key={item.label} type="button" aria-label={`${item.label} 이미지 보기`} aria-pressed={selected} onClick={() => onSelect(index)} sx={{ width: 12, height: 12, p: 0, borderRadius: '50%', border: '1px solid rgba(23,21,18,.72)', bgcolor: selected ? teklaColors.inkDeep : 'rgba(243,239,231,.68)', boxShadow: '0 1px 4px rgba(23,21,18,.18)', cursor: 'pointer', transition: 'background-color 180ms ease, transform 180ms ease', transform: selected ? 'scale(1.08)' : 'none' }} />
        );
      })}
    </Box>
  );
}

export default SlideDots;
