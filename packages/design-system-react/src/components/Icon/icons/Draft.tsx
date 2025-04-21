import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgDraft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="m12 1.229 9.05 5.4q.45.274.7.75.25.475.25 1v10.85q0 .824-.587 1.413c-.587.589-.863.587-1.413.587H4q-.824 0-1.412-.587C1.999 20.055 2 19.779 2 19.229V8.379q0-.525.25-1t.7-.75zm0 11.65 7.8-4.65-7.8-4.65-7.8 4.65zm0 2.35-8-4.8v8.8h16v-8.8zm0 4h8H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDraft);
export default ForwardRef;
