import{j as e}from"./iframe-BknD6R0A.js";import{j as a}from"./index-CiWXofBh.js";import{B as c}from"./BadgeCount--medj_bL.js";import{useMDXComponents as C}from"./index-DH6Ulk9s.js";import{C as i,e as y}from"./blocks-Du73VAkD.js";import"./tw-merge-B12XlTeZ.js";import"./Text-Cd5k1vm4.js";import"./index-CmxWr2Xc.js";function d(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...C(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"badgecount",children:"BadgeCount"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BadgeCount"})," is a numeric indicator of unread messages or notifications on an app or UI element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { BadgeCount } from '@metamask/design-system-react';

<BadgeCount count={5} />;
`})}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"BadgeCount supports two sizes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BadgeCountSize.Md"})," (14px height) – default"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"BadgeCountSize.Lg"})," (20px height)"]}),`
`]}),`
`,e.jsx(i,{of:o}),`
`,e.jsx(n.h3,{id:"count-and-max",children:"Count and Max"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"count"}),": Required numeric value displayed in the badge."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"max"}),": Optional upper bound. If ",e.jsx(n.code,{children:"count > max"}),", it displays as ",e.jsx(n.code,{children:'"max+"'}),". Default is ",e.jsx(n.code,{children:"99"}),"."]}),`
`]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"})," prop to add custom CSS classes to the component. These classes are merged with the component's default classes using ",e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(n.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Adding new styles
<BadgeCount count={3} className="my-2 mx-1" />

// Overriding default styles
<BadgeCount
  count={5}
  className="bg-primary-default"
  textProps={{ color: TextColor.PrimaryInverse }}
/>
`})}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(n.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(n.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(y,{of:t}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function b(s={}){const{wrapper:n}={...C(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}const D={title:"React Components/BadgeCount",component:c,parameters:{docs:{page:b}},argTypes:{size:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to control the size of the BadgeCount"},count:{control:"number",description:"Required prop to show the count number"},max:{control:"number",description:'Optional prop to determine the max the count can go up to. If count > max, the count will be shown as "max+"'},textProps:{control:"object",description:"Optional props to be passed to the Text component used by count"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the BadgeCount component"}}},t={args:{size:a.Md,count:8,max:99}},o={render:()=>e.jsx("div",{className:"flex items-center gap-2",children:Object.values(a).map(s=>e.jsx(c,{size:s,count:100},s))})},r={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{count:10}),e.jsx(c,{count:100})]})};var l,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: BadgeCountSize.Md,
    count: 8,
    max: 99
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      {Object.values(BadgeCountSize).map(size => <BadgeCount key={size} size={size} count={100} />)}
    </div>
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,f;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <BadgeCount count={10} />
      <BadgeCount count={100} />
    </div>
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const T=["Default","Size","Max"];export{t as Default,r as Max,o as Size,T as __namedExportsOrder,D as default};
