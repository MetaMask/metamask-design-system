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
    <path d="M16 11q.424 0 .713-.287C17 10.426 17 10.283 17 10q0-.424-.287-.712C16.425 8.999 16.282 9 16 9s-.52.096-.713.288S15 9.717 15 10q0 .424.287.713c.287.289.43.287.713.287M8 9h5V7H8zM4.5 21q-.85-2.85-1.675-5.687C2 12.474 2 11.483 2 9.5q0-2.3 1.6-3.9C5.2 4 5.967 4 7.5 4h5q.724-.95 1.763-1.475C15.3 2 15.7 2 16.5 2q.625 0 1.063.437C18 2.874 18 3.083 18 3.5q0 .15-.037.3c-.038.15-.055.192-.088.275q-.101.274-.187.562a4 4 0 0 0-.138.588L19.825 7.5H22v6.975l-2.825.925L17.5 21H12v-2h-2v2zM6 19h2v-2h6v2h2l1.55-5.15 2.45-.825V9.5h-1L15.5 6a7.2 7.2 0 0 1 .25-1.9q-.724.2-1.275.688c-.551.487-.633.729-.8 1.212H7.5Q6.05 6 5.025 7.025C4 8.05 4 8.533 4 9.5q0 2.45.675 4.788C5.35 16.625 5.567 17.417 6 19" />
  </svg>
);
const ForwardRef = forwardRef(SvgSaving);
export default ForwardRef;
