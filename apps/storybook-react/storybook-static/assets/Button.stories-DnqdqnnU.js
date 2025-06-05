import{j as e}from"./iframe-BknD6R0A.js";import{f as r,e as a,I as o}from"./index-CiWXofBh.js";import{B as t}from"./Button-D5vx6m5_.js";import{useMDXComponents as K}from"./index-DH6Ulk9s.js";import{C as s,e as Q}from"./blocks-Du73VAkD.js";import"./ButtonPrimary-BC3HjURF.js";import"./tw-merge-B12XlTeZ.js";import"./ButtonBase-DbNzlsEJ.js";import"./Text-Cd5k1vm4.js";import"./Icon-2yQHbUm6.js";import"./ButtonTertiary-D29VVxXb.js";import"./ButtonSecondary-BhagDANA.js";import"./index-CmxWr2Xc.js";function v(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...K(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Button"})," is a labeled element that a user can click or tap to initiate an action."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@metamask/design-system-react';

<Button onClick={() => {}}>Button</Button>;
`})}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"variant",children:"Variant"}),`
`,e.jsx(n.p,{children:"The Button component supports three variants:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonVariant.Primary"})," (default) - High emphasis, used for primary actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonVariant.Secondary"})," - Medium emphasis, used for secondary actions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ButtonVariant.Tertiary"})," - Low emphasis, used for tertiary actions"]}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsx(n.p,{children:"Buttons support three sizes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Sm"})," (32px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Md"})," (40px)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Lg"})," (48px) - default"]}),`
`]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"isdanger",children:"IsDanger"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"isDanger"})," for destructive actions."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"isinverse",children:"IsInverse"}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"isInverse"})," when the button needs to be displayed on a dark background."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["NOTE: When both ",e.jsx(n.code,{children:"isInverse"})," and ",e.jsx(n.code,{children:"isDanger"})," are set to ",e.jsx(n.code,{children:"true"}),", all button variants (Primary, Secondary, and Tertiary) will have the same inverse danger styling."]}),`
`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"starticonname",children:"StartIconName"}),`
`,e.jsx(n.p,{children:"Buttons can display an icon at the start of the content."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"endiconname",children:"EndIconName"}),`
`,e.jsx(n.p,{children:"Buttons can display an icon at the end of the content."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"isloading",children:"IsLoading"}),`
`,e.jsx(n.p,{children:"Buttons can show a loading state with optional loading text."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"isdisabled",children:"IsDisabled"}),`
`,e.jsx(n.p,{children:"Buttons can be disabled."}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"isfullwidth",children:"IsFullWidth"}),`
`,e.jsx(n.p,{children:"Buttons can be set to take up the full width of their container."}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"class-name",children:"Class Name"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"className"})," prop to add custom CSS classes to the component. These classes will be merged with the component's default classes using ",e.jsx(n.code,{children:"twMerge"}),", allowing you to:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add new styles that don't exist in the default component"}),`
`,e.jsx(n.li,{children:"Override the component's default styles when needed"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Adding new styles
<Button className="mx-2 my-4">Button content</Button>
`})}),`
`,e.jsxs(n.p,{children:["Note: When using ",e.jsx(n.code,{children:"className"})," to override default styles, the custom classes will take precedence over the component's default classes."]}),`
`,e.jsx(n.h3,{id:"style",children:"Style"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"style"})," prop should primarily be used for dynamic inline styles that cannot be achieved with className alone. For static styles, prefer using className with Tailwind classes."]}),`
`,e.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(Q,{of:d}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function Y(i={}){const{wrapper:n}={...K(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(v,{...i})}):v(i)}const ue={title:"React Components/Button",component:t,parameters:{docs:{page:Y}},argTypes:{children:{control:"text",description:"Required prop for the content to be rendered within the Button"},variant:{control:"select",options:Object.keys(r),mapping:r,description:"Optional prop to control the variant of the Button"},isDanger:{control:"boolean",description:"Optional prop that when true, applies error/danger styling to the button"},isInverse:{control:"boolean",description:"Optional prop that when true, applies inverse styling to the button"},size:{control:"select",options:Object.keys(a),mapping:a,description:"Optional prop to control the size of the Button"},isFullWidth:{control:"boolean",description:"Optional prop that when true, makes the button take up the full width of its container"},isLoading:{control:"boolean",description:"Optional prop that when true, shows a loading spinner"},loadingText:{control:"text",description:"Optional prop for text to display when button is in loading state"},startIconName:{control:"select",options:Object.keys(o),mapping:o,description:"Optional prop to specify an icon to show at the start of the button"},endIconName:{control:"select",options:Object.keys(o),mapping:o,description:"Optional prop to specify an icon to show at the end of the button"},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the Button"}}},d={args:{children:"Button"}},c={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:r.Primary,children:"Primary"}),e.jsx(t,{variant:r.Secondary,children:"Secondary"}),e.jsx(t,{variant:r.Tertiary,children:"Tertiary"})]})})},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{size:a.Sm,children:"Small"}),e.jsx(t,{size:a.Md,children:"Medium"}),e.jsx(t,{size:a.Lg,children:"Large"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:r.Secondary,size:a.Sm,children:"Small"}),e.jsx(t,{variant:r.Secondary,size:a.Md,children:"Medium"}),e.jsx(t,{variant:r.Secondary,size:a.Lg,children:"Large"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{variant:r.Tertiary,size:a.Sm,children:"Small"}),e.jsx(t,{variant:r.Tertiary,size:a.Md,children:"Medium"}),e.jsx(t,{variant:r.Tertiary,size:a.Lg,children:"Large"})]})]})},u={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{isDanger:!0,children:"Primary Danger"}),e.jsx(t,{variant:r.Secondary,isDanger:!0,children:"Secondary Danger"}),e.jsx(t,{variant:r.Tertiary,isDanger:!0,children:"Tertiary Danger"})]})})},h={render:()=>e.jsxs("div",{className:"space-y-4 bg-primary-default p-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{isInverse:!0,children:"Primary Inverse"}),e.jsx(t,{variant:r.Secondary,isInverse:!0,children:"Secondary Inverse"}),e.jsx(t,{variant:r.Tertiary,isInverse:!0,children:"Tertiary Inverse"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{isDanger:!0,isInverse:!0,children:"Primary Danger Inverse"}),e.jsx(t,{variant:r.Secondary,isDanger:!0,isInverse:!0,children:"Secondary Danger Inverse"}),e.jsx(t,{variant:r.Tertiary,isDanger:!0,isInverse:!0,children:"Tertiary Danger Inverse"})]})]})},p={args:{children:"With Start Icon",startIconName:o.AddSquare}},m={args:{children:"With End Icon",endIconName:o.AddSquare}},x={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{isLoading:!0,loadingText:"Loading...",children:"Primary"}),e.jsx(t,{variant:r.Secondary,isLoading:!0,loadingText:"Loading...",children:"Secondary"}),e.jsx(t,{variant:r.Tertiary,isLoading:!0,loadingText:"Loading...",children:"Tertiary"})]})})},y={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{isDisabled:!0,children:"Primary"}),e.jsx(t,{variant:r.Secondary,isDisabled:!0,children:"Secondary"}),e.jsx(t,{variant:r.Tertiary,isDisabled:!0,children:"Tertiary"})]})})},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{isFullWidth:!0,children:"Full Width Primary"}),e.jsx(t,{variant:r.Secondary,isFullWidth:!0,children:"Full Width Secondary"}),e.jsx(t,{variant:r.Tertiary,isFullWidth:!0,children:"Full Width Tertiary"})]})};var j,B,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(S=(B=d.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,I,N;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-2">
        <Button variant={ButtonVariant.Primary}>Primary</Button>
        <Button variant={ButtonVariant.Secondary}>Secondary</Button>
        <Button variant={ButtonVariant.Tertiary}>Tertiary</Button>
      </div>
    </div>
}`,...(N=(I=c.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var T,b,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-2">
        <Button size={ButtonSize.Sm}>Small</Button>
        <Button size={ButtonSize.Md}>Medium</Button>
        <Button size={ButtonSize.Lg}>Large</Button>
      </div>
      <div className="flex gap-2">
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Sm}>
          Small
        </Button>
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Md}>
          Medium
        </Button>
        <Button variant={ButtonVariant.Secondary} size={ButtonSize.Lg}>
          Large
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant={ButtonVariant.Tertiary} size={ButtonSize.Sm}>
          Small
        </Button>
        <Button variant={ButtonVariant.Tertiary} size={ButtonSize.Md}>
          Medium
        </Button>
        <Button variant={ButtonVariant.Tertiary} size={ButtonSize.Lg}>
          Large
        </Button>
      </div>
    </div>
}`,...(D=(b=l.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var z,w,L;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-2">
        <Button isDanger>Primary Danger</Button>
        <Button variant={ButtonVariant.Secondary} isDanger>
          Secondary Danger
        </Button>
        <Button variant={ButtonVariant.Tertiary} isDanger>
          Tertiary Danger
        </Button>
      </div>
    </div>
}`,...(L=(w=u.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var V,M,W;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 bg-primary-default p-4">
      <div className="flex gap-2">
        <Button isInverse>Primary Inverse</Button>
        <Button variant={ButtonVariant.Secondary} isInverse>
          Secondary Inverse
        </Button>
        <Button variant={ButtonVariant.Tertiary} isInverse>
          Tertiary Inverse
        </Button>
      </div>
      <div className="flex gap-2">
        <Button isDanger isInverse>
          Primary Danger Inverse
        </Button>
        <Button variant={ButtonVariant.Secondary} isDanger isInverse>
          Secondary Danger Inverse
        </Button>
        <Button variant={ButtonVariant.Tertiary} isDanger isInverse>
          Tertiary Danger Inverse
        </Button>
      </div>
    </div>
}`,...(W=(M=h.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,k,F;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'With Start Icon',
    startIconName: IconName.AddSquare
  }
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var O,C,E;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'With End Icon',
    endIconName: IconName.AddSquare
  }
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var q,A,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-2">
        <Button isLoading loadingText="Loading...">
          Primary
        </Button>
        <Button variant={ButtonVariant.Secondary} isLoading loadingText="Loading...">
          Secondary
        </Button>
        <Button variant={ButtonVariant.Tertiary} isLoading loadingText="Loading...">
          Tertiary
        </Button>
      </div>
    </div>
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,U,X;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex gap-2">
        <Button isDisabled>Primary</Button>
        <Button variant={ButtonVariant.Secondary} isDisabled>
          Secondary
        </Button>
        <Button variant={ButtonVariant.Tertiary} isDisabled>
          Tertiary
        </Button>
      </div>
    </div>
}`,...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Button isFullWidth>Full Width Primary</Button>
      <Button variant={ButtonVariant.Secondary} isFullWidth>
        Full Width Secondary
      </Button>
      <Button variant={ButtonVariant.Tertiary} isFullWidth>
        Full Width Tertiary
      </Button>
    </div>
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const he=["Default","Variant","Size","IsDanger","IsInverse","StartIconName","EndIconName","IsLoading","IsDisabled","IsFullWidth"];export{d as Default,m as EndIconName,u as IsDanger,y as IsDisabled,g as IsFullWidth,h as IsInverse,x as IsLoading,l as Size,p as StartIconName,c as Variant,he as __namedExportsOrder,ue as default};
