import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStake = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 21v-7.975q-1.6 0-3.075-.612c-1.475-.613-1.85-.988-2.6-1.738S4 9.058 3.6 8.075 3 6.067 3 5V3h2q1.575 0 3.05.612c1.475.612 1.85.988 2.6 1.738q.775.775 1.287 1.7c.512.925.605 1.275.788 1.975q.125-.176.275-.338c.15-.162.208-.22.325-.337q1.125-1.125 2.6-1.738C17.4 6 17.933 6 19 6h2v2q0 1.6-.613 3.075c-.613 1.475-.987 1.85-1.737 2.6S17.037 15 16.062 15.4 14.067 16 13 16v5zm0-10q0-1.2-.462-2.287c-.463-1.087-.746-1.371-1.313-1.938S8.013 5.771 7.288 5.463 5.8 5 5 5q0 1.2.45 2.3c.45 1.1.733 1.383 1.3 1.95s1.217 1 1.95 1.3 1.5.45 2.3.45m2 3a5.92 5.92 0 0 0 4.225-1.75 6 6 0 0 0 1.313-1.95Q19 9.2 19 8q-1.2 0-2.3.463c-1.1.463-1.383.745-1.95 1.312A5.92 5.92 0 0 0 13 14" />
  </svg>
);
const ForwardRef = forwardRef(SvgStake);
export default ForwardRef;
