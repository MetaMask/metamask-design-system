import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M13.125 12A1.125 1.125 0 1 1 12 10.875 1.125 1.125 0 0 1 13.125 12m5.25-1.125A1.125 1.125 0 1 0 19.5 12a1.125 1.125 0 0 0-1.125-1.125m-12.75 0A1.125 1.125 0 1 0 6.75 12a1.125 1.125 0 0 0-1.125-1.125" /></svg>;
const ForwardRef = forwardRef(SvgMoreHorizontal);
export default ForwardRef;