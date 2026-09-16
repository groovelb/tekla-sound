import TeklaMaterialDetailSection from '../../../components/tekla-sound/TeklaMaterialDetailSection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 직물 근접 사진과 소재 카피의 점토색 분할 섹션.
 */
export default {
  title: 'Section/TEKLA SOUND/08 Material Detail',
  component: TeklaMaterialDetailSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    image: { control: 'object', description: '근접 사진 { src, alt }' },
    eyebrow: { control: 'text', description: '소제목 라벨' },
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    body: { control: 'object', description: '본문 줄 목록' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
