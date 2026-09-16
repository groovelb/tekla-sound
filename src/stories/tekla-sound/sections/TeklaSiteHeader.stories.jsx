import TeklaSiteHeader from '../../../components/tekla-sound/TeklaSiteHeader.jsx';
import { withTeklaFrame, withRelativeStage } from '../teklaDecorators.jsx';

/**
 * 히어로 위에 겹치는 얇은 헤더. 워드마크와 밑줄 링크 하나.
 */
export default {
  title: 'Section/TEKLA SOUND/01 Site Header',
  component: TeklaSiteHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withRelativeStage, withTeklaFrame],
  argTypes: {
    brand: { control: 'text', description: '워드마크 텍스트' },
    link: { control: 'object', description: '오른쪽 링크 { label, href }' },
    position: { control: 'select', options: ['absolute', 'relative', 'static'], description: '배치 방식' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
