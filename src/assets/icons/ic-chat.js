import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconChat(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.925 9.607H7.028a1.29 1.29 0 100 2.58h12.897a1.29 1.29 0 000-2.58zm-5.159 5.16H7.028a1.29 1.29 0 100 2.579h7.738a1.29 1.29 0 000-2.58zM13.476.578A12.897 12.897 0 00.58 13.476a12.755 12.755 0 002.915 8.164l-2.58 2.58a1.29 1.29 0 00-.27 1.406 1.289 1.289 0 001.225.748h11.608a12.897 12.897 0 100-25.795zm0 23.215H4.978l1.2-1.2a1.29 1.29 0 000-1.818 10.318 10.318 0 117.3 3.018z"
        fill={props.fill ? props.fill : '#6D6D6D'}
      />
    </Svg>
  );
}

export default IconChat;
