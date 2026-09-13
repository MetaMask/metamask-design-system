import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCopySuccess = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-6.75a.75.75 0 0 1 0-1.5h6.75v-15h-15v9a.75.75 0 0 1-1.5 0v-9A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5m-9.22 9.97a.75.75 0 0 0-1.06 0L6 19.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06" /></svg>;
const ForwardRef = forwardRef(SvgCopySuccess);
export default ForwardRef;