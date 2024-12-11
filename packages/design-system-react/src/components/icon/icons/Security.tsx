import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecurity = (
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
    <path d="m226 48-99 40c-23 9-42 38-42 64v158c0 26 16 59 35 74l85 68c28 23 74 23 102 0l85-68c19-15 35-48 35-74V152c0-26-19-55-42-65l-99-39c-17-7-44-7-60 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecurity);
export default ForwardRef;
