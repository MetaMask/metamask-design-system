import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGlobalSearch = (
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
    <path d="m452 437-14-14c7-11 12-25 12-39 0-38-32-69-70-69-39 0-70 31-70 69 0 39 31 70 70 70 14 0 27-4 38-11l14 14c3 2 7 4 10 4 4 0 7-2 10-4 6-6 6-15 0-20M67 317c0 1-1 1-1 2 18 36 48 65 84 83h1q-9-34.5-15-69c-23-4-47-9-69-16m332-160c-18-38-49-69-87-87 7 23 12 47 16 70 24 4 48 10 71 17m-334 0c23-7 47-13 71-17q6-34.5 15-69h-2c-36 18-66 49-84 86m232-21c-5-25-11-50-19-75-1-1-1-3-1-4q-21-6-45-6t-45 6c-1 1 0 3-1 4-8 25-14 50-19 75 43-4 87-4 130 0m-165 36c-26 4-51 10-76 19h-3c-4 15-6 30-6 46q0 22.5 6 45h4c24 9 49 15 75 19q-7.5-64.5 0-129m279 19h-4c-24-9-50-15-75-19q7.5 64.5 0 129c25-5 51-10 75-19h4c4-15 6-30 6-46q0-22.5-6-45M167 337c5 25 11 50 19 75 1 1 0 3 1 4q21 6 45 6t45-6c0-1 0-3 1-4 8-25 14-50 19-75-22 2-43 4-65 4s-43-2-65-4m-4-170c-6 46-6 93 0 139q69 9 138 0c6-46 6-93 0-139q-69-9-138 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgGlobalSearch);
export default ForwardRef;
