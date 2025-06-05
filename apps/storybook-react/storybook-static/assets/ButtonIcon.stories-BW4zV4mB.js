import{j as e}from"./iframe-BknD6R0A.js";import{I as n,l as m}from"./index-CiWXofBh.js";import{B as t}from"./ButtonIcon-DRkyZL61.js";import{useMDXComponents as k}from"./index-DH6Ulk9s.js";import{C as a,e as F}from"./blocks-Du73VAkD.js";import"./tw-merge-B12XlTeZ.js";import"./Icon-2yQHbUm6.js";import"./index-CmxWr2Xc.js";function h(o){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...k(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"buttonicon",children:"ButtonIcon"}),`
`,e.jsx(s.p,{children:"A Button Icon is a compact, icon-only button that triggers an action, designed for quick, space-efficient interactions"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ButtonIcon, IconName } from '@metamask/design-system-react';

<ButtonIcon iconName={IconName.Close} ariaLabel="Close" onClick={() => {}} />;
`})}),`
`,e.jsx(a,{of:i}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["ButtonIcon requires an ",e.jsx(s.code,{children:"ariaLabel"})," prop to ensure accessibility for screen readers. This label should clearly describe the button's action."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<ButtonIcon
  iconName={IconName.Close}
  ariaLabel="Close dialog"
  onClick={() => closeDialog()}
/>
`})}),`
`,e.jsx(a,{of:p}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"ariaLabel"})," should:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Be clear and concise"}),`
`,e.jsx(s.li,{children:'Describe the action (e.g., "Close dialog" rather than just "Close")'}),`
`,e.jsx(s.li,{children:"Be unique if multiple ButtonIcons are present"}),`
`,e.jsx(s.li,{children:"Reflect the current state if applicable"}),`
`]}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsx(s.p,{children:"ButtonIcon supports three sizes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ButtonIconSize.Sm"})," (24px)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ButtonIconSize.Md"})," (32px) - default"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"ButtonIconSize.Lg"})," (40px)"]}),`
`]}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(s.h3,{id:"isfloating",children:"IsFloating"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"isFloating"})," to apply a contained, floating button style."]}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(s.h3,{id:"isinverse",children:"IsInverse"}),`
`,e.jsxs(s.p,{children:["Use ",e.jsx(s.code,{children:"isInverse"})," when the button needs to be displayed on a dark background."]}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(s.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,e.jsx(s.p,{children:"ButtonIcon can be disabled."}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(s.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(s.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(s.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Adding new styles
<ButtonIcon className="mx-2 my-4" iconName={IconName.Close} />
`})}),`
`,e.jsxs(s.p,{children:["Note: When using ",e.jsx(s.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(s.h3,{id:"style",children:"Style"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(F,{of:i}),`
`,e.jsx(s.h2,{id:"references",children:"References"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function O(o={}){const{wrapper:s}={...k(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(h,{...o})}):h(o)}const G={title:"React Components/ButtonIcon",component:t,parameters:{docs:{page:O}},argTypes:{iconName:{control:"select",options:Object.keys(n),mapping:n,description:"Required prop to specify the icon to show"},size:{control:"select",options:Object.keys(m),mapping:m,description:"Optional prop to control the size of the ButtonIcon"},isDisabled:{control:"boolean",description:"Optional prop that when true, disables the button"},isInverse:{control:"boolean",description:"Optional prop that when true, applies inverse styling to the button"},isFloating:{control:"boolean",description:"Optional prop that when true, applies floating/contained styling to the button"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the ButtonIcon"},ariaLabel:{control:"text",description:"Required prop to provide an accessible label for the button"}}},i={args:{iconName:n.Close,ariaLabel:"Close"}},r={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{iconName:n.Close,size:m.Sm,ariaLabel:"Close small"}),e.jsx(t,{iconName:n.Close,size:m.Md,ariaLabel:"Close medium"}),e.jsx(t,{iconName:n.Close,size:m.Lg,ariaLabel:"Close large"})]})},l={render:()=>e.jsx("div",{className:"flex gap-2",children:e.jsx(t,{iconName:n.Close,isFloating:!0,ariaLabel:"Close"})})},c={render:()=>e.jsx("div",{className:"bg-primary-default p-4",children:e.jsx(t,{iconName:n.Close,isInverse:!0,ariaLabel:"Close"})})},d={args:{iconName:n.Close,isDisabled:!0,ariaLabel:"Close"}},p={args:{iconName:n.Close,ariaLabel:"Close dialog"}};var u,x,j;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    iconName: IconName.Close,
    ariaLabel: 'Close'
  }
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,g,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <ButtonIcon iconName={IconName.Close} size={ButtonIconSize.Sm} ariaLabel="Close small" />
      <ButtonIcon iconName={IconName.Close} size={ButtonIconSize.Md} ariaLabel="Close medium" />
      <ButtonIcon iconName={IconName.Close} size={ButtonIconSize.Lg} ariaLabel="Close large" />
    </div>
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var C,f,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <ButtonIcon iconName={IconName.Close} isFloating ariaLabel="Close" />
    </div>
}`,...(N=(f=l.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var y,B,L;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="bg-primary-default p-4">
      <ButtonIcon iconName={IconName.Close} isInverse ariaLabel="Close" />
    </div>
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var S,v,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    iconName: IconName.Close,
    isDisabled: true,
    ariaLabel: 'Close'
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var z,D,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    iconName: IconName.Close,
    ariaLabel: 'Close dialog'
  }
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const P=["Default","Size","IsFloating","IsInverse","IsDisabled","AriaLabel"];export{p as AriaLabel,i as Default,d as IsDisabled,l as IsFloating,c as IsInverse,r as Size,P as __namedExportsOrder,G as default};
