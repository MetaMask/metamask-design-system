import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNotificationCircle = (
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
    <path d="M252 317c33 0 61-27 61-61s-28-61-61-61c-34 0-62 27-62 61s28 61 62 61" />
  </svg>
);
const ForwardRef = forwardRef(SvgNotificationCircle);
export default ForwardRef;
