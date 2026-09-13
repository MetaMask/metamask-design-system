import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 18.75h-.75v-15A.75.75 0 0 0 19.5 3h-5.25a.75.75 0 0 0-.75.75V7.5H9a.75.75 0 0 0-.75.75V12H4.5a.75.75 0 0 0-.75.75v6H3a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5M15 4.5h3.75v14.25H15ZM9.75 9h3.75v9.75H9.75Zm-4.5 4.5h3v5.25h-3Z" /></svg>;
const ForwardRef = forwardRef(SvgChart);
export default ForwardRef;