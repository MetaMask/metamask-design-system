import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAppleLogo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M14.935 5.204c.689-.863 1.156-2.022 1.033-3.206-1.009.05-2.24.666-2.952 1.53-.64.74-1.207 1.947-1.059 3.081 1.132.099 2.264-.566 2.978-1.405M15.955 6.83c-1.644-.097-3.042.935-3.828.935s-1.988-.885-3.289-.861c-1.693.025-3.263.983-4.122 2.508-1.767 3.049-.467 7.572 1.252 10.056.834 1.228 1.84 2.581 3.165 2.533 1.252-.05 1.742-.812 3.264-.812 1.52 0 1.963.812 3.288.787 1.374-.025 2.234-1.23 3.068-2.46.957-1.4 1.349-2.752 1.374-2.826-.025-.025-2.65-1.033-2.675-4.057-.025-2.532 2.061-3.737 2.16-3.812-1.178-1.744-3.019-1.94-3.657-1.99" /></svg>;
const ForwardRef = forwardRef(SvgAppleLogo);
export default ForwardRef;