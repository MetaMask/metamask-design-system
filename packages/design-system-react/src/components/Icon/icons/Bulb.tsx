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
    <path d="M12 22q-.65 0-1.175-.312c-.525-.312-.625-.488-.825-.838q-.825 0-1.412-.587C8 19.676 8 19.4 8 18.85V15.3q-1.474-.975-2.362-2.575c-.888-1.6-.888-2.225-.888-3.475q0-3.026 2.113-5.137C8.974 2.002 9.983 2 12 2q3.026 0 5.138 2.113c2.111 2.113 2.112 3.12 2.112 5.137q0 1.925-.887 3.5c-.887 1.575-1.38 1.9-2.363 2.55v3.55q0 .824-.587 1.413c-.588.589-.863.587-1.413.587A2.27 2.27 0 0 1 12 22m-2-3.15h4v-.9h-4zm0-1.9h4V16h-4zM9.8 14h1.45v-2.7l-2.2-2.2 1.05-1.05 1.9 1.9 1.9-1.9 1.05 1.05-2.2 2.2V14h1.45q1.35-.65 2.2-1.912c.85-1.262.85-1.788.85-2.838q0-2.2-1.525-3.725C14.2 4 13.467 4 12 4s-2.708.508-3.725 1.525S6.75 7.783 6.75 9.25q0 1.575.85 2.838C8.45 13.35 8.9 13.567 9.8 14" />
  </svg>
);
const ForwardRef = forwardRef(SvgBulb);
export default ForwardRef;
