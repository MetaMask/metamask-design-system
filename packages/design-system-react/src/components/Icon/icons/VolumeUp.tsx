import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgVolumeUp = (
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
    <path d="M14 20.725v-2.05q2.25-.65 3.625-2.5t1.375-4.2-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137C21 8.8 21 9.858 21 11.975q0 3.176-1.95 5.613c-1.95 2.437-2.983 2.67-5.05 3.137M3 15V9h4l5-5v16l-5-5zm11 1V7.95a4.15 4.15 0 0 1 1.838 1.65q.662 1.1.662 2.4 0 1.275-.662 2.363C15.176 15.45 14.783 15.633 14 16m-4-7.15L7.85 11H5v2h2.85L10 15.15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeUp);
export default ForwardRef;
