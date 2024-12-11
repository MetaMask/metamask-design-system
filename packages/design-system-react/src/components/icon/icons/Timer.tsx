import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgTimer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="m362 331-83-75h-55l-83 75c-23 21-31 53-20 82 12 29 39 48 70 48h121c31 0 58-19 69-48 12-29 4-61-19-82m-73 51h-75c-8 0-14-7-14-14 0-8 7-14 14-14h75c8 0 14 6 14 14 0 7-7 14-14 14m93-283c-12-29-39-48-70-48H191c-31 0-58 19-70 48-11 29-3 61 20 82l83 75h55l83-75c23-21 31-53 20-82m-93 59h-75c-8 0-14-6-14-14 0-7 7-14 14-14h75c8 0 14 7 14 14 0 8-7 14-14 14" />
  </svg>
);
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;
