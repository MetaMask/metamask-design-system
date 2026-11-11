import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHockey = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21 14.25h-8.728l-8.7-10.236a.75.75 0 0 0-1.144.972L14.954 19.72a1.5 1.5 0 0 0 1.143.529H21a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5m-7.453 1.5H18v3h-1.903Zm7.453 3h-1.5v-3H21Zm-10.483-1.917a.75.75 0 0 0-1.057.085L7.903 18.75H6v-3h1.988a.75.75 0 0 0 0-1.5H3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h4.903a1.5 1.5 0 0 0 1.143-.529l1.557-1.83a.75.75 0 0 0-.086-1.058M3 15.75h1.5v3H3Zm11.053-4.236 6.375-7.5a.75.75 0 0 1 1.144.972l-6.375 7.5a.75.75 0 1 1-1.144-.972" /></svg>;
const ForwardRef = forwardRef(SvgHockey);
export default ForwardRef;