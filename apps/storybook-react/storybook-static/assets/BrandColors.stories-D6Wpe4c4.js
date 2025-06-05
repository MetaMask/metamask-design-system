import{j as o}from"./iframe-BknD6R0A.js";import{b as w}from"./shadows-BG1unxJW.js";import{useMDXComponents as j}from"./index-DH6Ulk9s.js";import{C as k}from"./blocks-Du73VAkD.js";import{C as f}from"./ColorSwatch-WWxIpTed.js";import{C as b,g as C}from"./ColorSwatchGroup-C27bHLwf.js";import{u as y,g as S}from"./useJsonColor-D5y_imoP.js";import"./index-CmxWr2Xc.js";import"./typography-6hUst_fm.js";import"./Text-Cd5k1vm4.js";import"./index-CiWXofBh.js";import"./tw-merge-B12XlTeZ.js";function l(r){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e.h1,{id:"brand-colors-first-tier",children:"Brand colors (first tier)"}),`
`,o.jsxs(e.p,{children:["Brand colors form the foundation of our color system. They use literal color names (like red, green, etc.) and a numeric scale (where 000 is light and 900 is dark) by default. These colors are essential to maintaining visual consistency across our products and are primarily used as a reference for the ",o.jsx(e.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),"."]}),`
`,o.jsxs(e.p,{children:["While these colors are fundamental to our design system, they ",o.jsx(e.strong,{children:"should not"})," be used directly in most cases. Instead, they should be referenced via ",o.jsx(e.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"}),", which form the second tier of our design tokens."]}),`
`,o.jsx(e.p,{children:"However, in rare cases where a color needs to remain constant across themes (e.g., white always being white, regardless of light or dark mode), the corresponding brand color can be used. Always ensure there isn't an existing theme token that could be used instead."}),`
`,o.jsx(e.p,{children:o.jsxs(e.em,{children:["The majority of our brand color progressions were generated using the ",o.jsx(e.a,{href:"https://0to255.com/037dd6",rel:"nofollow",children:"0to255"})," tool, which helps ensure smooth and consistent color transitions."]})}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#brand-colors",children:o.jsx(e.strong,{children:"Brand colors"})})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#best-practices",children:o.jsx(e.strong,{children:"Best practices"})})}),`
`,o.jsx(e.li,{children:o.jsx(e.a,{href:"#references",children:o.jsx(e.strong,{children:"References"})})}),`
`]}),`
`,o.jsx(e.h2,{id:"brand-colors",children:"Brand colors"}),`
`,o.jsx(k,{of:s}),`
`,o.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,o.jsxs(e.h3,{id:"-do-use-brand-colors-when-the-color-should-remain-the-same-across-all-themes",children:["✅ ",o.jsx(e.strong,{children:"DO"}),": Use brand colors when the color should remain the same across all themes"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`fill: brandColors.white.white000;
fill: var(--brand-colors-white-white000);
`})}),`
`,o.jsxs(e.h3,{id:"-dont-use-brand-colors-without-checking-for-an-existing-theme-token-first",children:["❌ ",o.jsx(e.strong,{children:"DON'T"}),": Use brand colors without checking for an existing theme token first"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`background-color: brandColors.blue.blue500; // Brand color instead of theme.color.primary.default
background-color: var(--brand-colors-blue-blue500); // Brand color instead of var(--color-primary-default)
`})}),`
`,o.jsxs(e.h3,{id:"-do-store-non-token-colors-in-a-global-file",children:["✅ ",o.jsx(e.strong,{children:"DO"}),": Store non-token colors in a global file"]}),`
`,o.jsx(e.p,{children:"If you need to use colors that are not included in the design tokens, store these colors in a global file in your project. This makes it easier to keep track of these colors and update them as needed. Always consider this as a last resort, and strive to use design tokens wherever possible."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`// colors.js
export const customColors = {
  myCustomColor: '#abc123',
};

// colors.css
--custom-colors-my-custom-color: #abc123;

// component.js
import { customColors } from './colors.js';

background-color: customColors.myCustomColor;
background-color: var(--custom-colors-my-custom-color);
`})}),`
`,o.jsxs(e.h3,{id:"-dont-use-non-token-colors-directly-in-your-components",children:["❌ ",o.jsx(e.strong,{children:"DON'T"}),": Use non-token colors directly in your components"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`// Avoid
background-color: #abc123; // Custom color not in design tokens or global file
`})}),`
`,o.jsx(e.h2,{id:"references",children:"References"}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"http://www.0to255.com/037DD6",rel:"nofollow",children:"0to255"}),": The tool we used to generate our color progressions."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),": Our internal Figma library for brand colors. Please note that this is for internal use only."]}),`
`]})]})}function v(r={}){const{wrapper:e}={...j(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(l,{...r})}):l(r)}const _={title:"Design Tokens/Color/Brand Colors",component:b,parameters:{docs:{page:v}}},s={render:()=>{const{brandColor:r}=y();return o.jsx(b,{swatchData:r})},parameters:{colorScheme:"light"}},n={render:()=>{const r=S("--brand-colors");return o.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,300px)] gap-4",children:Object.values(r).map(({color:e,name:a})=>o.jsx(f,{color:e,backgroundColor:a,textBackgroundColor:"transparent",textColor:C(e,e),name:a},a))})},parameters:{colorScheme:"light"}},t={render:()=>o.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,300px)] gap-4",children:Object.entries(w).map(([r,e])=>o.jsx(f,{color:e,textBackgroundColor:"transparent",textColor:C(e,e),name:`brandColor.${r}`},r))}),parameters:{colorScheme:"light"}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      brandColor
    } = useJsonColor();
    return <ColorSwatchGroup swatchData={brandColor} />;
  },
  parameters: {
    colorScheme: 'light'
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var h,m,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const cssBrandColors = getCSSVariablesFromStylesheet('--brand-colors');
    return <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
        {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
        {Object.values(cssBrandColors).map(({
        color,
        name
      }) => <ColorSwatch key={name} color={color} backgroundColor={name} textBackgroundColor="transparent" textColor={getContrastYIQ(color, color)} name={name} />)}
      </div>;
  },
  parameters: {
    colorScheme: 'light'
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
      {/* Mapping through each brand color and rendering a ColorSwatch component for it */}
      {Object.entries(brandColorJS).map(([name, color]) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, color)} name={\`brandColor.\${name}\`} />)}
    </div>,
  parameters: {
    colorScheme: 'light'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const P=["Figma","CSS","JS"];export{n as CSS,s as Figma,t as JS,P as __namedExportsOrder,_ as default};
