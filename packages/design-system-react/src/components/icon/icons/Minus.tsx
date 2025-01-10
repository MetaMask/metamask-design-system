import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M439 277H73c-18 0-30-8-30-21s12-21 30-21h366c18 0 30 8 30 21s-12 21-30 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;
