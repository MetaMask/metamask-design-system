import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M19.5 3.75h-15A2.25 2.25 0 0 0 2.25 6v10.5a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25m.75 12.75a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75Zm-4.5 4.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgMonitor);
export default ForwardRef;