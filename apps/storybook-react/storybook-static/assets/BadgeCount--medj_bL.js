import{r as u,j as n}from"./iframe-BknD6R0A.js";import{j as e,T as r,c as m,F as h}from"./index-CiWXofBh.js";import{t as y}from"./tw-merge-B12XlTeZ.js";import{T as g}from"./Text-Cd5k1vm4.js";const x={[e.Md]:r.BodyXs,[e.Lg]:r.BodySm},T={[e.Md]:"min-w-4 h-3.5 py-0 px-1",[e.Lg]:"min-w-6 h-5 py-0.5 px-1.5"},s=u.forwardRef(({size:o=e.Md,count:a,max:i=99,textProps:t,className:l="",style:p,...d},c)=>{const f=y("inline-flex items-center justify-center self-start rounded-lg bg-error-default",T[o],l);return n.jsx("div",{ref:c,className:f,style:p,...d,children:n.jsx(g,{variant:x[o],color:m.ErrorInverse,fontWeight:h.Medium,...t,className:`${(t==null?void 0:t.className)||""}`,asChild:!0,children:n.jsx("span",{children:a>i?`${i}+`:`${a}`})})})});s.displayName="BadgeCount";s.__docgenInfo={description:"",methods:[],displayName:"BadgeCount",props:{size:{required:!1,tsType:{name:"BadgeCountSize"},description:`Optional prop to control the size of the BadgeCount
Different sizes map to specific height

@default IconSize.Md`,defaultValue:{value:"BadgeCountSize.Md",computed:!0}},count:{required:!0,tsType:{name:"number"},description:"Required prop to show the count number"},max:{required:!1,tsType:{name:"number"},description:`Optional prop to determine the max the count can go up to.
If count > max, the count will be shown as "max+"

@default 99`,defaultValue:{value:"99",computed:!1}},textProps:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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

@default TextColor.TextDefault`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop for testing purposes"}]}}],raw:"Partial<TextProps>"},description:"Optional props to be passed to the Text component used by count"},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the BadgeCount component.
These classes will be merged with the component's default classes using twMerge.`,defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`}}};export{s as B};
