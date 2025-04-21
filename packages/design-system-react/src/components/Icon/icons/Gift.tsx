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
    <path d="M4 22.229v-11H2v-6h5.2a1.4 1.4 0 0 1-.162-.475A3.5 3.5 0 0 1 7 4.229q0-1.25.875-2.125A2.9 2.9 0 0 1 10 1.229q.575 0 1.075.212.5.213.925.588.425-.4.925-.6t1.075-.2q1.25 0 2.125.875T17 4.229q0 .275-.05.512-.05.238-.15.488H22v6h-2v11zm10-19a.97.97 0 0 0-.712.287.97.97 0 0 0-.288.713q0 .424.288.712.287.288.712.288c.425 0 .52-.096.713-.288A.97.97 0 0 0 15 4.23a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 3.23m-5 1q0 .424.288.712.287.288.712.288.424 0 .713-.288A.97.97 0 0 0 11 4.23a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 3.23a.97.97 0 0 0-.712.287A.97.97 0 0 0 9 4.23m-5 3v2h7v-2zm7 13v-9H6v9zm2 0h5v-9h-5zm7-11v-2h-7v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgGift);
export default ForwardRef;
