import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgForest = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.593 17.54 17.28 12h2.22a.75.75 0 0 0 .594-1.207l-7.5-9.75a.75.75 0 0 0-1.188 0l-7.5 9.75A.75.75 0 0 0 4.5 12h2.216l-4.312 5.54A.75.75 0 0 0 3 18.75h8.25v3.75a.75.75 0 0 0 1.5 0v-3.75H21a.75.75 0 0 0 .593-1.21m-17.06-.29 4.313-5.54a.75.75 0 0 0-.596-1.21H6.023L12 2.73l5.977 7.77H15.75a.75.75 0 0 0-.592 1.21l4.308 5.54Z" /></svg>;
const ForwardRef = forwardRef(SvgForest);
export default ForwardRef;