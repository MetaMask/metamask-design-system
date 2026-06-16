import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTrophy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M7 21v-2h4v-3.1q-1.226-.275-2.187-1.037C7.85 14.1 7.7 13.717 7.4 12.95q-1.875-.225-3.137-1.637C3 9.9 3 9.267 3 8V7q0-.825.588-1.412C4.175 5 4.45 5 5 5h2V3h10v2h2q.824 0 1.413.588C21.002 6.176 21 6.45 21 7v1q0 1.9-1.262 3.313C18.476 12.726 17.85 12.8 16.6 12.95q-.45 1.15-1.412 1.913c-.962.763-1.371.854-2.188 1.037V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713.55.762 1.45 1.087m7.125 2.325A2.9 2.9 0 0 0 15 11V5H9v6q0 1.25.875 2.125T12 14c1.25 0 1.542-.292 2.125-.875M17 10.8q.9-.326 1.45-1.087Q19 8.95 19 8V7h-2z" /></svg>;
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;