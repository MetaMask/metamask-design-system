import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCategory = (
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
    <path d="M154 51h-39c-45 0-68 24-68 68v39c0 45 23 69 68 69h39c44 0 68-24 68-69v-39c0-44-23-68-68-68m234 0h-39c-44 0-68 24-68 68v39c0 45 24 69 68 69h39c45 0 68-24 68-69v-39c0-44-23-68-68-68m0 234h-39c-44 0-68 24-68 68v39c0 45 24 69 68 69h39c45 0 68-24 68-69v-39c0-44-23-68-68-68m-234 0h-39c-45 0-68 24-68 68v39c0 45 23 69 68 69h39c44 0 68-24 68-68v-39c0-45-23-69-68-69" />
  </svg>
);
const ForwardRef = forwardRef(SvgCategory);
export default ForwardRef;
