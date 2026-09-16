import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { valueVisuals } from './teklaSoundContent';
import { teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaValueVisual 컴포넌트
 *
 * 가치 행(01/02/03)에 따라 바뀌는 비주얼.
 * 01: 직물과 오크 소재 원형 사진 두 장이 차례로 떠오른다.
 * 02: 제품 위에 내부 부품 오버레이가 잠시 보였다가 벽 안으로 사라진다.
 * 03: 갤러리에서 작품처럼 감상하는 장면이 살짝 줌아웃되며 나타난다.
 *
 * Props:
 * @param {'01'|'02'|'03'} activeValue - 선택된 가치 id [Required]
 * @param {object} visuals - 비주얼 자산 (materials, spatial, interior) [Optional, 기본값: 브랜드 자산]
 *
 * Example usage:
 * <TeklaValueVisual activeValue="02" />
 */
function TeklaValueVisual({ activeValue, visuals = valueVisuals }) {
  if (activeValue === '01') {
    return (
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="center" alignItems="center" gap={{ xs: 5, md: 10 }}>
        {visuals.materials.map(({ label, image }, index) => (
          <Box key={label} sx={{ textAlign: 'center', animation: `materialReveal 650ms ${index * 120}ms both cubic-bezier(.2,.8,.2,1)` }}>
            <Box component="img" src={image} alt={label} sx={{ width: { xs: 190, md: 280 }, aspectRatio: '1', borderRadius: '50%', objectFit: 'cover', display: 'block', boxShadow: '0 20px 50px rgba(27,26,24,.12)' }} />
            <Typography sx={{ ...typeSx, mt: 2.5, fontSize: 14, fontWeight: 500 }}>{label}</Typography>
          </Box>
        ))}
      </Stack>
    );
  }

  if (activeValue === '02') {
    const { product, overlay, caption } = visuals.spatial;
    return (
      <Box sx={{ position: 'relative', minHeight: { xs: 360, md: 500 }, display: 'grid', placeItems: 'center', overflow: 'hidden', bgcolor: teklaColors.mist }}>
        <Box sx={{ position: 'relative', zIndex: 2, width: { xs: '92%', md: '76%' }, aspectRatio: '1.5 / 1', overflow: 'hidden' }}>
          <Box component="img" src={product.src} alt={product.alt} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }} />
          <Box component="img" src={overlay.src} alt={overlay.alt} sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', transformOrigin: 'center', animation: 'componentsEmbed 2.6s both cubic-bezier(.4,0,.2,1)' }} />
        </Box>
        <Typography sx={{ ...typeSx, position: 'absolute', left: 0, right: 0, bottom: 24, textAlign: 'center', fontSize: 12, fontWeight: 500, letterSpacing: '.1em', animation: 'captionReveal 400ms 1.7s both' }}>{caption}</Typography>
      </Box>
    );
  }

  return <Box component="img" src={visuals.interior.src} alt={visuals.interior.alt} sx={{ width: '100%', height: { xs: 420, md: 620 }, objectFit: 'cover', display: 'block', animation: 'galleryReveal 800ms both cubic-bezier(.2,.8,.2,1)' }} />;
}

export default TeklaValueVisual;
