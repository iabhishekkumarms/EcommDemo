import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgIcOrder = (props: SvgProps) => (
  <Svg width={19} height={22} fill="none" viewBox="0 0 19 22" {...props}>
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M17.833 6.04c0-4.03-.94-5.04-4.72-5.04h-7.56C1.773 1 .833 2.01.833 6.04V17.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35c.72-.96 1.97-1.03 2.79-.15 1.78 1.9 3.23 1.27 3.23-1.39V10M5.333 6h8m-7 4h6"
    />
  </Svg>
);
export default SvgIcOrder;
