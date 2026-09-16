/**
 * TEKLA SOUND 랜딩 콘텐츠 (이미지 경로, 카피, 스펙, 오디오)
 *
 * 섹션 컴포넌트의 기본 props 로 쓰인다. 스토리에서는 이 값을 args 로 덮어쓸 수 있다.
 * 여러 줄 카피는 `lines` 배열이며, 렌더 시 줄마다 block span(또는 br)로 펼쳐 원본 줄바꿈을 유지한다.
 */

const ASSET_ROOT = '/brand-reports/tekla-sound-landing-materials/assets';

export const teklaImages = {
  hero: '/tekla-sound/hero/wall-wide-gallery-showroom-v3.png?v=textless-flush-restored',
  listening: '/brand-reports/tekla-sound-extended-anatomy/assets/tekla-sound-listening-lookbook-51f83128bf8a7bc1a24a178e24df8c9858616c46964d32225f98881f1ad1e520.png?v=flush-inwall',
  brandStory: '/tekla-sound/editorial/brand-story-immersive-listening-v2.png?v=nordic-listening-v3',
  feelCobalt: '/tekla-sound/editorial/feel-tekla-cobalt.png?v=flush-inwall',
  feelGreen: '/tekla-sound/editorial/feel-tekla-deep-green.png?v=original-restored-final',
  interiorObject: '/tekla-sound/interactive/interior-object-gallery-woman.png?v=woven-textile-v2',
  spatialComponents: '/tekla-sound/interactive/spatial-system-components-overlay.png',
  terracottaMaterial: '/tekla-sound/materials/terracotta-woven-macro.png',
  oakMaterial: '/tekla-sound/materials/natural-oak-frame-macro.png',
  verticalWallCutout: '/tekla-sound/product-cutouts/wall-terracotta-vertical-alpha.png',
  terracotta: '/tekla-sound/colorways/wall-wide-terracotta-alpha.png',
  ivory: '/tekla-sound/colorways/wall-wide-ivory-alpha.png?v=warm-ivory-2',
  beige: '/tekla-sound/colorways/wall-wide-beige-alpha.png?v=bottom-cleanup',
  cobalt: '/tekla-sound/colorways/wall-wide-cobalt-blue-alpha.png?v=bottom-cleanup',
  green: '/tekla-sound/colorways/wall-wide-deep-green-alpha.png?v=bottom-cleanup',
  wall: `${ASSET_ROOT}/still-wall-01-woven-textile-v2.png`,
  niche: `${ASSET_ROOT}/still-niche-02-dbe601cc5a0eba0caeae48c959c15b8e87e2db79c6f7992e3cc4dae582c561e2.jpg?v=wall-brightness`,
  beam: `${ASSET_ROOT}/still-beam-03-7f5f9799323ece967fc776d071c315a42825809c41bfa2e01eb9835ec64ce3f3.jpg?v=wall-brightness`,
  material: `${ASSET_ROOT}/still-wall-material-detail-f6725a63587fb0ba94c61833940f878ff3fdbbc6b6e2382503b13dbcaf0cc7d5.jpg`,
};

export const siteHeader = {
  brand: 'TEKLA SOUND',
  link: { label: 'Private listening', href: '#listening' },
};

export const hero = {
  image: { src: teklaImages.hero, alt: '넓은 거실 벽면에 작품처럼 설치된 TEKLA SOUND Wall Wide' },
  eyebrow: 'ARCHITECTURAL SOUND',
  headline: ['Sound, woven', 'in to space.'],
  body: ['사운드는 보이는 것이 아니라 공간 안에서 경험하는 것입니다.', '건축 안에 설계한 사운드 시스템으로 미세한 음의 결까지 진동으로 감각하는 새로운 경험을 선보입니다.'],
};

export const valueSection = {
  headline: ['We focuses on', 'spatial experiences.'],
  lead: '부피는 최소화하고, 감각은 더 확장됩니다.',
  items: [
    { id: '01', title: 'Natural material', body: '직물, 오크나무 등 자연 요소로 만들어져 공간에 녹아듭니다.' },
    { id: '02', title: 'Spatial system', body: '복잡한 라인을 없앤 공간 내장으로 3D 사운드 시스템을 설계합니다.' },
    { id: '03', title: 'Interior object', body: '작품처럼 감상하는 인테리어 오브제 사운드입니다.' },
  ],
};

export const valueVisuals = {
  materials: [
    { label: 'Woven textile', image: teklaImages.terracottaMaterial },
    { label: 'Natural oak', image: teklaImages.oakMaterial },
  ],
  spatial: {
    product: { src: teklaImages.terracotta, alt: '공간 내장형 TEKLA SOUND Wall Wide' },
    overlay: { src: teklaImages.spatialComponents, alt: '제품 내부에 탑재된 우퍼, 미드레인지, 덕트와 연결선' },
    caption: 'ARCHITECTURE BECOMES THE SYSTEM',
  },
  interior: { src: teklaImages.interiorObject, alt: '미술관에서 TEKLA SOUND를 작품처럼 감상하는 여성의 뒷모습' },
};

