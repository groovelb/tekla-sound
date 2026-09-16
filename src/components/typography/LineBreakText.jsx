import { Fragment } from 'react';
import Typography from '@mui/material/Typography';

import { typeSx } from '../tekla-sound/teklaSoundTokens';

/**
 * LineBreakText 컴포넌트
 *
 * 줄 배열을 br 로 이어 붙인 본문. 카피 작성자가 정한 줄바꿈 위치를 그대로 지킨다.
 *
 * Props:
 * @param {string[]} lines - 본문 줄 목록 [Required]
 * @param {string} component - 렌더 태그 [Optional, 기본값: 'p']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <LineBreakText lines={['첫 줄', '둘째 줄']} sx={{ fontSize: 18 }} />
 */
function LineBreakText({ lines, component = 'p', sx }) {
  return (
    <Typography component={component} sx={{ ...typeSx, ...sx }}>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </Typography>
  );
}

export default LineBreakText;
