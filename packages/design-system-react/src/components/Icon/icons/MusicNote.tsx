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
    <path d="M10 21q-1.65 0-2.825-1.175C6 18.65 6 18.1 6 17s.392-2.042 1.175-2.825S8.9 13 10 13q.575 0 1.063.138c.487.137.637.229.937.412V3h6v4h-4v10q0 1.65-1.175 2.825C11.65 21 11.1 21 10 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgMusicNote);
export default ForwardRef;
