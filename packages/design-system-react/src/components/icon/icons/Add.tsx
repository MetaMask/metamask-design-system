import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M256 469c-18 0-30-12-30-30V286H73c-18 0-30-12-30-30s12-30 30-30h153V73c0-18 12-30 30-30s30 12 30 30v153h153c18 0 30 12 30 30s-12 30-30 30H286v153c0 18-12 30-30 30" />
  </svg>
);
const ForwardRef = forwardRef(SvgAdd);
export default ForwardRef;
