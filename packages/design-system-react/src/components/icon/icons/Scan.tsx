import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M62 215c-8 0-15-7-15-16v-47C47 96 92 51 147 51h48c9 0 16 7 16 16s-7 16-16 16h-48c-38 0-69 31-69 69v47c0 9-7 16-16 16m379 0c-9 0-16-7-16-16v-47c0-38-31-69-69-69h-48c-9 0-16-7-16-16s7-16 16-16h48c55 0 100 45 100 101v47c0 9-7 16-15 16m-85 246h-29c-9 0-16-7-16-16s7-16 16-16h29c38 0 69-31 69-69v-28c0-9 7-16 16-16 8 0 15 7 15 16v28c0 56-45 101-100 101m-161 0h-48c-55 0-100-45-100-101v-47c0-9 7-16 15-16 9 0 16 7 16 16v47c0 38 31 69 69 69h48c8 0 16 7 16 16s-7 16-16 16m189-221H119c-9 0-16 7-16 16s7 16 16 16h265c9 0 16-7 16-16s-7-16-16-16m-237 56v6c0 34 28 62 62 62h86c34 0 61-28 61-62v-6c0-3-2-5-4-5H151c-2 0-4 2-4 5m0-80v-6c0-34 28-62 62-62h86c34 0 61 28 61 62v6c0 3-2 5-4 5H151c-2 0-4-2-4-5" />
  </svg>
);
const ForwardRef = forwardRef(SvgScan);
export default ForwardRef;
