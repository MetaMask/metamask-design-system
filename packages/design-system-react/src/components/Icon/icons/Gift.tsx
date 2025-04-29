import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgGift = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M4 22V11H2V5h5.2q-.125-.225-.162-.475A3 3 0 0 1 7 4q0-1.25.875-2.125C8.75 1 9.167 1 10 1q.575 0 1.075.213c.5.212.642.337.925.587q.425-.4.925-.6c.5-.2.692-.2 1.075-.2q1.25 0 2.125.875C17 2.75 17 3.167 17 4q0 .274-.05.513c-.05.239-.083.32-.15.487H22v6h-2v11zM14 3q-.424 0-.712.288C12.999 3.576 13 3.717 13 4s.096.52.288.713S13.717 5 14 5s.52-.096.713-.287S15 4.283 15 4s-.096-.52-.287-.712S14.283 3 14 3M9 4q0 .424.288.713c.287.289.429.287.712.287q.424 0 .713-.287c.289-.287.287-.43.287-.713s-.096-.52-.287-.712S10.283 3 10 3q-.424 0-.712.288C8.999 3.576 9 3.717 9 4M4 7v2h7V7zm7 13v-9H6v9zm2 0h5v-9h-5zm7-11V7h-7v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;
