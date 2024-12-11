import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgArrow2UpRight = (
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
    <path d="M137 107c0-12 10-22 22-22h225c12 0 21 10 21 22v225c0 12-9 21-21 21s-21-9-21-21V158L122 399c-9 8-22 8-30 0-9-8-9-22 0-30l240-241H159c-12 0-22-10-22-21" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrow2UpRight);
export default ForwardRef;
