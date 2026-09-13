import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrow2Down = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m19.28 14.03-6.75 6.75a.75.75 0 0 1-1.06 0l-6.75-6.75a.75.75 0 0 1 1.06-1.06l5.47 5.47V3.75a.75.75 0 0 1 1.5 0v14.69l5.47-5.47a.75.75 0 0 1 1.06 1.06" /></svg>;
const ForwardRef = forwardRef(SvgArrow2Down);
export default ForwardRef;