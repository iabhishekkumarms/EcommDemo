import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgIcMinus = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Rect width={40} height={40} fill="#8E6CEF" rx={20} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.667 20H24m-8 0h3.773"
    />
  </Svg>
);
export default SvgIcMinus;
