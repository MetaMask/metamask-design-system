import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgScanBarcode = (
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
    <path d="M2 6.886v-5h5v2H4v3zm0 15v-5h2v3h3v2zm15 0v-2h3v-3h2v5zm3-15v-3h-3v-2h5v5zm-2.5 10.5H19v1.5h-1.5zm0-3H19v1.5h-1.5zm-1.5 1.5h1.5v1.5H16zm-1.5 1.5H16v1.5h-1.5zm-1.5-1.5h1.5v1.5H13zm3-3h1.5v1.5H16zm-1.5 1.5H16v1.5h-1.5zm-1.5-1.5h1.5v1.5H13zm6-8v6h-6v-6zm-8 8v6H5v-6zm0-8v6H5v-6zm-1.5 12.5v-3h-3v3zm0-8v-3h-3v3zm8 0v-3h-3v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgScanBarcode);
export default ForwardRef;
