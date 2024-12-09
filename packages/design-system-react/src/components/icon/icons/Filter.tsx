import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M422 166H90c-11 0-18-8-18-20 0-13 7-21 18-21h332c11 0 18 8 18 21 0 12-7 20-18 20m-37 82c0-12-7-20-18-20H145c-11 0-18 8-18 20s7 21 18 21h222c11 0 18-9 18-21m-74 103c0-13-7-21-18-21h-74c-11 0-18 8-18 21 0 12 7 20 18 20h74c11 0 18-8 18-20" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;
