import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSecuritySlash = (
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
    <path d="M436 320c0 18-11 40-25 51l-117 87c-21 15-55 15-76 0l-37-28c-11-8-12-23-3-32l222-220c13-14 36-4 36 15zm-360 0c0 18 11 40 25 51l10 7-63 64c-7 6-7 16 0 23 3 3 7 4 11 4s8-1 12-5L464 73c7-7 7-17 0-23-6-7-16-7-23 0l-41 41-4-1-118-44c-12-4-32-4-44 0L116 90c-22 8-40 35-40 59z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSecuritySlash);
export default ForwardRef;
