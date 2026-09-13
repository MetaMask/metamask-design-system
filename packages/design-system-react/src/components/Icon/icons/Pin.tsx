import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 15.75h-.87L17.393 4.5H18A.75.75 0 0 0 18 3H6a.75.75 0 0 0 0 1.5h.606L4.62 15.75H3.75a.75.75 0 0 0 0 1.5h7.5v5.25a.75.75 0 0 0 1.5 0v-5.25h7.5a.75.75 0 0 0 0-1.5M8.13 4.5h7.74l1.986 11.25H6.144Z" /></svg>;
const ForwardRef = forwardRef(SvgPin);
export default ForwardRef;