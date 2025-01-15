import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDocumentCode = (
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
    <path d="M333 51H170C98 51 67 92 67 154v204c0 62 31 103 103 103h163c72 0 103-41 103-103V154c0-62-31-103-103-103M221 348c6 5 6 15 0 21-3 3-7 5-10 5-4 0-8-2-11-5l-41-41c-6-6-6-15 0-21l41-41c6-6 15-6 21 0s6 15 0 21l-30 30zm123-20-41 41c-3 3-7 5-11 5-3 0-7-2-10-5-6-6-6-16 0-21l30-31-30-30c-6-6-6-15 0-21s15-6 21 0l41 41c6 6 6 15 0 21m41-128h-41c-31 0-57-26-57-57v-41c0-8 7-15 16-15 8 0 15 7 15 15v41c0 14 12 26 26 26h41c8 0 15 7 15 15 0 9-7 16-15 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgDocumentCode);
export default ForwardRef;
