import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTilde = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M69 320c-14 0-26-12-23-26 8-38 34-102 125-102 85 0 96 75 160 75 51 0 72-27 80-49 5-14 17-26 32-26 14 0 26 12 23 26-8 38-34 102-125 102-85 0-117-75-160-75-51 0-72 27-80 49-5 14-17 26-32 26" />
  </svg>
);
const ForwardRef = forwardRef(SvgTilde);
export default ForwardRef;
