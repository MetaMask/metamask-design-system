import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgMoreHorizontal = (
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
    <path d="M20 12q0 .824-.587 1.413C18.826 14 18.55 14 18 14s-1.02-.196-1.412-.587S16 12.55 16 12s.196-1.02.587-1.412S17.45 10 18 10s1.02.196 1.413.588S20 11.45 20 12m-6 0q0 .824-.587 1.413C12.825 14 12.55 14 12 14s-1.02-.196-1.412-.587S10 12.55 10 12s.196-1.02.588-1.412S11.45 10 12 10s1.02.196 1.413.588S14 11.45 14 12m-6 0q0 .824-.587 1.413C6.825 14 6.55 14 6 14s-1.02-.196-1.412-.587S4 12.55 4 12s.196-1.02.588-1.412S5.45 10 6 10s1.02.196 1.413.588S8 11.45 8 12" />
  </svg>
);
const ForwardRef = forwardRef(SvgMoreHorizontal);
export default ForwardRef;
