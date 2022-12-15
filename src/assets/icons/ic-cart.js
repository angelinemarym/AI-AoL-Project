import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconCart(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M26 19.333H7.333a1.334 1.334 0 010-2.666h13.92a4 4 0 003.88-3.027l2.2-8.653a1.332 1.332 0 00-.24-1.147A1.333 1.333 0 0026 3.333H7.013A4 4 0 003.253.667H2a1.333 1.333 0 000 2.666h1.253a1.333 1.333 0 011.334 1.014l.08.64L6.973 14a4.004 4.004 0 10.36 8h.24a4 4 0 107.52 0h3.147a3.999 3.999 0 107.52 0H26a1.333 1.333 0 000-2.667zM24.293 6l-1.746 6.987A1.334 1.334 0 0121.213 14H9.707l-2-8h16.586zm-12.96 18.667a1.332 1.332 0 110-2.665 1.332 1.332 0 010 2.665zm10.667 0A1.333 1.333 0 1122 22a1.333 1.333 0 010 2.666z"
        fill={props.fill ? props.fill : '#6D6D6D'}
      />
    </Svg>
  );
}

export default IconCart;
