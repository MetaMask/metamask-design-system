import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 20.886q-3.325 0-5.662-2.3C4 16.285 4 15.186 4 12.986q0-1.625.625-3.038A8.2 8.2 0 0 1 6.35 7.436L12 1.886l5.65 5.55a8.2 8.2 0 0 1 1.725 2.512Q20 11.361 20 12.986q0 3.3-2.337 5.6c-2.337 2.3-3.446 2.3-5.663 2.3m-5.95-7H17.9q.3-1.8-.337-3.075c-.637-1.275-.863-1.492-1.313-1.925L12 4.686l-4.25 4.2q-.675.65-1.325 1.925c-.65 1.275-.558 1.875-.375 3.075" />
  </svg>
);
const ForwardRef = forwardRef(SvgTint);
export default ForwardRef;
