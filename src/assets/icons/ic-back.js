import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconBack(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.157 3.727l-10.27 10.267L21.287 24.4a1.959 1.959 0 01-2.77 2.772L6.76 15.411c-.37-.358-.599-.857-.599-1.411v-.006-.005c0-.555.23-1.053.6-1.411L18.524.826a1.959 1.959 0 112.632 2.9z"
        fill="#fff"
      />
    </Svg>
  );
}

export default IconBack;
