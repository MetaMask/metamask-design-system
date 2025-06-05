import{j as e}from"./iframe-BknD6R0A.js";import{g as t}from"./index-CiWXofBh.js";import{A as r}from"./AvatarNetwork-C_C-yCA9.js";import{S as s}from"./AvatarNetwork.dev-eDz_btLn.js";import{useMDXComponents as M}from"./index-DH6Ulk9s.js";import{C as o,e as O}from"./blocks-Du73VAkD.js";import"./AvatarBase-CokxalKV.js";import"./Text-Cd5k1vm4.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";function p(n){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...M(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"avatarnetwork",children:"AvatarNetwork"}),`
`,e.jsx(a.p,{children:"Avatar reserved for representing networks"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { AvatarNetwork } from '@metamask/design-system-react';

<AvatarNetwork
  name="Ethereum Network"
  src="path/to/ethereum-logo.png"
  fallbackText="ETH"
/>;
`})}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(a.h2,{id:"props",children:"Props"}),`
`,e.jsx(a.h3,{id:"name",children:"Name"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"name"})," prop is optional and serves two purposes:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Used as alt text for the network image (unless overridden by ",e.jsx(a.code,{children:"imageProps.alt"}),")"]}),`
`,e.jsxs(a.li,{children:["First letter is used as fallback display text when ",e.jsx(a.code,{children:"fallbackText"})," is not provided"]}),`
`]}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(a.h3,{id:"src-image-source",children:"Src (image source)"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"src"})," prop is optional and specifies the URL of the network's logo image."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Note: The ",e.jsx(a.code,{children:"imageProps"})," prop allows you to customize the img element when ",e.jsx(a.code,{children:"src"})," is provided. All standard HTML img attributes are supported and will be passed to the underlying img element when ",e.jsx(a.code,{children:"src"})," is provided. This is useful for overriding the default alt text (which is the network name) when the AvatarNetwork is used as an accompaniment to an image."]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarNetwork
  name="Ethereum"
  src="path/to/ethereum-logo.png"
  fallbackText="ETH"
  imageProps={{ alt: 'Ethereum Logo', loading: 'lazy' }}
/>
`})}),`
`,e.jsx(a.h3,{id:"fallback-text",children:"Fallback Text"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"fallbackText"})," prop is optional and is used for display text when no image is provided. If not provided, the first letter of ",e.jsx(a.code,{children:"name"})," will be used."]}),`
`,e.jsx(o,{of:d}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Note: The ",e.jsx(a.code,{children:"fallbackTextProps"})," prop allows you to customize the Text component used for the fallback display"]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarNetwork
  name="Ethereum"
  fallbackText="ETH"
  fallbackTextProps={{ color: TextColor.PrimaryDefault }}
/>
`})}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsx(a.p,{children:"AvatarNetwork supports five sizes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarNetworkSize.Xs"})," (16px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarNetworkSize.Sm"})," (24px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarNetworkSize.Md"})," (32px) - default"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarNetworkSize.Lg"})," (40px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarNetworkSize.Xl"})," (48px)"]}),`
`]}),`
`,e.jsx(a.p,{children:"The fallback text uses TextVariant.BodySm for all sizes to maintain consistency."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(a.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"hasBorder"})," prop enables a border around the AvatarNetwork."]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(a.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"className"}),` prop to add custom CSS classes to the component. These classes will be merged with the component's default
classes using `,e.jsx(a.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(a.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`// Adding new styles
<AvatarNetwork
  name="Ethereum"
  src="path/to/ethereum-logo.png"
  fallbackText="ETH"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsx(a.h3,{id:"style",children:"Style"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(a.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(a.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(O,{of:l}),`
`,e.jsx(a.h2,{id:"references",children:"References"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function _(n={}){const{wrapper:a}={...M(),...n.components};return a?e.jsx(a,{...n,children:e.jsx(p,{...n})}):p(n)}const X={title:"React Components/AvatarNetwork",component:r,parameters:{docs:{page:_}},argTypes:{name:{control:"text",description:"Required name of the network. Used as alt text for image and first letter is used as fallback if no fallbackText provided"},src:{control:"text",description:"Optional URL for the network image. When provided, displays the image instead of fallback text"},imageProps:{control:"object",description:"Optional prop to pass to the underlying img element. Useful for overriding the default alt text"},size:{control:"select",options:Object.keys(t),mapping:t,description:"Optional prop to control the size of the avatar. Defaults to AvatarNetworkSize.Md"},fallbackText:{control:"text",description:"Optional text to display when no image is provided. If not provided, first letter of name will be used"},fallbackTextProps:{control:"object",description:"Optional props to be passed to the Text component when rendering fallback text. Only used when src is not provided"},className:{control:"text",description:"Optional additional CSS classes to be applied to the component"},hasBorder:{control:"boolean",description:"Optional prop to add a border around the AvatarNetwork"}}},l={args:{src:s[0],name:"Arbitrum",fallbackText:"ARB"}},c={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{name:"Arbitrum",fallbackText:"ARB",src:s[0]}),e.jsx(r,{name:"Avalanche",fallbackText:"AVA",src:s[1]}),e.jsx(r,{name:"BNB",fallbackText:"BNB",src:s[2]})]})},i={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{name:"Arbitrum",src:s[0]}),e.jsx(r,{name:"Avalanche",src:s[1]}),e.jsx(r,{name:"Polygon"})]})},d={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{name:"Ethereum",fallbackText:"ETH",src:"https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040"}),e.jsx(r,{name:"Avalanche",fallbackText:"AVA"}),e.jsx(r,{name:"Polygon",fallbackText:"POL"})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{name:"Ethereum",fallbackText:"E",size:t.Xs}),e.jsx(r,{name:"Ethereum",fallbackText:"ETH",size:t.Sm}),e.jsx(r,{name:"Ethereum",fallbackText:"ETH",size:t.Md}),e.jsx(r,{name:"Ethereum",fallbackText:"ETH",size:t.Lg}),e.jsx(r,{name:"Ethereum",fallbackText:"ETH",size:t.Xl})]})},h={render:()=>e.jsxs("div",{className:"flex gap-2 bg-primary-muted p-2",children:[e.jsx(r,{name:"Arbitrum",src:s[0]}),e.jsx(r,{name:"Avalanche",src:s[1],hasBorder:!0})]})};var x,u,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_AVATARNETWORK_URIS[0],
    name: 'Arbitrum',
    fallbackText: 'ARB'
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var A,j,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarNetwork name="Arbitrum" fallbackText="ARB" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <AvatarNetwork name="Avalanche" fallbackText="AVA" src={SAMPLE_AVATARNETWORK_URIS[1]} />
      <AvatarNetwork name="BNB" fallbackText="BNB" src={SAMPLE_AVATARNETWORK_URIS[2]} />
    </div>
}`,...(k=(j=c.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var g,v,T;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarNetwork name="Arbitrum" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <AvatarNetwork name="Avalanche" src={SAMPLE_AVATARNETWORK_URIS[1]} />
      <AvatarNetwork name="Polygon" />
    </div>
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var b,N,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarNetwork name="Ethereum" fallbackText="ETH" src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040" />
      <AvatarNetwork name="Avalanche" fallbackText="AVA" />
      <AvatarNetwork name="Polygon" fallbackText="POL" />
    </div>
}`,...(w=(N=d.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var E,S,y;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <AvatarNetwork name="Ethereum" fallbackText="E" size={AvatarNetworkSize.Xs} />
      <AvatarNetwork name="Ethereum" fallbackText="ETH" size={AvatarNetworkSize.Sm} />
      <AvatarNetwork name="Ethereum" fallbackText="ETH" size={AvatarNetworkSize.Md} />
      <AvatarNetwork name="Ethereum" fallbackText="ETH" size={AvatarNetworkSize.Lg} />
      <AvatarNetwork name="Ethereum" fallbackText="ETH" size={AvatarNetworkSize.Xl} />
    </div>
}`,...(y=(S=m.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var R,z,P;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarNetwork name="Arbitrum" src={SAMPLE_AVATARNETWORK_URIS[0]} />
      <AvatarNetwork name="Avalanche" src={SAMPLE_AVATARNETWORK_URIS[1]} hasBorder />
    </div>
}`,...(P=(z=h.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const F=["Default","Src","Name","FallbackText","Size","HasBorder"];export{l as Default,d as FallbackText,h as HasBorder,i as Name,m as Size,c as Src,F as __namedExportsOrder,X as default};
