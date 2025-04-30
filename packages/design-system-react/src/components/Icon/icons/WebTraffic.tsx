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
    <path d="M2 12v-2h3v2zm3.4 5.55L4 16.1 6.1 14l1.45 1.4zM6.1 8 4 5.9l1.4-1.45L7.55 6.6zM18 20l-4.75-4.75L12 19 9 9l10 3-3.7 1.3L20 18zM10 6V3h2v3zm5.9 2-1.45-1.4 2.15-2.15 1.4 1.4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWebTraffic);
export default ForwardRef;
