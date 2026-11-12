import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoreVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M10.5 5.625a1.5 1.5 0 1 1 1.5 1.5 1.5 1.5 0 0 1-1.5-1.5M12 10.5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5m0 6.375a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5" /></svg>;
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;