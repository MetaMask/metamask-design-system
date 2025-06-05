import{j as e}from"./iframe-BknD6R0A.js";import{e as g,I as a}from"./index-CiWXofBh.js";import{B as o}from"./ButtonBase-DbNzlsEJ.js";import{useMDXComponents as Z}from"./index-DH6Ulk9s.js";import{C as t,e as $}from"./blocks-Du73VAkD.js";import{I as ee}from"./Icon-2yQHbUm6.js";import{T as ne}from"./Text-Cd5k1vm4.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";function j(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...Z(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"buttonbase",children:"ButtonBase"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ButtonBase"})," is a labeled element that a user can click or tap to initiate an action."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ButtonBase } from '@metamask/design-system-react';

<ButtonBase onClick={() => {}}>Button Base</ButtonBase>;
`})}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.h3,{id:"children",children:"Children"}),`
`,e.jsx(n.p,{children:"ButtonBase accepts both string and non-string children, with different rendering behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"String children:"})," Automatically wrapped in a Text component for consistent typography"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Non-string children:"})," Rendered as-is without the Text wrapper"]}),`
`]}),`
`,e.jsx(n.p,{children:"This means:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When passing a string, you can customize its appearance with the ",e.jsx(n.code,{children:"textProps"})," prop"]}),`
`,e.jsx(n.li,{children:"When passing a custom component or HTML, you're responsible for styling it yourself"}),`
`]}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"ButtonBase supports three sizes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonBaseSize.Sm"})," (32px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonBaseSize.Md"})," (40px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonBaseSize.Lg"})," (48px) - default"]}),`
`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ButtonBase, ButtonBaseSize } from '@metamask/design-system-react';

<ButtonBase size={ButtonBaseSize.Sm}>Small</ButtonBase>
<ButtonBase size={ButtonBaseSize.Md}>Medium</ButtonBase>
<ButtonBase size={ButtonBaseSize.Lg}>Large</ButtonBase>
`})}),`
`,e.jsx(n.h3,{id:"isfullwidth",children:"IsFullWidth"}),`
`,e.jsx(n.p,{children:"ButtonBase can be set to take up the full width of its container."}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.h3,{id:"starticonname-and-endiconname",children:"StartIconName and EndIconName"}),`
`,e.jsx(n.p,{children:"ButtonBase can display icons at the start and/or end of the content."}),`
`,e.jsx(n.h4,{id:"starticonname",children:"StartIconName"}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ButtonBase, IconName } from '@metamask/design-system-react';

