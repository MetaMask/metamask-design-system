import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgReceived = (
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
    <path d="m19 6.286-9.6 9.6H18v2H6v-12h2v8.6l9.6-9.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgReceived);
export default ForwardRef;
