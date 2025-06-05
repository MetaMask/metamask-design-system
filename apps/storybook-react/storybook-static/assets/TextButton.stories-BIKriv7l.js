import{j as e}from"./iframe-BknD6R0A.js";import{q as r,I as a,T as X}from"./index-CiWXofBh.js";import{useMDXComponents as L}from"./index-DH6Ulk9s.js";import{C as o,e as _}from"./blocks-Du73VAkD.js";import{T as s}from"./TextButton-DZtxIGSB.js";import{T as R}from"./Text-Cd5k1vm4.js";import"./index-CmxWr2Xc.js";import"./tw-merge-B12XlTeZ.js";import"./ButtonBase-DbNzlsEJ.js";import"./Icon-2yQHbUm6.js";function x(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...L(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"textbutton",children:"TextButton"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"TextButton"})," is used for text-only button actions or hyperlink without padding or background."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { TextButton } from '@metamask/design-system-react';

<TextButton onClick={() => {}}>Text Button</TextButton>;
`})}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(t.h3,{id:"size",children:"Size"}),`
`,e.jsxs(t.p,{children:["TextButton supports different sizes through the ",e.jsx(t.code,{children:"size"})," prop:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TextButtonSize.BodyXs"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TextButtonSize.BodySm"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TextButtonSize.BodyMd"})}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"TextButtonSize.BodyLg"})}),`
`]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t.h3,{id:"aschild",children:"AsChild"}),`
`,e.jsxs(t.p,{children:["TextButton can render as different elements using the ",e.jsx(t.code,{children:"asChild"})," prop. Defaults to rendering as a ",e.jsx(t.code,{children:"button"})," element."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Text variant={TextVariant.BodySm}>
    To learn more about web3, visit{' '}
    <TextButton textVariant={TextVariant.BodySm} asChild>
        <a href="https://metamask.io" target="_blank" rel="noopener noreferrer">MetaMask Learn</a>
    </TextButton>
</Text>

<TextButton asChild endIconName={IconName.Arrow2UpRight}>
    <a href="https://portfolio.metamask.io" target="_blank" rel="noopener noreferrer">
        Portfolio
    </a>
</TextButton>
`})}),`
`,e.jsx(t.h3,{id:"isinverse",children:"IsInverse"}),`
`,e.jsx(t.p,{children:"Use the inverse variant when the button needs to be displayed on a dark background."}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(t.h3,{id:"starticonname-and-endiconname",children:"StartIconName and EndIconName"}),`
`,e.jsx(t.p,{children:"TextButton can display icons at the start and/or end of the content."}),`
`,e.jsx(t.h4,{id:"starticonname",children:"StartIconName"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(t.h4,{id:"endiconname",children:"EndIconName"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,e.jsx(t.p,{children:"TextButton can be disabled."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(t.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(t.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(t.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// Adding new styles
<TextButton className="mx-2 my-4">Button content</TextButton>
`})}),`
`,e.jsxs(t.p,{children:["Note: When using ",e.jsx(t.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(t.h3,{id:"style",children:"Style"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(_,{of:i}),`
`,e.jsx(t.h2,{id:"references",children:"References"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function q(n={}){const{wrapper:t}={...L(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(x,{...n})}):x(n)}const Y={title:"React Components/TextButton",component:s,parameters:{docs:{page:q}},argTypes:{children:{control:"text",description:"Required prop for the content to be rendered within the TextButton"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the TextButton component"},isInverse:{control:"boolean",description:"Optional prop that when true, applies inverse styling to the button"},size:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to specify the size of the TextButton"},startIconName:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to specify an icon to show at the start of the button"},endIconName:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to specify an icon to show at the end of the button"},isDisabled:{control:"boolean",description:"Optional prop that when true, disables the button"}}},i={args:{children:"Text Button"}},d={render:n=>e.jsx("div",{className:"space-y-8",children:e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx(s,{...n,size:r.BodyLg,children:"BodyLg"}),e.jsx(s,{...n,size:r.BodyMd,children:"BodyMd (Default)"}),e.jsx(s,{...n,size:r.BodySm,children:"BodySm"}),e.jsx(s,{...n,size:r.BodyXs,children:"BodyXs"})]})})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(R,{variant:X.BodySm,children:["To learn more about web3, visit"," ",e.jsx(s,{size:r.BodySm,asChild:!0,children:e.jsx("a",{href:"https://metamask.io",children:"MetaMask Learn"})})]}),e.jsx(s,{asChild:!0,endIconName:a.Arrow2UpRight,children:e.jsx("a",{href:"https://portfolio.metamask.io",target:"_blank",rel:"noopener noreferrer",children:"Portfolio"})})]})},l={render:n=>e.jsx("div",{className:"rounded bg-primary-default p-4",children:e.jsx(s,{...n,isInverse:!0,children:"Inverse Button"})})},h={args:{children:"With Start Icon",startIconName:a.AddSquare}},p={args:{children:"With End Icon",endIconName:a.AddSquare}},m={args:{children:"Disabled Button",isDisabled:!0}};var u,j,B;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Text Button'
  }
}`,...(B=(j=i.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var f,T,g;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div className="space-y-8">
      <div className="flex flex-col items-start gap-2">
        <TextButton {...args} size={TextButtonSize.BodyLg}>
          BodyLg
        </TextButton>
        <TextButton {...args} size={TextButtonSize.BodyMd}>
          BodyMd (Default)
        </TextButton>
        <TextButton {...args} size={TextButtonSize.BodySm}>
          BodySm
        </TextButton>
        <TextButton {...args} size={TextButtonSize.BodyXs}>
          BodyXs
        </TextButton>
      </div>
    </div>
}`,...(g=(T=d.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var y,b,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Text variant={TextVariant.BodySm}>
        To learn more about web3, visit{' '}
        <TextButton size={TextButtonSize.BodySm} asChild>
          <a href="https://metamask.io">MetaMask Learn</a>
        </TextButton>
      </Text>

      <TextButton asChild endIconName={IconName.Arrow2UpRight}>
        <a href="https://portfolio.metamask.io" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </TextButton>
    </div>
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,N,v;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div className="rounded bg-primary-default p-4">
      <TextButton {...args} isInverse>
        Inverse Button
      </TextButton>
    </div>
}`,...(v=(N=l.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var w,z,k;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare
  }
}`,...(k=(z=h.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,M,D;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare
  }
}`,...(D=(M=p.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,O,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    isDisabled: true
  }
}`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const Z=["Default","Size","AsChild","IsInverse","StartIconName","EndIconName","IsDisabled"];export{c as AsChild,i as Default,p as EndIconName,m as IsDisabled,l as IsInverse,d as Size,h as StartIconName,Z as __namedExportsOrder,Y as default};
