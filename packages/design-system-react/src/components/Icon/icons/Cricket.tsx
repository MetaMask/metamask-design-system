import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCricket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.81 7.628 17.872 2.69a1.5 1.5 0 0 0-2.122 0L5.69 12.75a1.5 1.5 0 0 0 0 2.122l1.938 1.938-4.406 4.407a.75.75 0 0 0 1.061 1.06l4.407-4.405 1.938 1.938a1.5 1.5 0 0 0 2.122 0L22.81 9.75a1.5 1.5 0 0 0 0-2.122M11.69 18.75l-1.94-1.94 2.78-2.78a.75.75 0 0 0-1.06-1.06l-2.78 2.78-1.94-1.94 3.31-3.31H15v4.94ZM21.75 8.69l-5.25 5.25V9.75a.75.75 0 0 0-.75-.75h-4.19l5.25-5.25 4.94 4.939ZM5.625 8.25A2.625 2.625 0 1 0 3 5.625 2.625 2.625 0 0 0 5.625 8.25m0-3.75A1.125 1.125 0 1 1 4.5 5.625 1.125 1.125 0 0 1 5.625 4.5" /></svg>;
const ForwardRef = forwardRef(SvgCricket);
export default ForwardRef;