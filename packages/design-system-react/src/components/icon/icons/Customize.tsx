import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCustomize = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M218 231c47 0 84-38 84-84 0-47-37-84-84-84-41 0-76 29-83 69H59c-8 0-15 6-15 15 0 8 7 15 15 15h76c7 39 42 69 83 69m238-69H337c-8 0-15-7-15-15 0-9 7-15 15-15h119c9 0 15 6 15 15 0 8-6 15-15 15M59 380h119c9 0 15-7 15-15s-6-15-15-15H59c-8 0-15 7-15 15s7 15 15 15m321 0c-6 39-41 69-82 69-47 0-85-37-85-84 0-46 38-84 85-84 41 0 75 30 82 69h76c9 0 15 7 15 15s-6 15-15 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCustomize);
export default ForwardRef;
