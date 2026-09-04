import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 12a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5A.75.75 0 0 1 21 12M3.75 6.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5m16.5 10.5H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5" /></svg>;
const ForwardRef = forwardRef(SvgMenu);
export default ForwardRef;