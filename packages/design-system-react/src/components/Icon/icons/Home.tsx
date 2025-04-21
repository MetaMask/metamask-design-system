import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6 18.886h3v-6h6v6h3v-9l-6-4.5-6 4.5zm-2 2v-12l8-6 8 6v12h-7v-6h-2v6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;
