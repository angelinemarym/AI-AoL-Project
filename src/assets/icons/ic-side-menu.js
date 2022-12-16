import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconSideMenu(props) {
  return (
    <Svg
      width={42}
      height={25}
      viewBox="0 0 42 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 0h41.34v5.168H0V0zM0 9.874h30.845v5.167H0V9.874zM0 19.748h36.013v5.167H0v-5.167z"
        fill="#fff"
      />
    </Svg>
  );
}

export default IconSideMenu;
