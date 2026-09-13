import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSwapHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.03 17.03-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H4.5a.75.75 0 0 1 0-1.5h13.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06m-13.06-6a.75.75 0 0 0 1.06-1.06L6.31 8.25H19.5a.75.75 0 0 0 0-1.5H6.31l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06Z" /></svg>;
const ForwardRef = forwardRef(SvgSwapHorizontal);
export default ForwardRef;