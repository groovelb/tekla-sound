import SplitFeature from '../../../components/templates/SplitFeature.jsx';
import UnderlineButton from '../../../components/input/UnderlineButton.jsx';
import { products, materialDetail } from '../../../components/tekla-sound/teklaSoundContent';
import { teklaColors } from '../../../components/tekla-sound/teklaSoundTokens';
import { withTeklaFrame } from '../teklaDecorators.jsx';

/**
 * 이미지 + 텍스트 좌우 분할 템플릿. 제품 쇼케이스 세 칸과 소재 디테일 섹션이 이 템플릿 하나로 만들어진다.
 * 데스크탑에서는 imageSide 로 이미지 위치를 고르고, 모바일에서는 이미지가 항상 위로 온다.
 */
export default {
  title: 'Template/TEKLA SOUND/Split Feature',
  component: SplitFeature,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [withTeklaFrame],
  argTypes: {
    image: { control: 'object', description: '이미지 { src, alt, objectPosition }' },
    eyebrow: { control: 'text', description: '소제목 라벨' },
    headline: { control: 'object', description: '헤드라인 줄 목록' },
    body: { control: 'object', description: '본문 줄 목록' },
    action: { control: false, description: '본문 아래 액션 노드' },
    imageSide: { control: 'radio', options: ['left', 'right'], description: '데스크탑 이미지 위치' },
    bgcolor: { control: 'color', description: '배경색' },
    color: { control: 'color', description: '글자색' },
    headingFontSize: { control: 'text', description: '헤드라인 크기 (clamp)' },
    bodySx: { control: 'object', description: '본문 추가 스타일' },
    component: { control: 'text', description: '루트 태그' },
    sx: { control: 'object', description: '루트 추가 스타일' },
  },
};

/** 제품 카드: 이미지 오른쪽, 종이색 배경, Explore 액션 */
export const ImageRight = {
  args: {
    image: products[0].image,
    eyebrow: products[0].eyebrow,
    headline: products[0].headline,
    body: products[0].body,
    imageSide: 'right',
    bgcolor: teklaColors.paper,
    action: <UnderlineButton sx={{ mt: 5, alignSelf: 'flex-start' }}>Explore</UnderlineButton>,
  },
};

/** 소재 디테일: 이미지 왼쪽, 점토색 배경, 액션 없음 */
export const ImageLeft = {
  args: {
    image: materialDetail.image,
    eyebrow: materialDetail.eyebrow,
    headline: materialDetail.headline,
    body: materialDetail.body,
    imageSide: 'left',
    bgcolor: teklaColors.clay,
    color: teklaColors.inkDeep,
    headingFontSize: 'clamp(3rem, 5vw, 6rem)',
    bodySx: { maxWidth: 'none', wordBreak: 'normal' },
  },
};
