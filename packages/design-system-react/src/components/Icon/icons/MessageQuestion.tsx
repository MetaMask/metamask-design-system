import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMessageQuestion = (
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
    <path d="M11.9 16.886q.525 0 .888-.363c.362-.363.362-.537.362-.887s-.12-.646-.362-.888-.538-.362-.888-.362-.646.12-.887.362-.363.538-.363.888.12.645.363.887.537.363.887.363m-.9-3.85h1.85q0-.426.038-.725c.037-.3.079-.392.162-.575s.187-.355.312-.513.305-.354.538-.587q.875-.876 1.237-1.463t.363-1.337q0-1.325-.9-2.138t-2.425-.812q-1.375 0-2.337.675T8.5 7.436l1.65.65q.175-.675.7-1.088c.525-.413.758-.412 1.225-.412q.675 0 1.125.362.45.363.45.963 0 .424-.275.9-.275.474-.925 1.05-.425.35-.688.687c-.263.337-.32.463-.437.713s-.2.512-.25.787-.075.604-.075.988m1 9.85-3-3H5q-.824 0-1.412-.588C2.999 18.71 3 18.436 3 17.886v-14q0-.825.588-1.413A1.93 1.93 0 0 1 5 1.886h14q.824 0 1.413.587.587.588.587 1.413v14q0 .825-.587 1.412c-.587.587-.863.588-1.413.588h-4zm-7-5h4.8l2.2 2.2 2.2-2.2H19v-14H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessageQuestion);
export default ForwardRef;
