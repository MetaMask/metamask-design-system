import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgRemoveMinus = (
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
    <path d="M7.007 12.993h10v-2h-10zm5 9a9.7 9.7 0 0 1-3.9-.787q-1.825-.788-3.175-2.138c-1.35-1.35-1.612-1.958-2.137-3.175s-.788-2.516-.788-3.9.263-2.683.788-3.9 1.237-2.275 2.137-3.175 1.959-1.612 3.175-2.137a9.7 9.7 0 0 1 3.9-.788q2.076 0 3.9.788 1.825.787 3.175 2.137c1.35 1.35 1.613 1.959 2.138 3.175s.787 2.517.787 3.9-.262 2.684-.787 3.9-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138a9.7 9.7 0 0 1-3.9.787m0-2q3.35 0 5.675-2.325c2.325-2.325 2.325-3.441 2.325-5.675q0-3.35-2.325-5.675c-2.325-2.325-3.441-2.325-5.675-2.325q-3.35 0-5.675 2.325C4.007 8.643 4.007 9.76 4.007 11.993q0 3.35 2.325 5.675c2.325 2.325 3.442 2.325 5.675 2.325" />
  </svg>
);
const ForwardRef = forwardRef(SvgRemoveMinus);
export default ForwardRef;
