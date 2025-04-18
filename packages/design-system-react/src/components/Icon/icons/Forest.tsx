import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgForest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <clipPath id="a">
      <path d="M0 .229h24v24H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path d="M7 22.229v-4H0l3.85-6H2l7-10 3 4.3 3-4.3 7 10h-1.85l3.85 6h-7v4h-4v-4h-2v4zm9.725-6h3.625l-3.875-6h1.675L15 5.729l-1.775 2.525L16 12.229h-1.85zm-13.075 0h10.7l-3.875-6h1.675L9 5.729l-3.15 4.5h1.675zm0 0h3.875H5.85h6.3-1.675 3.875zm13.075 0H14.15 16h-2.775 4.925-1.675 3.875z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgForest);
export default ForwardRef;
