import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgData = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M15 10.5h4.5A1.5 1.5 0 0 0 21 9V4.5A1.5 1.5 0 0 0 19.5 3H15a1.5 1.5 0 0 0-1.5 1.5V6H12a2.25 2.25 0 0 0-2.25 2.25v3h-3v-.75A1.5 1.5 0 0 0 5.25 9h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-.75h3v3A2.25 2.25 0 0 0 12 18h1.5v1.5A1.5 1.5 0 0 0 15 21h4.5a1.5 1.5 0 0 0 1.5-1.5V15a1.5 1.5 0 0 0-1.5-1.5H15a1.5 1.5 0 0 0-1.5 1.5v1.5H12a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 12 7.5h1.5V9a1.5 1.5 0 0 0 1.5 1.5m-9.75 3h-3v-3h3zM15 15h4.5v4.5H15Zm0-10.5h4.5V9H15Z" /></svg>;
const ForwardRef = forwardRef(SvgData);
export default ForwardRef;