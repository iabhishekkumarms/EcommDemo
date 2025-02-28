import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgCartIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Rect width={40} height={40} fill="#8E6CEF" rx={20} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 17.113v-.646c0-1.5 1.207-2.974 2.707-3.114A3 3 0 0 1 23 16.34v.92m-8.46 5.78.153 1.247c.147 1.306.627 2.38 3.307 2.38h4c2.68 0 3.16-1.074 3.3-2.38l.5-4c.18-1.627-.287-2.954-3.133-2.954h-5.334c-2.846 0-3.313 1.327-3.133 2.954"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.33 20h.006m-4.673 0h.006"
    />
  </Svg>
);
export default SvgCartIcon;
