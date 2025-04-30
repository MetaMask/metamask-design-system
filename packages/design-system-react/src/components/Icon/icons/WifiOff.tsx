import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWifiOff = (
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
    <clipPath id="a">
      <path d="M0 0h24v24H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path d="m19.75 22.6-9.4-9.45a8.7 8.7 0 0 0-2.187.825A7.5 7.5 0 0 0 6.35 15.35l-2.1-2.15q.8-.8 1.725-1.4c.925-.6 1.275-.75 1.975-1.05L5.7 8.5q-1.024.525-1.913 1.163Q2.9 10.3 2.1 11.1L0 8.95q.8-.8 1.662-1.437C2.524 6.876 2.85 6.683 3.5 6.3L1.4 4.2l1.4-1.4 18.4 18.4zM12 21q-1.05 0-1.775-.737A2.43 2.43 0 0 1 9.5 18.5q0-1.05.725-1.775T12 16c1.05 0 1.292.242 1.775.725q.725.725.725 1.775 0 1.024-.725 1.763A2.4 2.4 0 0 1 12 21m5.9-5.95-.725-.725-.725-.725-3.6-3.6q2.025.2 3.787 1.025C18.4 11.85 18.85 12.3 19.75 13.2zm4-3.95q-1.924-1.924-4.462-3.012C14.9 7 13.933 7 12 7a13 13 0 0 0-2 .15L7.45 4.6q1.1-.3 2.238-.45T12 4q3.55 0 6.625 1.325C21.7 6.65 22.467 7.417 24 8.95z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
