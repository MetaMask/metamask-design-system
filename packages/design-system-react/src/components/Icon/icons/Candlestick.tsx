import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCandlestick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><g fill="#000"><path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2zM19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z" /></g></svg>;
const ForwardRef = forwardRef(SvgCandlestick);
export default ForwardRef;