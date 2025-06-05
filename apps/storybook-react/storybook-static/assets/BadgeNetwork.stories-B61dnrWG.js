import{j as e}from"./iframe-BknD6R0A.js";import{S as t}from"./AvatarNetwork.dev-eDz_btLn.js";import{B as s}from"./BadgeNetwork-DzNlzit-.js";import{useMDXComponents as A}from"./index-DH6Ulk9s.js";import{C as i,e as N}from"./blocks-Du73VAkD.js";import"./AvatarNetwork-C_C-yCA9.js";import"./index-CiWXofBh.js";import"./AvatarBase-CokxalKV.js";import"./Text-Cd5k1vm4.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";function d(a){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...A(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"badgenetwork",children:"BadgeNetwork"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"BadgeNetwork"})," indicates the network an entity is connected to."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { BadgeNetwork } from '@metamask/design-system-react';

<BadgeNetwork
  name="Arbitrum"
  src="path/to/arbitrum-logo.png"
  fallbackText="A"
/>;
`})}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"name-required",children:"Name (required)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"name"})," prop is required and serves two purposes:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Used as alt text for the network image (unless overridden by ",e.jsx(n.code,{children:"imageProps.alt"}),")"]}),`
`,e.jsxs(n.li,{children:["First letter is used as fallback display text when ",e.jsx(n.code,{children:"fallbackText"})," is not provided"]}),`
`]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"src-image-source",children:"Src (image source)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"src"})," prop is optional and specifies the URL of the network's logo image."]}),`
`,e.jsx(i,{of:o}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"imageProps"})," prop allows you to customize the img element when ",e.jsx(n.code,{children:"src"})," is provided. All standard HTML img attributes are supported and will be passed to the underlying img element when ",e.jsx(n.code,{children:"src"})," is provided. This is useful for overriding the default alt text (which is the network name) when the BadgeNetwork is used as an accompaniment to an image."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BadgeNetwork
  name="Ethereum"
  src="path/to/ethereum-logo.png"
  fallbackText="E"
  imageProps={{ alt: 'Ethereum Logo', loading: 'lazy' }}
/>
`})}),`
`,e.jsx(n.h3,{id:"fallback-text",children:"Fallback Text"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"fallbackText"})," prop is optional and is used for display text when no image is provided. If not provided, the first letter of ",e.jsx(n.code,{children:"name"})," will be used."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: The ",e.jsx(n.code,{children:"fallbackTextProps"})," prop allows you to customize the Text component used for the fallback display"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<BadgeNetwork
  name="Ethereum"
  fallbackText="E"
  fallbackTextProps={{ color: TextColor.PrimaryDefault }}
/>
`})}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"}),` prop to add custom CSS classes to the component. These classes will be merged with the component's default
classes using `,e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(n.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Adding new styles
<BadgeNetwork
  name="Ethereum"
  src="path/to/ethereum-logo.png"
  fallbackText="E"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(n.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(n.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(N,{of:r}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function y(a={}){const{wrapper:n}={...A(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(d,{...a})}):d(a)}const L={title:"React Components/BadgeNetwork",component:s,parameters:{docs:{page:y}},argTypes:{name:{control:"text",description:"Required name of the network. Used as alt text for image and first letter is used as fallback if no fallbackText provided"},src:{control:"text",description:"Optional URL for the network image. When provided, displays the image instead of fallback text"},imageProps:{control:"object",description:"Optional prop to pass to the underlying img element. Useful for overriding the default alt text"},fallbackText:{control:"text",description:"Optional text to display when no image is provided. If not provided, first letter of name will be used"},fallbackTextProps:{control:"object",description:"Optional props to be passed to the Text component when rendering fallback text. Only used when src is not provided"},className:{control:"text",description:"Optional additional CSS classes to be applied to the component"}}},r={args:{src:t[0],name:"Arbitrum",fallbackText:"ARB"}},o={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{name:"Arbitrum",fallbackText:"A",src:t[0]}),e.jsx(s,{name:"Avalanche",fallbackText:"A",src:t[1]}),e.jsx(s,{name:"BNB",fallbackText:"B",src:t[2]})]})},l={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{name:"Arbitrum",src:t[0]}),e.jsx(s,{name:"Avalanche",src:t[1]}),e.jsx(s,{name:"Polygon"})]})},c={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{name:"Ethereum",fallbackText:"E"}),e.jsx(s,{name:"Avalanche",fallbackText:"A"}),e.jsx(s,{name:"Polygon",fallbackText:"P"})]})};var m,p,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_AVATARNETWORK_URIS[0],
    name: 'Arbitrum',
    fallbackText: 'ARB'
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,u,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <BadgeNetwork name="Arbitrum" fallbackText="A" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <BadgeNetwork name="Avalanche" fallbackText="A" src={SAMPLE_AVATARNETWORK_URIS[1]} />
      <BadgeNetwork name="BNB" fallbackText="B" src={SAMPLE_AVATARNETWORK_URIS[2]} />
    </div>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,j,k;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <BadgeNetwork name="Arbitrum" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <BadgeNetwork name="Avalanche" src={SAMPLE_AVATARNETWORK_URIS[1]} />
      <BadgeNetwork name="Polygon" />
    </div>
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var b,w,T;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <BadgeNetwork name="Ethereum" fallbackText="E" />
      <BadgeNetwork name="Avalanche" fallbackText="A" />
      <BadgeNetwork name="Polygon" fallbackText="P" />
    </div>
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const I=["Default","Src","Name","FallbackText"];export{r as Default,c as FallbackText,l as Name,o as Src,I as __namedExportsOrder,L as default};
