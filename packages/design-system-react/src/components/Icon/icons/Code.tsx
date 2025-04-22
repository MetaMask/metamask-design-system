import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m8 18.229-6-6 6-6 1.425 1.425-4.6 4.6L9.4 16.829zm8 0-1.425-1.425 4.6-4.6L14.6 7.629l1.4-1.4 6 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCode);
export default ForwardRef;
