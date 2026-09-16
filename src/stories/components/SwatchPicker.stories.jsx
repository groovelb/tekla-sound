import { useState } from 'react';
import Box from '@mui/material/Box';

import SwatchPicker from '../../components/input/SwatchPicker.jsx';
import { colorwaySection } from '../../components/tekla-sound/teklaSoundContent';
import { teklaColors } from '../../components/tekla-sound/teklaSoundTokens';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 컬러 칩 선택기. hover/focus 로 선택, 영역을 벗어나면 첫 컬러로 복귀. */
export default {
  title: 'Custom Component/TEKLA SOUND/Swatch Picker',
  component: SwatchPicker,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    items: { control: 'object', description: '컬러 목록 { id, label, color }' },
    activeId: { control: false, description: '선택된 컬러 id (스토리에서는 내부 상태로 관리)' },
    onSelect: { action: 'select', description: '칩 hover/focus' },
    onReset: { action: 'reset', description: '영역 이탈/blur' },
    frameColor: { control: 'color', description: '칩 바깥 테두리 색 (섹션 배경과 같게)' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

function Controlled({ items, onSelect, onReset, ...rest }) {
  const [active, setActive] = useState(items[0]);
  return (
    <Box sx={{ bgcolor: rest.frameColor, py: 6 }}>
      <SwatchPicker {...rest} items={items} activeId={active.id} onSelect={(item) => { setActive(item); onSelect?.(item); }} onReset={() => { setActive(items[0]); onReset?.(); }} />
    </Box>
  );
}

export const Default = {
  render: (args) => <Controlled {...args} />,
  args: { items: colorwaySection.colorways, frameColor: teklaColors.sand },
};
