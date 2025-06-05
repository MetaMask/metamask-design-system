import{j as e}from"./iframe-BknD6R0A.js";import{g as r,A as t,c as m,I as O,h as _}from"./index-CiWXofBh.js";import{A as s}from"./AvatarBase-CokxalKV.js";import{M as R}from"./metamask-NccMDQ5I.js";import{E as F}from"./eth-BMsHNo0d.js";import{useMDXComponents as L}from"./index-DH6Ulk9s.js";import{C as l,e as V}from"./blocks-Du73VAkD.js";import{I as U}from"./Icon-2yQHbUm6.js";import"./Text-Cd5k1vm4.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";const f=[F,R];function j(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...L(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"avatarbase",children:"AvatarBase"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"AvatarBase"})," is the base component for avatars."]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { AvatarBase } from '@metamask/design-system-react';

<AvatarBase fallbackText="A" />;
`})}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(a.h2,{id:"props",children:"Props"}),`
`,e.jsx(a.h3,{id:"shape",children:"Shape"}),`
`,e.jsx(a.p,{children:"AvatarBase supports two shapes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseShape.Circle"})," (fully rounded) - default"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseShape.Square"})," (slightly rounded corners)"]}),`
`]}),`
`,e.jsx(l,{of:o}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsx(a.p,{children:"AvatarBase supports five sizes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseSize.Xs"})," (16px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseSize.Sm"})," (24px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseSize.Md"})," (32px) - default"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseSize.Lg"})," (40px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarBaseSize.Xl"})," (48px)"]}),`
`]}),`
`,e.jsxs(a.p,{children:["The fallback text uses ",e.jsx(a.code,{children:"TextVariant.BodySm"})," for all sizes to maintain consistency."]}),`
`,e.jsx(l,{of:i}),`
`,e.jsx(a.h3,{id:"fallback-text",children:"Fallback Text"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"fallbackText"})," prop provides a simple way to display text within the avatar. The text uses ",e.jsx(a.code,{children:"TextVariant.BodySm"})," for consistent sizing across all avatar sizes."]}),`
`,e.jsx(l,{of:x}),`
`,e.jsxs(a.p,{children:["You can customize the appearance of the fallback text using ",e.jsx(a.code,{children:"fallbackTextProps"}),":"]}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(a.h3,{id:"children",children:"Children"}),`
`,e.jsxs(a.p,{children:["While ",e.jsx(a.code,{children:"fallbackText"})," is the recommended way to display text, ",e.jsx(a.code,{children:"AvatarBase"})," can also contain custom content like images and icons:"]}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(a.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"hasBorder"})," prop enables a border around the AvatarBase."]}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(a.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(a.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(a.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`// Adding new styles
<AvatarBase fallbackText="A" className="my-4 mx-2" />

// Overriding default styles
<AvatarBase
  fallbackText="A"
  className="bg-success-default"
  fallbackTextProps={{ color: TextColor.SuccessInverse }}
