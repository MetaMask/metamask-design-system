import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.5 15a3.74 3.74 0 0 0-2.683 1.133l-4.322-2.777a3.73 3.73 0 0 0 0-2.712l4.322-2.777a3.75 3.75 0 1 0-.812-1.261L8.683 9.383a3.75 3.75 0 1 0 0 5.234l4.322 2.777A3.75 3.75 0 1 0 16.5 15m0-12a2.25 2.25 0 1 1-2.25 2.25A2.25 2.25 0 0 1 16.5 3M6 14.25A2.25 2.25 0 1 1 8.25 12 2.25 2.25 0 0 1 6 14.25M16.5 21a2.25 2.25 0 1 1 2.25-2.25A2.25 2.25 0 0 1 16.5 21" /></svg>;
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;