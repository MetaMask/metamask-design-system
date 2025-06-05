import{j as e}from"./iframe-BknD6R0A.js";import{e as g,I as s}from"./index-CiWXofBh.js";import{B as a}from"./ButtonPrimary-BC3HjURF.js";import{useMDXComponents as X}from"./index-DH6Ulk9s.js";import{C as r,e as G}from"./blocks-Du73VAkD.js";import"./tw-merge-B12XlTeZ.js";import"./ButtonBase-DbNzlsEJ.js";import"./Text-Cd5k1vm4.js";import"./Icon-2yQHbUm6.js";import"./index-CmxWr2Xc.js";function x(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...X(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"buttonprimary",children:"ButtonPrimary"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ButtonPrimary"})," is a button for most important and desired action to guide the user."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ButtonPrimary } from '@metamask/design-system-react';

<ButtonPrimary>Primary Button</ButtonPrimary>;
`})}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"ButtonPrimary supports three sizes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonPrimarySize.Sm"})," (32px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonPrimarySize.Md"})," (40px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonPrimarySize.Lg"})," (48px) - default"]}),`
`]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h3,{id:"isfullwidth",children:"IsFullWidth"}),`
`,e.jsx(n.p,{children:"ButtonPrimary can be set to take up the full width of its container."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h3,{id:"isdanger",children:"IsDanger"}),`
`,e.jsx(n.p,{children:"Use the danger variant for destructive actions."}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h3,{id:"isinverse",children:"IsInverse"}),`
`,e.jsxs(n.p,{children:["Use the inverse variant when the button needs to be displayed on a dark background. When combined with ",e.jsx(n.code,{children:"isDanger"}),", the button will have inverse styling with error text color."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"starticonname-and-endiconname",children:"StartIconName and EndIconName"}),`
`,e.jsx(n.p,{children:"ButtonPrimary can display icons at the start and/or end of the content."}),`
`,e.jsx(n.h4,{id:"starticonname",children:"StartIconName"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h4,{id:"endiconname",children:"EndIconName"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"isloading",children:"IsLoading"}),`
`,e.jsx(n.p,{children:"ButtonPrimary can show a loading state with optional loading text."}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,e.jsx(n.p,{children:"ButtonPrimary can be disabled."}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(n.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Adding new styles
<ButtonPrimary className="mx-2 my-4">Button content</ButtonPrimary>
`})}),`
`,e.jsxs(n.p,{children:["Note: When using ",e.jsx(n.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(G,{of:o}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function H(t={}){const{wrapper:n}={...X(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(x,{...t})}):x(t)}const re={title:"React Components/Button/variants/ButtonPrimary",component:a,parameters:{docs:{page:H}},argTypes:{children:{control:"text",description:"Required prop for the content to be rendered within the ButtonPrimary"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the ButtonPrimary component"},isDanger:{control:"boolean",description:"Optional prop that when true, applies error/danger styling to the button"},isInverse:{control:"boolean",description:"Optional prop that when true, applies inverse styling to the button"},size:{control:"select",options:Object.keys(g),mapping:g,description:"Optional prop to control the size of the ButtonPrimary"},isFullWidth:{control:"boolean",description:"Optional prop that when true, makes the button take up the full width of its container"},isLoading:{control:"boolean",description:"Optional prop that when true, shows a loading spinner"},loadingText:{control:"text",description:"Optional prop for text to display when button is in loading state"},startIconName:{control:"select",options:Object.keys(s),mapping:s,description:"Optional prop to specify an icon to show at the start of the button"},startIconProps:{control:"object",description:"Optional prop to pass additional properties to the start icon"},startAccessory:{control:"text",description:"Optional prop for a custom element to show at the start of the button"},endIconName:{control:"select",options:Object.keys(s),mapping:s,description:"Optional prop to specify an icon to show at the end of the button"},endIconProps:{control:"object",description:"Optional prop to pass additional properties to the end icon"},endAccessory:{control:"text",description:"Optional prop for a custom element to show at the end of the button"},isDisabled:{control:"boolean",description:"Optional prop that when true, disables the button"},loadingIconProps:{control:"object",description:"Optional prop to pass additional properties to the loading icon"}}},o={args:{children:"Primary Button"}},i={args:{children:"Danger Button",isDanger:!0}},c={render:t=>e.jsxs("div",{className:"flex gap-2 rounded bg-primary-default p-4",children:[e.jsx(a,{...t,isInverse:!0,children:"Inverse Button"}),e.jsx(a,{...t,isInverse:!0,isDanger:!0,children:"Inverse Danger Button"})]})},d={render:t=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{...t,size:g.Sm,children:"Small"}),e.jsx(a,{...t,size:g.Md,children:"Medium"}),e.jsx(a,{...t,size:g.Lg,children:"Large"})]})},l={args:{children:"Full Width Button",isFullWidth:!0}},p={args:{children:"With Start Icon",startIconName:s.AddSquare}},h={args:{children:"With End Icon",endIconName:s.AddSquare}},m={args:{children:"Loading Button",isLoading:!0,loadingText:"Loading..."}},u={args:{children:"Disabled Button",isDisabled:!0}};var j,y,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,I,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    isDanger: true
  }
}`,...(b=(I=i.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var P,S,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2 rounded bg-primary-default p-4">
      <ButtonPrimary {...args} isInverse>
        Inverse Button
      </ButtonPrimary>
      <ButtonPrimary {...args} isInverse isDanger>
        Inverse Danger Button
      </ButtonPrimary>
    </div>
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var v,N,D;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2">
      <ButtonPrimary {...args} size={ButtonPrimarySize.Sm}>
        Small
      </ButtonPrimary>
      <ButtonPrimary {...args} size={ButtonPrimarySize.Md}>
        Medium
      </ButtonPrimary>
      <ButtonPrimary {...args} size={ButtonPrimarySize.Lg}>
        Large
      </ButtonPrimary>
    </div>
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var z,O,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    isFullWidth: true
  }
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var M,W,k;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare
  }
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var C,F,A;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare
  }
}`,...(A=(F=h.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var E,T,q;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    isLoading: true,
    loadingText: 'Loading...'
  }
}`,...(q=(T=m.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,_,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    isDisabled: true
  }
}`,...(U=(_=u.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const se=["Default","IsDanger","IsInverse","Size","IsFullWidth","StartIconName","EndIconName","IsLoading","IsDisabled"];export{o as Default,h as EndIconName,i as IsDanger,u as IsDisabled,l as IsFullWidth,c as IsInverse,m as IsLoading,d as Size,p as StartIconName,se as __namedExportsOrder,re as default};
