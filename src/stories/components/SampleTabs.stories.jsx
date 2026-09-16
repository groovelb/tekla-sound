import { useState } from 'react';

import SampleTabs from '../../components/input/SampleTabs.jsx';
import { listeningDemo } from '../../components/tekla-sound/teklaSoundContent';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 번호가 붙은 작은 텍스트 탭. 선택된 항목만 진하게, 밑줄로 표시. */
export default {
  title: 'Custom Component/TEKLA SOUND/Sample Tabs',
  component: SampleTabs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [withTeklaFrame],
  argTypes: {
    items: { control: 'object', description: '탭 목록 { label }' },
    activeIndex: { control: false, description: '선택된 인덱스 (스토리에서는 내부 상태로 관리)' },
    onSelect: { action: 'select', description: '탭 선택' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

function Controlled({ items, onSelect, ...rest }) {
  const [active, setActive] = useState(0);
  return <SampleTabs {...rest} items={items} activeIndex={active} onSelect={(index) => { setActive(index); onSelect?.(index); }} />;
}

export const Default = {
  render: (args) => <Controlled {...args} />,
  args: { items: listeningDemo.samples },
};
