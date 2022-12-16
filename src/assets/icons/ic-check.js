import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconCheck(props) {
  return (
    <Svg
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="128px"
      height="128px"
      {...props}>
      <Path d="M32 6C17.641 6 6 17.641 6 32s11.641 26 26 26 26-11.641 26-26S46.359 6 32 6zm-3 36L18 31l2-3 9 6 13.957-12L46 25 29 42z" />
    </Svg>
  );
}

export default IconCheck;
