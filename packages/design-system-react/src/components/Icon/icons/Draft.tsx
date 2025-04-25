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
    <path d="m12 1 9.05 5.4q.45.275.7.75c.25.475.25.65.25 1V19q0 .824-.587 1.413c-.587.589-.863.587-1.413.587H4q-.824 0-1.412-.587C1.999 19.826 2 19.55 2 19V8.15q0-.525.25-1c.25-.475.4-.567.7-.75zm0 11.65L19.8 8 12 3.35 4.2 8zM12 15l-8-4.8V19h16v-8.8zm0 4h8H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDraft);
export default ForwardRef;
