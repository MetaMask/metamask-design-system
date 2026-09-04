import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHardware = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.5 14.25h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v.75H8.25v-3H9A1.5 1.5 0 0 0 10.5 6V3A1.5 1.5 0 0 0 9 1.5H6A1.5 1.5 0 0 0 4.5 3v3A1.5 1.5 0 0 0 6 7.5h.75V18A2.25 2.25 0 0 0 9 20.25h6V21a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 21 21v-3a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 15 18v.75H9a.75.75 0 0 1-.75-.75v-6H15v.75a1.5 1.5 0 0 0 1.5 1.5M6 3h3v3H6Zm10.5 15h3v3h-3Zm0-8.25h3v3h-3Z" /></svg>;
const ForwardRef = forwardRef(SvgHardware);
export default ForwardRef;