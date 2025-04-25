import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoreVertical = (
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
    <path d="M12 20q-.825 0-1.412-.587C10 18.826 10 18.55 10 18s.196-1.02.588-1.412S11.45 16 12 16s1.02.196 1.413.587S14 17.45 14 18s-.196 1.02-.587 1.413S12.55 20 12 20m0-6q-.825 0-1.412-.587C10 12.825 10 12.55 10 12s.196-1.02.588-1.412S11.45 10 12 10s1.02.196 1.413.588S14 11.45 14 12s-.196 1.02-.587 1.413S12.55 14 12 14m0-6q-.825 0-1.412-.587C10 6.825 10 6.55 10 6s.196-1.02.588-1.412S11.45 4 12 4s1.02.196 1.413.588S14 5.45 14 6s-.196 1.02-.587 1.413S12.55 8 12 8" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;
