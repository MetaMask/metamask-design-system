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
    <path d="M4 20q-.824 0-1.412-.587C1.999 18.826 2 18.55 2 18V6q0-.824.588-1.412C3.175 4 3.45 4 4 4h16q.824 0 1.413.588C22.002 5.176 22 5.45 22 6v6H4v6h10v2zM4 8h16V6H4zm15 14v-3h-3v-2h3v-3h2v3h3v2h-3v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddCard);
export default ForwardRef;
