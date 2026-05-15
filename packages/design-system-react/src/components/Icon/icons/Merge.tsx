import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMerge = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M6.4 21 5 19.6l4.825-4.85q.575-.575.875-1.3t.3-1.525v-5.1L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.825v5.1a3.95 3.95 0 0 0 1.175 2.825L19 19.6 17.6 21 12 15.4z" /></svg>;
const ForwardRef = forwardRef(SvgMerge);
export default ForwardRef;