import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMusd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25m0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25m3.75-6.375a2.625 2.625 0 0 1-2.625 2.625h-.375v.75a.75.75 0 0 1-1.5 0v-.75h-1.5a.75.75 0 0 1 0-1.5h3.375a1.125 1.125 0 0 0 0-2.25h-2.25a2.625 2.625 0 0 1 0-5.25h.375v-.75a.75.75 0 0 1 1.5 0v.75h1.5a.75.75 0 0 1 0 1.5h-3.375a1.125 1.125 0 0 0 0 2.25h2.25a2.625 2.625 0 0 1 2.625 2.625" /></svg>;
const ForwardRef = forwardRef(SvgMusd);
export default ForwardRef;