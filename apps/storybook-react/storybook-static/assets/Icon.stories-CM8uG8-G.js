import{j as e,r as M}from"./iframe-BknD6R0A.js";import{I as m,h as r,b as c}from"./index-CiWXofBh.js";import{I as o}from"./Icon-2yQHbUm6.js";import{useMDXComponents as z}from"./index-DH6Ulk9s.js";import{C as p,e as O}from"./blocks-Du73VAkD.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";function h(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...z(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"icon",children:"Icon"}),`
`,e.jsx(s.p,{children:"Icons are read-only symbols that represent ideas or objects, offered in standard sizes."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Icon, IconName } from '@metamask/design-system-react';

<Icon name={IconName.AddSquare} />;
`})}),`
`,e.jsx(p,{of:l}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.h3,{id:"name",children:"Name"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"name"})," prop and the ",e.jsx(s.code,{children:"IconName"})," enum to specify which icon to display."]}),`
`,e.jsx(p,{of:i}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"size"})," prop and the ",e.jsx(s.code,{children:"IconSize"})," enum to change the size of the icon."]}),`
`,e.jsx(s.p,{children:"Available sizes:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IconSize.Xs"})," (12px)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IconSize.Sm"})," (16px)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IconSize.Md"})," (20px) - Default"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IconSize.Lg"})," (24px)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"IconSize.Xl"})," (32px)"]}),`
`]}),`
`,e.jsx(p,{of:t}),`
`,e.jsx(s.h3,{id:"color",children:"Color"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"color"})," prop and the ",e.jsx(s.code,{children:"IconColor"})," enum to change the color of the icon."]}),`
`,e.jsx(p,{of:d}),`
`,e.jsx(s.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(s.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(s.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Adding new styles
<Icon className="my-4 mx-2" name={IconName.AddSquare} />

// Overriding default styles
<Icon className="text-inherit" name={IconName.AddSquare} />
`})}),`
`,e.jsxs(s.p,{children:["Note: When using ",e.jsx(s.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(s.h3,{id:"style",children:"Style"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(O,{of:l}),`
`,e.jsx(s.h2,{id:"references",children:"References"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function k(n={}){const{wrapper:s}={...z(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(h,{...n})}):h(n)}const W={title:"React Components/Icon",component:o,parameters:{docs:{page:k}},args:{name:m.AddSquare,size:r.Md},argTypes:{name:{description:"Required prop to specify which icon to render from the icon set",control:"select",options:Object.keys(m),mapping:m,table:{type:{summary:"IconName"},defaultValue:{summary:"required"}}},size:{description:"Optional prop to control the size of the icon",control:"select",options:Object.keys(r),mapping:r,table:{type:{summary:"IconSize"},defaultValue:{summary:"IconSize.Md"}}},color:{description:"Optional prop that sets the color of the icon using predefined theme colors",control:"select",options:Object.keys(c),mapping:c,table:{type:{summary:"IconColor"},defaultValue:{summary:"IconColor.IconDefault"}}}}},l={render:n=>{const[s,w]=M.useState(""),D=Object.keys(m).filter(a=>s===""||a.toLowerCase().includes(s.toLowerCase().replace(" ","_"))).sort();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"sr-only",children:"IconName search"}),e.jsx("input",{type:"text",value:s,onChange:a=>w(a.target.value),placeholder:"Search icons...",className:"rounded border p-2"})]}),e.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4",children:D.map(a=>e.jsxs("div",{className:"flex flex-col items-center justify-center rounded border p-4",children:[e.jsx(o,{className:"mb-2",...n,name:m[a]}),e.jsx("div",{className:"text-center text-xs",children:a})]},a))})]})},parameters:{colorScheme:"light"}},i={render:n=>e.jsx("div",{className:"flex items-baseline gap-4",children:e.jsx(o,{...n})})},t={render:n=>e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx(o,{...n,size:r.Xs}),e.jsx(o,{...n,size:r.Sm}),e.jsx(o,{...n,size:r.Md}),e.jsx(o,{...n,size:r.Lg}),e.jsx(o,{...n,size:r.Xl})]})},d={render:n=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.IconDefault})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.IconAlternative})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.IconMuted})}),e.jsx("div",{className:"bg-overlay-default p-4",children:e.jsx(o,{...n,color:c.OverlayInverse})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.PrimaryDefault})}),e.jsx("div",{className:"bg-primary-default p-4",children:e.jsx(o,{...n,color:c.PrimaryInverse})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.ErrorDefault})}),e.jsx("div",{className:"bg-error-default p-4",children:e.jsx(o,{...n,color:c.ErrorInverse})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.SuccessDefault})}),e.jsx("div",{className:"bg-success-default p-4",children:e.jsx(o,{...n,color:c.SuccessInverse})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.WarningDefault})}),e.jsx("div",{className:"bg-warning-default p-4",children:e.jsx(o,{...n,color:c.WarningInverse})}),e.jsx("div",{className:"bg-default p-4",children:e.jsx(o,{...n,color:c.InfoDefault})}),e.jsx("div",{className:"bg-info-default p-4",children:e.jsx(o,{...n,color:c.InfoInverse})})]})};var x,u,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [search, setSearch] = useState('');
    const iconList = Object.keys(IconName).filter(item => search === '' || item.toLowerCase().includes(search.toLowerCase().replace(' ', '_'))).sort();
    return <div className="space-y-4">
        <div className="flex flex-col">
          <label className="sr-only">IconName search</label>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search icons..." className="rounded border p-2" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          {iconList.map(iconKey => <div key={iconKey} className="flex flex-col items-center justify-center rounded border p-4">
              <Icon className="mb-2" {...args} name={IconName[iconKey as keyof typeof IconName]} />
              <div className="text-center text-xs">{iconKey}</div>
            </div>)}
        </div>
      </div>;
  },
  parameters: {
    colorScheme: 'light'
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var j,I,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div className="flex items-baseline gap-4">
      <Icon {...args} />
    </div>
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var g,N,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="flex items-baseline gap-4">
      <Icon {...args} size={IconSize.Xs} />
      <Icon {...args} size={IconSize.Sm} />
      <Icon {...args} size={IconSize.Md} />
      <Icon {...args} size={IconSize.Lg} />
      <Icon {...args} size={IconSize.Xl} />
    </div>
}`,...(y=(N=t.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var b,S,C;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="flex gap-4">
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.IconDefault} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.IconAlternative} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.IconMuted} />
      </div>
      <div className="bg-overlay-default p-4">
        <Icon {...args} color={IconColor.OverlayInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.PrimaryDefault} />
      </div>
      <div className="bg-primary-default p-4">
        <Icon {...args} color={IconColor.PrimaryInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.ErrorDefault} />
      </div>
      <div className="bg-error-default p-4">
        <Icon {...args} color={IconColor.ErrorInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.SuccessDefault} />
      </div>
      <div className="bg-success-default p-4">
        <Icon {...args} color={IconColor.SuccessInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.WarningDefault} />
      </div>
      <div className="bg-warning-default p-4">
        <Icon {...args} color={IconColor.WarningInverse} />
      </div>
      <div className="bg-default p-4">
        <Icon {...args} color={IconColor.InfoDefault} />
      </div>
      <div className="bg-info-default p-4">
        <Icon {...args} color={IconColor.InfoInverse} />
      </div>
    </div>
}`,...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const R=["Default","Name","Size","Color"];export{d as Color,l as Default,i as Name,t as Size,R as __namedExportsOrder,W as default};
