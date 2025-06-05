import{j as e}from"./iframe-BknD6R0A.js";import{e as m,I as x}from"./index-CiWXofBh.js";import{B as o}from"./ButtonTertiary-D29VVxXb.js";import{useMDXComponents as X}from"./index-DH6Ulk9s.js";import{C as r,e as G}from"./blocks-Du73VAkD.js";import"./tw-merge-B12XlTeZ.js";import"./ButtonBase-DbNzlsEJ.js";import"./Text-Cd5k1vm4.js";import"./Icon-2yQHbUm6.js";import"./index-CmxWr2Xc.js";function g(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...X(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"buttontertiary",children:"ButtonTertiary"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ButtonTertiary"})," is a button for optional and lowest attention."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ButtonTertiary } from '@metamask/design-system-react';

<ButtonTertiary onClick={() => {}}>Button Tertiary</ButtonTertiary>;
`})}),`
`,e.jsx(r,{of:s}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(t.h3,{id:"size",children:"Size"}),`
`,e.jsx(t.p,{children:"ButtonTertiary supports three sizes:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ButtonTertiarySize.Sm"})," (32px)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ButtonTertiarySize.Md"})," (40px)"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"ButtonTertiarySize.Lg"})," (48px) - default"]}),`
`]}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.h3,{id:"isfullwidth",children:"IsFullWidth"}),`
`,e.jsx(t.p,{children:"ButtonTertiary can be set to take up the full width of its container."}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(t.h3,{id:"isdanger",children:"IsDanger"}),`
`,e.jsx(t.p,{children:"Use the danger variant for destructive actions."}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(t.h3,{id:"isinverse",children:"IsInverse"}),`
`,e.jsxs(t.p,{children:["Use the inverse variant when the button needs to be displayed on a dark background. When combined with ",e.jsx(t.code,{children:"isDanger"}),", the button will have inverse styling with error text color."]}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(t.h3,{id:"starticonname-and-endiconname",children:"StartIconName and EndIconName"}),`
`,e.jsx(t.p,{children:"ButtonTertiary can display icons at the start and/or end of the content."}),`
`,e.jsx(t.h4,{id:"starticonname",children:"StartIconName"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(t.h4,{id:"endiconname",children:"EndIconName"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.h3,{id:"isloading",children:"IsLoading"}),`
`,e.jsx(t.p,{children:"ButtonTertiary can show a loading state with optional loading text."}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(t.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,e.jsx(t.p,{children:"ButtonTertiary can be disabled."}),`
`,e.jsx(r,{of:u}),`
`,e.jsx(t.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(t.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(t.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(t.p,{children:"Example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// Adding new styles
<ButtonTertiary className="mx-2 my-4">Button content</ButtonTertiary>
`})}),`
`,e.jsxs(t.p,{children:["Note: When using ",e.jsx(t.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(t.h3,{id:"style",children:"Style"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(G,{of:s}),`
`,e.jsx(t.h2,{id:"references",children:"References"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function H(n={}){const{wrapper:t}={...X(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(g,{...n})}):g(n)}const re={title:"React Components/Button/variants/ButtonTertiary",component:o,parameters:{docs:{page:H}},argTypes:{children:{control:"text",description:"Required prop for the content to be rendered within the ButtonTertiary"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the ButtonTertiary component"},isDanger:{control:"boolean",description:"Optional prop that when true, applies error/danger styling to the button"},size:{control:"select",options:Object.values(m),description:"Optional prop to control the size of the ButtonTertiary"},isFullWidth:{control:"boolean",description:"Optional prop that when true, makes the button take up the full width of its container"},isLoading:{control:"boolean",description:"Optional prop that when true, shows a loading spinner"},loadingText:{control:"text",description:"Optional prop for text to display when button is in loading state"},startIconName:{control:"select",options:Object.values(x),description:"Optional prop to specify an icon to show at the start of the button"},startIconProps:{control:"object",description:"Optional prop to pass additional properties to the start icon"},startAccessory:{control:"text",description:"Optional prop for a custom element to show at the start of the button"},endIconName:{control:"select",options:Object.values(x),description:"Optional prop to specify an icon to show at the end of the button"},endIconProps:{control:"object",description:"Optional prop to pass additional properties to the end icon"},endAccessory:{control:"text",description:"Optional prop for a custom element to show at the end of the button"},isDisabled:{control:"boolean",description:"Optional prop that when true, disables the button"},loadingIconProps:{control:"object",description:"Optional prop to pass additional properties to the loading icon"}}},s={args:{children:"Button Tertiary"}},a={args:{children:"Danger",isDanger:!0}},i={render:n=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{...n,size:m.Sm,children:"Small"}),e.jsx(o,{...n,size:m.Md,children:"Medium"}),e.jsx(o,{...n,size:m.Lg,children:"Large"})]})},c={render:n=>e.jsxs("div",{className:"flex gap-2 rounded bg-primary-default p-4",children:[e.jsx(o,{...n,isInverse:!0,children:"Inverse"}),e.jsx(o,{...n,isInverse:!0,isDanger:!0,children:"Inverse Danger"})]})},d={args:{children:"Full Width",isFullWidth:!0}},l={args:{children:"With Start Icon",startIconName:x.AddSquare}},p={args:{children:"With End Icon",endIconName:x.AddSquare}},h={args:{children:"Loading",isLoading:!0,loadingText:"Loading..."}},u={args:{children:"Disabled Button Tertiary",isDisabled:!0}};var j,y,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Button Tertiary'
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var I,b,T;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Danger',
    isDanger: true
  }
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var B,S,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2">
      <ButtonTertiary {...args} size={ButtonTertiarySize.Sm}>
        Small
      </ButtonTertiary>
      <ButtonTertiary {...args} size={ButtonTertiarySize.Md}>
        Medium
      </ButtonTertiary>
      <ButtonTertiary {...args} size={ButtonTertiarySize.Lg}>
        Large
      </ButtonTertiary>
    </div>
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var v,N,D;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex gap-2 rounded bg-primary-default p-4">
      <ButtonTertiary {...args} isInverse>
        Inverse
      </ButtonTertiary>
      <ButtonTertiary {...args} isInverse isDanger>
        Inverse Danger
      </ButtonTertiary>
    </div>
}`,...(D=(N=c.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var z,O,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Full Width',
    isFullWidth: true
  }
}`,...(L=(O=d.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var M,W,C;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare
  }
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var k,F,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare
  }
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var E,q,P;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    isLoading: true,
    loadingText: 'Loading...'
  }
}`,...(P=(q=h.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var R,_,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button Tertiary',
    isDisabled: true
  }
}`,...(U=(_=u.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const se=["Default","IsDanger","Size","IsInverse","IsFullWidth","StartIconName","EndIconName","IsLoading","IsDisabled"];export{s as Default,p as EndIconName,a as IsDanger,u as IsDisabled,d as IsFullWidth,c as IsInverse,h as IsLoading,i as Size,l as StartIconName,se as __namedExportsOrder,re as default};
