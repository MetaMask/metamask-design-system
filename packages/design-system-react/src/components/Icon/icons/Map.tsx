import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m15 21-6-2.1-4.65 1.8q-.5.2-.925-.112C3 20.275 3 20.1 3 19.75v-14q0-.325.188-.575c.187-.25.295-.292.512-.375L9 3l6 2.1 4.65-1.8q.5-.2.925.113C21 3.724 21 3.9 21 4.25v14q0 .325-.187.575c-.187.25-.296.292-.513.375zm-1-2.45V6.85l-4-1.4v11.7zm2 0 3-1V5.7l-3 1.15zM5 18.3l3-1.15V5.45l-3 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMap);
export default ForwardRef;
