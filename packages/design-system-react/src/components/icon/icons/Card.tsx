import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    role="img"
    ref={ref}
    {...props}
  >
    <path d="M456 165c0 13-11 24-24 24H71c-13 0-24-11-24-24 0-47 38-85 84-85h240c47 0 85 38 85 85M47 245v102c0 47 38 85 84 85h240c47 0 85-38 85-85V245c0-14-11-25-24-25H71c-13 0-24 11-24 25m123 119h-41c-9 0-16-7-16-16 0-8 7-15 16-15h41c8 0 15 7 15 15 0 9-7 16-15 16m133 0h-82c-9 0-16-7-16-16 0-8 7-15 16-15h82c8 0 15 7 15 15 0 9-7 16-15 16" />
  </svg>
);
const ForwardRef = forwardRef(SvgCard);
export default ForwardRef;
