import DisplayHeading from '../../components/typography/DisplayHeading.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 가늘고 큰 디스플레이 헤드라인. 줄 배열을 한 줄씩 쌓는다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Display Heading',
  component: DisplayHeading,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    lines: { control: 'object', description: '헤드라인 줄 목록' },
    component: { control: 'select', options: ['h1', 'h2', 'h3', 'p'], description: '렌더 태그' },
    fontSize: { control: 'text', description: '글자 크기 (clamp 문자열)' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = { args: { lines: ['One form.', 'Five atmospheres.'], component: 'h2', fontSize: 'clamp(2.8rem, 5vw, 5.5rem)' } };

/** 히어로용 h1 크기 */
export const Hero = { args: { lines: ['Sound, woven', 'in to space.'], component: 'h1', fontSize: 'clamp(3.5rem, 8vw, 8.5rem)' } };
