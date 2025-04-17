import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M21.096 21.571 14.06 11.314l.012.01 6.344-7.353h-2.12l-5.168 5.984-4.104-5.984h-5.56l6.569 9.577h-.001L3.104 21.57h2.12l5.746-6.657 4.566 6.657zm-12.912-16 9.872 14.4h-1.68l-9.88-14.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgX);
export default ForwardRef;
