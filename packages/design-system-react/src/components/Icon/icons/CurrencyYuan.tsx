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
    <path d="M11 21v-7H6v-2h4.725L5 3h2.375L12 10.3 16.625 3H19l-5.725 9H18v2h-5v7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyYuan);
export default ForwardRef;
