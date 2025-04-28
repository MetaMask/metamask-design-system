import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 21q-1.275 0-1.812-1.137t.262-2.113L9 11V5H8a.97.97 0 0 1-.712-.287Q7 4.425 7 4c0-.425.096-.52.288-.712A.97.97 0 0 1 8 3h8q.425 0 .713.288C17 3.576 17 3.717 17 4s-.096.52-.287.713S16.283 5 16 5h-1v6l5.55 6.75q.8.975.263 2.113C20.276 21 19.85 21 19 21zm2-3h10l-3.4-4h-3.2zm-2 1h14l-6-7.3V5h-2v6.7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
