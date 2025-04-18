import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 20.886v-17h9l.4 2H20v10h-7l-.4-2H7v7zm9.65-7H18v-6h-5.25l-.4-2H7v6h7.25z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
