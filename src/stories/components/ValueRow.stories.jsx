import { fn } from 'storybook/test';

import ValueRow from '../../components/in-page-navigation/ValueRow.jsx';
import { valueSection } from '../../components/tekla-sound/teklaSoundContent';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 번호·제목·설명·+ 가 한 줄에 놓인 선택형 행. 선택되면 배경이 깔리고 + 가 x 로 돈다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Value Row',
  component: ValueRow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    id: { control: 'text', description: '행 번호 텍스트' },
    title: { control: 'text', description: '제목' },
    body: { control: 'text', description: '설명' },
    isActive: { control: 'boolean', description: '선택 여부' },
    onSelect: { action: 'select', description: '클릭' },
  },
};

export const Default = { args: { ...valueSection.items[0], isActive: false, onSelect: fn() } };

export const Active = { args: { ...valueSection.items[1], isActive: true, onSelect: fn() } };
