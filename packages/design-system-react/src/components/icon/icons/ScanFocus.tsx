import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScanFocus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M363 469h-29c-8 0-16-6-16-15 0-10 6-16 16-16h29c41 0 75-34 75-75v-27c0-8 6-16 16-16 9 0 15 6 15 16v29c-2 57-49 104-106 104m-167 0h-49c-57 0-102-47-102-102v-51c0-8 6-16 15-16 10 0 16 6 16 16v49c0 41 34 75 75 75h45c8 0 16 6 16 16 0 9-8 13-16 13m256-255c-8 0-16-6-16-16v-49c0-41-34-75-75-75h-47c-8 0-16-6-16-16 0-9 6-15 16-15h49c57 0 102 47 102 102v53c2 8-5 16-13 16m-394 0c-7 0-15-8-15-16v-49C43 92 90 47 145 47h51c8 0 16 5 16 15s-8 14-16 14h-49c-41 0-75 34-75 75v47c2 8-6 16-14 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgScanFocus);
export default ForwardRef;
