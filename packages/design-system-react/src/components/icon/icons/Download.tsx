import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDownload = (
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
    <path d="M277 64c0-12-9-21-21-21s-21 9-21 21v204l-71-70c-8-8-21-8-30 0-8 9-8 22 0 30l107 107c2 2 4 4 7 5 2 1 5 1 8 1q9 0 15-6m0 0 107-107c8-8 8-21 0-30-9-8-22-8-30 0l-71 70V64M64 299c12 0 21 9 21 21v85c0 6 3 11 7 15s9 7 15 7h298c6 0 11-3 15-7s7-9 7-15v-85c0-12 9-21 21-21s21 9 21 21v85c0 17-6 34-18 46s-29 18-46 18H107c-17 0-34-6-46-18s-18-29-18-46v-85c0-12 9-21 21-21" />
  </svg>
);
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;
