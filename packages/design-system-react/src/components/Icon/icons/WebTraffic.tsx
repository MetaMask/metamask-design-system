import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgWebTraffic = (
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
    <path d="M2 12.229v-2h3v2zm3.4 5.55L4 16.329l2.1-2.1 1.45 1.4zm.7-9.55L4 6.129l1.4-1.45 2.15 2.15zm11.9 12-4.75-4.75-1.25 3.75-3-10 10 3-3.7 1.3 4.7 4.7zm-8-14v-3h2v3zm5.9 2-1.45-1.4 2.15-2.15 1.4 1.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWebTraffic);
export default ForwardRef;
