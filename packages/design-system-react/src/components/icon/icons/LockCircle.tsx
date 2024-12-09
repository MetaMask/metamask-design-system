import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLockCircle = (
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
    <path d="M252 169c-39 0-47 16-47 46v13h93v-13c0-30-8-46-46-46m0 150c12 0 22-10 22-22s-10-23-22-23c-13 0-23 11-23 23s10 22 23 22m0-268C138 51 47 143 47 256s91 205 205 205c113 0 204-92 204-205S365 51 252 51m110 256c0 45-14 59-59 59H200c-45 0-59-14-59-59v-20c0-35 9-51 34-57v-15c0-19 0-77 77-77 76 0 76 58 76 77v15c25 6 34 22 34 57z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLockCircle);
export default ForwardRef;
