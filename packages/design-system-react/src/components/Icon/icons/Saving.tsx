import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSaving = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M16 11.229q.424 0 .713-.287c.288-.288.287-.43.287-.713a.97.97 0 0 0-.287-.712q-.288-.288-.713-.288c-.425 0-.52.096-.713.288a.97.97 0 0 0-.287.712q0 .424.287.713c.287.288.43.287.713.287m-8-2h5v-2H8zm-3.5 12q-.85-2.85-1.675-5.687C2 12.703 2 11.712 2 9.729q0-2.3 1.6-3.9t3.9-1.6h5q.724-.95 1.763-1.475c1.038-.525 1.437-.525 2.237-.525q.625 0 1.063.437a1.45 1.45 0 0 1 .4 1.363q-.039.15-.088.275-.101.274-.187.562a5 5 0 0 0-.138.588l2.275 2.275H22v6.975l-2.825.925-1.675 5.6H12v-2h-2v2zm1.5-2h2v-2h6v2h2l1.55-5.15 2.45-.825V9.729h-1l-3.5-3.5a7.2 7.2 0 0 1 .25-1.9q-.724.2-1.275.687c-.551.487-.633.73-.8 1.213H7.5q-1.45 0-2.475 1.025A3.37 3.37 0 0 0 4 9.729q0 2.45.675 4.788c.675 2.337.892 3.129 1.325 4.712" />
  </svg>
);
const ForwardRef = forwardRef(SvgSaving);
export default ForwardRef;
