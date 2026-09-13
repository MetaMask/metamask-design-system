import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 10.5v9a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 5.25 9H7.5a.75.75 0 0 1 0 1.5H5.25v9h13.5v-9H16.5a.75.75 0 0 1 0-1.5h2.25a1.5 1.5 0 0 1 1.5 1.5M8.78 6.53l2.47-2.47v8.69a.75.75 0 0 0 1.5 0V4.06l2.47 2.47a.75.75 0 0 0 1.06-1.06l-3.75-3.75a.75.75 0 0 0-1.06 0L7.72 5.47a.75.75 0 0 0 1.06 1.06" /></svg>;
const ForwardRef = forwardRef(SvgExport);
export default ForwardRef;