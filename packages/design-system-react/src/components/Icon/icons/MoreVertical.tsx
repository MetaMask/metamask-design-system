import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoreVertical = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M13.125 12A1.125 1.125 0 1 1 12 10.875 1.125 1.125 0 0 1 13.125 12M12 6.75a1.125 1.125 0 1 0-1.125-1.125A1.125 1.125 0 0 0 12 6.75m0 10.5a1.125 1.125 0 1 0 1.125 1.125A1.125 1.125 0 0 0 12 17.25" /></svg>;
const ForwardRef = forwardRef(SvgMoreVertical);
export default ForwardRef;