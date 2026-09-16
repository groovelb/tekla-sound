import TeklaHeroSection from '../../../components/tekla-sound/TeklaHeroSection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 화면을 가득 채우는 히어로. 사진 위 그라디언트, 하단 왼쪽에 아이브로우·대형 헤드라인·본문.
 */
export default {
  title: 'Section/TEKLA SOUND/02 Hero',
  component: TeklaHeroSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    image: { control: 'object', description: '배경 이미지 { src, alt }' },
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