/>
`})}),`
`,e.jsx(a.h3,{id:"style",children:"Style"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(a.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(a.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(V,{of:c}),`
`,e.jsx(a.h2,{id:"references",children:"References"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function G(n={}){const{wrapper:a}={...L(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(j,{...n})}):j(n)}const re={title:"React Components/AvatarBase",component:s,parameters:{docs:{page:G}},argTypes:{children:{control:"text",description:"Optional prop for the content to be rendered within the AvatarBase. Not required if fallbackText is provided"},fallbackText:{control:"text",description:"Optional text to display when no children are provided"},fallbackTextProps:{control:"object",description:"Optional props to be passed to the Text component when rendering fallback text"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the AvatarBase component"},size:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to control the size of the AvatarBase"},shape:{control:"select",options:Object.keys(t),mapping:t,description:"Optional prop to control the shape of the AvatarBase"},hasBorder:{control:"boolean",description:"Optional prop to add a border around the AvatarBase"}}},c={args:{fallbackText:"A"}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{shape:t.Circle,fallbackText:"C"}),e.jsx(s,{shape:t.Square,fallbackText:"S"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:r.Xs,fallbackText:"XS"}),e.jsx(s,{size:r.Sm,fallbackText:"SM"}),e.jsx(s,{size:r.Md,fallbackText:"MD"}),e.jsx(s,{size:r.Lg,fallbackText:"LG"}),e.jsx(s,{size:r.Xl,fallbackText:"XL"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{shape:t.Square,size:r.Xs,fallbackText:"Xs"}),e.jsx(s,{shape:t.Square,size:r.Sm,fallbackText:"Sm"}),e.jsx(s,{shape:t.Square,size:r.Md,fallbackText:"Md"}),e.jsx(s,{shape:t.Square,size:r.Lg,fallbackText:"Lg"}),e.jsx(s,{shape:t.Square,size:r.Xl,fallbackText:"Xl"})]})]})},d={render:()=>e.jsxs("div",{className:"flex gap-2 bg-primary-muted p-2",children:[e.jsx(s,{fallbackText:"A"}),e.jsx(s,{fallbackText:"B",hasBorder:!0})]})},x={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{fallbackText:"A"}),e.jsx(s,{fallbackText:"B"}),e.jsx(s,{fallbackText:"C"})]})},p={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{fallbackText:"A",fallbackTextProps:{color:m.PrimaryDefault}}),e.jsx(s,{fallbackText:"B",fallbackTextProps:{color:m.ErrorDefault}}),e.jsx(s,{fallbackText:"C",fallbackTextProps:{color:m.SuccessDefault}})]})},h={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{fallbackText:"A"}),e.jsx(s,{shape:t.Square,children:e.jsx("img",{src:f[0],alt:"Eth",className:"h-full w-full object-contain"})}),e.jsx(s,{children:e.jsx("img",{src:f[0],alt:"Eth",className:"h-full w-full object-contain"})}),e.jsx(s,{children:e.jsx("img",{src:f[1],alt:"Eth",className:"h-full w-full object-contain"})}),e.jsx(s,{children:e.jsx(U,{name:O.User,size:_.Sm})})]})};var v,A,u;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fallbackText: 'A'
  }
}`,...(u=(A=c.parameters)==null?void 0:A.docs)==null?void 0:u.source}}};var S,b,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <AvatarBase shape={AvatarBaseShape.Circle} fallbackText="C" />
      <AvatarBase shape={AvatarBaseShape.Square} fallbackText="S" />
    </div>
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var T,k,g;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <AvatarBase size={AvatarBaseSize.Xs} fallbackText="XS" />
        <AvatarBase size={AvatarBaseSize.Sm} fallbackText="SM" />
        <AvatarBase size={AvatarBaseSize.Md} fallbackText="MD" />
        <AvatarBase size={AvatarBaseSize.Lg} fallbackText="LG" />
        <AvatarBase size={AvatarBaseSize.Xl} fallbackText="XL" />
      </div>
      <div className="flex items-center gap-2">
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Xs} fallbackText="Xs" />
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Sm} fallbackText="Sm" />
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Md} fallbackText="Md" />
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Lg} fallbackText="Lg" />
        <AvatarBase shape={AvatarBaseShape.Square} size={AvatarBaseSize.Xl} fallbackText="Xl" />
      </div>
    </div>
}`,...(g=(k=i.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var z,N,y;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarBase fallbackText="A" />
      <AvatarBase fallbackText="B" hasBorder />
    </div>
}`,...(y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var w,C,M;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarBase fallbackText="A" />
      <AvatarBase fallbackText="B" />
      <AvatarBase fallbackText="C" />
    </div>
}`,...(M=(C=x.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var E,X,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarBase fallbackText="A" fallbackTextProps={{
      color: TextColor.PrimaryDefault
    }} />
      <AvatarBase fallbackText="B" fallbackTextProps={{
      color: TextColor.ErrorDefault
    }} />
      <AvatarBase fallbackText="C" fallbackTextProps={{
      color: TextColor.SuccessDefault
    }} />
    </div>
}`,...(P=(X=p.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};var q,D,I;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      {/* Text */}
      <AvatarBase fallbackText="A" />
      {/* Image - Network/Token/Favicon */}
      <AvatarBase shape={AvatarBaseShape.Square}>
        <img src={SAMPLE_AVATARBASE_URIS[0]} alt="Eth" className="h-full w-full object-contain" />
      </AvatarBase>
      <AvatarBase>
        <img src={SAMPLE_AVATARBASE_URIS[0]} alt="Eth" className="h-full w-full object-contain" />
      </AvatarBase>
      <AvatarBase>
        <img src={SAMPLE_AVATARBASE_URIS[1]} alt="Eth" className="h-full w-full object-contain" />
      </AvatarBase>
      {/* Icon */}
      <AvatarBase>
        <Icon name={IconName.User} size={IconSize.Sm} />
      </AvatarBase>
    </div>
}`,...(I=(D=h.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const te=["Default","Shape","Size","HasBorder","FallbackText","FallbackTextWithProps","Children"];export{h as Children,c as Default,x as FallbackText,p as FallbackTextWithProps,d as HasBorder,o as Shape,i as Size,te as __namedExportsOrder,re as default};
