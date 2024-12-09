import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUserCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M279 169c0 46-38 83-84 83s-84-37-84-83 38-84 84-84 84 38 84 84M43 418c0-69 68-125 152-125s152 56 152 125c0 5-3 9-8 9H51c-5 0-8-4-8-9m420-200c8-9 8-22 0-30-8-9-22-9-30 0l-55 56-21-21c-8-8-21-8-30 0-8 8-8 22 0 30l36 36c8 8 21 8 30 0z" />
  </svg>
);
const ForwardRef = forwardRef(SvgUserCheck);
export default ForwardRef;
