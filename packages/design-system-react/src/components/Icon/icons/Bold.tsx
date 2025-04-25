import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M6.8 19V5h5.525q1.624 0 3 1C16.7 7 16.7 7.592 16.7 8.775q0 1.275-.575 1.963c-.575.688-.742.787-1.075.987q.625.275 1.387 1.025c.762.75.763 1.25.763 2.25q0 2.224-1.625 3.113c-1.625.889-2.1.887-3.05.887zm3.025-2.8h2.6q1.2 0 1.462-.612c.262-.613.263-.705.263-.888s-.088-.48-.263-.887-.687-.613-1.537-.613H9.825zm0-5.7h2.325q.825 0 1.2-.425a1.4 1.4 0 0 0 .375-.95q0-.6-.425-.975c-.425-.375-.65-.375-1.1-.375H9.825z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
