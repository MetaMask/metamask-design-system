import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgApps = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M6.75 5.625A1.125 1.125 0 1 1 5.625 4.5 1.125 1.125 0 0 1 6.75 5.625M12 4.5a1.125 1.125 0 1 0 1.125 1.125A1.125 1.125 0 0 0 12 4.5m6.375 2.25a1.125 1.125 0 1 0-1.125-1.125 1.125 1.125 0 0 0 1.125 1.125m-12.75 4.125A1.125 1.125 0 1 0 6.75 12a1.125 1.125 0 0 0-1.125-1.125m6.375 0A1.125 1.125 0 1 0 13.125 12 1.125 1.125 0 0 0 12 10.875m6.375 0A1.125 1.125 0 1 0 19.5 12a1.125 1.125 0 0 0-1.125-1.125M5.625 17.25a1.125 1.125 0 1 0 1.125 1.125 1.125 1.125 0 0 0-1.125-1.125m6.375 0a1.125 1.125 0 1 0 1.125 1.125A1.125 1.125 0 0 0 12 17.25m6.375 0a1.125 1.125 0 1 0 1.125 1.125 1.125 1.125 0 0 0-1.125-1.125" /></svg>;
const ForwardRef = forwardRef(SvgApps);
export default ForwardRef;