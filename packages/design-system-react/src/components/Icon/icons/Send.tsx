import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSend = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M3 20.772v-16l19 8zm2-3 11.85-5-11.85-5v3.5l6 1.5-6 1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSend);
export default ForwardRef;
