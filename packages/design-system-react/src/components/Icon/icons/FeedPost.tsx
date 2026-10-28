import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFeedPost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M16.06 2.249a1.5 1.5 0 0 1 1.061.44l4.19 4.19a1.5 1.5 0 0 1 0 2.121L9.75 20.56a1.49 1.49 0 0 1-1.06.44H4.5A1.5 1.5 0 0 1 3 19.5v-4.19a1.5 1.5 0 0 1 .44-1.06l1.08-1.082a.76.76 0 0 1 1.205.917L4.5 15.31v4.19h4.19l8.25-8.25-4.19-4.19-.665.665a.76.76 0 0 1-.917-1.204L15 2.688a1.5 1.5 0 0 1 1.06-.439M13.81 6 18 10.188l2.25-2.25-4.19-4.188zm-2.31 4a.75.75 0 0 1-.75.75h-2v2a.75.75 0 0 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2v-2a.75.75 0 0 1 1.5 0v2h2a.75.75 0 0 1 .75.75" /></svg>;
const ForwardRef = forwardRef(SvgFeedPost);
export default ForwardRef;