import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m412 188-93-92c-19-20-46-30-74-29l-102 5c-41 2-74 34-76 75l-5 103c-1 27 10 54 29 73l93 93c38 38 100 38 138 0l90-90c38-38 38-99 0-138m-212 76c-32 0-59-27-59-59 0-33 27-59 59-59 33 0 59 26 59 59 0 32-26 59-59 59" />
  </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;
