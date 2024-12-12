import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCopySuccess = (
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
    <path d="M356 51h-86c-63 0-93 23-99 77-1 11 8 20 20 20h42c86 0 126 40 126 126v43c0 11 9 21 21 19 54-6 76-35 76-98v-86c0-72-28-101-100-101M233 174h-86c-72 0-100 29-100 100v86c0 72 28 101 100 101h86c72 0 100-29 100-101v-86c0-71-28-100-100-100m24 116-76 76c-2 3-6 4-10 4s-8-1-10-4l-39-38c-5-6-5-15 0-21 6-6 15-6 21 0l28 28 66-66c5-6 15-6 20 0 6 6 6 15 0 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgCopySuccess);
export default ForwardRef;
