import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLogout = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M448 197v119c0 92-40 132-133 132h-2c-82 0-123-35-131-108-2-9 8-18 17-20s18 7 20 16c5 55 31 75 94 75h2c71 0 97-23 97-96V197c0-71-24-96-97-96h-2c-63 0-91 20-94 76 0 11-9 19-20 17-11 0-19-9-17-20 8-75 48-110 131-110h2c91 0 133 40 133 133m-320 77h184c10 0 18-7 18-18s-8-18-18-18H128l29-30c7-7 7-18 0-25s-18-7-26 0l-62 62c-7 7-7 18 0 26l62 62c4 3 9 5 13 5s9-2 13-5c7-8 7-18 0-26z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLogout);
export default ForwardRef;
