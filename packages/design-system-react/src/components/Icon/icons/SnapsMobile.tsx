import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSnapsMobile = (
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
    <path
      fillRule="evenodd"
      d="M3.586 3.586C3 4.172 3 5.114 3 7v10c0 1.886 0 2.828.586 3.414S5.114 21 7 21h10c1.886 0 2.828 0 3.414-.586S21 18.886 21 17V7c0-1.886 0-2.828-.586-3.414S18.886 3 17 3H7c-1.886 0-2.828 0-3.414.586m7.747 8.797v4.567l-4-2.317v-4.566zm5.334 2.25-4 2.317v-4.567l4-2.316zM15.95 8.95 12 11.233 8.05 8.95 12 6.667zm-9.775 6.367q.175.3.492.483l4.666 2.683a1.31 1.31 0 0 0 1.334 0l4.666-2.683q.316-.183.492-.483c.176-.3.175-.422.175-.667v-5.3a1.3 1.3 0 0 0-.667-1.15l-4.666-2.683a1.31 1.31 0 0 0-1.334 0L6.667 8.2A1.299 1.299 0 0 0 6 9.35v5.3q0 .367.175.667"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSnapsMobile);
export default ForwardRef;
