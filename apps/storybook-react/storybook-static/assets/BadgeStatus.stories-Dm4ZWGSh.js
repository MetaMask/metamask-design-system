import{j as e}from"./iframe-BknD6R0A.js";import{k as l,d as a}from"./index-CiWXofBh.js";import{B as r}from"./BadgeStatus-DkvqegV3.js";import{useMDXComponents as w}from"./index-DH6Ulk9s.js";import{C as c,e as k}from"./blocks-Du73VAkD.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";function u(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...w(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"badgestatus",children:"BadgeStatus"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"BadgeStatus"})," indicates the state of an item through color."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { BadgeStatus } from '@metamask/design-system-react';

<BadgeStatus status={BadgeStatusStatus.Active} />;
`})}),`
`,e.jsx(c,{of:n}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.h3,{id:"status",children:"Status"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"status"})," prop to indicate the visual state of the badge. Supported values:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BadgeStatusStatus.Active"})," (Connected)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BadgeStatusStatus.Inactive"})," (Connected)"]}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"BadgeStatusStatus.Disconnected"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"BadgeStatusStatus.New"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"BadgeStatusStatus.Attention"})}),`
`]}),`
`,e.jsx(c,{of:d}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsx(s.p,{children:"BadgeStatus supports two size options:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BadgeStatusSize.Md"})," (8px) – default"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"BadgeStatusSize.Lg"})," (10px)"]}),`
`]}),`
`,e.jsx(c,{of:i}),`
`,e.jsx(s.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"hasBorder"})," prop adds an outer border to the badge, often used to separate the status from surrounding backgrounds. Default is ",e.jsx(s.code,{children:"true"}),"."]}),`
`,e.jsx(c,{of:o}),`
`,e.jsx(s.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"className"})," prop to add custom CSS classes to the BadgeStatus component. These classes are merged with the component's default styles using ",e.jsx(s.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add new utility styles"}),`
`,e.jsx(s.li,{children:"Override default styles when needed"}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Custom border and spacing
<BadgeStatus
  status={BadgeStatusStatus.Active}
  className="ml-2 border-warning-default"
/>
`})}),`
`,e.jsx(s.h3,{id:"style",children:"Style"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with Tailwind or className alone. For static styles, prefer ",e.jsx(s.code,{children:"className"}),"."]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(k,{of:n}),`
`,e.jsx(s.h2,{id:"references",children:"References"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function N(t={}){const{wrapper:s}={...w(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(u,{...t})}):u(t)}const T={title:"React Components/BadgeStatus",component:r,parameters:{docs:{page:N}},argTypes:{size:{control:"select",options:Object.keys(l),mapping:l,description:"Optional prop to control the size of the BadgeStatus"},status:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to control the status of the badge"},hasBorder:{control:"boolean",description:"Optional prop to determine whether the badge should display a border"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the BadgeStatus component"}}},n={args:{status:a.Active},render:t=>e.jsx("div",{className:"flex items-center gap-2 bg-warning-muted p-1",children:e.jsx(r,{...t})})},d={render:()=>e.jsx("div",{className:"flex items-center gap-2 bg-warning-muted p-1",children:Object.keys(a).map(t=>e.jsx(r,{status:a[t]},t))})},i={render:()=>e.jsx("div",{className:"flex items-center gap-2 bg-warning-muted p-1",children:Object.keys(l).map(t=>e.jsx(r,{size:l[t],status:a.Active},t))})},o={render:()=>e.jsx("div",{className:"flex items-center gap-2 bg-warning-muted p-1",children:Object.keys(a).map(t=>e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(r,{status:a[t],hasBorder:!1}),e.jsx(r,{status:a[t]})]},t))})};var p,h,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: BadgeStatusStatus.Active
  },
  render: args => <div className="flex items-center gap-2 bg-warning-muted p-1">
      <BadgeStatus {...args} />
    </div>
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,x,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 bg-warning-muted p-1">
      {Object.keys(BadgeStatusStatus).map(statusKey => <BadgeStatus key={statusKey} status={BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]} />)}
    </div>
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var j,f,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 bg-warning-muted p-1">
      {Object.keys(BadgeStatusSize).map(sizeKey => <BadgeStatus key={sizeKey} size={BadgeStatusSize[sizeKey as keyof typeof BadgeStatusSize]} status={BadgeStatusStatus.Active} />)}
    </div>
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var y,b,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2 bg-warning-muted p-1">
      {Object.keys(BadgeStatusStatus).map(statusKey => <div key={statusKey} className="flex items-center gap-1">
          <BadgeStatus status={BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]} hasBorder={false} />
          <BadgeStatus status={BadgeStatusStatus[statusKey as keyof typeof BadgeStatusStatus]} />
        </div>)}
    </div>
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const _=["Default","Status","Size","HasBorder"];export{n as Default,o as HasBorder,i as Size,d as Status,_ as __namedExportsOrder,T as default};
