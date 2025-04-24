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
    <path d="M5 17v-7h2v7zm6 0v-7h2v7zM2 8V6l10-5 10 5v2zm4.475-2h11.05L12 3.25zM2 21v-2h12.05q.05.525.125 1.013c.075.487.125.654.225.987zm15-7.75V10h2v2.25zM20 24q-1.725-.425-2.862-1.987C16 20.45 16 19.816 16 18.55V16l4-2 4 2v2.55q0 1.9-1.137 3.463C21.726 23.575 21.15 23.717 20 24m-.725-3 3.475-3.45-1.05-1.05-2.425 2.375-.975-.975-1.05 1.075z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBankAssured);
export default ForwardRef;
