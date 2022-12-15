import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconProfile(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.963 14.724a7.738 7.738 0 10-9.57 0A12.898 12.898 0 00.37 25.274a1.298 1.298 0 002.58.284 10.318 10.318 0 0120.506 0 1.29 1.29 0 001.29 1.148h.141a1.29 1.29 0 001.135-1.42 12.898 12.898 0 00-8.06-10.562zm-4.785-.916a5.159 5.159 0 110-10.317 5.159 5.159 0 010 10.317z"
        fill={props.fill ? props.fill : '#6D6D6D'}
      />
    </Svg>
  );
}

export default IconProfile;
