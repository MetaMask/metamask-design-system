import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M5 20.886q-1.275 0-1.812-1.138t.262-2.112L9 10.886v-6H8a.97.97 0 0 1-.712-.288A.97.97 0 0 1 7 3.886q0-.425.288-.713A.97.97 0 0 1 8 2.886h8q.425 0 .713.287.287.288.287.713 0 .424-.287.712a.97.97 0 0 1-.713.288h-1v6l5.55 6.75q.8.975.263 2.112c-.537 1.137-.963 1.138-1.813 1.138zm2-3h10l-3.4-4h-3.2zm-2 1h14l-6-7.3v-6.7h-2v6.7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
