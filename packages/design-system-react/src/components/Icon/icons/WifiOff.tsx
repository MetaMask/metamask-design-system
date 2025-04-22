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
      <path d="M0 .229h24v24H0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path d="m19.75 22.829-9.4-9.45q-1.174.274-2.187.825c-1.014.551-1.28.825-1.813 1.375l-2.1-2.15q.8-.8 1.725-1.4c.925-.6 1.275-.75 1.975-1.05L5.7 8.729q-1.024.525-1.913 1.162Q2.9 10.53 2.1 11.33L0 9.179q.8-.8 1.662-1.438C2.524 7.103 2.85 6.912 3.5 6.53l-2.1-2.1 1.4-1.4 18.4 18.4zm-7.75-1.6q-1.05 0-1.775-.737a2.43 2.43 0 0 1-.725-1.763q0-1.05.725-1.775T12 16.229c1.05 0 1.292.242 1.775.725s.725 1.075.725 1.775q0 1.024-.725 1.763c-.725.738-1.075.737-1.775.737m5.9-5.95-.725-.725-.725-.725-3.6-3.6q2.025.2 3.787 1.025c1.762.825 2.213 1.275 3.113 2.175zm4-3.95q-1.924-1.925-4.462-3.013C14.9 7.228 13.933 7.23 12 7.23a13 13 0 0 0-2 .15l-2.55-2.55q1.1-.3 2.238-.45T12 4.229q3.55 0 6.625 1.325A17.1 17.1 0 0 1 24 9.179z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
