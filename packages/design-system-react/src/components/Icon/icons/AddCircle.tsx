import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAddCircle = (
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
    <path d="M11 17.229h2v-4h4v-2h-4v-4h-2v4H7v2h4zm1 5q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138s-1.612-1.958-2.137-3.175S2 13.612 2 12.229s.262-2.683.787-3.9q.788-1.825 2.138-3.175c1.35-1.35 1.958-1.613 3.175-2.138s2.517-.787 3.9-.787 2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175q.786 1.825.787 3.9c.001 2.075-.262 2.683-.787 3.9s-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138-2.517.787-3.9.787m0-2q3.35 0 5.675-2.325C20 15.579 20 14.462 20 12.229q0-3.35-2.325-5.675C15.35 4.229 14.233 4.229 12 4.229q-3.35 0-5.675 2.325C4 8.879 4 9.996 4 12.229q0 3.35 2.325 5.675C8.65 20.229 9.767 20.229 12 20.229" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddCircle);
export default ForwardRef;
