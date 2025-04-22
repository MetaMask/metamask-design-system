import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFirstPage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6 18.229v-12h2v12zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFirstPage);
export default ForwardRef;
