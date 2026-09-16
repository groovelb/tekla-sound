import TeklaListeningCtaSection from '../../../components/tekla-sound/TeklaListeningCtaSection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';
import { fn } from 'storybook/test';

/**
 * 청음실 사진을 옅게 깔고 가운데 CTA 를 놓는 마무리 섹션.
 */
export default {
  title: 'Section/TEKLA SOUND/10 Listening CTA',
  component: TeklaListeningCtaSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    id: { control: 'text', description: '앵커 id' },
    backgroundImage: { control: 'text', description: '배경 사진 경로' },
    eyebrow: { control: 'text', description: '소제목 라벨' },
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    ctaLabel: { control: 'text', description: '버튼 텍스트' },
    onCtaClick: { action: 'cta click', description: '버튼 클릭' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: { onCtaClick: fn() },
};
