import LineBreakText from '../../components/typography/LineBreakText.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 줄 배열을 br 로 이어 붙인 본문. 카피의 줄바꿈 위치를 그대로 지킨다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Line Break Text',
  component: LineBreakText,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    lines: { control: 'object', description: '본문 줄 목록' },
    component: { control: 'text', description: '렌더 태그' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = {
  args: {
    lines: ['직물의 결, 오크의 온기, 하나의 깊은 음향 라인.', '기술은 표면 아래로 사라지고 감각만 남습니다.'],
    sx: { fontSize: 18, lineHeight: 1.7, fontWeight: 300 },
  },
};
