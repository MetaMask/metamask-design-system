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
    <path d="M3 17V7q0-.824.588-1.412C4.176 5 4.452 5 5.003 5h13.994q.826 0 1.415.588C21 6.176 21 6.45 21 7v10q0 .824-.588 1.413c-.588.589-.864.587-1.415.587H5.003q-.826 0-1.415-.587C3 17.826 3 17.55 3 17m1.978 0h3.33V7h-3.33zm5.332 0h3.33V7h-3.33zm5.333 0h3.33V7h-3.33z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewColumn);
export default ForwardRef;
