import { useState } from 'react';

import ValueAccordion from '../../components/in-page-navigation/ValueAccordion.jsx';
import { valueSection } from '../../components/tekla-sound/teklaSoundContent';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** ValueRow 를 세로로 쌓은 목록. 한 번에 한 행만 선택된다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Value Accordion',
  component: ValueAccordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    items: { control: 'object', description: '행 목록 { id, title, body }' },
    activeId: { control: false, description: '선택된 행 id (스토리에서는 내부 상태로 관리)' },
    onSelect: { action: 'select', description: '행 선택' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

function Controlled({ items, onSelect, ...rest }) {
  const [active, setActive] = useState(items[0].id);
  return <ValueAccordion {...rest} items={items} activeId={active} onSelect={(id) => { setActive(id); onSelect?.(id); }} />;
}

export const Default = {
  render: (args) => <Controlled {...args} />,
  args: { items: valueSection.items },
};
