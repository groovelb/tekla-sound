import TeklaValueSection from '../../../components/tekla-sound/TeklaValueSection.jsx';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 브랜드 가치 세 가지. 행을 고르면 아래 비주얼이 바뀐다.
 */
export default {
  title: 'Section/TEKLA SOUND/03 Value Accordion',
  component: TeklaValueSection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    lead: { control: 'text', description: '리드 문장' },
    items: { control: 'object', description: '가치 행 목록 { id, title, body }' },
    initialValue: { control: 'select', options: ['01', '02', '03'], description: '처음 선택된 행' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

/** 랜딩에 실린 기본 콘텐츠 */
export const Default = {
  args: {},
};
