import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M256 43q9 0 15 6l112 112c26 26 43 58 50 93s3 71-10 104c-14 33-37 61-67 81-29 20-64 30-100 30s-71-10-100-30c-30-20-53-48-67-81-13-33-17-69-10-104s24-67 50-93L241 49q6-6 15-6m0 51-97 98c-20 19-33 43-38 70s-3 54 8 80c10 25 28 46 50 61 23 16 50 24 77 24s54-8 77-24c22-15 40-36 50-61 11-26 13-53 8-80s-18-51-38-70z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTint);
export default ForwardRef;
