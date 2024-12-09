import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHierarchy = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M448 256c0 32-25 57-57 57-27 0-50-18-57-43H198c-26 0-47-7-62-19v84c25 6 43 28 43 55 0 32-26 58-58 58s-57-26-57-58c0-27 18-49 43-56V178c-25-7-43-29-43-56 0-32 25-58 57-58s58 26 58 58c0 27-18 49-43 55v2c0 42 20 63 62 63h136c7-25 30-43 57-43 32 0 57 25 57 57" />
  </svg>
);
const ForwardRef = forwardRef(SvgHierarchy);
export default ForwardRef;
