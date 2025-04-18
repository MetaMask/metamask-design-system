import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMusicNote = (
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
    <path d="M10 21.229q-1.65 0-2.825-1.175C6 18.879 6 18.329 6 17.229s.392-2.042 1.175-2.825S8.9 13.229 10 13.229q.575 0 1.063.138c.487.137.637.229.937.412V3.229h6v4h-4v10q0 1.65-1.175 2.825C11.65 21.229 11.1 21.229 10 21.229" />
  </svg>
);
const ForwardRef = forwardRef(SvgMusicNote);
export default ForwardRef;
