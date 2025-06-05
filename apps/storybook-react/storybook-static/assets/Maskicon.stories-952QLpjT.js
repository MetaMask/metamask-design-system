import{j as e}from"./iframe-BknD6R0A.js";import{M as a}from"./Maskicon-DRxatH_7.js";import{useMDXComponents as M}from"./index-DH6Ulk9s.js";import{C as o,e as N}from"./blocks-Du73VAkD.js";import"./index.browser-C7WWooL1.js";import"./index-CmxWr2Xc.js";function t(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...M(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{id:"maskicon",children:"Maskicon"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"Maskicon"})," component renders a unique SVG identicon derived from a blockchain address. It supports Ethereum and other address formats (e.g., Solana, Bitcoin), and generates consistent visuals using a hash-based algorithm and a fixed color palette."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Maskicon } from '@metamask/design-system-react';

<Maskicon address="0x1234567890abcdef1234567890abcdef12345678" />;
`})}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(s.h3,{id:"address",children:"Address"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"address"})," prop is required and used as a unique identifier to generate the Maskicon image. Each address will generate a unique, deterministic pattern. The component supports various address formats:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Standard Ethereum addresses (e.g. ",e.jsx(s.code,{children:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"}),")"]}),`
`,e.jsxs(s.li,{children:["Bitcoin addresses (e.g. ",e.jsx(s.code,{children:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}),")"]}),`
`,e.jsxs(s.li,{children:["Solana addresses (e.g. ",e.jsx(s.code,{children:"4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7"}),")"]}),`
`,e.jsxs(s.li,{children:["CAIP-10 formatted addresses:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Ethereum (e.g. ",e.jsx(s.code,{children:"eip155:1:0xabc"}),")"]}),`
`,e.jsxs(s.li,{children:["Bitcoin (e.g. ",e.jsx(s.code,{children:"bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}),")"]}),`
`,e.jsxs(s.li,{children:["Solana (e.g. ",e.jsx(s.code,{children:"solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(s.h3,{id:"size",children:"Size"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"size"})," prop controls the dimensions (both height and width) of the Maskicon image in pixels. The default size is 32px."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(s.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(s.p,{children:["Use the ",e.jsx(s.code,{children:"className"})," prop to add custom CSS classes to the component."]}),`
`,e.jsx(s.p,{children:"Example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`// Adding new styles
<Maskicon
  address="0x1234567890abcdef1234567890abcdef12345678"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsxs(s.p,{children:["Note: When using ",e.jsx(s.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(s.h3,{id:"style",children:"Style"}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(s.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(N,{of:d}),`
`,e.jsx(s.h2,{id:"references",children:"References"}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function v(n={}){const{wrapper:s}={...M(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}const C={title:"React Temp Components/Maskicon",component:a,parameters:{docs:{page:v}},args:{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:32},argTypes:{address:{control:"text",description:"Required address used as a unique identifier to generate the Maskicon."},size:{control:"number",description:"Optional prop to control the size of the Maskicon."},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the Maskicon component."}}},r=["0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8","1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa","4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7","eip155:1:0xabc","bip122:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa","solana:mainnet:4Nd1m3NnENa8h8Xte1Xr7s9jcvKqqm21z3FvY9hKg4s7"],d={},i={render:()=>e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map(n=>e.jsx(a,{address:n,size:32},n))})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{address:r[0],size:16}),e.jsx(a,{address:r[1],size:24}),e.jsx(a,{address:r[2],size:32}),e.jsx(a,{address:r[3],size:48}),e.jsx(a,{address:r[4],size:64})]})};var l,m,h;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(h=(m=d.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,x,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {sampleAccountAddresses.map(address => <Maskicon key={address} address={address} size={32} />)}
    </div>
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var j,f,g;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Maskicon address={sampleAccountAddresses[0]} size={16} />
      <Maskicon address={sampleAccountAddresses[1]} size={24} />
      <Maskicon address={sampleAccountAddresses[2]} size={32} />
      <Maskicon address={sampleAccountAddresses[3]} size={48} />
      <Maskicon address={sampleAccountAddresses[4]} size={64} />
    </div>
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const T=["Default","Address","Size"];export{i as Address,d as Default,c as Size,T as __namedExportsOrder,C as default};
