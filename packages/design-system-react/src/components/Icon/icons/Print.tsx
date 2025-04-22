import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgPrint = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M16 8.229v-3H8v3H6v-5h12v5zm2 4.5q.424 0 .713-.287c.288-.288.287-.43.287-.713s-.096-.52-.287-.712-.43-.288-.713-.288-.52.096-.712.288-.288.429-.288.712.096.52.288.713.429.287.712.287m-2 6.5v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137C3.75 8.229 4.167 8.229 5 8.229h14q1.275 0 2.138.863c.862.862.862 1.287.862 2.137v6h-4zm2-6v-4q0-.424-.287-.712c-.288-.289-.43-.288-.713-.288H5q-.424 0-.712.288c-.289.287-.288.429-.288.712v4h2v-2h12v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPrint);
export default ForwardRef;
