import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M450 469c-5 0-10-2-14-5l-38-39c-4-4-6-9-6-14s2-10 6-13c3-4 8-6 13-6s10 2 14 6l39 38c3 4 5 9 5 14s-2 10-5 14c-4 3-9 5-14 5m-204-19c-112 0-203-91-203-204 0-112 91-203 203-203 113 0 204 91 204 203 0 113-91 204-204 204m0-369c-43 0-85 18-116 49s-49 73-49 116c0 44 18 86 49 117s73 48 116 48c44 0 86-17 117-48s48-73 48-117c0-43-17-85-48-116s-73-49-117-49" />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
