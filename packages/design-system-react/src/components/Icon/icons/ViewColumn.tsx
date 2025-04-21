import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgViewColumn = (
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
    <path d="M3.025 17.229v-10q0-.824.587-1.413a1.93 1.93 0 0 1 1.413-.587H19q.825 0 1.412.587Q21 6.405 21 7.23v10q0 .824-.588 1.413c-.588.589-.862.587-1.412.587H5.025q-.824 0-1.413-.587a1.93 1.93 0 0 1-.587-1.413m1.975 0h3.325v-10H5zm5.325 0h3.325v-10h-3.325zm5.325 0h3.325v-10H15.65z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewColumn);
export default ForwardRef;
