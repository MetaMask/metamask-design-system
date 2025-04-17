import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgConnect = (
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
    <path d="M4.925 18.96q-1.35-1.374-2.137-3.187A9.65 9.65 0 0 1 2 11.886q0-2.1.787-3.913a10.1 10.1 0 0 1 2.138-3.162L6.35 6.236a8.1 8.1 0 0 0-1.725 2.55Q4 10.236 4 11.886a7.8 7.8 0 0 0 2.35 5.65zm2.825-2.825q-.8-.825-1.275-1.912C6 13.136 6 12.719 6 11.886q0-1.275.475-2.363A6.1 6.1 0 0 1 7.75 7.636L9.175 9.06a4.1 4.1 0 0 0-.862 1.275Q8 11.06 8 11.886c0 .825.104 1.066.313 1.55q.312.724.862 1.275zm4.25-2.25q-.825 0-1.412-.587Q10 12.71 10 11.886c0-.824.196-1.021.588-1.413q.587-.588 1.412-.587c.825 0 1.02.195 1.413.587q.587.588.587 1.413c0 .825-.196 1.02-.587 1.412a1.93 1.93 0 0 1-1.413.588m4.25 2.25-1.425-1.425q.55-.549.863-1.275t.312-1.55c0-.825-.104-1.066-.312-1.55a4.1 4.1 0 0 0-.863-1.274l1.425-1.425a6.1 6.1 0 0 1 1.275 1.887Q18 10.61 18 11.885q0 1.25-.475 2.338c-.475 1.088-.742 1.362-1.275 1.912m2.825 2.825-1.425-1.425a8.1 8.1 0 0 0 1.725-2.55q.625-1.45.625-3.1a7.8 7.8 0 0 0-2.35-5.65l1.425-1.424q1.35 1.35 2.138 3.162.786 1.812.787 3.912 0 2.076-.787 3.888a10.5 10.5 0 0 1-2.138 3.188" />
  </svg>
);
const ForwardRef = forwardRef(SvgConnect);
export default ForwardRef;
