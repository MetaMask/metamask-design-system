import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTrendUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.5 5.25v6a.75.75 0 0 1-1.5 0V7.06l-7.72 7.72a.75.75 0 0 1-1.06 0L9 11.56l-6.22 6.22a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l3.22 3.22L19.94 6h-4.19a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgTrendUp);
export default ForwardRef;