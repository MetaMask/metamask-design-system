import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFeedPost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path fillRule="evenodd" d="M16.06 2.249a1.5 1.5 0 0 1 1.061.44l4.19 4.19a1.5 1.5 0 0 1 0 2.121L9.75 20.56a1.49 1.49 0 0 1-1.06.44H4.5A1.5 1.5 0 0 1 3 19.5v-4.19a1.5 1.5 0 0 1 .44-1.06l1.58-1.582c.338.377.746.69 1.205.917L4.5 15.31v4.19h4.19l8.25-8.25-4.19-4.19-1.165 1.165a4 4 0 0 0-.917-1.204L15 2.688a1.5 1.5 0 0 1 1.06-.439M13.81 6 18 10.188l2.25-2.25-4.19-4.188z" clipRule="evenodd" /><path d="M8 6.875a.376.376 0 0 1 .375.375v2.375h2.375a.376.376 0 1 1 0 .75H8.375v2.375a.375.375 0 1 1-.75 0v-2.375H5.25a.376.376 0 1 1 0-.75h2.375V7.25A.376.376 0 0 1 8 6.875" /></svg>;
const ForwardRef = forwardRef(SvgFeedPost);
export default ForwardRef;