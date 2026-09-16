import { fn } from 'storybook/test';

import PillButton from '../../components/input/PillButton.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 반투명 유리 위 테라코타 외곽선의 알약형 CTA. */
export default {
  title: 'Custom Component/TEKLA SOUND/Pill Button',
  component: PillButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [withTeklaFrame],
  argTypes: {
    children: { control: 'text', description: '버튼 텍스트' },
    href: { control: 'text', description: '이동할 링크' },
    onClick: { action: 'click', description: '클릭' },
    accent: { control: 'color', description: '외곽선과 글자 색' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = { args: { children: 'Book a private listening', onClick: fn() } };
