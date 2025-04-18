import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSwapVertical = (
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
    <path d="M8 12.886V5.71L5.425 8.286 4 6.886l5-5 5 5-1.425 1.4L10 5.71v7.175zm7 9-5-5 1.425-1.4L14 18.06v-7.174h2v7.175l2.575-2.575 1.425 1.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwapVertical);
export default ForwardRef;
