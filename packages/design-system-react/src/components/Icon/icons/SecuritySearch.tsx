import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecuritySearch = (
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
    <path d="M404 152v52c0 14-15 24-28 19-18-7-37-9-57-7-48 5-98 52-107 101-6 40 7 78 31 104 12 13 4 32-13 34-14 2-28 2-35-4L82 367c-13-10-24-32-24-49V152c0-23 17-48 39-56l113-43c11-4 30-4 42 0l113 43c21 8 39 33 39 56m-71 94c-50 0-92 41-92 92s42 92 92 92c51 0 93-41 93-92s-42-92-93-92m103 215q-9 0-15-6c-1-1-2-2-2-3-1-1-2-3-2-4-1-1-1-2-1-4 0-1-1-2-1-4s1-5 2-7c1-3 2-5 4-7 5-5 12-7 19-6 1 0 2 1 4 1 1 1 2 2 3 2l3 3c2 2 4 4 5 7 1 2 1 5 1 7q0 9-6 15c-1 1-2 2-3 2-1 1-2 2-3 2-2 1-3 1-4 1-2 1-3 1-4 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecuritySearch);
export default ForwardRef;
