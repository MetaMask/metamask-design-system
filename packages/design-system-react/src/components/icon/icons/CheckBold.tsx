import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCheckBold = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M412 145c12 12 12 32 0 45L227 373c-12 12-32 12-45 0l-81-80c-13-13-13-33 0-46 12-12 32-12 45 0l59 58 161-161c13-12 33-12 46 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckBold);
export default ForwardRef;
