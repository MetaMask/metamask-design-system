import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSecuritySlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M5.055 3.246a.75.75 0 0 0-1.28.692A1.5 1.5 0 0 0 3 5.25v5.25c0 4.943 2.393 7.938 4.4 9.58 2.162 1.768 4.312 2.37 4.406 2.394a.75.75 0 0 0 .394 0c.127-.035 2.931-.823 5.352-3.255l1.396 1.535a.75.75 0 1 0 1.11-1.008Zm6.944 17.718A12 12 0 0 1 8.35 18.92C5.796 16.83 4.5 13.997 4.5 10.5V5.25h.348l11.69 12.858A12.1 12.1 0 0 1 12 20.964ZM21 5.25v5.25c0 1.93-.365 3.713-1.084 5.305a.75.75 0 1 1-1.367-.617c.631-1.396.951-2.973.951-4.688V5.25H9.236a.75.75 0 1 1 0-1.5H19.5a1.5 1.5 0 0 1 1.5 1.5" /></svg>;
const ForwardRef = forwardRef(SvgSecuritySlash);
export default ForwardRef;