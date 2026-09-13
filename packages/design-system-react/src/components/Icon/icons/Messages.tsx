import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMessages = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 7.5h-3v-3a1.5 1.5 0 0 0-1.5-1.5h-12a1.5 1.5 0 0 0-1.5 1.5v12a.75.75 0 0 0 1.219.583l3.281-2.645v2.812a1.5 1.5 0 0 0 1.5 1.5h8.774l3.507 2.833a.75.75 0 0 0 .469.167.75.75 0 0 0 .75-.75V9a1.5 1.5 0 0 0-1.5-1.5M6.24 12.917 3.75 14.93V4.5h12v8.25H6.71a.75.75 0 0 0-.47.167m14.01 6.513-2.49-2.013a.75.75 0 0 0-.468-.167H8.25v-3h7.5a1.5 1.5 0 0 0 1.5-1.5V9h3Z" /></svg>;
const ForwardRef = forwardRef(SvgMessages);
export default ForwardRef;