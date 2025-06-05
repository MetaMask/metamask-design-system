import{r as k,j as e}from"./iframe-BknD6R0A.js";import{g as r,h as c,r as o,b as l,A as E,I as s}from"./index-CiWXofBh.js";import{t as X}from"./tw-merge-B12XlTeZ.js";import{A as _}from"./AvatarBase-CokxalKV.js";import{I as V}from"./Icon-2yQHbUm6.js";import{useMDXComponents as D}from"./index-DH6Ulk9s.js";import{C as d,e as B}from"./blocks-Du73VAkD.js";import"./Text-Cd5k1vm4.js";import"./index-CmxWr2Xc.js";const W={[r.Xs]:c.Xs,[r.Sm]:c.Sm,[r.Md]:c.Md,[r.Lg]:c.Lg,[r.Xl]:c.Xl},L={[o.Neutral]:"bg-background-muted",[o.Info]:"bg-info-muted",[o.Success]:"bg-success-muted",[o.Error]:"bg-error-muted",[o.Warning]:"bg-warning-muted"},G={[o.Neutral]:l.IconAlternative,[o.Info]:l.InfoDefault,[o.Success]:l.SuccessDefault,[o.Error]:l.ErrorDefault,[o.Warning]:l.WarningDefault},a=k.forwardRef(({iconName:t,iconProps:n,size:v=r.Md,severity:I=o.Neutral,className:T,...q},P)=>e.jsx(_,{ref:P,shape:E.Circle,size:v,className:X(L[I],T),...q,children:t&&e.jsx(V,{name:t,size:W[v],color:G[I],...n})}));a.displayName="AvatarIcon";a.__docgenInfo={description:"",methods:[],displayName:"AvatarIcon",props:{iconName:{required:!0,tsType:{name:"IconName"},description:"Required icon name from the icon set"},iconProps:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`SVGProps<SVGElementProps> & {
  /**
   * Required prop to specify which icon to render from the icon set
   */
  name: IconName;
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   *
   * @default IconSize.Md
   */
  size?: IconSize;
  /**
   * Optional prop that sets the color of the icon using predefined theme colors
   *
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Additional CSS classes to be added to the component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
}`,elements:[{name:"SVGProps",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'svg'"}],raw:"ComponentPropsWithoutRef<'svg'>"}],raw:"SVGProps<SVGElementProps>"},{name:"signature",type:"object",raw:`{
  /**
   * Required prop to specify which icon to render from the icon set
   */
  name: IconName;
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   *
   * @default IconSize.Md
   */
  size?: IconSize;
  /**
   * Optional prop that sets the color of the icon using predefined theme colors
   *
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Additional CSS classes to be added to the component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
}`,signature:{properties:[{key:"name",value:{name:"IconName",required:!0},description:"Required prop to specify which icon to render from the icon set"},{key:"size",value:{name:"IconSize",required:!1},description:`Optional prop to control the size of the icon
Different sizes map to specific pixel dimensions

@default IconSize.Md`},{key:"color",value:{name:"IconColor",required:!1},description:`Optional prop that sets the color of the icon using predefined theme colors

@default IconColor.IconDefault`},{key:"className",value:{name:"string",required:!1},description:`Additional CSS classes to be added to the component.
These classes will be merged with the component's default classes using twMerge.`},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]},{name:"literal",value:"'name'"}],raw:"Omit<IconProps, 'name'>"},description:"Optional props to be passed to the Icon component"},size:{required:!1,tsType:{name:"AvatarIconSize"},description:`Optional prop to control the size of the avatar

@default AvatarIconSize.Md`,defaultValue:{value:"AvatarIconSize.Md",computed:!0}},severity:{required:!1,tsType:{name:"AvatarIconSeverity"},description:`Optional prop to control the severity of the avatar

@default AvatarIconSeverity.Neutral`,defaultValue:{value:"AvatarIconSeverity.Neutral",computed:!0}}}};function f(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...D(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"avataricon",children:"AvatarIcon"}),`
`,e.jsx(n.p,{children:"Avatar reserved for representing static icons inside of an avatar."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: For icon buttons, use the ",e.jsx(n.a,{href:"/docs/react-components-buttonicon--docs",children:"ButtonIcon"})," component."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { AvatarIcon, IconName } from '@metamask/design-system-react';

<AvatarIcon iconName={IconName.Arrow2Up} />;
`})}),`
`,e.jsx(d,{of:i}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"icon-name-required",children:"Icon Name (required)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"iconName"})," prop is required and specifies which icon to display from the design system's icon set."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"iconProps"})," prop allows you to customize the icon's appearance. The size and color will be automatically mapped from the avatar's size and severity."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  AvatarIcon,
  IconName,
  IconColor,
  IconSize,
} from '@metamask/design-system-react';

<AvatarIcon
  iconName={IconName.User}
  iconProps={{
    color: IconColor.IconDefault,
    size: IconSize.Md,
  }}
/>;
`})}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"AvatarIcon supports five sizes, each with a corresponding icon size:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSize.Xs"})," (16px) - uses IconSize.Xs (12px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSize.Sm"})," (24px) - uses IconSize.Sm (16px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSize.Md"})," (32px) - uses IconSize.Md (20px) - default"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSize.Lg"})," (40px) - uses IconSize.Lg (24px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSize.Xl"})," (48px) - uses IconSize.Xl (32px)"]}),`
`]}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(n.h3,{id:"severity",children:"Severity"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"severity"})," prop allows you to apply predefined color combinations to the avatar and icon. Each severity level uses appropriate background and icon colors:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSeverity.Neutral"})," - neutral styling for general use - default"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSeverity.Info"})," - info styling for informational content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSeverity.Success"})," - success styling for positive actions/states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSeverity.Warning"})," - warning styling for cautionary content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"AvatarIconSeverity.Error"})," - error styling for critical issues"]}),`
`]}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(n.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"hasBorder"})," prop enables a border around the AvatarIcon."]}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"}),` prop to add custom CSS classes to the component. These classes will be merged with the component's default
classes using `,e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(n.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<AvatarIcon
  iconName={IconName.User}
  severity={AvatarIconSeverity.Neutral}
  className="mx-2 my-4"
/>
`})}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(n.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(n.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(B,{of:i}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function F(t={}){const{wrapper:n}={...D(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(f,{...t})}):f(t)}const oe={title:"React Components/AvatarIcon",component:a,parameters:{docs:{page:F}},argTypes:{iconName:{control:"select",options:Object.values(s),description:"Required icon name from the icon set"},iconProps:{control:"object",description:"Optional props to be passed to the Icon component. The size prop will be automatically mapped from AvatarIconSize."},size:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to control the size of the avatar. Defaults to AvatarIconSize.Md"},severity:{control:"select",options:Object.keys(o),mapping:o,description:"Optional prop to control the severity of the avatar. Defaults to AvatarIconSeverity.Default"},className:{control:"text",description:"Optional additional CSS classes to be applied to the component"},hasBorder:{control:"boolean",description:"Optional prop to add a border around the AvatarIcon"}}},i={args:{iconName:s.Arrow2UpRight}},p={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{iconName:s.Arrow2UpRight}),e.jsx(a,{iconName:s.User}),e.jsx(a,{iconName:s.Setting}),e.jsx(a,{iconName:s.Search})]}),name:"IconName"},m={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{iconName:s.User,size:r.Xs}),e.jsx(a,{iconName:s.User,size:r.Sm}),e.jsx(a,{iconName:s.User,size:r.Md}),e.jsx(a,{iconName:s.User,size:r.Lg}),e.jsx(a,{iconName:s.User,size:r.Xl})]})},h={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{iconName:s.User,severity:o.Neutral}),e.jsx(a,{iconName:s.Info,severity:o.Info}),e.jsx(a,{iconName:s.Check,severity:o.Success}),e.jsx(a,{iconName:s.Warning,severity:o.Warning}),e.jsx(a,{iconName:s.Danger,severity:o.Error})]})},u={render:()=>e.jsxs("div",{className:"flex gap-2 bg-primary-muted p-2",children:[e.jsx(a,{iconName:s.User,severity:o.Neutral}),e.jsx(a,{iconName:s.User,severity:o.Neutral,hasBorder:!0})]})};var x,S,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    iconName: IconName.Arrow2UpRight
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var y,g,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarIcon iconName={IconName.Arrow2UpRight} />
      <AvatarIcon iconName={IconName.User} />
      <AvatarIcon iconName={IconName.Setting} />
      <AvatarIcon iconName={IconName.Search} />
    </div>,
  name: 'IconName'
}`,...(j=(g=p.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var A,z,b;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Xs} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Sm} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Md} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Lg} />
      <AvatarIcon iconName={IconName.User} size={AvatarIconSize.Xl} />
    </div>
}`,...(b=(z=m.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var w,C,O;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarIcon iconName={IconName.User} severity={AvatarIconSeverity.Neutral} />
      <AvatarIcon iconName={IconName.Info} severity={AvatarIconSeverity.Info} />
      <AvatarIcon iconName={IconName.Check} severity={AvatarIconSeverity.Success} />
      <AvatarIcon iconName={IconName.Warning} severity={AvatarIconSeverity.Warning} />
      <AvatarIcon iconName={IconName.Danger} severity={AvatarIconSeverity.Error} />
    </div>
}`,...(O=(C=h.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var M,R,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarIcon iconName={IconName.User} severity={AvatarIconSeverity.Neutral} />
      <AvatarIcon iconName={IconName.User} severity={AvatarIconSeverity.Neutral} hasBorder />
    </div>
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const ae=["Default","IconNameStory","Size","Severity","HasBorder"];export{i as Default,u as HasBorder,p as IconNameStory,h as Severity,m as Size,ae as __namedExportsOrder,oe as default};
