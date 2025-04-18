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
    <path d="M14 20.954v-2.05q2.25-.65 3.625-2.5t1.375-4.2-1.375-4.2C16.25 6.154 15.5 5.937 14 5.504v-2.05q3.1.7 5.05 3.137C21 9.028 21 10.087 21 12.204q0 3.176-1.95 5.613c-1.95 2.437-2.983 2.67-5.05 3.137M3 15.229v-6h4l5-5v16l-5-5zm11 1v-8.05a4.15 4.15 0 0 1 1.838 1.65q.662 1.1.662 2.4 0 1.275-.662 2.363c-.662 1.087-1.055 1.27-1.838 1.637m-4-7.15-2.15 2.15H5v2h2.85l2.15 2.15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVolumeUp);
export default ForwardRef;
