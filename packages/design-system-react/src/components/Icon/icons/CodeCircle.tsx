import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCodeCircle = (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-2.4-6.514L11 14.06l-2.175-2.175L11 9.712 9.6 8.286l-3.6 3.6zm4.8 0 3.6-3.6-3.6-3.6L13 9.71l2.175 2.175L13 14.06z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCodeCircle);
export default ForwardRef;
