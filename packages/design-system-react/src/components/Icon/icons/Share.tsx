import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M329 188c1-12 12-20 24-19 41 3 75 16 97 44 22 27 30 64 30 109v3c0 50-10 90-37 118-27 27-68 37-118 37H186c-49 0-90-10-117-37-28-28-37-68-37-118v-3c0-44 8-82 29-109 22-27 55-40 96-44 12-1 23 7 24 19s-8 22-20 23c-34 4-54 14-67 29-12 16-20 41-20 82v3c0 46 10 72 25 88 16 15 42 24 87 24h139c46 0 72-9 88-24 15-16 25-42 25-88v-3c0-41-8-66-21-82-12-16-33-26-68-29-12-1-21-11-20-23M271 38c-8-8-22-8-30 0l-72 72c-8 8-8 22 0 30 9 8 22 8 31 0l35-35v215c0 12 9 21 21 21s21-9 21-21V105l35 35c9 8 22 8 31 0 8-8 8-22 0-30z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
