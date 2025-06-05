import{r as w,j as a}from"./iframe-BknD6R0A.js";import{g as r,T as x,s as n,c as sa,A as z,a as l}from"./index-CiWXofBh.js";import{t as k}from"./tw-merge-B12XlTeZ.js";import{A as ia}from"./AvatarToken-CQK5i-_p.js";import{A as ca}from"./AvatarNetwork-C_C-yCA9.js";import{A as la,S as p}from"./AvatarFavicon.dev-DaRlOe9W.js";import{A as pa}from"./AvatarAccount-DNx8cnc3.js";import{A as da}from"./AvatarBase-CokxalKV.js";import{S as d}from"./AvatarNetwork.dev-eDz_btLn.js";import{S as v}from"./AvatarToken.dev-BHPu2s_a.js";import{useMDXComponents as $}from"./index-DH6Ulk9s.js";import{C as m,e as va}from"./blocks-Du73VAkD.js";import"./metamask-NccMDQ5I.js";import"./Jazzicon-Dzhs54_4.js";import"./index.browser-C7WWooL1.js";import"./Maskicon-DRxatH_7.js";import"./Blockies-T47O4fXB.js";import"./Text-Cd5k1vm4.js";import"./eth-BMsHNo0d.js";import"./index-CmxWr2Xc.js";const ua={[r.Xs]:"ml-[-6px]",[r.Sm]:"ml-[-10px]",[r.Md]:"ml-[-14px]",[r.Lg]:"ml-[-18px]",[r.Xl]:"ml-[-22px]"},ma={[r.Xs]:"mr-[-6px]",[r.Sm]:"mr-[-10px]",[r.Md]:"mr-[-14px]",[r.Lg]:"mr-[-18px]",[r.Xl]:"mr-[-22px]"},Aa={[r.Xs]:x.BodyXs,[r.Sm]:x.BodySm,[r.Md]:x.BodyMd,[r.Lg]:x.HeadingMd,[r.Xl]:x.HeadingMd},u=w.forwardRef(({variant:t,avatarPropsArr:e,size:c=r.Md,max:T=4,isReverse:V=!1,overflowTextProps:K,style:Z,className:Q,...Y},aa)=>{const j=e.length-T,ea=j>0,h=V?ma[c]:ua[c],na=k("inline-flex",V?"flex-row-reverse":"flex-row",Q),ta=k("flex",V?"flex-row-reverse":"flex-row"),ra=k("bg-icon-default",h),oa=w.useCallback(()=>e.slice(0,T).map((s,i)=>{switch(t){case n.Account:return a.jsx(pa,{hasBorder:!0,...s,size:c,className:`${i>0&&h} ${s.className}`,style:{zIndex:i+1,...s.style}},`avatar-${i}`);case n.Favicon:return a.jsx(la,{hasBorder:!0,...s,size:c,className:`${i>0&&h} ${s.className}`,style:{zIndex:i+1,...s.style}},`avatar-${i}`);case n.Network:return a.jsx(ca,{hasBorder:!0,...s,size:c,className:`${i>0&&h} ${s.className}`,style:{zIndex:i+1,...s.style}},`avatar-${i}`);case n.Token:return a.jsx(ia,{hasBorder:!0,...s,size:c,className:`${i>0&&h} ${s.className}`,style:{zIndex:i+1,...s.style}},`avatar-${i}`);default:throw new Error(`Invalid Avatar Variant: ${String(t)}. Expected one of: ${Object.values(n).join(", ")}`)}}),[e,T,c]);return a.jsxs("div",{ref:aa,...Y,style:Z,className:na,children:[a.jsx("div",{className:ta,children:oa()}),ea&&a.jsx(da,{className:ra,style:{zIndex:e.length},hasBorder:!0,fallbackText:`+${j}`,fallbackTextProps:{variant:Aa[c],color:sa.PrimaryInverse},size:c,shape:t===n.Network?z.Square:z.Circle,...K})]})});u.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{size:{required:!1,tsType:{name:"AvatarGroupSize"},description:`Optional enum to select between Avatar Group sizes.

@default AvatarGroupSize.Md`,defaultValue:{value:"AvatarGroupSize.Md",computed:!0}},max:{required:!1,tsType:{name:"number"},description:`Optional enum to select max number of Avatars visible,
before the overflow counter being displayed

@default 4`,defaultValue:{value:"4",computed:!1}},isReverse:{required:!1,tsType:{name:"boolean"},description:"Optional prop to reverse the direction of the AvatarGroup",defaultValue:{value:"false",computed:!1}},overflowTextProps:{required:!1,tsType:{name:"intersection",raw:`ComponentProps<'div'> & {
  /**
   * Required prop for the content to be rendered within the AvatarBase
   * Not required if fallbackText is provided
   */
  children?: React.ReactNode;
  /**
   * Optional text to display when no children are provided
   */
  fallbackText?: string;
  /**
   * Optional props to be passed to the Text component when rendering fallback text
   * Only used when fallbackText is provided and no children
   */
  fallbackTextProps?: Partial<
    React.HTMLAttributes<HTMLSpanElement> & TextProps
  >;
  /**
   * Optional prop for additional CSS classes to be applied to the AvatarBase component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional prop to control the size of the AvatarBase
   *
   * @default AvatarBaseSize.Md
   */
  size?: AvatarBaseSize;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a div element
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to control the shape of the AvatarBase
   *
   * @default AvatarBaseShape.Circle
   */
  shape?: AvatarBaseShape;
  /**
   * Optional prop to include the border with the Avatar.
   * For internal use only
   *
   * @default false
   */
  hasBorder?: boolean;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
}`,elements:[{name:"ComponentProps",elements:[{name:"literal",value:"'div'"}],raw:"ComponentProps<'div'>"},{name:"signature",type:"object",raw:`{
  /**
   * Required prop for the content to be rendered within the AvatarBase
   * Not required if fallbackText is provided
   */
  children?: React.ReactNode;
  /**
   * Optional text to display when no children are provided
   */
  fallbackText?: string;
  /**
   * Optional props to be passed to the Text component when rendering fallback text
   * Only used when fallbackText is provided and no children
   */
  fallbackTextProps?: Partial<
    React.HTMLAttributes<HTMLSpanElement> & TextProps
  >;
  /**
   * Optional prop for additional CSS classes to be applied to the AvatarBase component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional prop to control the size of the AvatarBase
   *
   * @default AvatarBaseSize.Md
   */
  size?: AvatarBaseSize;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a div element
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to control the shape of the AvatarBase
   *
   * @default AvatarBaseShape.Circle
   */
  shape?: AvatarBaseShape;
  /**
   * Optional prop to include the border with the Avatar.
   * For internal use only
   *
   * @default false
   */
  hasBorder?: boolean;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1},description:`Required prop for the content to be rendered within the AvatarBase
Not required if fallbackText is provided`},{key:"fallbackText",value:{name:"string",required:!1},description:"Optional text to display when no children are provided"},{key:"fallbackTextProps",value:{name:"Partial",elements:[{name:"intersection",raw:"React.HTMLAttributes<HTMLSpanElement> & TextProps",elements:[{name:"ReactHTMLAttributes",raw:"React.HTMLAttributes<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"signature",type:"object",raw:`{
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
>`,required:!1},description:`Optional props to be passed to the Text component when rendering fallback text
Only used when fallbackText is provided and no children`},{key:"className",value:{name:"string",required:!1},description:`Optional prop for additional CSS classes to be applied to the AvatarBase component.
These classes will be merged with the component's default classes using twMerge.`},{key:"size",value:{name:"AvatarBaseSize",required:!1},description:`Optional prop to control the size of the AvatarBase

@default AvatarBaseSize.Md`},{key:"asChild",value:{name:"boolean",required:!1},description:`Optional boolean that determines if the component should merge its props onto its immediate child
instead of rendering a div element

@default false`},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"shape",value:{name:"AvatarBaseShape",required:!1},description:`Optional prop to control the shape of the AvatarBase

@default AvatarBaseShape.Circle`},{key:"hasBorder",value:{name:"boolean",required:!1},description:`Optional prop to include the border with the Avatar.
For internal use only

@default false`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]},description:"Optional prop to pass additional AvatarBase props to the overflow Text element"},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the AvatarGroup component.
These classes will be merged with the component's default classes using twMerge.`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`}}};const ha=[{variant:l.Jazzicon,address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"},{variant:l.Blockies,address:"0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB"},{variant:l.Jazzicon,address:"0x360507dfEC4Bf0c03495f91154A78C672599F308"},{variant:l.Jazzicon,address:"0x50cA820Ff810F7687E7d0aDb23A830e3ac6032C3"},{variant:l.Jazzicon,address:"0x840C9Eb73729E626673714D6E4dA8afc8Ccc90d3"},{variant:l.Blockies,address:"0xCA0361BE89B7d47a6233d1875F0727ddeAB23377"},{variant:l.Blockies,address:"0xD78CBcA88eCd65c6128511e46a518CDc6c66fC74"}],b=[{name:"Adobe",src:p[0]},{name:"Github",src:p[1]},{name:"Google",src:p[2]},{name:"Metamask",src:p[3]},{name:"Reddit",src:p[4]},{name:"Slack",src:p[5]},{name:"Zoom",src:p[6]}],xa=[{name:"Arbitrum",src:d[0]},{name:"Avalanche",src:d[1]},{name:"BNB",src:d[2]},{name:"Ethereum",src:d[3]},{name:"Linea",src:d[4]},{name:"Optimism",src:d[5]},{name:"Polygon",src:d[6]}],fa=[{name:"BTC",src:v[0]},{name:"ETH",src:v[1]},{name:"FLOKI",src:v[2]},{name:"DOT",src:v[3]},{name:"MEW",src:v[4]},{name:"SHIB",src:v[5]},{name:"USDC",src:v[6]}];function O(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...$(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"avatargroup",children:"AvatarGroup"}),`
`,a.jsxs(e.p,{children:[a.jsx(e.code,{children:"AvatarGroup"})," is a stacked avatars to represent a group of avatars."]}),`
`,a.jsx(m,{of:A}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`import {
  AvatarGroup,
  AvatarGroupVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Favicon}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/favicon1.png' },
    },
    {
      src: { uri: 'https://example.com/favicon2.png' },
    },
    {
      src: { uri: 'https://example.com/favicon3.png' },
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Network}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/net1.png' },
    },
    {
      src: { uri: 'https://example.com/net2.png' },
    },
    {
      src: { uri: 'https://example.com/net3.png' },
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Token}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/token1.png' },
    },
    {
      src: { uri: 'https://example.com/token2.png' },
    },
    {
      src: { uri: 'https://example.com/token3.png' },
    },
  ]}
/>;
`})}),`
`,a.jsx(e.h2,{id:"props",children:"Props"}),`
`,a.jsx(e.h3,{id:"variant-required",children:"Variant (required)"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"variant"})," prop is required and determines the type of avatars used within the group."]}),`
`,a.jsx(m,{of:f}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`import {
  AvatarGroup,
  AvatarGroupVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Favicon}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/favicon1.png' },
    },
    {
      src: { uri: 'https://example.com/favicon2.png' },
    },
    {
      src: { uri: 'https://example.com/favicon3.png' },
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Network}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/net1.png' },
    },
    {
      src: { uri: 'https://example.com/net2.png' },
    },
    {
      src: { uri: 'https://example.com/net3.png' },
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Token}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/token1.png' },
    },
    {
      src: { uri: 'https://example.com/token2.png' },
    },
    {
      src: { uri: 'https://example.com/token3.png' },
    },
  ]}
