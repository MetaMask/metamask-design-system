import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgUsb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M469 256c0 2-1 4-3 5l-59 36h-6c-2-1-3-3-3-5v-24H239c17 26 27 71 47 71h17v-18c0-3 3-6 6-6h60c3 0 5 3 5 6v59c0 4-2 6-5 6h-60c-3 0-6-2-6-6v-17h-17c-51 0-54-95-83-95h-67c-5 20-24 35-46 35-26 0-47-21-47-47s21-47 47-47c22 0 41 15 46 35 26 0 29 6 50-40 26-59 38-55 72-55 5-14 18-23 34-23 19 0 35 16 35 35 0 20-16 36-35 36-16 0-29-10-34-24h-20c-19 0-29 45-46 71h206v-23c0-3 1-4 3-6 2-1 4-1 6 1l59 35c2 1 3 3 3 5" />
  </svg>
);
const ForwardRef = forwardRef(SvgUsb);
export default ForwardRef;
