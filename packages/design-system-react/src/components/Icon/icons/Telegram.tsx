import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M21.458 2.455a.84.84 0 0 0-.86-.147L1.6 9.743a1.333 1.333 0 0 0 .228 2.551l4.923.967v5.489a1.49 1.49 0 0 0 .938 1.39 1.49 1.49 0 0 0 1.641-.35l2.374-2.461 3.766 3.296a1.5 1.5 0 0 0 .985.375 1.5 1.5 0 0 0 .469-.074 1.49 1.49 0 0 0 1-1.09L21.728 3.28a.84.84 0 0 0-.27-.826M15.726 5.83l-8.4 6.015-4.65-.912ZM8.25 18.75v-4.451l2.324 2.038Zm8.206.75-7.751-6.797L19.86 4.707Z" /></svg>;
const ForwardRef = forwardRef(SvgTelegram);
export default ForwardRef;