import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 8.25A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25m0 6A2.25 2.25 0 1 1 14.25 12 2.25 2.25 0 0 1 12 14.25m10.5-9h-21A.75.75 0 0 0 .75 6v12a.75.75 0 0 0 .75.75h21a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75m-4.345 12H5.845a5.32 5.32 0 0 0-3.595-3.595v-3.31A5.32 5.32 0 0 0 5.845 6.75h12.31a5.32 5.32 0 0 0 3.595 3.595v3.31a5.32 5.32 0 0 0-3.595 3.595m3.595-8.497a3.83 3.83 0 0 1-2.003-2.003h2.003ZM4.253 6.75A3.83 3.83 0 0 1 2.25 8.753V6.75ZM2.25 15.247a3.83 3.83 0 0 1 2.003 2.003H2.25Zm17.497 2.003a3.83 3.83 0 0 1 2.003-2.003v2.003Z" /></svg>;
const ForwardRef = forwardRef(SvgCash);
export default ForwardRef;