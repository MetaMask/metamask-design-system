import{j as e}from"./iframe-BknD6R0A.js";import{a as r,g as c}from"./index-CiWXofBh.js";import{A as s}from"./AvatarAccount-DNx8cnc3.js";import{useMDXComponents as S}from"./index-DH6Ulk9s.js";import{C as o,e as k}from"./blocks-Du73VAkD.js";import"./Jazzicon-Dzhs54_4.js";import"./tw-merge-B12XlTeZ.js";import"./index.browser-C7WWooL1.js";import"./Maskicon-DRxatH_7.js";import"./Blockies-T47O4fXB.js";import"./AvatarBase-CokxalKV.js";import"./Text-Cd5k1vm4.js";import"./index-CmxWr2Xc.js";function p(n){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...S(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"avataraccount",children:"AvatarAccount"}),`
`,e.jsx(a.p,{children:"Avatar reserved for representing accounts inside of an avatar"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { AvatarAccount } from '@metamask/design-system-react';

<AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />;
`})}),`
`,e.jsx(o,{of:t}),`
`,e.jsx(a.h2,{id:"props",children:"Props"}),`
`,e.jsx(a.h3,{id:"address-required",children:"Address (required)"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"address"})," prop is required and is used as a unique identifier to generate the avatar art. Each address will produce a distinct visual representation."]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(a.h3,{id:"variant",children:"Variant"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"variant"})," prop controls the type of avatar art rendered. It accepts two options:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountVariant.Jazzicon"})," (default): Displays a Jazzicon."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountVariant.Blockies"}),": Displays a Blockies avatar."]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountVariant.Maskicon"}),": Displays a Maskicon avatar."]}),`
`]}),`
`,e.jsxs(a.p,{children:["Access to the Jazzicon, Blockies, Maskicon children components is available through the ",e.jsx(a.code,{children:"jazziconProps"}),", ",e.jsx(a.code,{children:"blockiesProps"}),", and ",e.jsx(a.code,{children:"maskiconProps"})," props respectively."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsx(a.p,{children:"AvatarAccount supports five sizes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountSize.Xs"})," (16px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountSize.Sm"})," (24px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountSize.Md"})," (32px) - default"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountSize.Lg"})," (40px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarAccountSize.Xl"})," (48px)"]}),`
`]}),`
`,e.jsx(a.p,{children:"The avatar art scales according to the selected size."}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(a.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"hasBorder"})," prop enables a border around the AvatarAccount."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(a.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"className"})," prop to apply custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(a.code,{children:"twMerge"}),", allowing you to add new styles or override defaults as needed."]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarAccount
  address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(k,{of:t}),`
`,e.jsx(a.h2,{id:"references",children:"References"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function M(n={}){const{wrapper:a}={...S(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(p,{...n})}):p(n)}const H={title:"React Components/AvatarAccount",component:s,parameters:{docs:{page:M}},argTypes:{variant:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to control the variant of the avatar account. Defaults to AvatarAccountVariant.Jazzicon"},size:{control:"select",options:Object.keys(c),mapping:c,description:"Optional prop to control the size of the avatar. Defaults to AvatarAccountSize.Md"},address:{control:"text",description:"Required address used as a unique identifier to generate the AvatarAccount art"},className:{control:"text",description:"Optional additional CSS classes to be applied to the component"},hasBorder:{control:"boolean",description:"Optional prop to add a border around the AvatarAccount"}}},t={args:{variant:r.Jazzicon,size:c.Md,address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"}},i={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",variant:r.Blockies}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",variant:r.Maskicon}),e.jsx(s,{address:"0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB"}),e.jsx(s,{address:"0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB",variant:r.Blockies}),e.jsx(s,{address:"0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB",variant:r.Maskicon})]})},d={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",variant:r.Blockies}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",variant:r.Jazzicon}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",variant:r.Maskicon})]})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:c.Xs}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:c.Sm}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:c.Md}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:c.Lg}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",size:c.Xl})]})},x={render:()=>e.jsxs("div",{className:"flex gap-2 bg-primary-muted p-2",children:[e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8"}),e.jsx(s,{address:"0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8",hasBorder:!0})]})};var u,A,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: AvatarAccountVariant.Jazzicon,
    size: AvatarAccountSize.Md,
    address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8'
  }
}`,...(h=(A=t.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var v,B,m;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" variant={AvatarAccountVariant.Blockies} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" variant={AvatarAccountVariant.Maskicon} />
      <AvatarAccount address="0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB" />
      <AvatarAccount address="0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB" variant={AvatarAccountVariant.Blockies} />
      <AvatarAccount address="0xb9b81f6bd23B953c5257C3b5E2F0c03B07E944eB" variant={AvatarAccountVariant.Maskicon} />
    </div>
}`,...(m=(B=i.parameters)==null?void 0:B.docs)==null?void 0:m.source}}};var j,f,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" variant={AvatarAccountVariant.Blockies} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" variant={AvatarAccountVariant.Jazzicon} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" variant={AvatarAccountVariant.Maskicon} />
    </div>
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var b,F,z;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" size={AvatarAccountSize.Xs} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" size={AvatarAccountSize.Sm} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" size={AvatarAccountSize.Md} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" size={AvatarAccountSize.Lg} />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" size={AvatarAccountSize.Xl} />
    </div>
}`,...(z=(F=l.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var E,g,D;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" />
      <AvatarAccount address="0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8" hasBorder />
    </div>
}`,...(D=(g=x.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};const G=["Default","Address","Variant","Size","HasBorder"];export{i as Address,t as Default,x as HasBorder,l as Size,d as Variant,G as __namedExportsOrder,H as default};
