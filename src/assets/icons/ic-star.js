import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconStar(props) {
  return (
    <Svg
      width={13}
      height={13}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.87 5.135l-4.458-.58L6.5.585l-1.912 3.97-4.458.58 3.277 2.97-.846 4.31L6.5 10.299l3.939 2.116-.846-4.31 3.277-2.97z"
        fill="#4D70FF"
      />
    </Svg>
  );
}

export default IconStar;
