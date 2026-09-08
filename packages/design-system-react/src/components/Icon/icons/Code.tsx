import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M6.48 8.827 2.672 12l3.808 3.173a.75.75 0 1 1-.96 1.153l-4.5-3.75a.75.75 0 0 1 0-1.153l4.5-3.75a.75.75 0 0 1 .96 1.154m16.5 2.596-4.5-3.75a.75.75 0 1 0-.96 1.154L21.328 12l-3.808 3.173a.75.75 0 1 0 .96 1.153l4.5-3.75a.75.75 0 0 0 0-1.153m-7.724-8.378a.75.75 0 0 0-.961.45l-6 16.5a.75.75 0 0 0 .45.96A.8.8 0 0 0 9 21a.75.75 0 0 0 .705-.494l6-16.5a.75.75 0 0 0-.45-.961" /></svg>;
const ForwardRef = forwardRef(SvgCode);
export default ForwardRef;