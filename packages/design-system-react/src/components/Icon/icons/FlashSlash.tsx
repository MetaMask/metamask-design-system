import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlashSlash = (
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
    <path d="M7 1.886h10l-2 7h4l-2.925 4.225-1.425-1.426.55-.8h-1.35L12.675 9.71l1.675-5.825H9v2.15l-2-2zm3 20v-8H7v-4.15L1.375 4.11 2.8 2.686l18.4 18.4-1.425 1.425-6.025-6.025z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlashSlash);
export default ForwardRef;
