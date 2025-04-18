import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTranslate = (
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
    <path d="m11.9 22.229 4.55-12h2.1l4.55 12H21l-1.075-3.05h-4.85L14 22.229zm-7.9-3-1.4-1.4 5.05-5.05q-.875-.875-1.587-2c-.712-1.125-.913-1.6-1.313-2.55h2.1q.5.975 1 1.7t1.2 1.45q.825-.824 1.712-2.313Q11.65 7.58 12.1 6.23H1v-2h7v-2h2v2h7v2h-2.9q-.525 1.8-1.575 3.7t-2.075 2.9l2.4 2.45-.75 2.05-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTranslate);
export default ForwardRef;
