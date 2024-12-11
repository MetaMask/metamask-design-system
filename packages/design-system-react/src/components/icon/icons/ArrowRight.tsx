import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrowRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M173 448c-7 0-12-2-17-6-9-9-9-22 0-31l153-140c4-4 7-9 7-15s-3-11-7-15L156 101c-9-9-9-22 0-31 10-8 24-8 33 0l153 141q21 19.5 21 45c0 17-7 35-21 45L189 442c-4 4-10 6-16 6" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
