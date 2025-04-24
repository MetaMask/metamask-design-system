import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgActivity = (
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
    <path d="m15.3 16.7 1.4-1.4-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138S3.313 17.117 2.788 15.9 2 13.383 2 12s.262-2.683.787-3.9 1.238-2.275 2.138-3.175S6.883 3.312 8.1 2.787 10.617 2 12 2s2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175S22 10.617 22 12s-.262 2.683-.787 3.9-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138S13.383 22 12 22m0-2q3.325 0 5.663-2.337C20 15.326 20 14.217 20 12q0-3.325-2.337-5.662C15.326 4 14.217 4 12 4Q8.675 4 6.338 6.338C4 8.676 4 9.783 4 12q0 3.325 2.338 5.663C8.676 20 9.783 20 12 20" />
  </svg>
);
const ForwardRef = forwardRef(SvgActivity);
export default ForwardRef;
