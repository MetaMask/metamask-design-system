import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAttachMoney = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M14.25 11.25h-1.5v-6h.75a3 3 0 0 1 3 3 .75.75 0 0 0 1.5 0 4.505 4.505 0 0 0-4.5-4.5h-.75v-1.5a.75.75 0 0 0-1.5 0v1.5h-.75a4.5 4.5 0 0 0 0 9h.75v6h-1.5a3 3 0 0 1-3-3 .75.75 0 0 0-1.5 0 4.505 4.505 0 0 0 4.5 4.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a4.5 4.5 0 0 0 0-9m-3.75 0a3 3 0 0 1 0-6h.75v6Zm3.75 7.5h-1.5v-6h1.5a3 3 0 0 1 0 6" /></svg>;
const ForwardRef = forwardRef(SvgAttachMoney);
export default ForwardRef;