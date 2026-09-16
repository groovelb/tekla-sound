import Box from '@mui/material/Box';

import SplitFeature from '../templates/SplitFeature.jsx';
import UnderlineButton from '../input/UnderlineButton.jsx';
import { products } from './teklaSoundContent';
import { teklaColors, typeSx } from './teklaSoundTokens';

/**
 * TeklaProductShowcase 섹션
 *
 * 제품 세 가지를 SplitFeature 로 이어 붙인 쇼케이스. 이미지가 오른쪽·왼쪽·오른쪽으로 번갈아 놓이고
 * 배경도 종이색과 점토색으로 번갈아 바뀐다.
 *
 * Props:
 * @param {Array<{eyebrow: string, headline: string[], body: string[], image: object, action?: string}>} items - 제품 목록 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <TeklaProductShowcase />
 */
function TeklaProductShowcase({ items = products, sx }) {
  return (
    <Box component="section" sx={{ ...typeSx, ...sx }}>
      {items.map((product, index) => (
        <SplitFeature
          key={product.eyebrow}
          image={product.image}
          eyebrow={product.eyebrow}
          headline={product.headline}
          body={product.body}
          imageSide={index % 2 ? 'left' : 'right'}
          bgcolor={index % 2 ? teklaColors.clay : teklaColors.paper}
          action={product.action && <UnderlineButton sx={{ mt: 5, alignSelf: 'flex-start' }}>{product.action}</UnderlineButton>}
        />
      ))}
    </Box>
  );
}

export default TeklaProductShowcase;
