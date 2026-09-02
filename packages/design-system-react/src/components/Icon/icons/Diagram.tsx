import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDiagram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.75 19.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 1.5 0v8.847l4.756-4.16a.75.75 0 0 1 .944-.035l5.513 4.135 5.543-4.85a.75.75 0 1 1 .988 1.126l-6 5.25a.75.75 0 0 1-.944.035l-5.513-4.133L3.75 15.34v3.41H21a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgDiagram);
export default ForwardRef;