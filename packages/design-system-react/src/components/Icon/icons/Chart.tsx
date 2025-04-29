import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgChart);
export default ForwardRef;