export const listeningDemo = {
  headline: ['Redefining', 'the sound experience', 'forever.'],
  story: {
    brand: 'Tekla Sound',
    brandTail: '는 공간 전체가 울리는 몰입과 휴식을 제안합니다.',
    lines: [
      '물리적 부피에서 해방된 사운드는 공간에 스며들어 입체화됩니다.',
      '미세한 음의 결도 공간을 타고 전해지는 진동으로 경험되며,',
      '스피커는 비로소 사라지고 공간 전체가 감각적인 음향 경험으로 바뀝니다.',
    ],
  },
  image: { src: teklaImages.verticalWallCutout, alt: '테라코타 직물 마감의 세로형 TEKLA SOUND Wall 제품 누끼' },
  samples: [
    { label: 'BACH CELLO', src: '/tekla-sound/audio/01.bach_cello.mp3', volume: 0.35 },
    { label: 'BACH JAZZ', src: '/tekla-sound/audio/02.bach_jazz.mp3', volume: 0.6 },
    { label: 'DEBUSSY PIANO', src: '/tekla-sound/audio/03.debussy_piano.mp3', volume: 0.35 },
  ],
};

export const atmosphereImages = [
  { src: teklaImages.brandStory, label: 'Terracotta atmosphere' },
  { src: teklaImages.feelCobalt, label: 'Cobalt Blue atmosphere' },
  { src: teklaImages.feelGreen, label: 'Deep Green atmosphere' },
];

export const colorwaySection = {
  eyebrow: 'WALL WIDE / COLOR SYSTEM',
  headline: ['One form.', 'Five atmospheres.'],
  colorways: [
    { id: 'terracotta', label: 'Terracotta', color: '#C2513A', image: teklaImages.terracotta },
    { id: 'ivory', label: 'Ivory', color: '#E7E0D2', image: teklaImages.ivory },
    { id: 'beige', label: 'Beige', color: '#B9A58F', image: teklaImages.beige },
    { id: 'cobalt', label: 'Cobalt Blue', color: '#2457C5', image: teklaImages.cobalt },
    { id: 'green', label: 'Deep Green', color: '#173F35', image: teklaImages.green },
  ],
};

export const products = [
  {
    eyebrow: 'STILL SERIES / WALL',
    headline: ['The wall', 'becomes sound.'],
    body: ['스피커의 부피 대신 직물 작품의 존재감만 남깁니다.', '건축 면에 사운드를 내장해 공간의 중심을', '하나의 음악적 장면으로 바꿉니다.'],
    image: { src: teklaImages.wall, alt: '벽면에 설치된 테라코타 직물 마감의 TEKLA SOUND Wall', objectPosition: '36% center' },
    action: 'Explore',
  },
  {
    eyebrow: 'STILL SERIES / NICHE',
    headline: ['Sound in', 'every surface.'],
    body: ['가느다란 비례와 페어 구성이 좁은 벽면까지 사운드의 깊이를 확장합니다. 눈에 띄는 부피 없이 공간의 여러 면을 하나의 경험으로 잇습니다.'],
    image: { src: teklaImages.niche, alt: '선반 양옆의 좁은 벽면에 페어로 설치된 TEKLA SOUND Niche' },
    action: 'Explore',
  },
  {
    eyebrow: 'STILL SERIES / BEAM',
    headline: ['A horizon', 'you can feel.'],
    body: ['낮고 긴 직물 면이 건축의 수평선에 스며듭니다.', '시각적 부피를 더하지 않으면서 공간을', '가로지르는 음악의 깊이를 감각하게 합니다.'],
    image: { src: teklaImages.beam, alt: '창가 벤치의 수평선에 내장된 TEKLA SOUND Beam' },
    action: 'Explore',
  },
];

export const materialDetail = {
  eyebrow: 'MATERIAL DETAIL',
  headline: ['Sound you', 'can almost touch.'],
  body: ['직물의 결, 오크의 온기, 하나의 깊은 음향 라인.', '기술은 표면 아래로 사라지고 감각만 남습니다.'],
  image: { src: teklaImages.material, alt: '직물 표면과 오크 프레임, 하단 음향 슬롯의 근접 디테일' },
};

export const specSection = {
  eyebrow: 'CONCEPT SPECIFICATION / DIRECTIONAL',
  headline: ['Engineered', 'to disappear.'],
  body: ['시스템은 건축 면 뒤로 숨기고,', '청취자에게 입체적인 음향과 진동만 선사합니다.'],
  specs: [
    { label: 'SPATIAL ENGINE', value: '4–8 CH DSP', detail: 'Beam width · delay tuning' },
    { label: 'SYSTEM OUTPUT', value: '1,200 W RMS', detail: 'Up to 116 dB SPL target' },
    { label: 'FREQUENCY RANGE', value: '20 Hz–24 kHz', detail: 'Tactile low range · 20–80 Hz' },
    { label: 'WIRELESS', value: 'Bluetooth 5.4', detail: 'Wi-Fi 6 · AirPlay 2 · aptX Adaptive' },
    { label: 'ARCHITECTURAL I/O', value: 'Hidden backbone', detail: 'HDMI eARC · Ethernet · Optical · AES/EBU' },
    { label: 'ROOM CALIBRATION', value: 'Listening-aware', detail: 'Microphone-based room correction' },
  ],
  footnote: '* Concept targets for design development. Final performance, certification and connectivity are subject to prototype validation.',
};

export const listeningCta = {
  id: 'listening',
  backgroundImage: teklaImages.listening,
  eyebrow: 'PRIVATE LISTENING',
  headline: ['Enter the room.', 'Feel every note.'],
  ctaLabel: 'Book a private listening',
};
