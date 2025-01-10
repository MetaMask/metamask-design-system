import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M276 43c9 0 18 8 18 18v118h118c10 0 18 8 18 18s-8 18-18 18H276c-10 0-18-8-18-18V61c0-10 8-18 18-18M98 59c11-10 26-16 41-16h137c4 0 9 2 12 5l137 137c3 3 5 8 5 12v215c0 15-6 30-16 41-11 10-26 16-41 16H139c-15 0-30-6-41-16-10-11-16-26-16-41V100c0-15 6-30 16-41m41 20q-9 0-15 6t-6 15v312q0 9 6 15t15 6h234q9 0 15-6t6-15V205L268 79z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
