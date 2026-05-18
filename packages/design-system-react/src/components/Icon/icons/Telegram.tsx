import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" ref={ref} {...props}><path d="M20.295 3.813s1.85-.721 1.696 1.03c-.052.722-.514 3.247-.874 5.978l-1.233 8.09s-.103 1.186-1.028 1.392-2.313-.721-2.57-.928c-.205-.154-3.854-2.473-5.14-3.607-.359-.309-.77-.927.052-1.649l5.397-5.153c.616-.618 1.233-2.061-1.337-.309l-7.195 4.896s-.822.515-2.364.051l-3.34-1.03s-1.234-.774.873-1.547c5.14-2.422 11.461-4.895 17.063-7.214" /></svg>;
const ForwardRef = forwardRef(SvgTelegram);
export default ForwardRef;