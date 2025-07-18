import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDiagram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M3.5 18.5 2 17l7.5-7.5 4 4 7.1-8L22 6.9l-8.5 9.6-4-4z" /></svg>;
const ForwardRef = forwardRef(SvgDiagram);
export default ForwardRef;