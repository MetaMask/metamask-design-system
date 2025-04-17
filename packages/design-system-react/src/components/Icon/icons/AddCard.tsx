import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgAddCard = (
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
    <path d="M4 20.229q-.824 0-1.412-.587C1.999 19.055 2 18.779 2 18.229v-12q0-.824.588-1.413A1.93 1.93 0 0 1 4 4.23h16q.824 0 1.413.587Q22 5.405 22 6.23v6H4v6h10v2zm0-12h16v-2H4zm15 14v-3h-3v-2h3v-3h2v3h3v2h-3v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddCard);
export default ForwardRef;
