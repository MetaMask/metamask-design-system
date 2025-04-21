import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLightFilled = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 17.229q-2.075 0-3.537-1.462C7 14.304 7 13.612 7 12.228s.488-2.562 1.463-3.537S10.617 7.228 12 7.228s2.563.487 3.538 1.462S17 10.846 17 12.23s-.487 2.563-1.462 3.538-2.155 1.462-3.538 1.462m-7-4H1v-2h4zm18 0h-4v-2h4zm-12-8v-4h2v4zm0 18v-4h2v4zM6.4 7.979 3.875 5.554 5.3 4.079l2.4 2.5zm12.3 12.4-2.425-2.525 1.325-1.375 2.525 2.425zm-2.45-13.75 2.425-2.525 1.475 1.425-2.5 2.4zm-12.4 12.3 2.525-2.425 1.375 1.325-2.425 2.525z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLightFilled);
export default ForwardRef;
