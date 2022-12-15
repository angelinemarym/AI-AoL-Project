import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconFavorite(props) {
  return (
    <Svg
      width={27}
      height={24}
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M24.435 2.78a8.112 8.112 0 00-10.524-.825A8.087 8.087 0 003.387 14.181l8.01 8.023a3.586 3.586 0 005.03 0l8.008-8.023a8.086 8.086 0 000-11.4zm-1.818 9.622l-8.01 8.009a.98.98 0 01-1.392 0l-8.01-8.048a5.533 5.533 0 010-7.738 5.507 5.507 0 017.739 0 1.29 1.29 0 001.831 0 5.507 5.507 0 017.739 0 5.532 5.532 0 01.103 7.738v.039z"
        fill={props.fill ? props.fill : '#6D6D6D'}
      />
    </Svg>
  );
}

export default IconFavorite;
