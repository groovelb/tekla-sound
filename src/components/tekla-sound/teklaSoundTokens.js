/**
 * TEKLA SOUND 브랜드 토큰
 *
 * 랜딩 전체가 공유하는 색·서체·간격·키프레임. 원본 랜딩(단일 파일)의 리터럴 값을 그대로 옮겼다.
 * MUI theme 토큰이 아니라 브랜드 전용 값이라 여기에서만 관리한다.
 */

/** 브랜드 팔레트 (원본 hex 유지) */
export const teklaColors = {
  paper: '#F3EFE7',
  sand: '#E9E1D4',
  clay: '#D8D0C2',
  mist: '#DED8CE',
  ink: '#1B1A18',
  inkDeep: '#171512',
  terracotta: '#C2513A',
};

/** 본문 서체 */
export const typeSx = { fontFamily: 'Pretendard, "Pretendard Variable", sans-serif' };

/** 디스플레이 헤드라인 (가늘고 촘촘한 자간, 줄바꿈 금지) */
export const displayHeadingSx = {
  ...typeSx,
  fontWeight: 300,
  lineHeight: 1.34,
  letterSpacing: '-0.045em',
  whiteSpace: 'nowrap',
};

/** 아이브로우 라벨 (대문자 소제목) */
export const eyebrowSx = { ...typeSx, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em' };

/** 섹션 좌우 패딩 (theme.spacing 단위) */
export const sectionPaddingX = { xs: 2.5, md: 5 };

/** 이미지+텍스트 좌우 분할 섹션 골격 */
export const splitSectionSx = {
  display: 'grid',
  gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' },
  height: { md: 'clamp(680px, 78vh, 840px)' },
  overflow: 'hidden',
};

/** 분할 섹션의 이미지 칸 */
export const splitImageSx = {
  width: '100%',
  height: { xs: 420, md: '100%' },
  minWidth: 0,
  minHeight: 0,
  display: 'block',
  objectFit: 'cover',
};

/**
 * 랜딩에서 쓰는 키프레임과 모션 축소 대응.
 * 섹션을 단독으로 렌더해도 애니메이션이 동작하도록 각 섹션 루트에 함께 펼친다.
 */
export const landingKeyframesSx = {
  '@keyframes materialReveal': { from: { opacity: 0, transform: 'translateY(20px) scale(.96)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes componentsEmbed': { '0%, 38.5%': { opacity: 1, transform: 'scale(1)', filter: 'blur(0)' }, '100%': { opacity: 0, transform: 'scale(.94)', filter: 'blur(4px)' } },
  '@keyframes captionReveal': { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'none' } },
  '@keyframes galleryReveal': { from: { opacity: 0, transform: 'scale(1.025)' }, to: { opacity: 1, transform: 'scale(1)' } },
  '@keyframes speakerVibration': { '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0)' }, '20%': { transform: 'translate3d(1.1px,-.55px,0) rotate(.035deg)' }, '40%': { transform: 'translate3d(-1.4px,.45px,0) rotate(-.045deg)' }, '60%': { transform: 'translate3d(.85px,.6px,0) rotate(.028deg)' }, '80%': { transform: 'translate3d(-.9px,-.35px,0) rotate(-.03deg)' } },
  '@keyframes feelCobaltRoll': { '0%, 30%': { opacity: 0 }, '34%, 63%': { opacity: 1 }, '67%, 100%': { opacity: 0 } },
  '@keyframes feelGreenRoll': { '0%, 63%': { opacity: 0 }, '67%, 96%': { opacity: 1 }, '100%': { opacity: 0 } },
  '@media (prefers-reduced-motion: reduce)': { '& *': { animationDuration: '1ms !important', animationDelay: '0ms !important' } },
};
