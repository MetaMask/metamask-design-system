import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCandlestickFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 3.75h-7.5v-1.5a.75.75 0 0 0-1.5 0v1.5h-7.5a1.5 1.5 0 0 0-1.5 1.5V16.5a1.5 1.5 0 0 0 1.5 1.5h3.69l-2.026 2.531a.75.75 0 0 0 1.172.938L9.36 18h5.28l2.774 3.469a.75.75 0 1 0 1.172-.938L16.56 18h3.69a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5M9.75 13.5a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 1.5 0Zm3 0a.75.75 0 0 1-1.5 0V9.75a.75.75 0 0 1 1.5 0Zm3 0a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 1.5 0Z" /></svg>;
const ForwardRef = forwardRef(SvgCandlestickFilled);
export default ForwardRef;