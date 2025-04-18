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
    <path d="M4 18.886v-2h2v-7Q6 7.81 7.25 6.198c1.25-1.612 1.917-1.78 3.25-2.112v-.7q0-.625.438-1.063.437-.437 1.062-.437c.625 0 .77.145 1.063.437q.437.438.437 1.063v.7q2 .5 3.25 2.112C18 7.81 18 8.502 18 9.886v7h2v2zm8 3q-.825 0-1.412-.588C10 20.71 10 20.436 10 19.886h4q0 .825-.587 1.412c-.588.587-.863.588-1.413.588m-4-5h8v-7q0-1.65-1.175-2.825T12 5.886c-1.65 0-2.042.391-2.825 1.175Q8 8.236 8 9.886z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNotification);
export default ForwardRef;
