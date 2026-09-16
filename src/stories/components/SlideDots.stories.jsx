import { useState } from 'react';

import SlideDots from '../../components/media/SlideDots.jsx';
import { atmosphereImages } from '../../components/tekla-sound/teklaSoundContent';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 슬라이드쇼 하단 점 인디케이터. 현재 점만 채워지고 살짝 커진다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Slide Dots',
  component: SlideDots,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [withTeklaFrame],
  argTypes: {
    items: { control: 'object', description: '슬라이드 목록 { label }' },
    activeIndex: { control: false, description: '현재 인덱스 (스토리에서는 내부 상태로 관리)' },
    onSelect: { action: 'select', description: '점 클릭' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

function Controlled({ items, onSelect, ...rest }) {
  const [active, setActive] = useState(0);
  return <SlideDots {...rest} items={items} activeIndex={active} onSelect={(index) => { setActive(index); onSelect?.(index); }} />;
}

export const Default = {
  render: (args) => <Controlled {...args} />,
  args: { items: atmosphereImages },
};
