import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWalletCard = (
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
    <path d="m250 55-49 115h-49q-13.5 0-24 3l20-50 1-1 1-4c1-1 1-2 2-3 24-55 50-73 98-60m139 121c-12-4-25-6-38-6H223l46-107 1-1 9 3 45 19c25 11 43 22 54 35 2 2 3 4 5 7s3 6 4 9c1 2 2 3 2 5q4.5 16.5 0 36M262 372h5c6 0 12-6 12-12 0-9-3-10-8-12l-9-3zm118-167c-9-2-19-4-29-4H152c-14 0-27 3-40 8-35 15-60 51-60 92v40c0 5 0 10 1 15 4 65 39 99 104 104 5 0 10 1 15 1h159q114 0 120-108v-52c0-45-30-83-71-96M278 328c9 3 22 10 22 32 0 18-15 33-33 33h-5v5c0 6-5 10-10 10-6 0-11-4-11-10v-5h-2c-20 0-36-16-36-37 0-6 5-11 11-11s10 5 10 11c0 9 7 16 15 16h2v-35l-16-5c-9-4-22-10-22-32 0-19 15-34 33-34h5v-4c0-6 5-11 11-11 5 0 10 5 10 11v4h2c20 0 36 17 36 37 0 6-5 11-11 11s-10-5-10-11c0-8-7-15-15-15h-2v34zm-54-28c0 8 3 10 8 12l9 3v-27h-5c-7 0-12 5-12 12" />
  </svg>
);
const ForwardRef = forwardRef(SvgWalletCard);
export default ForwardRef;