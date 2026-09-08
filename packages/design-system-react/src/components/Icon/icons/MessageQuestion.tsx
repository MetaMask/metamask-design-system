import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMessageQuestion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20.25 3.75H3.75a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h5.665l1.283 2.244a1.5 1.5 0 0 0 2.604 0l1.283-2.244h5.665a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5m0 13.5h-6.1a.75.75 0 0 0-.657.375l-1.5 2.625-1.5-2.625a.75.75 0 0 0-.656-.375H3.75v-12h16.5Z" /><path d="M12.9 15.3a.9.9 0 1 1-.9-.9.9.9 0 0 1 .9.9M12 7.2c-1.654 0-3 1.211-3 2.7v.3a.6.6 0 0 0 1.2 0v-.3c0-.825.808-1.5 1.8-1.5s1.8.675 1.8 1.5-.808 1.5-1.8 1.5a.6.6 0 0 0-.6.6v.6a.6.6 0 0 0 1.2 0v-.054c1.368-.251 2.4-1.343 2.4-2.646 0-1.489-1.345-2.7-3-2.7" /></svg>;
const ForwardRef = forwardRef(SvgMessageQuestion);
export default ForwardRef;