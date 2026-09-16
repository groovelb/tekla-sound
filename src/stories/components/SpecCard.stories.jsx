import Box from '@mui/material/Box';

import SpecCard from '../../components/data-display/SpecCard.jsx';
import { specSection } from '../../components/tekla-sound/teklaSoundContent';
import { teklaColors } from '../../components/tekla-sound/teklaSoundTokens';
import { withTeklaFrame } from '../tekla-sound/teklaDecorators.jsx';

/** 라벨 위, 값과 부연 아래의 스펙 한 칸. 얇은 선 그리드의 셀로 쓴다. */
export default {
  title: 'Custom Component/TEKLA SOUND/Spec Card',
  component: SpecCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [withTeklaFrame],
  argTypes: {
    label: { control: 'text', description: '항목 이름' },
    value: { control: 'text', description: '대표 값' },
    detail: { control: 'text', description: '부연 설명' },
    sx: { control: 'object', description: '추가 스타일' },
  },
};

export const Default = {
  args: specSection.specs[1],
  render: (args) => (
    <Box sx={{ width: 360, bgcolor: teklaColors.sand, borderTop: '1px solid rgba(23,21,18,.3)' }}>
      <SpecCard {...args} />
    </Box>
  ),
};

/** 랜딩과 같은 3열 그리드 */
export const Grid = {
  render: () => (
    <Box sx={{ bgcolor: teklaColors.sand, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' }, borderTop: '1px solid rgba(23,21,18,.3)', borderLeft: { lg: '1px solid rgba(23,21,18,.18)' } }}>
      {specSection.specs.map((spec) => (
        <SpecCard key={spec.label} {...spec} />
      ))}
    </Box>
  ),
};
