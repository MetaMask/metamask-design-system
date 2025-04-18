import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSortByAlpha = (
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
    <path d="m2 17.229 3.75-10H7.9l3.75 10H9.6l-.85-2.4H4.9l-.8 2.4zm3.5-4.1h2.6l-1.2-3.75h-.15zm8.2 4.1v-1.9l5.05-6.3H13.9v-1.8h7.05v1.9l-5 6.3H21v1.8zm-4.7-12 3-3 3 3zm3 17-3-3h6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSortByAlpha);
export default ForwardRef;
