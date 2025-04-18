import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPriorityHigh = (
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
    <path d="M12 21.229q-.825 0-1.412-.587C10 20.055 10 19.779 10 19.229s.196-1.02.588-1.412.862-.588 1.412-.588 1.02.196 1.413.588.587.862.587 1.412-.196 1.02-.587 1.413-.863.587-1.413.587m-2-6v-12h4v12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPriorityHigh);
export default ForwardRef;
