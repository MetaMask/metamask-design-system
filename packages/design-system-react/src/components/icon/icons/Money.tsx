import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoney = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M398 146c-8-44-41-64-87-64H131c-54 0-90 27-90 90v106c0 45 18 72 49 83 5 2 10 4 15 4 8 2 17 3 26 3h180c54 0 90-27 90-90V172c0-9-1-18-3-26M119 256c0 8-7 15-15 15-9 0-16-7-16-15v-61c0-9 7-16 16-16 8 0 15 7 15 16zm102 23c-30 0-54-24-54-54s24-54 54-54 54 24 54 54-24 54-54 54m132-23c0 8-7 15-15 15-9 0-16-7-16-15v-61c0-9 7-16 16-16 8 0 15 7 15 16zm109-22v105c0 63-36 91-90 91H192c-15 0-29-3-41-7-9-4-18-9-24-15-4-4-1-9 4-9h180c75 0 121-45 121-121V172c0-4 5-8 9-4 13 15 21 36 21 66" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoney);
export default ForwardRef;
