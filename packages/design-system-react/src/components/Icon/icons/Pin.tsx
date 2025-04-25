import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M14.136 15.504v2.829l-1.414 1.414-3.535-3.536-4.243 4.243H3.53V19.04l4.242-4.243-3.535-3.535L5.65 9.848H8.48l4.95-4.95-.708-.707 1.414-1.415 7.072 7.072-1.415 1.414-.707-.707zm-6.47-3.641 4.455 4.455V14.69l5.55-5.55-2.827-2.829-5.551 5.55z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;
