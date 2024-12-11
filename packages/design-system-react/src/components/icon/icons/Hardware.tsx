import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgHardware = (
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
    <path d="M448 87v69c0 13-10 23-23 23h-1v29c0 29-24 53-53 53H136v53h5c21 0 38 17 38 38v58c0 21-17 38-38 38h-39c-21 0-38-17-38-38v-58c0-21 17-38 38-38h5V179h-1c-12 0-23-10-23-23V87c0-13 11-23 23-23h31c13 0 23 10 23 23v69c0 13-10 23-23 23h-1v53h115v-53h-1c-12 0-23-10-23-23V87c0-13 11-23 23-23h31c13 0 23 10 23 23v69c0 13-10 23-23 23h-1v53h91c13 0 24-11 24-24v-29h-1c-12 0-23-10-23-23V87c0-13 11-23 23-23h31c13 0 23 10 23 23" />
  </svg>
);
const ForwardRef = forwardRef(SvgHardware);
export default ForwardRef;
