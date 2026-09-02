import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMobile = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.5 1.5h-9a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 7.5 22.5h9a2.25 2.25 0 0 0 2.25-2.25V3.75A2.25 2.25 0 0 0 16.5 1.5M6.75 6h10.5v12H6.75Zm.75-3h9a.75.75 0 0 1 .75.75v.75H6.75v-.75A.75.75 0 0 1 7.5 3m9 18h-9a.75.75 0 0 1-.75-.75v-.75h10.5v.75a.75.75 0 0 1-.75.75" /></svg>;
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;