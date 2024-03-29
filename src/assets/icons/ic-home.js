import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconHome(props) {
  return (
    <Svg
      width={24}
      height={27}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22.14 8.65l-7.738-6.784a3.869 3.869 0 00-5.159 0L1.505 8.65a3.87 3.87 0 00-1.29 2.914v11.273a3.87 3.87 0 003.87 3.869H19.56a3.869 3.869 0 003.869-3.87V11.552a3.868 3.868 0 00-1.29-2.901zm-7.738 15.476H9.243v-6.448a1.29 1.29 0 011.29-1.29h2.58a1.29 1.29 0 011.289 1.29v6.448zm6.449-1.29a1.29 1.29 0 01-1.29 1.29h-2.58v-6.448a3.87 3.87 0 00-3.869-3.87h-2.58a3.87 3.87 0 00-3.868 3.87v6.448h-2.58a1.29 1.29 0 01-1.29-1.29V11.552a1.29 1.29 0 01.439-.967l7.738-6.77a1.29 1.29 0 011.703 0l7.738 6.77a1.29 1.29 0 01.439.967v11.286z"
        fill={props.fill ? props.fill : '#4D70FF'}
      />
    </Svg>
  );
}

export default IconHome;
