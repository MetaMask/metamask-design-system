import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHeartStraight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.906 5.344a5.444 5.444 0 0 0-7.68-.01L12 6.474 10.773 5.33a5.438 5.438 0 0 0-7.68 7.7l8.377 8.5a.75.75 0 0 0 1.07 0l8.366-8.5a5.44 5.44 0 0 0 0-7.687m-1.064 6.634L12 19.93 4.153 11.97a3.938 3.938 0 0 1 5.569-5.569l.019.019 1.748 1.627a.75.75 0 0 0 1.022 0l1.748-1.627.02-.019a3.938 3.938 0 1 1 5.564 5.573Z" /></svg>;
const ForwardRef = forwardRef(SvgHeartStraight);
export default ForwardRef;