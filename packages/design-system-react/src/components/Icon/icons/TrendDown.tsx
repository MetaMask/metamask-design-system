import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTrendDown = (
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
    <path d="M16 18v-2h2.6l-5.2-5.15-4 4L2 7.4 3.4 6l6 6 4-4 6.6 6.6V12h2v6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrendDown);
export default ForwardRef;
