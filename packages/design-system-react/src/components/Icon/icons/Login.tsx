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
    <path d="M12 20.886v-2h7v-14h-7v-2h7q.824 0 1.413.587.587.588.587 1.413v14q0 .825-.587 1.412c-.587.587-.863.588-1.413.588zm-2-4-1.375-1.45 2.55-2.55H3v-2h8.175l-2.55-2.55L10 6.885l5 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLogin);
export default ForwardRef;
