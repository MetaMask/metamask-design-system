import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLogin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M324 469h-2c-92 0-136-38-146-122-2-12 10-24 21-26 14-3 24 9 26 21 5 51 21 79 99 79h2c75 0 98-24 98-100V191c0-76-23-100-98-100h-2c-78 0-94 28-99 79 0 12-12 24-26 21-14 0-23-12-21-26 7-84 54-122 146-122h2c101 0 145 45 145 148v130c0 103-44 148-145 148m-52-122c-7 0-11-2-16-7-9-10-9-24 0-34l26-26H66c-14 0-23-10-23-24s9-24 23-24h218l-28-26c-9-10-9-24 0-34 9-9 23-9 33 0l65 67c10 10 10 24 0 34l-65 67c-3 5-10 7-17 7" />
  </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
