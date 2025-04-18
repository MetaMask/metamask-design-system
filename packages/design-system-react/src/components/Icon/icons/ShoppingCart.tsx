import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgShoppingCart = (
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
    <path d="M7 22.229q-.824 0-1.412-.587C5 21.055 5 20.779 5 20.229s.196-1.02.588-1.412.862-.588 1.412-.588 1.02.196 1.413.588.587.862.587 1.412-.196 1.02-.587 1.413-.863.587-1.413.587m10 0q-.825 0-1.412-.587C15 21.055 15 20.779 15 20.229s.196-1.02.588-1.412.862-.588 1.412-.588 1.02.196 1.413.588.587.862.587 1.412-.196 1.02-.587 1.413-.863.587-1.413.587m-10.85-16 2.4 5h7l2.75-5zm-.95-2h14.75q.575 0 .875.512.3.513.025 1.038l-3.55 6.4q-.275.5-.738.775c-.463.275-.645.275-1.012.275H8.1l-1.1 2h12v2H7q-1.125 0-1.7-.987c-.575-.988-.4-1.313-.05-1.963l1.35-2.45-3.6-7.6H1v-2h3.25z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShoppingCart);
export default ForwardRef;
