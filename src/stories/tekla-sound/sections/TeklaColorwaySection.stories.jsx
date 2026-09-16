import TeklaColorwaySection from '../../../components/tekla-sound/TeklaColorwaySection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 한 가지 형태, 다섯 가지 컬러. 칩에 마우스를 올리면 제품 사진 색이 바뀐다.
 */
export default {
  title: 'Section/TEKLA SOUND/06 Colorway System',
  component: TeklaColorwaySection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    eyebrow: { control: 'text', description: '소제목 라벨' },
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    colorways: { control: 'object', description: '컬러 목록 { id, label, color, image }' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
