import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBankAssured = (
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
      <path d="M5 17.229v-7h2v7zm6 0v-7h2v7zm-9-9v-2l10-5 10 5v2zm4.475-2h11.05L12 3.479zM2 21.229v-2h12.05q.05.525.125 1.013c.075.487.125.654.225.987zm15-7.75v-3.25h2v2.25zm3 10.75q-1.725-.425-2.862-1.987C16 20.679 16 20.045 16 18.778v-2.55l4-2 4 2v2.55q0 1.9-1.137 3.463c-1.137 1.562-1.713 1.704-2.863 1.987m-.725-3 3.475-3.45-1.05-1.05-2.425 2.375-.975-.975-1.05 1.075z" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgBankAssured);
export default ForwardRef;