/>;
`})}),`
`,a.jsx(e.h3,{id:"avatar-props-arr-required",children:"Avatar Props Arr (required)"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"avatarPropsArr"})," prop is an array of props for each avatar within the group."]}),`
`,a.jsx(m,{of:g}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`import {
  AvatarGroup,
  AvatarGroupVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Favicon}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/favicon1.png' },
    },
    {
      src: { uri: 'https://example.com/favicon2.png' },
    },
    {
      src: { uri: 'https://example.com/favicon3.png' },
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Network}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/net1.png' },
    },
    {
      src: { uri: 'https://example.com/net2.png' },
    },
    {
      src: { uri: 'https://example.com/net3.png' },
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Token}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/token1.png' },
    },
    {
      src: { uri: 'https://example.com/token2.png' },
    },
    {
      src: { uri: 'https://example.com/token3.png' },
    },
  ]}
/>;
`})}),`
`,a.jsx(e.h3,{id:"size",children:"Size"}),`
`,a.jsx(e.p,{children:"AvatarGroup supports five sizes, which map to Avatar sizes:"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"AvatarGroupSize.Xs"})," (16px)"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"AvatarGroupSize.Sm"})," (24px)"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"AvatarGroupSize.Md"})," (32px) - default"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"AvatarGroupSize.Lg"})," (40px)"]}),`
`,a.jsxs(e.li,{children:[a.jsx(e.code,{children:"AvatarGroupSize.Xl"})," (48px)"]}),`
`]}),`
`,a.jsx(m,{of:y}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`import {
  AvatarGroup,
  AvatarGroupSize,
  AvatarGroupVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
  size={AvatarGroupSize.Xs}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
  size={AvatarGroupSize.Sm}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
  size={AvatarGroupSize.Md}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
  size={AvatarGroupSize.Lg}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
  size={AvatarGroupSize.Xl}
/>;
`})}),`
`,a.jsx(e.h3,{id:"max",children:"Max"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"max"})," prop determines the maximum number of avatars to display before showing an overflow indicator. Default is ",a.jsx(e.code,{children:"4"}),"."]}),`
`,a.jsx(m,{of:S}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`import {
  AvatarGroup,
  AvatarGroupVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  max={1}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  max={10}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;
`})}),`
`,a.jsx(e.h3,{id:"is-reverse",children:"Is Reverse"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"isReverse"})," prop reverses the order of avatar stacking."]}),`
`,a.jsx(m,{of:G}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`import {
  AvatarGroup,
  AvatarGroupVariant,
  AvatarAccountVariant,
} from '@metamask/design-system-react';

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;

<AvatarGroup
  variant={AvatarGroupVariant.Account}
  isReverse
  avatarPropsArr={[
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x123...',
    },
    {
      variant: AvatarAccountVariant.Blockies,
      address: '0x456...',
    },
    {
      variant: AvatarAccountVariant.Jazzicon,
      address: '0x789...',
    },
  ]}
/>;
`})}),`
`,a.jsx(e.h3,{id:"class-name",children:"Class Name"}),`
`,a.jsxs(e.p,{children:["Use the ",a.jsx(e.code,{children:"className"}),` prop to add custom CSS classes to the component. These classes will be merged with the component's default
classes using `,a.jsx(e.code,{children:"twMerge"}),", allowing you to:"]}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:"Add new styles that don't exist in the default component"}),`
`,a.jsx(e.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,a.jsx(e.p,{children:"Example:"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-tsx",children:`<AvatarGroup
  variant={AvatarGroupVariant.Token}
  avatarPropsArr={[
    {
      src: { uri: 'https://example.com/token1.png' },
    },
    {
      src: { uri: 'https://example.com/token2.png' },
    },
    {
      src: { uri: 'https://example.com/token3.png' },
    },
  ]}
  className="mx-2 my-4"
/>
`})}),`
`,a.jsx(e.h3,{id:"style",children:"Style"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",a.jsx(e.code,{children:"className"})," alone. For static styles, prefer using ",a.jsx(e.code,{children:"className"})," with Tailwind classes."]}),`
`,a.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,a.jsx(va,{of:A}),`
`,a.jsx(e.h2,{id:"references",children:"References"}),`
`,a.jsx(e.p,{children:a.jsx(e.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function ga(t={}){const{wrapper:e}={...$(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(O,{...t})}):O(t)}const La={title:"React Components/AvatarGroup",component:u,parameters:{docs:{page:ga}},argTypes:{variant:{control:"select",options:Object.keys(n),mapping:n,description:"Storybook-only prop to control which variant of Avatar to show in a group"},size:{control:"select",options:Object.keys(r),mapping:r,description:"Optional enum to select between Avatar Group sizes"},max:{control:"number",description:"Optional enum to select max number of Avatars visible before the overflow counter being displayed"},isReverse:{control:"boolean",description:"Optional prop to reverse the direction of the AvatarGroup"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the AvatarGroup component. These classes will be merged with the component's default classes using twMerge"}}},o=({variant:t,...e})=>{switch(t){case n.Account:return a.jsx(u,{...e,variant:t,avatarPropsArr:ha});case n.Favicon:return a.jsx(u,{...e,variant:t,avatarPropsArr:b});case n.Network:return a.jsx(u,{...e,variant:t,avatarPropsArr:xa});case n.Token:return a.jsx(u,{...e,variant:t,avatarPropsArr:fa});default:return a.jsx(u,{...e,variant:n.Favicon,avatarPropsArr:b})}},A={args:{variant:n.Favicon,size:r.Md,max:4,isReverse:!1,className:""},render:t=>a.jsx(o,{...t})},f={render:()=>a.jsx("div",{className:"flex flex-col gap-4",children:Object.keys(n).map(t=>a.jsx(o,{variant:n[t]},t))})},g={render:()=>a.jsx("div",{className:"flex flex-col gap-4",children:Object.keys(n).map(t=>a.jsx(o,{variant:n[t]},t))})},y={render:()=>a.jsx("div",{children:Object.keys(r).map(t=>a.jsxs("div",{className:"mb-4 flex flex-col gap-1",children:[a.jsx(o,{variant:n.Account,size:r[t]}),a.jsx(o,{variant:n.Favicon,size:r[t]}),a.jsx(o,{variant:n.Network,size:r[t]}),a.jsx(o,{variant:n.Token,size:r[t]})]},t))})},S={render:()=>a.jsxs("div",{className:"flex flex-col gap-1",children:[" ",a.jsx(o,{variant:n.Account}),a.jsx(o,{variant:n.Account,max:1}),a.jsx(o,{variant:n.Account,max:10})]})},G={render:()=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex flex-col items-start gap-1",children:[a.jsx(o,{variant:n.Account}),a.jsx(o,{variant:n.Account,isReverse:!0})]}),a.jsxs("div",{className:"flex flex-col items-start gap-1",children:[a.jsx(o,{variant:n.Favicon}),a.jsx(o,{variant:n.Favicon,isReverse:!0})]}),a.jsxs("div",{className:"flex flex-col items-start gap-1",children:[a.jsx(o,{variant:n.Network}),a.jsx(o,{variant:n.Network,isReverse:!0})]}),a.jsxs("div",{className:"flex flex-col items-start gap-1",children:[a.jsx(o,{variant:n.Token}),a.jsx(o,{variant:n.Token,isReverse:!0})]})]})};var N,R,C;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: AvatarGroupVariant.Favicon,
    size: AvatarGroupSize.Md,
    max: 4,
    isReverse: false,
    className: ''
  },
  render: (args: Omit<AvatarGroupProps, 'avatarPropsArr'>) => <AvatarGroupStory {...args} />
}`,...(C=(R=A.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var P,B,M;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {Object.keys(AvatarGroupVariant).map(variantKey => <AvatarGroupStory key={variantKey} variant={AvatarGroupVariant[variantKey as keyof typeof AvatarGroupVariant]} />)}
    </div>
}`,...(M=(B=f.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var E,q,F;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {Object.keys(AvatarGroupVariant).map(variantKey => <AvatarGroupStory key={variantKey} variant={AvatarGroupVariant[variantKey as keyof typeof AvatarGroupVariant]} />)}
    </div>
}`,...(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var L,_,J;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div>
      {Object.keys(AvatarGroupSize).map(sizeKey => <div key={sizeKey} className="mb-4 flex flex-col gap-1">
          <AvatarGroupStory variant={AvatarGroupVariant.Account} size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]} />
          <AvatarGroupStory variant={AvatarGroupVariant.Favicon} size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]} />
          <AvatarGroupStory variant={AvatarGroupVariant.Network} size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]} />
          <AvatarGroupStory variant={AvatarGroupVariant.Token} size={AvatarGroupSize[sizeKey as keyof typeof AvatarGroupSize]} />
        </div>)}
    </div>
}`,...(J=(_=y.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var I,D,H;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      {' '}
      <AvatarGroupStory variant={AvatarGroupVariant.Account} />
      <AvatarGroupStory variant={AvatarGroupVariant.Account} max={1} />
      <AvatarGroupStory variant={AvatarGroupVariant.Account} max={10} />
    </div>
}`,...(H=(D=S.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var W,X,U;G.parameters={...G.parameters,docs:{...(W=G.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex flex-col items-start gap-1">
        <AvatarGroupStory variant={AvatarGroupVariant.Account} />
        <AvatarGroupStory variant={AvatarGroupVariant.Account} isReverse />
      </div>
      <div className="flex flex-col items-start gap-1">
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} />
        <AvatarGroupStory variant={AvatarGroupVariant.Favicon} isReverse />
      </div>
      <div className="flex flex-col items-start gap-1">
        <AvatarGroupStory variant={AvatarGroupVariant.Network} />
        <AvatarGroupStory variant={AvatarGroupVariant.Network} isReverse />
      </div>
      <div className="flex flex-col items-start gap-1">
        <AvatarGroupStory variant={AvatarGroupVariant.Token} />
        <AvatarGroupStory variant={AvatarGroupVariant.Token} isReverse />
      </div>
    </div>
}`,...(U=(X=G.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};const _a=["Default","Variant","AvatarPropsArr","Size","Max","IsReverse"];export{g as AvatarPropsArr,A as Default,G as IsReverse,S as Max,y as Size,f as Variant,_a as __namedExportsOrder,La as default};
