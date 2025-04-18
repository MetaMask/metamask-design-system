import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2UpRight = (
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
    <path d="m6 16.486 9.6-9.6H7v-2h12v12h-2v-8.6l-9.6 9.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2UpRight);
export default ForwardRef;
