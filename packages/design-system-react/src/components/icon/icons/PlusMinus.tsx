import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPlusMinus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 22"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.348 3c.48 0 .87.39.87.87v2.608h2.608a.87.87 0 0 1 0 1.74H5.217v2.608a.87.87 0 0 1-1.739 0V8.217H.87a.87.87 0 0 1 0-1.739h2.608V3.87c0-.48.39-.87.87-.87m13.658 1.124c.34.34.34.89 0 1.23L4.48 18.881a.87.87 0 0 1-1.23-1.23L16.776 4.124a.87.87 0 0 1 1.23 0m-4.963 10.18c0-.48.39-.87.87-.87h6.957a.87.87 0 0 1 0 1.74h-6.957a.87.87 0 0 1-.87-.87"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlusMinus);
export default ForwardRef;
