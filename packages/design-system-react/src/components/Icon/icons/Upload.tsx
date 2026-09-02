import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUpload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 13.5v6a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 19.5v-6a.75.75 0 0 1 1.5 0v5.25h15V13.5a.75.75 0 0 1 1.5 0M8.78 7.28l2.47-2.47v8.69a.75.75 0 0 0 1.5 0V4.81l2.47 2.47a.75.75 0 0 0 1.06-1.06l-3.75-3.75a.75.75 0 0 0-1.06 0L7.72 6.22a.75.75 0 0 0 1.06 1.06" /></svg>;
const ForwardRef = forwardRef(SvgUpload);
export default ForwardRef;