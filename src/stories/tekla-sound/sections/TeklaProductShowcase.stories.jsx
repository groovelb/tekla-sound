import TeklaProductShowcase from '../../../components/tekla-sound/TeklaProductShowcase.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 제품 세 가지를 SplitFeature 로 이어 붙인 쇼케이스. 이미지 위치와 배경이 번갈아 바뀐다.
 */
export default {
  title: 'Section/TEKLA SOUND/07 Product Showcase',
  component: TeklaProductShowcase,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    items: { control: 'object', description: '제품 목록 { eyebrow, headline, body, image, action }' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
