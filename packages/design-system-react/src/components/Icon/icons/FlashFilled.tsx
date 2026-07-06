import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlashFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M10 21.886v-8H7v-12h10l-2 7h4z" /></svg>;
const ForwardRef = forwardRef(SvgFlashFilled);
export default ForwardRef;