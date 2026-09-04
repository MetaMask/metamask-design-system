import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShieldLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 8.438a2.625 2.625 0 0 0-.75 5.14v1.61a.75.75 0 0 0 1.5 0v-1.61a2.625 2.625 0 0 0-.75-5.14m0 3.75a1.125 1.125 0 1 1 1.125-1.126A1.125 1.125 0 0 1 12 12.189m9-6.938v5.25c0 4.943-2.392 7.938-4.4 9.58-2.162 1.768-4.312 2.37-4.406 2.394a.75.75 0 0 1-.394 0c-.093-.025-2.241-.626-4.406-2.394C5.393 18.438 3 15.443 3 10.5V5.25a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5m-1.5 0h-15v5.25c0 3.497 1.296 6.33 3.85 8.42A12 12 0 0 0 12 20.964a12.1 12.1 0 0 0 3.695-2.08c2.524-2.088 3.805-4.909 3.805-8.384Z" /></svg>;
const ForwardRef = forwardRef(SvgShieldLock);
export default ForwardRef;