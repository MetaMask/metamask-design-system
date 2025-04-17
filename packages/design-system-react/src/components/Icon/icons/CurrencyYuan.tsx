import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCurrencyYuan = (
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
    <path d="M11 21.229v-7H6v-2h4.725L5 3.229h2.375l4.625 7.3 4.625-7.3H19l-5.725 9H18v2h-5v7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyYuan);
export default ForwardRef;
