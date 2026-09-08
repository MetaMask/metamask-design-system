import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDanger = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M22.2 17.633 14.002 3.396a2.32 2.32 0 0 0-4.004 0L1.8 17.633a2.2 2.2 0 0 0 0 2.224A2.28 2.28 0 0 0 3.802 21h16.396a2.28 2.28 0 0 0 2-1.143 2.2 2.2 0 0 0 .002-2.224m-1.3 1.473a.8.8 0 0 1-.702.394H3.802a.8.8 0 0 1-.702-.394.71.71 0 0 1 0-.724L11.3 4.146a.82.82 0 0 1 1.406 0l8.198 14.238a.71.71 0 0 1-.003.723M11.25 13.5V9.75a.75.75 0 0 1 1.5 0v3.75a.75.75 0 0 1-1.5 0m1.875 3.375A1.125 1.125 0 1 1 12 15.75a1.125 1.125 0 0 1 1.125 1.125" /></svg>;
const ForwardRef = forwardRef(SvgDanger);
export default ForwardRef;