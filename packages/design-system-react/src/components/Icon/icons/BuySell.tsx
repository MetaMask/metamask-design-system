import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBuySell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m19.28 5.78-13.5 13.5a.75.75 0 0 1-1.06-1.06l13.5-13.5a.75.75 0 0 1 1.06 1.06M6 10.5a.75.75 0 0 0 1.5 0v-3h3a.75.75 0 0 0 0-1.5h-3V3A.75.75 0 0 0 6 3v3H3a.75.75 0 0 0 0 1.5h3Zm15 6h-7.5a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 0-1.5" /></svg>;
const ForwardRef = forwardRef(SvgBuySell);
export default ForwardRef;