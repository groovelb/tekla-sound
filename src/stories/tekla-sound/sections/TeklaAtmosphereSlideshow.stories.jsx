import TeklaAtmosphereSlideshow from '../../../components/tekla-sound/TeklaAtmosphereSlideshow.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 분위기 사진 세 장의 교차 페이드 슬라이드쇼. 하단 점으로 직접 이동.
 */
export default {
  title: 'Section/TEKLA SOUND/05 Atmosphere Slideshow',
  component: TeklaAtmosphereSlideshow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    images: { control: 'object', description: '슬라이드 이미지 { src, label }' },
    intervalMs: { control: { type: 'number', min: 1000, max: 20000, step: 500 }, description: '자동 전환 간격(ms)' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
