import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrow2Left = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 12a.75.75 0 0 1-.75.75H5.56l5.47 5.47a.75.75 0 0 1-1.06 1.06l-6.75-6.75a.75.75 0 0 1 0-1.06l6.75-6.75a.75.75 0 0 1 1.06 1.06l-5.47 5.47h14.69A.75.75 0 0 1 21 12" /></svg>;
const ForwardRef = forwardRef(SvgArrow2Left);
export default ForwardRef;