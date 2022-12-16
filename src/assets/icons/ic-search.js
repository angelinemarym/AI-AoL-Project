import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconSearch(props) {
  return (
    <Svg
      width={36}
      height={35}
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.615 3.651c-6.31 0-11.45 5.14-11.45 11.45 0 6.311 5.14 11.451 11.45 11.451a11.39 11.39 0 007.24-2.592l6.836 6.837a1.146 1.146 0 101.62-1.62l-6.837-6.836a11.39 11.39 0 002.592-7.24c0-6.31-5.14-11.45-11.45-11.45zm0 2.29a9.143 9.143 0 019.16 9.16 9.143 9.143 0 01-9.16 9.161 9.143 9.143 0 01-9.16-9.16 9.143 9.143 0 019.16-9.16z"
        fill="#fff"
      />
    </Svg>
  );
}

export default IconSearch;
