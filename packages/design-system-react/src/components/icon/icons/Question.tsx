import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgQuestion = (
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
    <path d="M456 256c0 113-91 205-204 205-114 0-205-92-205-205S138 51 252 51c113 0 204 92 204 205M252 148c-33 0-63 24-63 58 0 9 8 17 17 17s17-8 17-17c0-12 11-24 29-24 17 0 28 12 28 24 0 6-4 11-14 17-12 8-32 21-32 48v5c0 9 8 17 18 17 9 0 17-8 17-17v-5c0-7 3-12 15-19 11-7 30-20 30-46 0-34-30-58-62-58m-1 170c-9 0-17 7-17 17 0 9 8 17 17 17h1c9 0 17-8 17-17 0-10-8-17-17-17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;
