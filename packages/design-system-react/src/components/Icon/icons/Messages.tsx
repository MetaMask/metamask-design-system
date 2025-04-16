import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMessages = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M325 264v84c0 7-1 14-3 20-7 30-32 49-67 49h-55l-62 41c-9 7-22 0-22-11v-30c-21 0-38-7-50-19s-19-30-19-50v-84c0-39 24-66 61-69h147c42 0 70 27 70 69m44 66c26 0 48-9 63-24 16-15 24-37 24-63V138c0-48-39-87-87-87H195c-48 0-87 39-87 87v16c0 5 5 10 10 10h137c56 0 101 45 101 100v55c0 6 4 11 10 11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;
