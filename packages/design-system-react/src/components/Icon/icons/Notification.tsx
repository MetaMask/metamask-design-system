import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgNotification = (
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
    <path d="M4 19v-2h2v-7q0-2.074 1.25-3.687C8.5 4.7 9.167 4.533 10.5 4.2v-.7q0-.625.438-1.062C11.375 2 11.583 2 12 2s.77.146 1.063.438.437.645.437 1.062v.7q2 .5 3.25 2.113C18 7.926 18 8.617 18 10v7h2v2zm8 3q-.825 0-1.412-.587C10 20.826 10 20.55 10 20h4q0 .824-.587 1.413c-.588.589-.863.587-1.413.587m-4-5h8v-7q0-1.65-1.175-2.825C13.65 6 13.1 6 12 6s-2.042.392-2.825 1.175S8 8.9 8 10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNotification);
export default ForwardRef;
