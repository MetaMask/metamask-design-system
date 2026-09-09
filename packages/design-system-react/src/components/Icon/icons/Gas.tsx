import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGas = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.594 6.53 20.78 4.72a.75.75 0 0 0-1.062 1.06l1.812 1.814a.75.75 0 0 1 .219.528v7.628a.75.75 0 0 1-1.5 0V12A2.25 2.25 0 0 0 18 9.75h-1.5v-4.5A2.25 2.25 0 0 0 14.25 3h-7.5A2.25 2.25 0 0 0 4.5 5.25V19.5H3A.75.75 0 0 0 3 21h15a.75.75 0 0 0 0-1.5h-1.5v-8.25H18a.75.75 0 0 1 .75.75v3.75a2.25 2.25 0 0 0 4.5 0V8.122a2.24 2.24 0 0 0-.656-1.591M6 19.5V5.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75V19.5Zm7.5-9a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h4.5a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgGas);
export default ForwardRef;