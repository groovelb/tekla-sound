import TeklaSpecSection from '../../../components/tekla-sound/TeklaSpecSection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 헤드라인·설명 위에 얇은 선으로 나뉜 스펙 그리드와 각주.
 */
export default {
  title: 'Section/TEKLA SOUND/09 Spec Grid',
  component: TeklaSpecSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    eyebrow: { control: 'text', description: '소제목 라벨' },
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    body: { control: 'object', description: '설명 줄 목록' },
    specs: { control: 'object', description: '스펙 목록 { label, value, detail }' },
    footnote: { control: 'text', description: '하단 각주' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
