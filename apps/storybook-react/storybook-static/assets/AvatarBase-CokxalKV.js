import{r as T,j as n}from"./iframe-BknD6R0A.js";import{T as y,S}from"./Text-Cd5k1vm4.js";import{g as e,A as r,T as g,F as A,c as w}from"./index-CiWXofBh.js";import{t as v}from"./tw-merge-B12XlTeZ.js";const O={[e.Xs]:"h-4 w-4",[e.Sm]:"h-6 w-6",[e.Md]:"h-8 w-8",[e.Lg]:"h-10 w-10",[e.Xl]:"h-12 w-12"},b={[e.Xs]:"h-[18px] w-[18px]",[e.Sm]:"h-[26px] w-[26px]",[e.Md]:"h-[34px] w-[34px]",[e.Lg]:"h-[44px] w-[44px]",[e.Xl]:"h-[52px] w-[52px]"},M={[e.Xs]:"rounded-sm",[e.Sm]:"rounded-md",[e.Md]:"rounded-lg",[e.Lg]:"rounded-[10px]",[e.Xl]:"rounded-xl"},R={[e.Xs]:"border-background-default border",[e.Sm]:"border-background-default border",[e.Md]:"border-background-default border",[e.Lg]:"border-background-default border-2",[e.Xl]:"border-background-default border-2"},i=T.forwardRef(({children:s,fallbackText:a,fallbackTextProps:l,className:p,size:t=e.Md,shape:d=r.Circle,asChild:c,style:f,hasBorder:o=!1,...h},u)=>{const m=c?S:"div",x=v("inline-flex items-center justify-center overflow-hidden bg-section",d===r.Circle?"rounded-full":M[t],o?b[t]:O[t],o&&R[t],p);return n.jsx(m,{ref:u,className:x,style:f,...h,children:a?n.jsx(y,{variant:g.BodySm,fontWeight:A.Medium,color:w.TextMuted,asChild:!0,className:"uppercase",...l,children:n.jsx("span",{children:a})}):s})});i.displayName="AvatarBase";i.__docgenInfo={description:"",methods:[],displayName:"AvatarBase",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Required prop for the content to be rendered within the AvatarBase
Not required if fallbackText is provided`},fallbackText:{required:!1,tsType:{name:"string"},description:"Optional text to display when no children are provided"},fallbackTextProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:"React.HTMLAttributes<HTMLSpanElement> & TextProps",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"signature",type:"object",raw:`{
  /**
   * Optional prop for inline styles
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to change the font size of the component. The Text component uses responsive font sizes.
   * Different variants map to specific HTML elements by default.
   *
   * @default TextVariant.BodyMd
   */
  variant?: TextVariant;
  /**
   * The text content or elements to be rendered within the component.
   */
  children: React.ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the Text component.
   */
  className?: string;
  /**
   * Optional prop to control the font weight of the text.
   * Regular: 400
   * Medium: 500
   * Bold: 700
   */
  fontWeight?: FontWeight;
  /**
   * Optional prop to adjust the font family.
   * Default: CentraNo1
   * Accent: MMSans
   * Hero: MMPoly
   */
  fontFamily?: FontFamily;
  /**
   * Optional prop to control the font style of the text.
   * Options: Normal, Italic
   */
  fontStyle?: FontStyle;
  /**
   * Optional prop to apply text transformation to the content.
   * Options: Uppercase, Lowercase, Capitalize, Normal
   */
  textTransform?: TextTransform;
  /**
   * Optional prop to control the text alignment within its container.
   * Options: Left, Center, Right, Justify
   */
  textAlign?: TextAlign;
  /**
   * Optional prop to determine how text should wrap when it reaches the edge of its container.
   * Options: BreakWord, Anywhere, Normal
   */
  overflowWrap?: OverflowWrap;
  /**
   * Optional prop that when true, adds an ellipsis (...) when text overflows its container.
   *
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a default DOM element.
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional prop that sets the color of the text using predefined theme colors.
   *
   * @default TextColor.TextDefault
   */
  color?: TextColor;
  /**
   * Optional prop for testing purposes
   */
  'data-testid'?: string;
}`,signature:{properties:[{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1},description:"Optional prop for inline styles"},{key:"variant",value:{name:"TextVariant",required:!1},description:`Optional prop to change the font size of the component. The Text component uses responsive font sizes.
Different variants map to specific HTML elements by default.

@default TextVariant.BodyMd`},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"The text content or elements to be rendered within the component."},{key:"className",value:{name:"string",required:!1},description:"Optional prop for additional CSS classes to be applied to the Text component."},{key:"fontWeight",value:{name:"FontWeight",required:!1},description:`Optional prop to control the font weight of the text.
Regular: 400
Medium: 500
Bold: 700`},{key:"fontFamily",value:{name:"FontFamily",required:!1},description:`Optional prop to adjust the font family.
Default: CentraNo1
Accent: MMSans
Hero: MMPoly`},{key:"fontStyle",value:{name:"FontStyle",required:!1},description:`Optional prop to control the font style of the text.
Options: Normal, Italic`},{key:"textTransform",value:{name:"TextTransform",required:!1},description:`Optional prop to apply text transformation to the content.
Options: Uppercase, Lowercase, Capitalize, Normal`},{key:"textAlign",value:{name:"TextAlign",required:!1},description:`Optional prop to control the text alignment within its container.
Options: Left, Center, Right, Justify`},{key:"overflowWrap",value:{name:"OverflowWrap",required:!1},description:`Optional prop to determine how text should wrap when it reaches the edge of its container.
Options: BreakWord, Anywhere, Normal`},{key:"ellipsis",value:{name:"boolean",required:!1},description:`Optional prop that when true, adds an ellipsis (...) when text overflows its container.

@default false`},{key:"asChild",value:{name:"boolean",required:!1},description:`Optional boolean that determines if the component should merge its props onto its immediate child
instead of rendering a default DOM element.

@default false`},{key:"color",value:{name:"TextColor",required:!1},description:`Optional prop that sets the color of the text using predefined theme colors.

@default TextColor.TextDefault`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop for testing purposes"}]}}]}],raw:`Partial<
  React.HTMLAttributes<HTMLSpanElement> & TextProps
>`},description:`Optional props to be passed to the Text component when rendering fallback text
Only used when fallbackText is provided and no children`},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the AvatarBase component.
These classes will be merged with the component's default classes using twMerge.`},size:{required:!1,tsType:{name:"AvatarBaseSize"},description:`Optional prop to control the size of the AvatarBase

@default AvatarBaseSize.Md`,defaultValue:{value:"AvatarBaseSize.Md",computed:!0}},asChild:{required:!1,tsType:{name:"boolean"},description:`Optional boolean that determines if the component should merge its props onto its immediate child
instead of rendering a div element

@default false`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},shape:{required:!1,tsType:{name:"AvatarBaseShape"},description:`Optional prop to control the shape of the AvatarBase

@default AvatarBaseShape.Circle`,defaultValue:{value:"AvatarBaseShape.Circle",computed:!0}},hasBorder:{required:!1,tsType:{name:"boolean"},description:`Optional prop to include the border with the Avatar.
For internal use only

@default false`,defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Optional prop to add a test id to the icon"}}};export{i as A};
