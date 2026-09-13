import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCampaign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M23.25 11.25a4.505 4.505 0 0 0-4.5-4.5h-3.731c-.273-.016-5.027-.35-9.554-4.147A1.5 1.5 0 0 0 3 3.75v15a1.5 1.5 0 0 0 2.465 1.148c3.54-2.97 7.218-3.82 8.785-4.059v2.974a1.5 1.5 0 0 0 .668 1.25l1.03.687a1.5 1.5 0 0 0 2.286-.875l1.104-4.159a4.51 4.51 0 0 0 3.912-4.466M4.5 18.743V3.75c4.013 3.367 8.122 4.219 9.75 4.429v6.139c-1.627.213-5.734 1.064-9.75 4.425m12.281.75v.01l-1.031-.686V15.75h2.025Zm1.969-5.243h-3v-6h3a3 3 0 1 1 0 6" /></svg>;
const ForwardRef = forwardRef(SvgCampaign);
export default ForwardRef;