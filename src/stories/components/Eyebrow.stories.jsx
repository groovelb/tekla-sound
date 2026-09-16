import Eyebrow from '../../components/typography/Eyebrow.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 넓은 자간의 대문자 소제목. 섹션마다 헤드라인 위에 놓인다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Eyebrow',
  component: Eyebrow,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    children: { control: 'text', description: '라벨 텍스트' },
    size: { control: { type: 'number', min: 8, max: 20 }, description: '글자 크기(px)' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = { args: { children: 'ARCHITECTURAL SOUND', size: 12 } };
