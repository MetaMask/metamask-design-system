import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSend2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M426 476H77c-8 0-15-7-15-15 0-9 7-16 15-16h349c8 0 15 7 15 16 0 8-7 15-15 15m-31-92c-4 0-8-1-11-5L97 93c-6-6-6-16 0-22s16-6 22 0l287 287c6 6 6 16 0 21-3 4-7 5-11 5m-287-76c-8 0-15-7-15-16V82c0-8 7-15 15-15h210c9 0 16 7 16 15s-7 15-16 15H124v195c0 9-7 16-16 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgSend2);
export default ForwardRef;
