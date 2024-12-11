import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgConfirmation = (
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
    <path d="M256 43C138 43 43 138 43 256s95 213 213 213 213-95 213-213S374 43 256 43m102 164L237 328c-3 3-7 5-11 5-5 0-9-2-12-5l-60-60c-6-7-6-17 0-23s16-6 23 0l49 49 109-110c7-6 17-6 23 0 6 7 6 17 0 23" />
  </svg>
);
const ForwardRef = forwardRef(SvgConfirmation);
export default ForwardRef;
