import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgData = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M415 302c26 0 46-21 46-46s-20-46-46-46c-25 0-46 21-46 46s21 46 46 46m0-164c26 0 46-20 46-46 0-25-20-46-46-46-25 0-46 21-46 46 0 26 21 46 46 46m0 328c26 0 46-21 46-46 0-26-20-46-46-46-25 0-46 20-46 46 0 25 21 46 46 46M88 302c25 0 46-21 46-46s-21-46-46-46c-26 0-46 21-46 46s20 46 46 46m307-31c8 0 15-7 15-15s-7-15-15-15H246v-87c0-33 14-46 46-46h103c8 0 15-7 15-16 0-8-7-15-15-15H292c-49 0-76 27-76 77v87H108c-8 0-15 7-15 15s7 15 15 15h108v87c0 50 27 77 76 77h103c8 0 15-7 15-15 0-9-7-16-15-16H292c-32 0-46-13-46-46v-87z" />
  </svg>
);
const ForwardRef = forwardRef(SvgData);
export default ForwardRef;
