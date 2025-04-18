import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 18.886h1.425L16.2 9.11l-1.425-1.426L5 17.462zm-2 2v-4.25L16.2 3.46q.3-.276.663-.426c.363-.15.495-.15.762-.15s.525.05.775.15.467.25.65.45l1.375 1.4q.3.276.437.65c.137.375.138.5.138.75q0 .4-.138.763a1.9 1.9 0 0 1-.437.663L7.25 20.886zM15.475 8.41l-.7-.725L16.2 9.11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEdit);
export default ForwardRef;
