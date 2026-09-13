import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTrendDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.5 12v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h4.19l-7.19-7.19-3.22 3.22a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 1.06-1.06L9 11.69l3.22-3.22a.75.75 0 0 1 1.06 0L21 16.19V12a.75.75 0 0 1 1.5 0" /></svg>;
const ForwardRef = forwardRef(SvgTrendDown);
export default ForwardRef;