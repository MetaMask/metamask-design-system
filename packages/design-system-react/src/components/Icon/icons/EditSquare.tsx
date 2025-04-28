import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEditSquare = (
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
    <path d="M5 21q-.824 0-1.412-.587A1.92 1.92 0 0 1 3 19.003V5.02q0-.825.588-1.41c.587-.586.862-.588 1.412-.588h8.925l-2 1.998H5v13.983h14V12.06l2-1.997v8.939q0 .824-.587 1.41A1.93 1.93 0 0 1 19 21zm4-5.992v-4.245l9.175-9.164q.3-.3.675-.45T19.6 1a1.98 1.98 0 0 1 1.425.6l1.4 1.422q.275.3.425.662t.15.737-.137.736a1.9 1.9 0 0 1-.438.662l-9.175 9.189zm2-1.998h1.4l5.8-5.793-.7-.699-.725-.699L11 11.587z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEditSquare);
export default ForwardRef;
