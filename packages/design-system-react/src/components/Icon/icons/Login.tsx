import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgLogin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 21v-2h7V5h-7V3h7q.824 0 1.413.588C21.002 4.175 21 4.45 21 5v14q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm-2-4-1.375-1.45 2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
