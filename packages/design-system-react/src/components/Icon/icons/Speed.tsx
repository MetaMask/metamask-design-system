import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSpeed = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M19.412 6.813A10.43 10.43 0 0 0 12 3.75h-.038C6.195 3.77 1.5 8.531 1.5 14.356V16.5A1.5 1.5 0 0 0 3 18h18a1.5 1.5 0 0 0 1.5-1.5v-2.25a10.43 10.43 0 0 0-3.088-7.437M21 16.5h-9.777l5.134-7.06a.75.75 0 0 0-1.214-.882L9.367 16.5H3v-2.144q0-.433.04-.856h2.21a.75.75 0 0 0 0-1.5H3.307c.967-3.643 4.125-6.397 7.943-6.718V7.5a.75.75 0 0 0 1.5 0V5.28A9.01 9.01 0 0 1 20.719 12H18.75a.75.75 0 0 0 0 1.5h2.22q.03.372.03.75Z" /></svg>;
const ForwardRef = forwardRef(SvgSpeed);
export default ForwardRef;