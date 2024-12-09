import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M362 43H149c-47 0-85 37-85 82v300c0 39 29 55 63 37l108-58c12-6 30-6 42 0l108 58c34 18 63 2 63-37V125c0-45-38-82-86-82" />
  </svg>
);
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;
