import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFeedPost = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M15 2h2v1h-2zm-1 1h4v1h-4zm-1 1h3v1h-3zm4 0h2v1h-2zm-5 1h3v1h-3zm6 0h2v1h-2zm-7 1h4v1h-4zm8 0h2v1h-2zM7 7h1v1H7zm4 0h5v1h-5zm9 0h2v1h-2zM7 8h1v1H7zm7 0h3v1h-3zm5 0h3v1h-3zM6 9h5v1H6zm9 0h6v1h-6zm-8 1h2v1H7zm9 0h4v1h-4zm-9 1h1v1H7zm9 0h3v1h-3zm-1 1h3v1h-3zM4 13h2v1H4zm10 0h3v1h-3zM3 14h3v1H3zm10 0h3v1h-3zM3 15h2v1H3zm9 0h3v1h-3zm-9 1h2v1H3zm8 0h3v1h-3zm-8 1h2v1H3zm7 0h3v1h-3zm-7 1h2v1H3zm6 0h3v1H9zm-6 1h8v1H3zm0 1h7v1H3z" /></svg>;
const ForwardRef = forwardRef(SvgFeedPost);
export default ForwardRef;