import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M2 18.229v-12h2v12zm14 0-1.425-1.4 3.6-3.6H6v-2h12.175l-3.575-3.6 1.4-1.4 6 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStart);
export default ForwardRef;
