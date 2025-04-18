import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const SvgCash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M11 17.229h2v-1h1q.424 0 .713-.287c.289-.288.287-.43.287-.713v-3q0-.424-.287-.712c-.287-.289-.43-.288-.713-.288h-3v-1h4v-2h-2v-1h-2v1h-1a.97.97 0 0 0-.712.288.97.97 0 0 0-.288.712v3q0 .424.288.713c.287.288.429.287.712.287h3v1H9v2h2zm-7 3q-.824 0-1.412-.587C1.999 19.055 2 18.779 2 18.229v-12q0-.824.588-1.413A1.93 1.93 0 0 1 4 4.23h16q.824 0 1.413.587Q22 5.405 22 6.23v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h16v-12H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCash);
export default ForwardRef;
