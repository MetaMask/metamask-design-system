import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSwapVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M11.03 15.97a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V4.5a.75.75 0 0 1 1.5 0v13.19l1.72-1.72a.75.75 0 0 1 1.06 0m9-9-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V19.5a.75.75 0 0 0 1.5 0V6.31l1.72 1.72a.75.75 0 0 0 1.06-1.06" /></svg>;
const ForwardRef = forwardRef(SvgSwapVertical);
export default ForwardRef;