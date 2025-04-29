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
    <path d="M20.996 20.8 13.96 10.542l.012.01L20.316 3.2h-2.12l-5.168 5.984L8.924 3.2h-5.56l6.569 9.577-.001-.001L3.004 20.8h2.12l5.746-6.658 4.566 6.658zM8.084 4.8l9.872 14.4h-1.68L6.396 4.8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgX);
export default ForwardRef;
