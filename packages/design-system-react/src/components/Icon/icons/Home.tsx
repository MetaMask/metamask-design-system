import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m20.56 10.189-7.5-7.5a1.5 1.5 0 0 0-2.12 0l-7.5 7.5A1.5 1.5 0 0 0 3 11.25v9a.75.75 0 0 0 .75.75h6a.75.75 0 0 0 .75-.75V15h3v5.25a.75.75 0 0 0 .75.75h6a.75.75 0 0 0 .75-.75v-9a1.5 1.5 0 0 0-.44-1.061M19.5 19.5H15v-5.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v5.25H4.5v-8.25l7.5-7.5 7.5 7.5Z" /></svg>;
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;