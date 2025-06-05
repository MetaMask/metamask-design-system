import{j as e}from"./iframe-BknD6R0A.js";import{B as a}from"./BadgeIcon-i-2_6Hhr.js";import{useMDXComponents as g}from"./index-DH6Ulk9s.js";import{C as i,e as j}from"./blocks-Du73VAkD.js";import{I as o}from"./index-CiWXofBh.js";import"./tw-merge-B12XlTeZ.js";import"./Icon-2yQHbUm6.js";import"./index-CmxWr2Xc.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...g(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"badgeicon",children:"BadgeIcon"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BadgeIcon"})," is a circular indicator that contains an icon, used to provide quick context or visual tagging at a glance."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { BadgeIcon } from '@metamask/design-system-react';

<BadgeIcon iconName={IconName.User} />;
`})}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"icon-name",children:"Icon Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"iconName"})," prop to define which icon should appear inside the badge. This prop is required."]}),`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"Icon"})," component is a child of the ",e.jsx(n.code,{children:"BadgeIcon"})," component. Use the ",e.jsx(n.code,{children:"iconProps"})," prop to customize the internal ",e.jsx(n.code,{children:"Icon"})," component, such as changing the icon color."]}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"})," prop to add custom CSS classes to the BadgeIcon component. These classes are merged with the component's default styles using ",e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new utility styles"}),`
`,e.jsx(n.li,{children:"Override default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Adding spacing utilities
<BadgeIcon iconName={IconName.User} className="ml-2" />

// Overriding background color
<BadgeIcon
  iconName={IconName.User}
  className="bg-success-default"
  iconProps={{ color: IconColor.SuccessInverse }}
/>
`})}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with Tailwind or className alone. For static styles, prefer ",e.jsx(n.code,{children:"className"}),"."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(j,{of:c}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function u(s={}){const{wrapper:n}={...g(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}const C={title:"React Components/BadgeIcon",component:a,parameters:{docs:{page:u}},argTypes:{iconName:{control:"select",options:Object.keys(o),mapping:o,description:"Required prop to specify an icon to show"},iconProps:{control:"object",description:"Optional prop to pass additional properties to the icon"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the BadgeIcon component"}}},c={args:{iconName:o.Add,className:""}},r={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{iconName:o.Arrow2UpRight}),e.jsx(a,{iconName:o.User}),e.jsx(a,{iconName:o.Setting}),e.jsx(a,{iconName:o.Search})]}),name:"IconName"};var d,l,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    iconName: IconName.Add,
    className: ''
  }
}`,...(m=(l=c.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,h,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <BadgeIcon iconName={IconName.Arrow2UpRight} />
      <BadgeIcon iconName={IconName.User} />
      <BadgeIcon iconName={IconName.Setting} />
      <BadgeIcon iconName={IconName.Search} />
    </div>,
  name: 'IconName'
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const v=["Default","IconNameStory"];export{c as Default,r as IconNameStory,v as __namedExportsOrder,C as default};
