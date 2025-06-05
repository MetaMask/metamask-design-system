import{r as x,j as e}from"./iframe-BknD6R0A.js";import{t as S}from"./tw-merge-B12XlTeZ.js";import{I as te}from"./Icon-2yQHbUm6.js";import{I as ne,b as oe,h as se,f as ae}from"./index-CiWXofBh.js";import{T as re}from"./Text-Cd5k1vm4.js";import{useMDXComponents as G}from"./index-DH6Ulk9s.js";import{C as l,e as ie}from"./blocks-Du73VAkD.js";import{B as le}from"./Button-D5vx6m5_.js";import"./index-CmxWr2Xc.js";import"./ButtonPrimary-BC3HjURF.js";import"./ButtonBase-DbNzlsEJ.js";import"./ButtonTertiary-D29VVxXb.js";import"./ButtonSecondary-BhagDANA.js";const b=x.forwardRef(({id:n,isSelected:t,isDisabled:o=!1,isInvalid:r=!1,label:d,labelProps:i,onChange:a,inputProps:U,checkboxContainerProps:g,checkedIconProps:y,className:_,style:H,...$},X)=>{const J=k=>{o||a==null||a(k.target.checked)},j=()=>{o||a==null||a(!t)},K=k=>{k.key==="Enter"&&(k.preventDefault(),j())};x.useImperativeHandle(X,()=>({toggle:j}),[j]);const Q=S("inline-flex items-center",o&&"cursor-not-allowed opacity-50",_),Y=t?"bg-primary-default hover:bg-primary-default-hover active:bg-primary-default-pressed":"bg-background-default hover:bg-background-default-hover active:bg-background-default-pressed";let w="border-border-default";t?w="border-primary-default":r&&(w="border-error-default");const Z=S("relative flex h-6 w-6 items-center justify-center rounded border-2 p-0 transition-transform active:scale-95",Y,w,g==null?void 0:g.className),ee=S("pointer-events-none transition-opacity",t?"opacity-100":"opacity-0",y==null?void 0:y.className);return e.jsxs("label",{htmlFor:n,className:Q,style:H,...$,children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"checkbox",id:n,checked:t,disabled:o,"aria-invalid":r,onChange:J,onKeyDown:K,className:"absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed",...U}),e.jsx("div",{className:Z,...g,children:e.jsx(te,{name:ne.Check,color:oe.PrimaryInverse,size:se.Sm,...y,className:ee})})]}),d?e.jsx(re,{asChild:!0,...i,className:S("ml-3",i==null?void 0:i.className),children:e.jsx("span",{children:d})}):null]})});b.displayName="Checkbox";b.__docgenInfo={description:"",methods:[{name:"toggle",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Checkbox",props:{id:{required:!0,tsType:{name:"string"},description:`Required unique identifier for the checkbox input element.
This is used for the input's ID and the label's htmlFor attributes.`},isSelected:{required:!0,tsType:{name:"boolean"},description:`Required prop to determine whether the checkbox is currently selected.
This component is fully controlled, so you must manage this state
in your parent component.`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, disables the checkbox.

@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, displays the invalid/error state of the checkbox.

@default false`,defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:"Optional label prop that renders text or a React node as a label beside the checkbox."},labelProps:{required:!1,tsType:{name:"Omit",elements:[{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Optional prop for inline styles
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to change the font size of the component. The Text component uses responsive font sizes.
   * Different variants map to specific HTML elements by default.
   *
   * @default TextVariant.BodyMd
   */
  variant?: TextVariant;
  /**
   * The text content or elements to be rendered within the component.
   */
  children: React.ReactNode;
  /**
   * Optional prop for additional CSS classes to be applied to the Text component.
   */
  className?: string;
  /**
   * Optional prop to control the font weight of the text.
   * Regular: 400
   * Medium: 500
   * Bold: 700
   */
  fontWeight?: FontWeight;
  /**
   * Optional prop to adjust the font family.
   * Default: CentraNo1
   * Accent: MMSans
   * Hero: MMPoly
   */
  fontFamily?: FontFamily;
  /**
   * Optional prop to control the font style of the text.
   * Options: Normal, Italic
   */
  fontStyle?: FontStyle;
  /**
   * Optional prop to apply text transformation to the content.
   * Options: Uppercase, Lowercase, Capitalize, Normal
   */
  textTransform?: TextTransform;
  /**
   * Optional prop to control the text alignment within its container.
   * Options: Left, Center, Right, Justify
   */
  textAlign?: TextAlign;
  /**
   * Optional prop to determine how text should wrap when it reaches the edge of its container.
   * Options: BreakWord, Anywhere, Normal
   */
  overflowWrap?: OverflowWrap;
  /**
   * Optional prop that when true, adds an ellipsis (...) when text overflows its container.
   *
   * @default false
   */
  ellipsis?: boolean;
  /**
   * Optional boolean that determines if the component should merge its props onto its immediate child
   * instead of rendering a default DOM element.
   *
   * @default false
   */
  asChild?: boolean;
  /**
   * Optional prop that sets the color of the text using predefined theme colors.
   *
   * @default TextColor.TextDefault
   */
  color?: TextColor;
  /**
   * Optional prop for testing purposes
   */
  'data-testid'?: string;
}`,signature:{properties:[{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1},description:"Optional prop for inline styles"},{key:"variant",value:{name:"TextVariant",required:!1},description:`Optional prop to change the font size of the component. The Text component uses responsive font sizes.
Different variants map to specific HTML elements by default.

@default TextVariant.BodyMd`},{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0},description:"The text content or elements to be rendered within the component."},{key:"className",value:{name:"string",required:!1},description:"Optional prop for additional CSS classes to be applied to the Text component."},{key:"fontWeight",value:{name:"FontWeight",required:!1},description:`Optional prop to control the font weight of the text.
Regular: 400
Medium: 500
Bold: 700`},{key:"fontFamily",value:{name:"FontFamily",required:!1},description:`Optional prop to adjust the font family.
Default: CentraNo1
Accent: MMSans
Hero: MMPoly`},{key:"fontStyle",value:{name:"FontStyle",required:!1},description:`Optional prop to control the font style of the text.
Options: Normal, Italic`},{key:"textTransform",value:{name:"TextTransform",required:!1},description:`Optional prop to apply text transformation to the content.
Options: Uppercase, Lowercase, Capitalize, Normal`},{key:"textAlign",value:{name:"TextAlign",required:!1},description:`Optional prop to control the text alignment within its container.
Options: Left, Center, Right, Justify`},{key:"overflowWrap",value:{name:"OverflowWrap",required:!1},description:`Optional prop to determine how text should wrap when it reaches the edge of its container.
Options: BreakWord, Anywhere, Normal`},{key:"ellipsis",value:{name:"boolean",required:!1},description:`Optional prop that when true, adds an ellipsis (...) when text overflows its container.

@default false`},{key:"asChild",value:{name:"boolean",required:!1},description:`Optional boolean that determines if the component should merge its props onto its immediate child
instead of rendering a default DOM element.

@default false`},{key:"color",value:{name:"TextColor",required:!1},description:`Optional prop that sets the color of the text using predefined theme colors.

@default TextColor.TextDefault`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop for testing purposes"}]}}],raw:"Partial<TextProps>"},{name:"literal",value:"'children'"}],raw:"Omit<Partial<TextProps>, 'children'>"},description:"Optional props to be passed to the label's Text component"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isSelected: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isSelected"}],return:{name:"void"}}},description:`Required callback for when the checked state changes.
Use this to update your state.`},inputProps:{required:!1,tsType:{name:"intersection",raw:`Omit<
  ComponentProps<'input'>,
  'type' | 'checked' | 'onChange' | 'disabled'
> & {
  [key: \`data-\${string}\`]: string;
}`,elements:[{name:"Omit",elements:[{name:"ComponentProps",elements:[{name:"literal",value:"'input'"}],raw:"ComponentProps<'input'>"},{name:"union",raw:"'type' | 'checked' | 'onChange' | 'disabled'",elements:[{name:"literal",value:"'type'"},{name:"literal",value:"'checked'"},{name:"literal",value:"'onChange'"},{name:"literal",value:"'disabled'"}]}],raw:`Omit<
  ComponentProps<'input'>,
  'type' | 'checked' | 'onChange' | 'disabled'
>`},{name:"signature",type:"object",raw:"{\n  [key: `data-${string}`]: string;\n}",signature:{properties:[{key:{name:"literal",value:"`data-${string}`"},value:{name:"string",required:!0}}]}}]},description:"Optional props passed to the input element."},checkboxContainerProps:{required:!1,tsType:{name:"intersection",raw:`(Omit<ComponentProps<'div'>, 'children'> & {
  className?: string;
}) &
  Record<string, unknown>`,elements:[{name:"unknown"},{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}]},description:"Optional props passed to the container div wrapping the checkbox icon."},checkedIconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`SVGProps<SVGElementProps> & {
  /**
   * Required prop to specify which icon to render from the icon set
   */
  name: IconName;
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   *
   * @default IconSize.Md
   */
  size?: IconSize;
  /**
   * Optional prop that sets the color of the icon using predefined theme colors
   *
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Additional CSS classes to be added to the component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
}`,elements:[{name:"SVGProps",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'svg'"}],raw:"ComponentPropsWithoutRef<'svg'>"}],raw:"SVGProps<SVGElementProps>"},{name:"signature",type:"object",raw:`{
  /**
   * Required prop to specify which icon to render from the icon set
   */
  name: IconName;
  /**
   * Optional prop to control the size of the icon
   * Different sizes map to specific pixel dimensions
   *
   * @default IconSize.Md
   */
  size?: IconSize;
  /**
   * Optional prop that sets the color of the icon using predefined theme colors
   *
   * @default IconColor.IconDefault
   */
  color?: IconColor;
  /**
   * Additional CSS classes to be added to the component.
   * These classes will be merged with the component's default classes using twMerge.
   */
  className?: string;
  /**
   * Optional CSS styles to be applied to the component.
   * Should be used sparingly and only for dynamic styles that can't be achieved with className.
   */
  style?: React.CSSProperties;
  /**
   * Optional prop to add a test id to the icon
   */
  'data-testid'?: string;
}`,signature:{properties:[{key:"name",value:{name:"IconName",required:!0},description:"Required prop to specify which icon to render from the icon set"},{key:"size",value:{name:"IconSize",required:!1},description:`Optional prop to control the size of the icon
Different sizes map to specific pixel dimensions

@default IconSize.Md`},{key:"color",value:{name:"IconColor",required:!1},description:`Optional prop that sets the color of the icon using predefined theme colors

@default IconColor.IconDefault`},{key:"className",value:{name:"string",required:!1},description:`Additional CSS classes to be added to the component.
These classes will be merged with the component's default classes using twMerge.`},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]}],raw:"Partial<IconProps>"},description:"Optional props to be passed to the check Icon component"},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the Checkbox component.
These classes will be merged with the component's default classes using twMerge.`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Optional CSS styles for the outer container."}}};function v(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...G(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Checkbox"})," allows users to select one or more options from a set of choices."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { Checkbox } from '@metamask/design-system-react';
import { useState } from 'react';

const [isSelected, setIsSelected] = useState(false);

<Checkbox
  id="notifications-checkbox"
  label="Enable notifications"
  isSelected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
/>;
`})}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(t.h3,{id:"id",children:e.jsx(t.code,{children:"id"})}),`
`,e.jsx(t.p,{children:"Required unique identifier for the checkbox input element. This is used for the input's id and the label's htmlFor attributes to ensure proper accessibility and form association."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox id="accept-terms" label="I accept the terms" isSelected={false} onChange={() => {}} />
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"isselected",children:e.jsx(t.code,{children:"isSelected"})}),`
`,e.jsx(t.p,{children:"Required prop to determine whether the checkbox is currently selected. This component is fully controlled, so you must manage this state in your parent component."}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"isdisabled",children:e.jsx(t.code,{children:"isDisabled"})}),`
`,e.jsx(t.p,{children:"Optional prop that when true, disables the checkbox."}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"isinvalid",children:e.jsx(t.code,{children:"isInvalid"})}),`
`,e.jsx(t.p,{children:"Optional prop that when true, displays the invalid/error state of the checkbox."}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"label",children:e.jsx(t.code,{children:"label"})}),`
`,e.jsx(t.p,{children:"Optional label prop that renders text or a React node as a label beside the checkbox."}),`
`,e.jsx(l,{of:u}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"labelprops",children:e.jsx(t.code,{children:"labelProps"})}),`
`,e.jsx(t.p,{children:"Optional props to be passed to the label's Text component."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox id="styled-label" label="Label" labelProps={{ className: 'text-muted' }} />
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"onchange",children:e.jsx(t.code,{children:"onChange"})}),`
`,e.jsx(t.p,{children:"Required callback for when the checked state changes. Use this to update your state."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useState } from 'react';

const [isSelected, setIsSelected] = useState(false);

<Checkbox
  id="toggle-checkbox"
  label="Check me"
  isSelected={isSelected}
  onChange={() => setIsSelected(!isSelected)}
/>
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"inputprops",children:e.jsx(t.code,{children:"inputProps"})}),`
`,e.jsx(t.p,{children:"Optional props passed to the input element. This allows you to pass additional attributes like data-testid, aria-describedby, etc."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox
  id="accessible-checkbox"
  inputProps={{
    'data-testid': 'my-checkbox',
    'aria-describedby': 'help-text'
  }}
/>
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"checkboxcontainerprops",children:e.jsx(t.code,{children:"checkboxContainerProps"})}),`
`,e.jsx(t.p,{children:"Optional props passed to the container div wrapping the checkbox icon."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox id="styled-container" checkboxContainerProps={{className: "bg-success-default"}} />
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"checkediconprops",children:e.jsx(t.code,{children:"checkedIconProps"})}),`
`,e.jsx(t.p,{children:"Optional props to be passed to the check Icon component."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox id="custom-icon" checkedIconProps={{ className: 'mr-2' }} />
`})}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"ref",children:e.jsx(t.code,{children:"ref"})}),`
`,e.jsxs(t.p,{children:["The Checkbox component exposes an imperative API through refs that allows for programmatic control. The ",e.jsx(t.code,{children:"toggle"})," method allows a parent component to programmatically toggle the checkbox state."]}),`
`,e.jsx(l,{of:f}),`
`,e.jsx(t.p,{children:'This can be useful in scenarios where you need to trigger the checkbox programmatically, such as when implementing "Select All" functionality or resetting forms.'}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h3,{id:"classname",children:e.jsx(t.code,{children:"className"})}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.code,{children:"className"})," prop to add Tailwind CSS classes to the outer container. These classes are merged with the default classes using ",e.jsx(t.code,{children:"twMerge"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox id="custom-styled" label="Custom" className="bg-primary-default" />
`})}),`
`,e.jsx(t.h3,{id:"style",children:e.jsx(t.code,{children:"style"})}),`
`,e.jsx(t.p,{children:"Custom styles for the outer label container."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<Checkbox id="inline-styled" label="Styled" style={{ marginLeft: 10 }} />
`})}),`
`,e.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(ie,{of:c}),`
`,e.jsx(t.h2,{id:"references",children:"References"}),`
`,e.jsx(t.p,{children:e.jsx(t.a,{href:"https://www.notion.so/MetaMask-Design-System-Guides-Design-f86ecc914d6b4eb6873a122b83c12940",rel:"nofollow",children:"MetaMask Design System Guides"})})]})}function ce(n={}){const{wrapper:t}={...G(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(v,{...n})}):v(n)}const we={title:"React Components/Checkbox",component:b,parameters:{docs:{page:ce}},argTypes:{isDisabled:{control:"boolean",description:"Optional prop that when true, disables the checkbox"},isInvalid:{control:"boolean",description:"Optional prop that when true, shows the invalid state"},label:{control:"text",description:"Optional label prop that renders text or a React node as a label beside the checkbox."},className:{control:"text",description:"Optional prop for additional CSS classes to be applied to the Checkbox component"}}},s=n=>{const{ref:t,id:o,...r}=n,[d,i]=x.useState(n.isSelected),a=o||`checkbox-${Math.random().toString(36).substr(2,9)}`;return e.jsx(b,{id:a,...r,isSelected:d,onChange:()=>i(!d)})},c={args:{isDisabled:!1,isInvalid:!1,label:"Checkbox label"},render:n=>e.jsx(s,{...n})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{id:"unchecked-checkbox",isSelected:!1,label:"Unchecked"}),e.jsx(s,{id:"checked-checkbox",isSelected:!0,label:"Checked"})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{id:"enabled-checkbox",isSelected:!1,label:"Enabled"}),e.jsx(s,{id:"disabled-checkbox",isSelected:!1,isDisabled:!0,label:"Disabled"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{id:"normal-checkbox",isSelected:!1,label:"Normal"}),e.jsx(s,{id:"invalid-checkbox",isSelected:!1,isInvalid:!0,label:"Invalid"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{id:"no-label-checkbox",isSelected:!1}),e.jsx(s,{id:"with-label-checkbox",isSelected:!1,label:"Checkbox with label"})]})},f={render:()=>{const[n,t]=x.useState(!1),o=x.useRef(null);return e.jsxs("div",{className:"inline-flex flex-col gap-4",children:[e.jsx(b,{id:"ref-controlled-checkbox",ref:o,isSelected:n,onChange:()=>t(!n),label:"Toggle me via ref"}),e.jsx(le,{variant:ae.Primary,onClick:()=>{var r;return(r=o.current)==null?void 0:r.toggle()},children:"Toggle checkbox"})]})}};var C,O,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    isInvalid: false,
    label: 'Checkbox label'
  },
  render: args => <CheckboxStory {...args} />
}`,...(N=(O=c.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var T,I,R;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <CheckboxStory id="unchecked-checkbox" isSelected={false} label="Unchecked" />
      <CheckboxStory id="checked-checkbox" isSelected label="Checked" />
    </div>
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var q,D,M;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <CheckboxStory id="enabled-checkbox" isSelected={false} label="Enabled" />
      <CheckboxStory id="disabled-checkbox" isSelected={false} isDisabled label="Disabled" />
    </div>
}`,...(M=(D=h.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,z,A;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <CheckboxStory id="normal-checkbox" isSelected={false} label="Normal" />
      <CheckboxStory id="invalid-checkbox" isSelected={false} isInvalid label="Invalid" />
    </div>
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,F,V;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <CheckboxStory id="no-label-checkbox" isSelected={false} />
      <CheckboxStory id="with-label-checkbox" isSelected={false} label="Checkbox with label" />
    </div>
}`,...(V=(F=u.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var W,L,E;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [isSelected, setIsSelected] = useState(false);
    const checkboxRef = useRef<{
      toggle: () => void;
    }>(null);
    return <div className="inline-flex flex-col gap-4">
        <Checkbox id="ref-controlled-checkbox" ref={checkboxRef} isSelected={isSelected} onChange={() => setIsSelected(!isSelected)} label="Toggle me via ref" />
        <Button variant={ButtonVariant.Primary} onClick={() => checkboxRef.current?.toggle()}>
          Toggle checkbox
        </Button>
      </div>;
  }
}`,...(E=(L=f.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};const ve=["Default","IsSelected","IsDisabled","IsInvalid","Label","Ref"];export{c as Default,h as IsDisabled,m as IsInvalid,p as IsSelected,u as Label,f as Ref,ve as __namedExportsOrder,we as default};
