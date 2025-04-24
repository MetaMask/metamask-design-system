import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgSms = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M8 11q.424 0 .713-.287c.289-.287.287-.43.287-.713q0-.424-.287-.712C8.426 8.999 8.283 9 8 9s-.52.096-.712.288S7 9.717 7 10q0 .424.288.713c.287.289.429.287.712.287m4 0q.424 0 .713-.287c.289-.287.287-.43.287-.713q0-.424-.287-.712C12.426 8.999 12.283 9 12 9s-.52.096-.712.288S11 9.717 11 10q0 .424.288.713c.287.289.429.287.712.287m4 0q.424 0 .713-.287C17 10.426 17 10.283 17 10q0-.424-.287-.712C16.425 8.999 16.282 9 16 9s-.52.096-.713.288S15 9.717 15 10q0 .424.287.713c.287.289.43.287.713.287M2 22V4q0-.824.588-1.412C3.175 1.999 3.45 2 4 2h16q.824 0 1.413.588C22.002 3.175 22 3.45 22 4v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587H6zm3.15-6H20V4H4v13.125z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSms);
export default ForwardRef;
