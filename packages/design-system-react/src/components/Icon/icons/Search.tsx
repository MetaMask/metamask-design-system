import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95C10.6 16 10.233 16 9.5 16q-2.725 0-4.612-1.888C3 12.224 3 11.317 3 9.5q0-2.725 1.888-4.612C6.776 3 7.683 3 9.5 3q2.725 0 4.613 1.888C16 6.776 16 7.683 16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.312C14 11.375 14 10.75 14 9.5s-.437-2.312-1.312-3.187S10.75 5 9.5 5s-2.312.438-3.187 1.313S5 8.25 5 9.5s.438 2.313 1.313 3.188S8.25 14 9.5 14" />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;
