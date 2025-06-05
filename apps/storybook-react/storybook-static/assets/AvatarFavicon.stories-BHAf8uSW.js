import{j as e}from"./iframe-BknD6R0A.js";import{g as r}from"./index-CiWXofBh.js";import{A as n,S as s}from"./AvatarFavicon.dev-DaRlOe9W.js";import{useMDXComponents as I}from"./index-DH6Ulk9s.js";import{C as t,e as M}from"./blocks-Du73VAkD.js";import"./AvatarBase-CokxalKV.js";import"./Text-Cd5k1vm4.js";import"./tw-merge-B12XlTeZ.js";import"./metamask-NccMDQ5I.js";import"./index-CmxWr2Xc.js";function m(o){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...I(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a.h1,{id:"avatarfavicon",children:"AvatarFavicon"}),`
`,e.jsx(a.p,{children:"Avatar reserved for representing websites and dapps"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`import { AvatarFavicon } from '@metamask/design-system-react';

<AvatarFavicon
  name="OpenSea"
  src="path/to/opensea-favicon.ico"
  fallbackText="OS"
/>;
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(a.h2,{id:"props",children:"Props"}),`
`,e.jsx(a.h3,{id:"name",children:"Name"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"name"})," prop is optional and serves two purposes:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:["Used as alt text for the dapp logo (unless overridden by ",e.jsx(a.code,{children:"imageProps.alt"}),")"]}),`
`,e.jsxs(a.li,{children:["First letter is used as fallback display text when ",e.jsx(a.code,{children:"fallbackText"})," is not provided"]}),`
`]}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(a.h3,{id:"src-image-source",children:"Src (image source)"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"src"})," prop is optional and specifies the URL of the dapp's favicon or logo."]}),`
`,e.jsx(t,{of:i}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Note: The ",e.jsx(a.code,{children:"imageProps"})," prop allows you to customize the img element when ",e.jsx(a.code,{children:"src"})," is provided. All standard HTML img attributes are supported and will be passed to the underlying img element when ",e.jsx(a.code,{children:"src"})," is provided. This is useful for overriding the default alt text (which is the dapp name) when the AvatarFavicon is used as an accompaniment to an image."]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarFavicon
  name="OpenSea"
  src="path/to/opensea-favicon.ico"
  fallbackText="OS"
  imageProps={{ alt: 'OpenSea Logo', loading: 'lazy' }}
/>
`})}),`
`,e.jsx(a.h3,{id:"fallback-text",children:"Fallback Text"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"fallbackText"})," prop is optional and is used for display text when no image is provided. If not provided, the first letter of ",e.jsx(a.code,{children:"name"})," will be used."]}),`
`,e.jsx(t,{of:d}),`
`,e.jsxs(a.blockquote,{children:[`
`,e.jsxs(a.p,{children:["Note: The ",e.jsx(a.code,{children:"fallbackTextProps"})," prop allows you to customize the Text component used for the fallback display"]}),`
`]}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`<AvatarFavicon
  name="OpenSea"
  fallbackText="OS"
  fallbackTextProps={{ color: TextColor.PrimaryDefault }}
/>
`})}),`
`,e.jsx(a.h3,{id:"size",children:"Size"}),`
`,e.jsx(a.p,{children:"AvatarFavicon supports five sizes:"}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarFaviconSize.Xs"})," (16px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarFaviconSize.Sm"})," (24px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarFaviconSize.Md"})," (32px) - default"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarFaviconSize.Lg"})," (40px)"]}),`
`,e.jsxs(a.li,{children:[e.jsx(a.code,{children:"AvatarFaviconSize.Xl"})," (48px)"]}),`
`]}),`
`,e.jsx(a.p,{children:"The fallback text uses TextVariant.BodySm for all sizes to maintain consistency."}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(a.h3,{id:"has-border",children:"Has Border"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"hasBorder"})," prop enables a border around the AvatarFavicon."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(a.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(a.p,{children:["Use the ",e.jsx(a.code,{children:"className"}),` prop to add custom CSS classes to the component. These classes will be merged with the component's default
classes using `,e.jsx(a.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(a.ul,{children:[`
`,e.jsx(a.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(a.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(a.p,{children:"Example:"}),`
`,e.jsx(a.pre,{children:e.jsx(a.code,{className:"language-tsx",children:`// Adding new styles
<AvatarFavicon
  name="OpenSea"
  src="path/to/opensea-favicon.ico"
  fallbackText="OS"
  className="mx-2 my-4"
/>
`})}),`
`,e.jsx(a.h3,{id:"style",children:"Style"}),`
`,e.jsxs(a.p,{children:["The ",e.jsx(a.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with ",e.jsx(a.code,{children:"className"})," alone. For static styles, prefer using ",e.jsx(a.code,{children:"className"})," with Tailwind classes."]}),`
`,e.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(M,{of:c}),`
`,e.jsx(a.h2,{id:"references",children:"References"}),`
`,e.jsx(a.p,{children:e.jsx(a.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function _(o={}){const{wrapper:a}={...I(),...o.components};return a?e.jsx(a,{...o,children:e.jsx(m,{...o})}):m(o)}const q={title:"React Components/AvatarFavicon",component:n,parameters:{docs:{page:_}},argTypes:{name:{control:"text",description:"Required name of the dapp. Used as alt text for image and first letter is used as fallback if no fallbackText provided"},src:{control:"text",description:"Optional URL for the dapp favicon/logo. When provided, displays the image instead of fallback text"},imageProps:{control:"object",description:"Optional prop to pass to the underlying img element. Useful for overriding the default alt text"},size:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to control the size of the avatar. Defaults to AvatarFaviconSize.Md"},fallbackText:{control:"text",description:"Optional text to display when no image is provided. If not provided, first letter of name will be used"},fallbackTextProps:{control:"object",description:"Optional props to be passed to the Text component when rendering fallback text. Only used when src is not provided"},className:{control:"text",description:"Optional additional CSS classes to be applied to the component"},hasBorder:{control:"boolean",description:"Optional prop to add a border around the AvatarFavicon"}}},c={args:{src:s[0],name:"Adobe",fallbackText:"OS"}},i={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{name:"Adobe",fallbackText:"A",src:s[0]}),e.jsx(n,{name:"Github",fallbackText:"G",src:s[1]}),e.jsx(n,{name:"Google",fallbackText:"G",src:s[2]})]})},l={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{name:"Adobe",src:s[0]}),e.jsx(n,{name:"Github",src:s[1]}),e.jsx(n,{name:"Aave"})]})},d={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{name:"OpenSea",fallbackText:"OS"}),e.jsx(n,{name:"Uniswap",fallbackText:"UNI"}),e.jsx(n,{name:"Aave",fallbackText:"AAVE",src:"https://cryptologos.cc/logos/avalanche-avax-logo.png?v=040"})]})},p={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{name:"OpenSea",fallbackText:"O",size:r.Xs}),e.jsx(n,{name:"OpenSea",fallbackText:"OS",size:r.Sm}),e.jsx(n,{name:"OpenSea",fallbackText:"OS",size:r.Md}),e.jsx(n,{name:"OpenSea",fallbackText:"OS",size:r.Lg}),e.jsx(n,{name:"OpenSea",fallbackText:"OS",size:r.Xl})]})},x={render:()=>e.jsxs("div",{className:"flex gap-2 bg-primary-muted p-2",children:[e.jsx(n,{name:"Adobe",src:s[0]}),e.jsx(n,{name:"Github",src:s[1],hasBorder:!0})]})};var h,v,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_AVATARFAVICON_URIS[0],
    name: 'Adobe',
    fallbackText: 'OS'
  }
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var A,j,u;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarFavicon name="Adobe" fallbackText="A" src={SAMPLE_AVATARFAVICON_URIS[0]} />
      <AvatarFavicon name="Github" fallbackText="G" src={SAMPLE_AVATARFAVICON_URIS[1]} />
      <AvatarFavicon name="Google" fallbackText="G" src={SAMPLE_AVATARFAVICON_URIS[2]} />
    </div>
}`,...(u=(j=i.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var b,S,g;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarFavicon name="Adobe" src={SAMPLE_AVATARFAVICON_URIS[0]} />
      <AvatarFavicon name="Github" src={SAMPLE_AVATARFAVICON_URIS[1]} />
      <AvatarFavicon name="Aave" />
    </div>
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var T,O,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <AvatarFavicon name="OpenSea" fallbackText="OS" />
      <AvatarFavicon name="Uniswap" fallbackText="UNI" />
      <AvatarFavicon name="Aave" fallbackText="AAVE" src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=040" />
    </div>
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var k,y,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <AvatarFavicon name="OpenSea" fallbackText="O" size={AvatarFaviconSize.Xs} />
      <AvatarFavicon name="OpenSea" fallbackText="OS" size={AvatarFaviconSize.Sm} />
      <AvatarFavicon name="OpenSea" fallbackText="OS" size={AvatarFaviconSize.Md} />
      <AvatarFavicon name="OpenSea" fallbackText="OS" size={AvatarFaviconSize.Lg} />
      <AvatarFavicon name="OpenSea" fallbackText="OS" size={AvatarFaviconSize.Xl} />
    </div>
}`,...(N=(y=p.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var w,z,R;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 bg-primary-muted p-2">
      <AvatarFavicon name="Adobe" src={SAMPLE_AVATARFAVICON_URIS[0]} />
      <AvatarFavicon name="Github" src={SAMPLE_AVATARFAVICON_URIS[1]} hasBorder />
    </div>
}`,...(R=(z=x.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const H=["Default","Src","Name","FallbackText","Size","HasBorder"];export{c as Default,d as FallbackText,x as HasBorder,l as Name,p as Size,i as Src,H as __namedExportsOrder,q as default};
