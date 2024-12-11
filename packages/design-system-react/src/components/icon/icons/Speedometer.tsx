import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSpeedometer = (
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
    <path d="M57 329v44c0 5 2 9 4 12 3 2 7 4 11 4h359c4 0 8-2 11-4 2-3 4-7 4-12v-47c0-26-5-53-15-78-10-24-24-47-42-66s-40-34-64-44c-23-10-49-15-74-15-108 0-194 93-194 206m317-22c12 0 21-9 21-20 0-12-9-21-21-21-11 0-20 9-20 21 0 11 9 20 20 20m-235-20c0 11-9 20-21 20-11 0-20-9-20-20 0-12 9-21 20-21 12 0 21 9 21 21m99-82c12 0 21-9 21-21 0-11-9-20-21-20-11 0-20 9-20 20 0 12 9 21 20 21m117 9c6 6 6 16 0 22l-76 76v5c0 17-14 31-31 31s-30-14-30-31 13-30 30-30c4 0 8 0 11 1l74-74c6-6 16-6 22 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeedometer);
export default ForwardRef;
