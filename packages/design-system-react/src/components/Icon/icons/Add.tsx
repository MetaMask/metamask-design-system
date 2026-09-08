import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 12a.75.75 0 0 1-.75.75h-7.5v7.5a.75.75 0 0 1-1.5 0v-7.5h-7.5a.75.75 0 0 1 0-1.5h7.5v-7.5a.75.75 0 0 1 1.5 0v7.5h7.5A.75.75 0 0 1 21 12" /></svg>;
const ForwardRef = forwardRef(SvgAdd);
export default ForwardRef;