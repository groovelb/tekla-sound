import Box from '@mui/material/Box';

import TeklaSiteHeader from './TeklaSiteHeader.jsx';
import TeklaHeroSection from './TeklaHeroSection.jsx';
import TeklaValueSection from './TeklaValueSection.jsx';
import TeklaListeningDemoSection from './TeklaListeningDemoSection.jsx';
import TeklaAtmosphereSlideshow from './TeklaAtmosphereSlideshow.jsx';
import TeklaColorwaySection from './TeklaColorwaySection.jsx';
import TeklaProductShowcase from './TeklaProductShowcase.jsx';
import TeklaMaterialDetailSection from './TeklaMaterialDetailSection.jsx';
import TeklaSpecSection from './TeklaSpecSection.jsx';
import TeklaListeningCtaSection from './TeklaListeningCtaSection.jsx';
import { landingKeyframesSx, teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaSoundLanding 페이지
 *
 * TEKLA SOUND 랜딩 전체. 섹션 컴포넌트를 원본 순서대로 쌓는다.
 * 헤더 → 히어로 → 가치 → 청음 데모 → 분위기 슬라이드쇼 → 컬러 시스템 → 제품 쇼케이스 → 소재 디테일 → 스펙 → 청음 예약 CTA
 *
 * Example usage:
 * <TeklaSoundLanding />
 */
function TeklaSoundLanding() {
  return (
    <Box sx={{ ...typeSx, bgcolor: teklaColors.paper, color: teklaColors.ink, minHeight: '100vh', ...landingKeyframesSx }}>
      <TeklaSiteHeader />
      <TeklaHeroSection />
      <TeklaValueSection />
      <TeklaListeningDemoSection />
      <TeklaAtmosphereSlideshow />
      <TeklaColorwaySection />
      <TeklaProductShowcase />
      <TeklaMaterialDetailSection />
      <TeklaSpecSection />
      <TeklaListeningCtaSection />
    </Box>
  );
}

export default TeklaSoundLanding;
