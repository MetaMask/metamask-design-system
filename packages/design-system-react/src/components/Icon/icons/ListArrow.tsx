import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgListArrow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="m6 20-4-4 1.4-1.4L5 16.15V5h2v11.15l1.6-1.55L10 16zm6-1v-2h10v2zm0-6v-2h10v2zm0-6V5h10v2z" /></svg>;
const ForwardRef = forwardRef(SvgListArrow);
export default ForwardRef;