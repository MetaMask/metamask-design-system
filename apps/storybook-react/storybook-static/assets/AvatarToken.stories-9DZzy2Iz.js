import{j as e}from"./iframe-BknD6R0A.js";import{g as r}from"./index-CiWXofBh.js";import{A as n}from"./AvatarToken-CQK5i-_p.js";import{S as s}from"./AvatarToken.dev-BHPu2s_a.js";import{useMDXComponents as R}from"./index-DH6Ulk9s.js";import{C as o,e as M}from"./blocks-Du73VAkD.js";import"./AvatarBase-CokxalKV.js";import"./Text-Cd5k1vm4.js";import"./tw-merge-B12XlTeZ.js";import"./eth-BMsHNo0d.js";import"./index-CmxWr2Xc.js";function h(t){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...R(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"avatartoken",children:"AvatarToken"}),`
`,e.jsx(a.p,{children:"Avatar reserved for representing tokens"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { AvatarToken } from '@metamask/design-system-react';

<AvatarToken
  name="Ethereum"
  src="path/to/ethereum-logo.png"
  fallbackText="ETH"
/>;
`})}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(a.h2,{id:"props",children:"Props"}),`
`,e.jsx(a.h3,{id:"name",children:"Name"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"name"})," prop is optional and serves two purposes:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Used as alt text for the token image (unless overridden by ",e.jsx(a.code,{children:"imageProps.alt"}),")"]}),`
`,e.jsxs(a.li,{children:["First letter is used as fallback display text when ",e.jsx(a.code,{children:"fallbackText"})," is not provided"]}),`
`]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(a.h3,{id:"src-image-source",children:"Src (image source)"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"src"})," prop is optional and specifies the URL of the token's logo image."]}),`
`,e.jsx(o,{of:i}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Note: The ",e.jsx(a.code,{children:"imageProps"})," prop allows you to customize the img element when ",e.jsx(a.code,{children:"src"})," is provided. All standard HTML img attributes are supported and will be passed to the underlying img element when ",e.jsx(a.code,{children:"src"})," is provided. This is useful for overriding the default alt text (which is the token name) when the AvatarToken is used as an accompaniment to an image."]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarToken
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
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarToken
  name="Ethereum"
  fallbackText="ETH"
  fallbackTextProps={{ color: TextColor.PrimaryDefault }}
/>
`})}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsx(a.p,{children:"AvatarToken supports five sizes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarTokenSize.Xs"})," (16px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarTokenSize.Sm"})," (24px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarTokenSize.Md"})," (32px) - default"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarTokenSize.Lg"})," (40px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarTokenSize.Xl"})," (48px)"]}),`
`]}),`
`,e.jsx(a.p,{children:"The fallback text uses TextVariant.BodySm for all sizes to maintain consistency."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(a.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"hasBorder"})," prop enables a border around the AvatarToken."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(a.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"className"}),` prop to add custom CSS classes to the component. These classes will be merged with the component's default
classes using `,e.jsx(a.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(a.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`// Adding new styles
<AvatarToken
  name="Ethereum"
  src="path/to/ethereum-logo.png"
  fallbackText="ETH"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsx(a.h3,{id:"style",children:"Style"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(a.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(a.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(M,{of:l}),`
`,e.jsx(a.h2,{id:"references",children:"References"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function H(t={}){const{wrapper:a}={...R(),...t.components};return a?e.jsx(a,{...t,children:e.jsx(h,{...t})}):h(t)}const q={title:"React Components/AvatarToken",component:n,parameters:{docs:{page:H}},argTypes:{name:{control:"text",description:"Required name of the token. Used as alt text for image and first letter is used as fallback if no fallbackText provided"},src:{control:"text",description:"Optional URL for the token image. When provided, displays the image instead of fallback text"},imageProps:{control:"object",description:"Optional prop to pass to the underlying img element. Useful for overriding the default alt text"},size:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to control the size of the avatar. Defaults to AvatarTokenSize.Md"},fallbackText:{control:"text",description:"Optional text to display when no image is provided. If not provided, first letter of name will be used"},fallbackTextProps:{control:"object",description:"Optional props to be passed to the Text component when rendering fallback text. Only used when src is not provided"},className:{control:"text",description:"Optional additional CSS classes to be applied to the component"},hasBorder:{control:"boolean",description:"Optional prop to add a border around the AvatarToken"}}},l={args:{src:s[0],name:"Bitcoin",fallbackText:"BTC"}},i={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{name:"Bitcoin",fallbackText:"BTC",src:s[0]}),e.jsx(n,{name:"Ethereum",fallbackText:"ETH",src:s[1]}),e.jsx(n,{name:"Floki",fallbackText:"FLOKI",src:s[2]})]})},c={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{name:"Bitcoin",src:s[0]}),e.jsx(n,{name:"Ethereum",src:s[1]}),e.jsx(n,{name:"USDC"})]})},d={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{name:"Ethereum",fallbackText:"ETH",src:"https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040"}),e.jsx(n,{name:"Bitcoin",fallbackText:"BTC"}),e.jsx(n,{name:"USDC",fallbackText:"USDC"})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{name:"Ethereum",fallbackText:"E",size:r.Xs}),e.jsx(n,{name:"Ethereum",fallbackText:"ETH",size:r.Sm}),e.jsx(n,{name:"Ethereum",fallbackText:"ETH",size:r.Md}),e.jsx(n,{name:"Ethereum",fallbackText:"ETH",size:r.Lg}),e.jsx(n,{name:"Ethereum",fallbackText:"ETH",size:r.Xl})]})},p={render:()=>e.jsxs("div",{className:"flex gap-2 bg-primary-muted p-2",children:[e.jsx(n,{name:"Bitcoin",fallbackText:"BTC",src:s[0]}),e.jsx(n,{name:"Ethereum",fallbackText:"ETH",src:s[1],hasBorder:!0})]})};var x,T,u;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_AVATARTOKEN_URIS[0],
    name: 'Bitcoin',
    fallbackText: 'BTC'
  }
}`,...(u=(T=l.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var f,k,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarToken name="Bitcoin" fallbackText="BTC" src={SAMPLE_AVATARTOKEN_URIS[0]} />
      <AvatarToken name="Ethereum" fallbackText="ETH" src={SAMPLE_AVATARTOKEN_URIS[1]} />
      <AvatarToken name="Floki" fallbackText="FLOKI" src={SAMPLE_AVATARTOKEN_URIS[2]} />
    </div>
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var g,A,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarToken name="Bitcoin" src={SAMPLE_AVATARTOKEN_URIS[0]} />
      <AvatarToken name="Ethereum" src={SAMPLE_AVATARTOKEN_URIS[1]} />
      <AvatarToken name="USDC" />
    </div>
}`,...(v=(A=c.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var b,E,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarToken name="Ethereum" fallbackText="ETH" src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=040" />
      <AvatarToken name="Bitcoin" fallbackText="BTC" />
      <AvatarToken name="USDC" fallbackText="USDC" />
    </div>
}`,...(S=(E=d.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,N,z;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <AvatarToken name="Ethereum" fallbackText="E" size={AvatarTokenSize.Xs} />
      <AvatarToken name="Ethereum" fallbackText="ETH" size={AvatarTokenSize.Sm} />
      <AvatarToken name="Ethereum" fallbackText="ETH" size={AvatarTokenSize.Md} />
      <AvatarToken name="Ethereum" fallbackText="ETH" size={AvatarTokenSize.Lg} />
      <AvatarToken name="Ethereum" fallbackText="ETH" size={AvatarTokenSize.Xl} />
    </div>
}`,...(z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var w,B,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarToken name="Bitcoin" fallbackText="BTC" src={SAMPLE_AVATARTOKEN_URIS[0]} />
      <AvatarToken name="Ethereum" fallbackText="ETH" src={SAMPLE_AVATARTOKEN_URIS[1]} hasBorder />
    </div>
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const G=["Default","Src","Name","FallbackText","Size","HasBorder"];export{l as Default,d as FallbackText,p as HasBorder,c as Name,m as Size,i as Src,G as __namedExportsOrder,q as default};
