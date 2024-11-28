import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPlug = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M309 163V69c0-14 12-26 27-26s27 12 27 26v94zm94 13H109c-7 0-13 6-13 13v27c0 7 6 13 13 13h14v27c0 65 45 118 106 131v82h54v-82c61-13 106-66 106-131v-27h14c7 0 13-6 13-13v-27c0-7-6-13-13-13m-200-13V69c0-14-12-26-27-26s-27 12-27 26v94z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlug);
export default ForwardRef;
