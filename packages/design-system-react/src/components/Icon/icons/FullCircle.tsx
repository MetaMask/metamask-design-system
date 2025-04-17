import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFullCircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 21.886q-2.075 0-3.9-.788c-1.825-.788-2.275-1.237-3.175-2.137s-1.612-1.959-2.137-3.175S2 13.269 2 11.885s.262-2.684.787-3.9Q3.576 6.16 4.926 4.81C6.275 3.46 6.883 3.198 8.1 2.673s2.517-.788 3.9-.788 2.683.263 3.9.788 2.275 1.237 3.175 2.137 1.613 1.959 2.138 3.175q.786 1.825.787 3.9c.001 2.075-.262 2.684-.787 3.9s-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138-2.517.788-3.9.788m0-2q3.35 0 5.675-2.325C20 15.236 20 14.119 20 11.886q0-3.35-2.325-5.675C15.35 3.886 14.233 3.886 12 3.886q-3.35 0-5.675 2.325C4 8.536 4 9.652 4 11.886q0 3.35 2.325 5.675C8.65 19.886 9.767 19.886 12 19.886" />
  </svg>
);
const ForwardRef = forwardRef(SvgFullCircle);
export default ForwardRef;
