import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgListArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 12a.75.75 0 0 1-.75.75H10.5a.75.75 0 0 1 0-1.5h9.75A.75.75 0 0 1 21 12M10.5 6.75h9.75a.75.75 0 0 0 0-1.5H10.5a.75.75 0 0 0 0 1.5m9.75 10.5H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5M3.22 13.28a.75.75 0 0 0 1.06 0l3.75-3.75a.75.75 0 0 0 0-1.06L4.28 4.72a.75.75 0 0 0-1.06 1.06L6.44 9l-3.22 3.22a.75.75 0 0 0 0 1.06" /></svg>;
const ForwardRef = forwardRef(SvgListArrow);
export default ForwardRef;