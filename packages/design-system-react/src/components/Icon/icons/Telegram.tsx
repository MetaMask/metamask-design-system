import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M20.71 3.655s1.942-.758 1.78 1.082c-.053.757-.54 3.408-.917 6.276l-1.295 8.495s-.108 1.244-1.08 1.46c-.97.217-2.428-.757-2.698-.973-.215-.162-4.047-2.597-5.396-3.788-.378-.324-.81-.974.054-1.731l5.666-5.41c.648-.65 1.295-2.165-1.403-.325l-7.554 5.14s-.864.54-2.483.054l-3.507-1.082s-1.295-.812.917-1.624C8.19 8.686 14.828 6.09 20.71 3.654" /></svg>;
const ForwardRef = forwardRef(SvgTelegram);
export default ForwardRef;