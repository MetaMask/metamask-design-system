import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgProgrammingArrows = (
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
    <path d="M410 340V143c0-31-25-56-56-56h-81l29-24c7-5 8-15 2-22-5-6-15-7-21-2l-62 52c-3 2-5 7-5 11 0 5 2 9 5 12l62 51c3 3 6 4 9 4q7.5 0 12-6c6-6 5-16-2-21l-29-24h81c14 0 26 11 26 25v197c-27 7-47 31-47 59 0 34 28 62 62 62s61-28 61-62c0-28-20-52-46-59m-128 58-62-51c-6-6-16-5-21 2-6 6-5 16 2 21l29 24h-81c-14 0-25-11-25-25V174c0-1-1-1-1-2 27-7 47-31 47-59 0-34-28-62-62-62s-61 28-61 62c0 28 20 52 46 59v197c0 31 25 56 56 56h81l-29 24c-7 5-8 15-2 22 3 3 7 5 12 5 3 0 7-1 9-3l62-52c3-2 5-7 5-11 0-5-2-9-5-12" />
  </svg>
);
const ForwardRef = forwardRef(SvgProgrammingArrows);
export default ForwardRef;