<ButtonBase startIconName={IconName.AddSquare}>With Start Icon</ButtonBase>;
`})}),`
`,e.jsx(n.h4,{id:"endiconname",children:"EndIconName"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ButtonBase, IconName } from '@metamask/design-system-react';

<ButtonBase endIconName={IconName.AddSquare}>With End Icon</ButtonBase>;
`})}),`
`,e.jsx(n.h3,{id:"startaccessory-and-endaccessory",children:"StartAccessory and EndAccessory"}),`
`,e.jsx(n.p,{children:"ButtonBase can display custom accessories at the start and/or end of the content."}),`
`,e.jsx(n.h4,{id:"startaccessory",children:"StartAccessory"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(n.h4,{id:"endaccessory",children:"EndAccessory"}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(n.h3,{id:"isloading",children:"IsLoading"}),`
`,e.jsxs(n.p,{children:["ButtonBase can show a loading state with optional loading text. You can customize the loading icon using ",e.jsx(n.code,{children:"loadingIconProps"})," and the loading text using ",e.jsx(n.code,{children:"loadingTextProps"}),"."]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ButtonBase } from '@metamask/design-system-react';

// Default loading state
<ButtonBase isLoading loadingText="Submitting...">
  Submit
</ButtonBase>

// Custom loading icon
<ButtonBase
  isLoading
  loadingText="Submitting..."
  loadingIconProps={{
    'data-testid': 'loading-icon'
  }}
>
  Submit
</ButtonBase>
`})}),`
`,e.jsx(n.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,e.jsx(n.p,{children:"ButtonBase can be disabled."}),`
`,e.jsx(t,{of:B}),`
`,e.jsx(n.h3,{id:"aschild",children:"AsChild"}),`
`,e.jsxs(n.p,{children:["ButtonBase can render as different elements using the ",e.jsx(n.code,{children:"asChild"})," prop."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(n.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Adding new styles
<ButtonBase className="my-4 mx-2">Button content</ButtonBase>

// Overriding default styles
<ButtonBase className="bg-primary-default text-primary-inverse">Custom styled button</ButtonBase>
`})}),`
`,e.jsxs(n.p,{children:["Note: When using ",e.jsx(n.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx($,{of:r}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function se(s={}){const{wrapper:n}={...Z(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(j,{...s})}):j(s)}const he={title:"React Components/ButtonBase",component:o,parameters:{docs:{page:se}},argTypes:{children:{control:"text",description:"Required prop for the content to be rendered within the ButtonBase"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the ButtonBase component"},size:{control:"select",options:Object.keys(g),mapping:g,description:"Optional prop to control the size of the ButtonBase"},isFullWidth:{control:"boolean",description:"Optional prop that when true, makes the ButtonBase take up the full width of its container"},asChild:{control:"boolean",description:"Optional boolean that determines if the component should merge its props onto its immediate child instead of rendering a ButtonBase element"},isLoading:{control:"boolean",description:"Optional prop that when true, shows a loading spinner"},loadingText:{control:"text",description:"Optional prop for text to display when ButtonBase is in loading state"},startIconName:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to specify an icon to show at the start of the ButtonBase"},startIconProps:{control:"object",description:"Optional prop to pass additional properties to the start icon"},startAccessory:{control:"text",description:"Optional prop for a custom element to show at the start of the ButtonBase"},endIconName:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to specify an icon to show at the end of the ButtonBase"},endIconProps:{control:"object",description:"Optional prop to pass additional properties to the end icon"},endAccessory:{control:"text",description:"Optional prop for a custom element to show at the end of the ButtonBase"},isDisabled:{control:"boolean",description:"Optional prop that when true, disables the ButtonBase"},loadingIconProps:{control:"object",description:"Optional prop to pass additional properties to the loading icon"},textProps:{control:"object",description:"Optional props to be passed to the Text component when children is a string",table:{type:{summary:"Partial<TextProps>"}}},loadingTextProps:{control:"object",description:"Optional props to be passed to the loading Text component",table:{type:{summary:"Partial<TextProps>"}}}}},r={args:{children:"Button Base"}},i={render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...s,children:"Children"}),e.jsx(o,{...s,className:"h-auto rounded-lg py-2",children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(ee,{name:a.Arrow2UpRight}),e.jsx(ne,{asChild:!0,children:e.jsx("span",{children:"Send"})})]})})]})},c={render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...s,size:g.Sm,children:"Small"}),e.jsx(o,{...s,size:g.Md,children:"Medium"}),e.jsx(o,{...s,children:"Large"})]})},d={args:{children:"Full Width Button",isFullWidth:!0}},l={args:{children:"With Start Icon",startIconName:a.AddSquare}},p={args:{children:"With End Icon",endIconName:a.AddSquare}},h={args:{children:"With Start Accessory",startAccessory:"→"}},m={args:{children:"With End Accessory",endAccessory:"←"}},u={render:s=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...s,isLoading:!0,children:"Submit this form"}),e.jsx(o,{...s,isLoading:!0,loadingText:"Submitting...",children:"Submit this form"})]})},B={args:{children:"Disabled Button",isDisabled:!0}},x={render:s=>e.jsx(o,{...s,asChild:!0,children:e.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",children:"Custom Anchor Link"})})};var f,S,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Button Base'
  }
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,N,I;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2">
      <ButtonBase {...args}>Children</ButtonBase>
      <ButtonBase {...args} className="h-auto rounded-lg py-2">
        <div className="flex flex-col items-center gap-2">
          <Icon name={IconName.Arrow2UpRight} />
          <Text asChild>
            <span>Send</span>
          </Text>
        </div>
      </ButtonBase>
    </div>
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var w,A,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2">
      <ButtonBase {...args} size={ButtonBaseSize.Sm}>
        Small
      </ButtonBase>
      <ButtonBase {...args} size={ButtonBaseSize.Md}>
        Medium
      </ButtonBase>
      <ButtonBase {...args}>Large</ButtonBase>
    </div>
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var z,T,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    isFullWidth: true
  }
}`,...(O=(T=d.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var W,k,v;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare
  }
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var L,D,M;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare
  }
}`,...(M=(D=p.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var E,P,F;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'With Start Accessory',
    startAccessory: '→'
  }
}`,...(F=(P=h.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var q,R,_;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'With End Accessory',
    endAccessory: '←'
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var U,X,G;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2">
      <ButtonBase {...args} isLoading>
        Submit this form
      </ButtonBase>
      <ButtonBase {...args} isLoading loadingText="Submitting...">
        Submit this form
      </ButtonBase>
    </div>
}`,...(G=(X=u.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,Y,J;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    isDisabled: true
  }
}`,...(J=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,V;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <ButtonBase {...args} asChild>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Custom Anchor Link
      </a>
    </ButtonBase>
}`,...(V=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const me=["Default","Children","Size","IsFullWidth","StartIconName","EndIconName","StartAccessory","EndAccessory","IsLoading","IsDisabled","AsChild"];export{x as AsChild,i as Children,r as Default,m as EndAccessory,p as EndIconName,B as IsDisabled,d as IsFullWidth,u as IsLoading,c as Size,h as StartAccessory,l as StartIconName,me as __namedExportsOrder,he as default};
