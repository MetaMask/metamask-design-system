import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M13.125 19.125A1.125 1.125 0 1 1 12 18a1.125 1.125 0 0 1 1.125 1.125m9.101-10.969a16.125 16.125 0 0 0-20.452 0 .75.75 0 0 0 .952 1.16 14.625 14.625 0 0 1 18.548 0 .75.75 0 0 0 .952-1.16M19.22 11.51a11.625 11.625 0 0 0-14.432 0 .75.75 0 0 0 .932 1.175 10.125 10.125 0 0 1 12.568 0 .75.75 0 0 0 1.054-.122.75.75 0 0 0-.122-1.053m-3.025 3.352a7.13 7.13 0 0 0-8.383 0 .75.75 0 0 0 .883 1.213 5.625 5.625 0 0 1 6.617 0 .75.75 0 1 0 .883-1.213" /></svg>;
const ForwardRef = forwardRef(SvgWifi);
export default ForwardRef;