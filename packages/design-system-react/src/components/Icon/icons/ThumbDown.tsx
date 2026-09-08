import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgThumbDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="m22.483 14.719-1.125-9a2.25 2.25 0 0 0-2.233-1.969H3a1.5 1.5 0 0 0-1.5 1.5v8.25A1.5 1.5 0 0 0 3 15h4.037l3.542 7.086a.75.75 0 0 0 .671.414A3.75 3.75 0 0 0 15 18.75v-1.5h5.25a2.25 2.25 0 0 0 2.233-2.531M6.75 13.5H3V5.25h3.75Zm14.063 1.996a.74.74 0 0 1-.563.254h-6a.75.75 0 0 0-.75.75v2.25a2.25 2.25 0 0 1-1.808 2.207L8.25 14.073V5.25h10.875a.75.75 0 0 1 .744.656l1.125 9a.74.74 0 0 1-.181.59" /></svg>;
const ForwardRef = forwardRef(SvgThumbDown);
export default ForwardRef;