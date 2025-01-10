import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgEyeSlash = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M454 196c-7-10-13-19-20-28-8-10-23-11-32-2l-64 64c5 14 6 31 2 48-8 30-32 54-62 61-17 5-33 4-47-1l-53 53c-11 10-7 29 7 35 23 8 47 13 71 13 38 0 75-11 108-32 35-21 66-53 91-93 20-32 19-86-1-118m-137 60c0 33-27 61-61 61h-4l64-65c1 2 1 3 1 4M59 317c-22-34-22-88 0-122 24-39 55-69 88-90 34-21 71-32 109-32 42 0 83 14 120 40l65-65c6-7 17-7 23 0 7 6 7 16 0 23L71 464c-4 4-8 5-12 5s-8-1-11-4c-7-7-7-17 0-24l62-62c-19-18-36-39-51-62m136-61c0-33 27-61 61-61 11 0 21 3 30 8l18-19c-14-9-30-14-48-14-48 0-86 38-86 86 0 18 5 35 14 48l19-18c-5-9-8-19-8-30" />
  </svg>
);
const ForwardRef = forwardRef(SvgEyeSlash);
export default ForwardRef;
