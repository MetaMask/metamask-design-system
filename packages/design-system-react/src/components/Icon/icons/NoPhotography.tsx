import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNoPhotography = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M5.055 3.246a.75.75 0 1 0-1.11 1.008l.905.996H4.5A2.25 2.25 0 0 0 2.25 7.5V18a2.25 2.25 0 0 0 2.25 2.25h13.987l.458.504a.75.75 0 1 0 1.11-1.008Zm4.843 7.557 3.469 3.814A2.6 2.6 0 0 1 12 15a2.625 2.625 0 0 1-2.102-4.197M4.5 18.75a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75h1.714l2.663 2.93A4.125 4.125 0 0 0 12 16.5a4.14 4.14 0 0 0 2.385-.761l2.737 3.011ZM21.75 7.5v9.938a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 1-.623-.334L14.597 4.5h-5.2a.75.75 0 0 1-1.21-.883l.188-.281A.75.75 0 0 1 9 3h6a.75.75 0 0 1 .624.334l1.277 1.916H19.5a2.25 2.25 0 0 1 2.25 2.25" /></svg>;
const ForwardRef = forwardRef(SvgNoPhotography);
export default ForwardRef;