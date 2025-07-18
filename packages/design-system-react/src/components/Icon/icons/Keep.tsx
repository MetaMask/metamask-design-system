import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgKeep = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="m16 12 2 2v2h-5v6l-1 1-1-1v-6H6v-2l2-2V5H7V3h10v2h-1zm-7.15 2h6.3L14 12.85V5h-4v7.85z" /></svg>;
const ForwardRef = forwardRef(SvgKeep);
export default ForwardRef;