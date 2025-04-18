import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPasswordCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M2 18.886v-2h20v2zm1.15-6.05-1.3-.75.85-1.5H1v-1.5h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H7v1.5H5.3l.85 1.5-1.3.75-.85-1.5zm8 0-1.3-.75.85-1.5H9v-1.5h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H15v1.5h-1.7l.85 1.5-1.3.75-.85-1.5zm8 0-1.3-.75.85-1.5H17v-1.5h1.7l-.85-1.45 1.3-.75.85 1.45.85-1.45 1.3.75-.85 1.45H23v1.5h-1.7l.85 1.5-1.3.75-.85-1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPasswordCheck);
export default ForwardRef;
