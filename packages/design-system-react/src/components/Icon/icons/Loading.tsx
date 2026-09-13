import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLoading = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" ref={ref} {...props}><path d="M12.75 3v3a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 1.5 0m3.492 5.508a.75.75 0 0 0 .53-.22l2.122-2.121a.75.75 0 0 0-1.06-1.061l-2.122 2.121a.75.75 0 0 0 .53 1.28M21 11.25h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5m-4.227 4.463a.75.75 0 0 0-1.06 1.06l2.12 2.121a.75.75 0 0 0 1.061-1.06ZM12 17.25a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75m-4.773-1.538-2.121 2.121a.75.75 0 0 0 1.06 1.061l2.122-2.121a.75.75 0 0 0-1.06-1.06M6.75 12a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75m-.583-6.894a.75.75 0 0 0-1.061 1.06l2.121 2.122a.75.75 0 0 0 1.06-1.06Z" /></svg>;
const ForwardRef = forwardRef(SvgLoading);
export default ForwardRef;