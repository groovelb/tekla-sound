import Box from '@mui/material/Box';

import SectionContainer from '../../components/container/SectionContainer.jsx';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 최대 폭 제한 없이 좌우 여백만 주는 섹션 컨테이너. 랜딩의 텍스트 섹션이 같은 정렬선을 공유한다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Section Container',
  component: SectionContainer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    children: { control: false, description: '섹션 콘텐츠' },
    component: { control: 'text', description: '렌더 태그' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = {
  args: { component: 'section', sx: { py: 6 } },
  render: (args) => (
    <SectionContainer {...args}>
      <Box sx={{ height: 160, border: '1px dashed rgba(27,26,24,.35)', display: 'grid', placeItems: 'center' }}>좌우 여백 xs 20px / md 40px</Box>
    </SectionContainer>
  ),
};
