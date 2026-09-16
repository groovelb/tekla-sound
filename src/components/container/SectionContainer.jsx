import Container from '@mui/material/Container';

import { sectionPaddingX } from '../tekla-sound/teklaSoundTokens';

/**
 * SectionContainer 컴포넌트
 *
 * 최대 폭 제한 없이 좌우 여백만 주는 섹션 컨테이너. 랜딩의 모든 텍스트 섹션이 같은 좌우 정렬선을 공유한다.
 *
 * Props:
 * @param {ReactNode} children - 섹션 콘텐츠 [Required]
 * @param {string} component - 렌더 태그 [Optional, 기본값: 'div']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SectionContainer component="section" sx={{ py: { xs: 10, md: 18 } }}>...</SectionContainer>
 */
function SectionContainer({ children, component = 'div', sx }) {
  return (
    <Container component={component} maxWidth={false} sx={{ px: sectionPaddingX, ...sx }}>
      {children}
    </Container>
  );
}

export default SectionContainer;
