import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEthereum = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 417 417"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="m80.5 212.3 64 37.8 64 37.9 127.9-75.7L208.5 0z" />
    <path d="m336.5 236.6-128 75.6-128-75.6 128 180.3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEthereum);
export default ForwardRef;
