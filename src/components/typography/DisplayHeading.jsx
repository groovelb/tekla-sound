import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { displayHeadingSx } from '../tekla-sound/teklaSoundTokens';

/**
 * DisplayHeading 컴포넌트
 *
 * 가늘고 큰 디스플레이 헤드라인. 줄 배열을 받아 한 줄씩 block 으로 쌓고, 각 줄은 줄바꿈되지 않는다.
 *
 * Props:
 * @param {string[]} lines - 헤드라인 줄 목록 [Required]
 * @param {string} component - 렌더 태그 [Optional, 기본값: 'h2']
 * @param {string|object} fontSize - 글자 크기 (clamp 또는 반응형 객체) [Optional, 기본값: 'clamp(2.8rem, 5vw, 5.8rem)']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <DisplayHeading lines={['Sound, woven', 'in to space.']} component="h1" fontSize="clamp(3.5rem, 8vw, 8.5rem)" />
 */
function DisplayHeading({ lines, component = 'h2', fontSize = 'clamp(2.8rem, 5vw, 5.8rem)', sx }) {
  return (
    <Typography component={component} sx={{ ...displayHeadingSx, fontSize, ...sx }}>
      {lines.map((line) => (
        <Box component="span" key={line} sx={{ display: 'block' }}>{line}</Box>
      ))}
    </Typography>
  );
}

export default DisplayHeading;
