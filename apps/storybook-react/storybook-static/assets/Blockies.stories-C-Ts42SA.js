import{j as e}from"./iframe-BknD6R0A.js";import{B as d}from"./Blockies-T47O4fXB.js";import{useMDXComponents as B}from"./index-DH6Ulk9s.js";import{C as i,e as b}from"./blocks-Du73VAkD.js";import"./index-CmxWr2Xc.js";function o(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...B(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"blockies",children:"Blockies"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Blockies"})," component generates a unique, blocky avatar image based on a provided address."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Blockies } from '@metamask/design-system-react';

<Blockies address="0x1234567890abcdef1234567890abcdef12345678" />;
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.h3,{id:"address",children:"Address"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"address"})," prop is required and used as a unique identifier to generate the Blockies image. Each address will generate a unique, deterministic pattern."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop controls the dimensions (both height and width) of the Blockies image in pixels. The default size is 32px."]}),`
`,e.jsx(i,{of:t}),`
`,e.jsx(s.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"alt"})," attribute provides alternative text for screen readers. By default, it includes the address for context (",e.jsx(s.code,{children:"Blockies for {address}"}),"). You can override this with custom alt text:"]}),`
`,e.jsx(s.h4,{id:"default-alt-text",children:"Default alt text"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Default alt text
<Blockies address="0x1234567890abcdef" />
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Renders: -->
<img alt="Blockies for 0x1234567890abcdef" />
`})}),`
`,e.jsx(s.h4,{id:"custom-alt-text",children:"Custom alt text"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Custom alt text
<Blockies address="0x1234567890abcdef" alt="User avatar for John Doe" />
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- Renders: -->
<img alt="User avatar for John Doe" />
`})}),`
`,e.jsx(s.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(s.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(s.li,{children:"Override the component's default styles when needed (Blockies has no default styles)"}),`
`]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Adding new styles
<Blockies
  address="0x1234567890abcdef1234567890abcdef12345678"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsxs(s.p,{children:["Note: When using ",e.jsx(s.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(s.h3,{id:"style",children:"Style"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(b,{of:r}),`
`,e.jsx(s.h2,{id:"references",children:"References"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function C(n={}){const{wrapper:s}={...B(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}const w={title:"React Temp Components/Blockies",component:d,parameters:{docs:{page:C}},args:{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:32},argTypes:{address:{control:"text",description:"Required address used as a unique identifier to generate the Blockies."},size:{control:"number",description:"Optional prop to control the size of the Blockies."},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the Blockies component."}}},a=["0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8","0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB","0x360507dfEC4Bf0c03495f91154A78C672599F308","0x50cA820Ff810F7687E7d0aDb23A830e3ac6032C3","0x840C9Eb73729E626673714D6E4dA8afc8Ccc90d3","0xCA0361BE89B7d47a6233d1875F0727ddeAB23377","0xD78CBcA88eCd65c6128511e46a518CDc6c66fC74","0xCFc8b1d1031ef2ecce3a98d5D79ce4D75Edb06bA","0xDe53fa2E659b6134991bB56F64B691990e5C44E7","0x8AceA3A9748294d1B5C25a08EFE37b756AafDFdd","0xEC5CE72f2e18B0017C88F7B12d3308119C5Cf129","0xeC56Da21c90Af6b50E4Ba5ec252bD97e735290fc"],r={},c={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map(n=>e.jsx(d,{address:n,size:32},n))})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(d,{address:a[0],size:16}),e.jsx(d,{address:a[1],size:24}),e.jsx(d,{address:a[2],size:32}),e.jsx(d,{address:a[3],size:48}),e.jsx(d,{address:a[4],size:64})]})};var l,h,x;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var p,m,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {sampleAccountAddresses.map(address => <Blockies key={address} address={address} size={32} />)}
    </div>
}`,...(u=(m=c.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,j,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Blockies address={sampleAccountAddresses[0]} size={16} />
      <Blockies address={sampleAccountAddresses[1]} size={24} />
      <Blockies address={sampleAccountAddresses[2]} size={32} />
      <Blockies address={sampleAccountAddresses[3]} size={48} />
      <Blockies address={sampleAccountAddresses[4]} size={64} />
    </div>
}`,...(g=(j=t.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const z=["Default","Address","Size"];export{c as Address,r as Default,t as Size,z as __namedExportsOrder,w as default};
