import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgExpandVertical = (
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
    <path d="M4 22v-2h16v2zm8-3-4-4 1.4-1.4 1.6 1.55v-6.3L9.4 10.4 8 9l4-4 4 4-1.4 1.4L13 8.85v6.3l1.6-1.55L16 15zM4 4V2h16v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgExpandVertical);
export default ForwardRef;
