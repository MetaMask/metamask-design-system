import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgStake = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M461 64c-1-11-10-20-22-21-15 0-84-1-133 47-24 24-37 53-45 78-5 17-7 31-9 42-12-22-30-49-59-69-51-34-108-27-123-25-12 2-21 14-18 26 2 14 16 69 66 104 49 32 110 32 128 30v99c-55 5-101 27-126 44-9 6-11 18-5 26 7 8 19 10 27 4 41-28 148-68 246 0 9 6 21 4 27-4s4-20-4-26c-43-29-86-42-127-44V247c12-1 29-4 48-9 26-8 57-21 81-45 49-47 48-114 48-129m-127 52c28-27 66-34 88-35-1 22-8 59-36 86-18 18-42 28-64 35-12 3-22 5-31 6 2-8 4-18 7-29 6-22 17-45 36-63m-194 99c-27-18-40-45-46-64 19 0 50 2 77 21 27 18 44 47 53 67-23-1-57-6-84-24" />
  </svg>
);
const ForwardRef = forwardRef(SvgStake);
export default ForwardRef;
