import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgBulb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M12 22.229q-.65 0-1.175-.312c-.525-.313-.625-.488-.825-.838q-.825 0-1.412-.587C8 19.905 8 19.629 8 19.079v-3.55q-1.474-.975-2.362-2.575c-.888-1.6-.888-2.225-.888-3.475q0-3.026 2.113-5.137Q8.974 2.229 12 2.229q3.026 0 5.138 2.113t2.112 5.137q0 1.925-.887 3.5c-.887 1.575-1.38 1.9-2.363 2.55v3.55q0 .824-.587 1.413c-.588.589-.863.587-1.413.587a2.27 2.27 0 0 1-2 1.15m-2-3.15h4v-.9h-4zm0-1.9h4v-.95h-4zm-.2-2.95h1.45v-2.7l-2.2-2.2 1.05-1.05 1.9 1.9 1.9-1.9 1.05 1.05-2.2 2.2v2.7h1.45q1.35-.65 2.2-1.912c.85-1.262.85-1.788.85-2.838q0-2.2-1.525-3.725T12 4.229c-2.2 0-2.708.508-3.725 1.525Q6.75 7.279 6.75 9.479q0 1.575.85 2.838c.85 1.263 1.3 1.479 2.2 1.912" />
  </svg>
);
const ForwardRef = forwardRef(SvgBulb);
export default ForwardRef;
