import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEthereum = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.84 11.537-8.25-10.5a.75.75 0 0 0-1.18 0l-8.25 10.5a.75.75 0 0 0 0 .926l8.25 10.5a.75.75 0 0 0 1.18 0l8.25-10.5a.75.75 0 0 0 0-.926m-8.09-7.869 6.32 8.044-6.32 2.874Zm-1.5 10.918-6.32-2.874 6.32-8.044Zm0 1.647v4.099l-5.01-6.375Zm1.5 0 5.01-2.277-5.01 6.375Z" /></svg>;
const ForwardRef = forwardRef(SvgEthereum);
export default ForwardRef;