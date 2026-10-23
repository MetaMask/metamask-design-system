import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><rect width={6.75} height={18} x={3.75} y={3} rx={3.375} /><rect width={6.75} height={18} x={13.5} y={3} rx={3.375} /></svg>;
const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;