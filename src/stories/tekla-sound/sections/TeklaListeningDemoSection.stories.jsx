import TeklaListeningDemoSection from '../../../components/tekla-sound/TeklaListeningDemoSection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 브랜드 스토리 + 제품 청음 데모. ON 을 누르면 샘플이 재생되고 제품이 미세하게 진동한다.
 */
export default {
  title: 'Section/TEKLA SOUND/04 Listening Demo',
  component: TeklaListeningDemoSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    story: { control: 'object', description: '브랜드 스토리 { brand, brandTail, lines }' },
    image: { control: 'object', description: '세로형 제품 사진 { src, alt }' },
    samples: { control: 'object', description: '샘플 트랙 { label, src, volume }' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
