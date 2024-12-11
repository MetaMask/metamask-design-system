import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M252 399c79 0 143-64 143-143s-64-143-143-143c-80 0-144 64-144 143s64 143 144 143m0 81c-12 0-21-8-21-19v-2c0-11 9-20 21-20 11 0 20 9 20 20s-9 21-20 21m146-57q-9 0-15-6l-2-3c-8-8-8-21 0-29s20-8 28 0l3 3c8 8 8 21 0 29-4 4-9 6-14 6m-293 0c-5 0-10-2-14-6-8-8-8-21 0-29l2-3c8-8 21-8 29 0s8 21 0 29l-2 3c-4 4-10 6-15 6m351-147h-1c-12 0-21-9-21-20s9-20 21-20c11 0 21 9 21 20s-8 20-20 20m-408 0h-1c-12 0-21-9-21-20s9-20 21-20c11 0 21 9 21 20s-8 20-20 20m347-143c-5 0-10-2-14-6-8-8-8-21 0-29l2-3c8-8 21-8 29 0s8 21 0 29l-3 3c-3 4-9 6-14 6m-287 0q-7.5 0-15-6l-2-3c-8-8-8-21 0-29s21-8 29 0l2 3c8 8 8 21 0 29-4 4-9 6-14 6m144-60c-12 0-21-9-21-20v-2c0-11 9-20 21-20 11 0 20 9 20 20s-9 22-20 22" />
  </svg>
);
const ForwardRef = forwardRef(SvgLight);
export default ForwardRef;
