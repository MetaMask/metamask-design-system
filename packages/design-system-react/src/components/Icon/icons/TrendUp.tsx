import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTrendUp = (
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
    <path d="m3.4 17.886-1.4-1.4 7.4-7.45 4 4 5.2-5.15H16v-2h6v6h-2v-2.6l-6.6 6.6-4-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrendUp);
export default ForwardRef;
