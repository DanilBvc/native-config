import { Path, Svg } from 'react-native-svg';
import PropTypes from 'prop-types';

export function ArrowDownIcon ({ color = '#56371A' }) {
  return (
    <Svg width="28" height="11" viewBox="0 0 28 11" fill="none">
      <Path
        d="M28 0.68575C28 0.511789 27.9077 0.333762 27.7285 0.200257C27.3701 -0.0667524 26.7837 -0.0667524 26.4253 0.200257L14.159 9.33928L2.07197 0.333761C1.7136 0.0667515 1.12716 0.0667515 0.768784 0.333761C0.410408 0.600772 0.410408 1.0377 0.768784 1.30471L13.5075 10.7997C13.8658 11.0668 14.4523 11.0668 14.8106 10.7997L27.7285 1.17525C27.9131 1.0377 28 0.863757 28 0.68575Z"
        fill={color}
      />
    </Svg>
  );
}

ArrowDownIcon.propTypes = {
  color: PropTypes.string,
};
