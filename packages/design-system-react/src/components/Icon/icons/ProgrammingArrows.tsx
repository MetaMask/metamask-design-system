import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgProgrammingArrows = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M10.5 14.25a.75.75 0 0 0-.75.75v2.69l-3.53-3.534a.75.75 0 0 1-.22-.528V8.906a3 3 0 1 0-1.5 0v4.723a2.24 2.24 0 0 0 .656 1.594L8.69 18.75H6a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75M3.75 6a1.5 1.5 0 1 1 1.5 1.5A1.5 1.5 0 0 1 3.75 6m15.75 9.094v-4.722a2.24 2.24 0 0 0-.656-1.594L15.31 5.25H18a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0-.75.75V9a.75.75 0 0 0 1.5 0V6.31l3.53 3.534a.75.75 0 0 1 .22.53v4.72a3 3 0 1 0 1.5 0m-.75 4.406a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5" /></svg>;
const ForwardRef = forwardRef(SvgProgrammingArrows);
export default ForwardRef;