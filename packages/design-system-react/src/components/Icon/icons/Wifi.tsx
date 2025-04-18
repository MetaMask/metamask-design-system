import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <clipPath id="a">
      <path d="M0 0h24v24H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path d="M12 20.886q-1.05 0-1.775-.725-.725-.726-.725-1.776c0-1.05.242-1.291.725-1.775q.725-.724 1.775-.724c1.05 0 1.292.241 1.775.725s.725 1.075.725 1.775-.242 1.291-.725 1.775-1.075.724-1.775.724m-5.65-5.65-2.1-2.15q1.475-1.476 3.463-2.338C9.7 9.886 10.467 9.886 12 9.886s2.963.291 4.288.874 2.479 1.375 3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725c-1.45-.625-2-.625-3.1-.625s-2.133.209-3.1.625-1.817.992-2.55 1.725m-4.25-4.25L0 8.886A16.7 16.7 0 0 1 5.375 5.21Q8.45 3.886 12 3.886t6.625 1.325A16.7 16.7 0 0 1 24 8.886l-2.1 2.1q-1.924-1.926-4.462-3.013C14.9 6.886 13.933 6.886 12 6.886s-3.746.362-5.437 1.087-3.18 1.73-4.463 3.013" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;
