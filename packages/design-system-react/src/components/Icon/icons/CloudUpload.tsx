import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCloudUpload = (
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
    <path d="M6.5 20q-2.275 0-3.887-1.575C1 16.85 1 16.092 1 14.575q0-1.95 1.175-3.475C3.35 9.575 3.983 9.433 5.25 9.15q.625-2.3 2.5-3.725C9.625 4 10.417 4 12 4q2.925 0 4.963 2.038C19 8.076 19 9.05 19 11q1.725.2 2.863 1.488C23 13.776 23 14.35 23 15.5q0 1.875-1.312 3.188C20.376 20 19.75 20 18.5 20H13q-.825 0-1.412-.587C11 18.826 11 18.55 11 18v-5.15L9.4 14.4 8 13l4-4 4 4-1.4 1.4-1.6-1.55V18h5.5q1.05 0 1.775-.725C21 16.55 21 16.2 21 15.5s-.242-1.292-.725-1.775S19.2 13 18.5 13H17v-2q0-2.075-1.462-3.537C14.075 6 13.383 6 12 6s-2.562.488-3.537 1.463S7 9.617 7 11h-.5q-1.45 0-2.475 1.025C3 13.05 3 13.533 3 14.5s.342 1.792 1.025 2.475S5.533 18 6.5 18H9v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCloudUpload);
export default ForwardRef;
