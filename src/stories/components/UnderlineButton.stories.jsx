import { fn } from 'storybook/test';

import UnderlineButton from '../../components/input/UnderlineButton.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 글자 아래 1px 밑줄만 있는 텍스트 버튼. */
export default {
  title: 'Custom Component/TEKLA SOUND/Underline Button',
  component: UnderlineButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [withTeklaFrame],
  argTypes: {
    children: { control: 'text', description: '버튼 텍스트' },
    href: { control: 'text', description: '이동할 링크' },
    onClick: { action: 'click', description: '클릭' },
    weight: { control: { type: 'number', min: 300, max: 700, step: 100 }, description: '글자 굵기' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = { args: { children: 'Explore', weight: 600, onClick: fn() } };

/** 헤더 링크 (굵기 500) */
export const HeaderLink = { args: { children: 'Private listening', href: '#listening', weight: 500 } };
