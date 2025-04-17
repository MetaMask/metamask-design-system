import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgClockFilled = (
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
    <path d="m15.3 16.929 1.4-1.4-3.7-3.7v-4.6h-2v5.4zm-3.3 5.3q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138s-1.612-1.958-2.137-3.175S2 13.612 2 12.229s.262-2.683.787-3.9q.788-1.825 2.138-3.175c1.35-1.35 1.958-1.613 3.175-2.138s2.517-.787 3.9-.787 2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175q.786 1.825.787 3.9c.001 2.075-.262 2.683-.787 3.9s-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138-2.517.787-3.9.787" />
  </svg>
);
const ForwardRef = forwardRef(SvgClockFilled);
export default ForwardRef;
