import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBridge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.75 15h-3V9.5a6.74 6.74 0 0 0 2.719 2.009.75.75 0 0 0 .562-1.39A5.23 5.23 0 0 1 18.75 5.25a.75.75 0 0 0-1.5 0 5.25 5.25 0 0 1-10.5 0 .75.75 0 0 0-1.5 0 5.23 5.23 0 0 1-3.281 4.868.75.75 0 0 0 .562 1.39A6.74 6.74 0 0 0 5.25 9.502V15h-3a.75.75 0 0 0 0 1.5h3v2.25a.75.75 0 0 0 1.5 0V16.5h10.5v2.25a.75.75 0 0 0 1.5 0V16.5h3a.75.75 0 0 0 0-1.5m-8.25-3.169V15h-3v-3.169a6.75 6.75 0 0 0 3 0M6.75 9.488A6.8 6.8 0 0 0 9 11.294V15H6.75ZM15 15v-3.705a6.8 6.8 0 0 0 2.25-1.807V15Z" /></svg>;
const ForwardRef = forwardRef(SvgBridge);
export default ForwardRef;