import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M19.5 3h-2.25v-.75a.75.75 0 0 0-1.5 0V3h-7.5v-.75a.75.75 0 0 0-1.5 0V3H4.5A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3M6.75 4.5v.75a.75.75 0 0 0 1.5 0V4.5h7.5v.75a.75.75 0 0 0 1.5 0V4.5h2.25v3h-15v-3Zm12.75 15h-15V9h15zm-9-8.25v6a.75.75 0 0 1-1.5 0v-4.787l-.414.208a.75.75 0 0 1-.672-1.342l1.5-.75a.75.75 0 0 1 1.086.671m5.546 2.855L14.25 16.5h1.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.6-1.2l2.698-3.597a.75.75 0 1 0-1.248-.828.75.75 0 1 1-1.298-.75A2.25 2.25 0 0 1 16.5 12.75a2.23 2.23 0 0 1-.454 1.355" /></svg>;
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;