import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMerge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M6 20.25v-6a.75.75 0 0 1 .22-.53l5.03-5.03V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v4.63l5.03 5.03a.75.75 0 0 1 .22.53v6a.75.75 0 0 1-1.5 0v-5.69l-4.5-4.5-4.5 4.5v5.69a.75.75 0 0 1-1.5 0" /></svg>;
const ForwardRef = forwardRef(SvgMerge);
export default ForwardRef;