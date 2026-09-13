import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPlug = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.28 6.22a.75.75 0 0 0-1.06 0L18 9.44 14.56 6l3.22-3.22a.75.75 0 1 0-1.06-1.06L13.5 4.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l.595.595-4.97 4.969a3.75 3.75 0 0 0 0 5.303L7.07 15.87l-4.6 4.6a.75.75 0 0 0 1.062 1.06l4.602-4.602 1.473 1.473a3.75 3.75 0 0 0 5.303 0l4.969-4.968.594.595a.75.75 0 0 0 1.061-1.061L19.06 10.5l3.22-3.22a.75.75 0 0 0 0-1.06M13.85 17.343a2.25 2.25 0 0 1-3.183 0l-4.01-4.01a2.25 2.25 0 0 1 0-3.183l4.969-4.969 7.19 7.193Z" /></svg>;
const ForwardRef = forwardRef(SvgPlug);
export default ForwardRef;