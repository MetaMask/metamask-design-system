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
    <path d="M11 17h2v-1h1q.424 0 .713-.287c.289-.287.287-.43.287-.713v-3q0-.424-.287-.712c-.287-.289-.43-.288-.713-.288h-3v-1h4V8h-2V7h-2v1h-1q-.424 0-.712.288C8.999 8.575 9 8.717 9 9v3q0 .424.288.713c.287.289.429.287.712.287h3v1H9v2h2zm-7 3q-.824 0-1.412-.587C1.999 18.826 2 18.55 2 18V6q0-.824.588-1.412C3.175 4 3.45 4 4 4h16q.824 0 1.413.588C22.002 5.176 22 5.45 22 6v12q0 .824-.587 1.413c-.587.589-.863.587-1.413.587zm0-2h16V6H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCash);
export default ForwardRef;
