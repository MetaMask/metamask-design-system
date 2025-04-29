import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGas = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M4 21V5q0-.824.588-1.412C5.176 2.999 5.45 3 6 3h6q.824 0 1.413.588C14 4.175 14 4.45 14 5v7h1q.824 0 1.413.588c.589.588.587.862.587 1.412v4.5q0 .424.288.713c.288.288.429.287.712.287s.52-.096.713-.287.287-.43.287-.713v-7.2q-.225.125-.475.163c-.25.038-.342.037-.525.037q-1.05 0-1.775-.725C15.5 10.05 15.5 9.7 15.5 9q0-.8.438-1.437c.438-.637.679-.73 1.162-.913L15 4.55l1.05-1.05 3.7 3.6q.375.375.563.875c.188.5.187.675.187 1.025v9.5q0 1.05-.725 1.775C19.05 21 18.7 21 18 21s-1.292-.242-1.775-.725S15.5 19.2 15.5 18.5v-5H14V21zm2-11h6V5H6zm12 0q.424 0 .713-.287C19 9.426 19 9.283 19 9s-.096-.52-.287-.712S18.283 8 18 8s-.52.096-.712.288S17 8.717 17 9s.096.52.288.713.429.287.712.287M6 19h6v-7H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgGas);
export default ForwardRef;
