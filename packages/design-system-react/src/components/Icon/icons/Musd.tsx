import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMusd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M12.766 7.917h2.923v1.5h-5.582l-.473.457v1.007l.447.384h4.437l.218.218.91.905.221.22v2.102l-1.344 1.374h-1.757v1.438h-1.5v-1.438H8.342v-1.5h5.55l.475-.486v-.867l-.47-.466h-4.37l-.21-.181-1.183-1.013V9.236L9.5 7.917h1.765v-1.44h1.5z" /><path fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgMusd);
export default ForwardRef;