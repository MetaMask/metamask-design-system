import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M252 366c18 0 33-15 33-34 0-18-15-33-33-33-19 0-34 15-34 33 0 19 15 34 34 34m128-161v-25c0-55-13-129-128-129-116 0-129 74-129 129v25c-57 8-76 37-76 108v38c0 84 25 110 109 110h191c84 0 109-26 109-110v-38c0-71-19-100-76-108M252 394c-35 0-62-28-62-62s28-62 62-62 61 28 61 62-27 62-61 62m-96-190h-4v-24c0-60 17-100 100-100 82 0 99 40 99 100v24H156" />
  </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
