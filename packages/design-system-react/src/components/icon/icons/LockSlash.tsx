import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLockSlash = (
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
    <path d="M287 327c0 18-14 32-31 32-12 0-23-7-28-18l42-41c10 5 17 15 17 27M443 68c-5-5-15-5-20 0l-54 54c-15-38-53-58-113-58-108 0-121 69-121 121v24h1c-54 6-72 33-72 101v35c0 31 4 53 13 69l-9 9c-6 6-6 15 0 21 3 2 7 4 11 4s7-2 10-4L443 89c6-6 6-15 0-21M167 207h-5v-22c0-57 16-94 94-94 65 0 86 25 91 53l-63 63zm281 103v35c0 79-24 103-103 103H168c-17 0-26-21-14-33l55-54c1 2 2 4 4 5 13 15 33 23 55 18 2 0 4-1 6-1 1-1 3-1 4-2 4-2 8-4 11-6 2-1 3-2 4-3 3-2 5-5 8-8 1-1 2-2 2-3 3-4 5-7 6-11 1-2 2-3 2-5 1-2 1-3 2-5 4-22-4-42-18-56-2-1-4-3-5-4l59-60c1-1 2-2 3-2 8-7 18-10 27-9 2 0 4 0 6 1 3 0 6 1 9 2l9 3c6 2 10 4 15 7 4 3 8 6 11 10 2 2 4 5 5 7 2 2 3 5 4 7 1 3 2 5 3 8s2 7 3 11c1 3 1 5 2 8 0 3 0 6 1 10 0 8 1 17 1 27" />
  </svg>
);
const ForwardRef = forwardRef(SvgLockSlash);
export default ForwardRef;
