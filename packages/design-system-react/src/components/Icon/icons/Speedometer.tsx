import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSpeedometer = (
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
    <path d="M10.45 15.5q.6.6 1.55.588c.95-.013 1.1-.238 1.4-.688L19 7l-8.4 5.6q-.675.45-.712 1.375c-.038.925.162 1.125.562 1.525M12 4q1.475 0 2.838.413C16.2 4.825 16.6 5.1 17.4 5.65l-1.9 1.2q-.824-.425-1.713-.637C12.898 6 12.6 6 12 6Q8.675 6 6.337 8.337C4 10.674 4 11.783 4 14q0 1.05.287 2.075C4.574 17.1 4.75 17.4 5.1 18h13.8q.575-.95.838-1.975C20 15 20 14.633 20 13.9q0-.9-.213-1.75c-.213-.85-.354-1.117-.637-1.65l1.2-1.9q.75 1.175 1.187 2.5c.437 1.325.446 1.8.463 2.75s-.092 1.858-.325 2.725-.575 1.692-1.025 2.475q-.274.45-.75.7c-.476.25-.65.25-1 .25H5.1q-.525 0-1-.25c-.475-.25-.567-.4-.75-.7q-.65-1.125-1-2.387C2 15.4 2 14.933 2 14q0-2.075.787-3.887.788-1.813 2.15-3.175C6.3 5.576 6.908 5.313 8.125 4.788S10.633 4 12 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpeedometer);
export default ForwardRef;
