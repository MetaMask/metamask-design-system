import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBan = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 22q-2.075 0-3.9-.787c-1.825-.788-2.275-1.238-3.175-2.138S3.313 17.117 2.788 15.9 2 13.383 2 12s.262-2.683.787-3.9 1.238-2.275 2.138-3.175S6.883 3.312 8.1 2.787 10.617 2 12 2s2.683.262 3.9.787 2.275 1.238 3.175 2.138 1.613 1.958 2.138 3.175S22 10.617 22 12s-.262 2.683-.787 3.9-1.238 2.275-2.138 3.175-1.958 1.613-3.175 2.138S13.383 22 12 22m0-2q1.35 0 2.6-.437c1.25-.437 1.6-.713 2.3-1.263L5.7 7.1a8 8 0 0 0-1.263 2.3A7.8 7.8 0 0 0 4 12q0 3.35 2.325 5.675C8.65 20 9.767 20 12 20m6.3-3.1q.824-1.05 1.263-2.3c.439-1.25.437-1.7.437-2.6q0-3.35-2.325-5.675C15.35 4 14.233 4 12 4q-1.35 0-2.6.437A8 8 0 0 0 7.1 5.7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBan);
export default ForwardRef;
