import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScanBarcode = (
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
    <path d="M47 210c-9 0-16-7-16-15v-52C31 84 80 36 139 36h51c8 0 15 7 15 15 0 9-7 16-15 16h-51c-43 0-77 34-77 76v52c0 8-7 15-15 15m409 0c-8 0-15-7-15-15v-52c0-42-34-76-77-76h-51c-8 0-15-7-15-16 0-8 7-15 15-15h51c59 0 108 48 108 107v52c0 8-7 15-16 15m-92 266h-31c-8 0-15-7-15-15 0-9 7-16 15-16h31c43 0 77-34 77-76v-31c0-8 7-15 15-15 9 0 16 7 16 15v31c0 59-49 107-108 107m-174 0h-51c-59 0-108-48-108-107v-52c0-8 7-15 16-15 8 0 15 7 15 15v52c0 42 34 76 77 76h51c8 0 15 7 15 16 0 8-7 15-15 15m0-358h-41c-23 0-36 12-36 36v41c0 23 13 35 36 35h41c23 0 36-12 36-35v-41c0-24-13-36-36-36m164 0h-41c-23 0-36 12-36 36v41c0 23 13 35 36 35h41c23 0 36-12 36-35v-41c0-24-13-36-36-36M190 282h-41c-23 0-36 12-36 35v41c0 24 13 36 36 36h41c23 0 36-12 36-36v-41c0-23-13-35-36-35m164 0h-41c-23 0-36 12-36 35v41c0 24 13 36 36 36h41c23 0 36-12 36-36v-41c0-23-13-35-36-35" />
  </svg>
);
const ForwardRef = forwardRef(SvgScanBarcode);
export default ForwardRef;
