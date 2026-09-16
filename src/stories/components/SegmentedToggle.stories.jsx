import { useState } from 'react';

import SegmentedToggle from '../../components/input/SegmentedToggle.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 알약 트랙 안에서 하나만 켜지는 세그먼트 토글. 청음 데모의 ON/OFF. */
export default {
  title: 'Custom Component/TEKLA SOUND/Segmented Toggle',
  component: SegmentedToggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [withTeklaFrame],
  argTypes: {
    options: { control: 'object', description: '칸 목록 { value, label }' },
    value: { control: false, description: '현재 선택된 값 (스토리에서는 내부 상태로 관리)' },
    onChange: { action: 'change', description: '선택 변경' },
    ariaLabel: { control: 'text', description: '그룹 접근성 라벨' },
    sx: { control: 'object', description: '트랙 추가 스타일' },
  },
};

function Controlled({ options, onChange, ...rest }) {
  const [value, setValue] = useState(options[1].value);
  return <SegmentedToggle {...rest} options={options} value={value} onChange={(next) => { setValue(next); onChange?.(next); }} />;
}

export const Default = {
  render: (args) => <Controlled {...args} />,
  args: { options: [{ value: true, label: 'ON' }, { value: false, label: 'OFF' }], ariaLabel: '제품 음향 상태' },
};
