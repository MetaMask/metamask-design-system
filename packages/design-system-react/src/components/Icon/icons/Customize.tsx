import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCustomize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M3.75 8.25h3.094a3 3 0 0 0 5.812 0h7.594a.75.75 0 0 0 0-1.5h-7.594a3 3 0 0 0-5.812 0H3.75a.75.75 0 0 0 0 1.5m6-2.25a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9.75 6m10.5 9.75h-1.594a3 3 0 0 0-5.812 0H3.75a.75.75 0 0 0 0 1.5h9.094a3 3 0 0 0 5.812 0h1.594a.75.75 0 0 0 0-1.5M15.75 18a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5" /></svg>;
const ForwardRef = forwardRef(SvgCustomize);
export default ForwardRef;