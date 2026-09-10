import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPredictions = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path fillRule="evenodd" d="M7 17.063a8.25 8.25 0 1 1 10 0L17.813 21a.75.75 0 0 1-.75.75H6.938a.75.75 0 0 1-.75-.75ZM18.75 10.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 1 1 13.5 0m-10.5 8.063h7.5v1.218h-7.5Z" /><path d="m14.27 6.896.302 1.222 1.221.302-1.221.3-.301 1.222-.302-1.221-1.222-.301 1.222-.302Zm2.063 2.55.205.832.833.205-.833.206-.205.832-.205-.832-.833-.206.833-.205Z" /></svg>;
const ForwardRef = forwardRef(SvgPredictions);
export default ForwardRef;