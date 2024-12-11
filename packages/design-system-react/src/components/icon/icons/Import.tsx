import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgImport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M256 64c10 0 18 8 18 18v207l30-30c7-7 19-7 26 0s7 19 0 26l-61 60c-7 7-19 7-26 0l-61-60c-7-7-7-19 0-26s19-7 26 0l30 30V82c0-10 8-18 18-18m63 140c1-10 10-18 20-17 35 3 64 14 83 37s26 54 26 92v2c0 42-8 76-32 99-23 23-58 31-101 31H197c-43 0-78-8-101-31-24-23-32-57-32-99v-2c0-38 7-69 25-91 19-23 48-34 83-38 10 0 19 7 20 17 0 9-7 18-17 19-29 3-47 11-57 24-11 13-17 35-17 69v2c0 38 7 61 21 74 13 13 36 20 75 20h118c39 0 62-7 75-20 14-13 21-36 21-74v-2c0-35-6-56-17-69s-28-22-58-24c-10-1-18-10-17-19" />
  </svg>
);
const ForwardRef = forwardRef(SvgImport);
export default ForwardRef;
