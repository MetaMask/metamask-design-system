import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCandlestick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path fillRule="evenodd" d="M5.25 5.25H9a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5m0 1.5H9v10.5H5.25Zm1.125-3a.75.75 0 0 1 1.5 0v1.5h-1.5Zm0 15h1.5v1.5a.75.75 0 0 1-1.5 0ZM15 9.375h3.75a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5m0 1.5h3.75v3H15Zm1.125-7.125a.75.75 0 0 1 1.5 0v5.625h-1.5Zm0 11.625h1.5v4.875a.75.75 0 0 1-1.5 0Z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCandlestick);
export default ForwardRef;