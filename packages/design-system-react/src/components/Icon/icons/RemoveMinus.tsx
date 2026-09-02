import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgRemoveMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.5 12a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 .75.75m5.25 0A9.75 9.75 0 1 1 12 2.25 9.76 9.76 0 0 1 21.75 12m-1.5 0A8.25 8.25 0 1 0 12 20.25 8.26 8.26 0 0 0 20.25 12" /></svg>;
const ForwardRef = forwardRef(SvgRemoveMinus);
export default ForwardRef;