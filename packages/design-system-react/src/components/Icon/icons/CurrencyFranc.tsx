import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCurrencyFranc = (
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
    <path d="M7 21v-3H5v-2h2V3h11v2H9v6h8v2H9v3h4v2H9v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyFranc);
export default ForwardRef;
