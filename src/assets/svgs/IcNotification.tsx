import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgIcNotification = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" viewBox="0 0 20 20" {...props}>
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeOpacity={0.5}
      strokeWidth={1.5}
      d="M9.667 5.441v3.33m8.59 5.399c.73 1.22.15 2.8-1.2 3.25a23.34 23.34 0 0 1-14.73 0c-1.44-.48-1.99-1.94-1.2-3.25l1.27-2.12c.35-.58.63-1.61.63-2.28v-2.1A6.66 6.66 0 0 1 9.687 1c3.66 0 6.66 3 6.66 6.66v2.1c0 .18.02.38.05.59"
    />
  </Svg>
);
export default SvgIcNotification;
