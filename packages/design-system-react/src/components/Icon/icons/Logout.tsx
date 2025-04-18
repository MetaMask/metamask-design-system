import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 20.886q-.824 0-1.412-.588C2.999 19.71 3 19.436 3 18.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 2.886h7v2H5v14h7v2zm11-4-1.375-1.45 2.55-2.55H9v-2h8.175l-2.55-2.55L16 6.885l5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
