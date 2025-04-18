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
    <path d="M6.8 18.886v-14h5.525q1.624 0 3 1Q16.7 6.885 16.7 8.66q0 1.275-.575 1.962c-.575.687-.742.788-1.075.988q.625.275 1.387 1.025c.762.75.763 1.25.763 2.25q0 2.224-1.625 3.112c-1.625.888-2.1.888-3.05.888zm3.025-2.8h2.6q1.2 0 1.462-.613c.262-.613.263-.704.263-.888s-.088-.479-.263-.887-.687-.612-1.537-.612H9.825zm0-5.7h2.325q.825 0 1.2-.425a1.4 1.4 0 0 0 .375-.95q0-.6-.425-.975c-.425-.375-.65-.375-1.1-.375H9.825z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
