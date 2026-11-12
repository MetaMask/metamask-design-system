import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M18.75 3H15a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 15 21h3.75a1.5 1.5 0 0 0 1.5-1.5v-15a1.5 1.5 0 0 0-1.5-1.5m0 16.5H15v-15h3.75ZM9 3H5.25a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5H9a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 9 3m0 16.5H5.25v-15H9Z" /></svg>;
const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;