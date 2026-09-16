import Box from '@mui/material/Box';

import ValueRow from './ValueRow.jsx';

/**
 * ValueAccordion 컴포넌트
 *
 * ValueRow 를 세로로 쌓은 목록. 위에 굵은 선 하나, 행 사이는 얇은 선으로 나뉜다. 한 번에 한 행만 선택된다.
 *
 * Props:
 * @param {Array<{id: string, title: string, body: string}>} items - 행 목록 [Required]
 * @param {string} activeId - 선택된 행 id [Required]
 * @param {function} onSelect - 행 선택 시 (id) => void [Required]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <ValueAccordion items={values} activeId={activeValue} onSelect={setActiveValue} />
 */
function ValueAccordion({ items, activeId, onSelect, sx }) {
  return (
    <Box sx={{ borderTop: '1px solid rgba(27,26,24,.35)', ...sx }}>
      {items.map((item) => (
        <ValueRow key={item.id} id={item.id} title={item.title} body={item.body} isActive={activeId === item.id} onSelect={() => onSelect(item.id)} />
      ))}
    </Box>
  );
}

export default ValueAccordion;
