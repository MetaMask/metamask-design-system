import{j as r}from"./iframe-BknD6R0A.js";import{C as h,l as u}from"./ColorSwatch-WWxIpTed.js";import{t as R}from"./typography-6hUst_fm.js";import{a as X,d as _}from"./shadows-BG1unxJW.js";import{C as p,g as m}from"./ColorSwatchGroup-C27bHLwf.js";import{u as Y,g as Q}from"./useJsonColor-D5y_imoP.js";import{useMDXComponents as G}from"./index-DH6Ulk9s.js";import{C as x}from"./blocks-Du73VAkD.js";import"./Text-Cd5k1vm4.js";import"./index-CiWXofBh.js";import"./tw-merge-B12XlTeZ.js";import"./index-CmxWr2Xc.js";const g={colors:X,typography:R,shadows:_},k=(o,e="")=>Object.entries(o).flatMap(([n,s])=>{const f=e?`${e}.${n}`:n;return typeof s=="string"?[{name:f,color:s}]:k(s,f)});function b(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...G(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"theme-colors-second-tier",children:"Theme Colors (second tier)"}),`
`,r.jsx(e.p,{children:"Theme colors are design tokens that are named based on their function rather than their actual color values. This makes them adaptable to different themes and ensures consistency and accessibility across your project."}),`
`,r.jsxs(e.p,{children:["For most use cases, these function-based color tokens should be your first choice. They are derived from the first-tier ",r.jsx(e.a,{href:"/docs/colors-brand-colors--docs",children:r.jsx(e.strong,{children:"brand colors"})})," and are applied to high-level applications within the UI."]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#light-theme-colors",children:r.jsx(e.strong,{children:"Light theme colors"})})}),`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#dark-theme-colors",children:r.jsx(e.strong,{children:"Dark theme colors"})})}),`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#best-practices",children:r.jsx(e.strong,{children:"Best practices"})})}),`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#references",children:r.jsx(e.strong,{children:"References"})})}),`
`]}),`
`,r.jsx(e.h2,{id:"light-theme-colors",children:"Light theme colors"}),`
`,r.jsx(e.p,{children:"The light theme colors are designed to be used in the styles for MetaMask UI when the light theme is active"}),`
`,r.jsx(x,{of:a}),`
`,r.jsx(e.h2,{id:"dark-theme-colors",children:"Dark theme colors"}),`
`,r.jsx(e.p,{children:"The dark theme colors are designed for MetaMask UI when the dark theme is active. They have the same names as the light theme colors but different values. If you are using the light theme colors for their intended purpose, your UI will automatically be compatible with the dark theme."}),`
`,r.jsx(x,{of:t}),`
`,r.jsx(e.h2,{id:"best-practices",children:"Best practices"}),`
`,r.jsxs(e.h3,{id:"-do-use-theme-colors-in-your-components",children:["✅ ",r.jsx(e.strong,{children:"DO"}),": Use theme colors in your components"]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`// Good
background-color: theme.colors.background.default;
background-color: var(--color-background-default);
`})}),`
`,r.jsxs(e.h3,{id:"-dont-use-static-color-values-or-brand-colors-in-your-components",children:["❌ ",r.jsx(e.strong,{children:"DON'T"}),": Use static color values or brand colors in your components"]}),`
`,r.jsxs(e.p,{children:["See when to use ",r.jsx(e.a,{href:"/docs/colors-brand-colors--docs#best-practices",children:"brand colors"})]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`// Avoid
background-color: #ffffff; // Static color value
background-color: brandColors.white.white000; // Brand color
background-color: var(--brand-colors-white-white000); // Brand color
`})}),`
`,r.jsxs(e.h3,{id:"-do-store-non-token-colors-in-a-global-file",children:["✅ ",r.jsx(e.strong,{children:"DO"}),": Store non-token colors in a global file"]}),`
`,r.jsx(e.p,{children:"If you need to use colors that are not included in the design tokens, store these colors in a global file in your project. This makes it easier to keep track of these colors and update them as needed. Always consider this as a last resort, and strive to use design tokens wherever possible."}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`// colors.js
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
`,r.jsxs(e.h3,{id:"-dont-use-non-token-colors-directly-in-your-components",children:["❌ ",r.jsx(e.strong,{children:"DON'T"}),": Use non-token colors directly in your components"]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`// Avoid
background-color: #abc123; // Custom color not in design tokens or global file
`})}),`
`,r.jsx(e.h2,{id:"references",children:"References"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),"(internal use only)"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/Light-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Light Theme Colors Library"}),"(internal use only)"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/Dark-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Dark Theme Colors Library"}),"(internal use only)"]}),`
`]})]})}function z(o={}){const{wrapper:e}={...G(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(b,{...o})}):b(o)}const ne={title:"Design Tokens/Color/Theme Colors",component:p,parameters:{docs:{page:z}}},a={render:()=>{const{lightTheme:o}=Y();return o?r.jsx(p,{swatchData:o}):null},parameters:{colorScheme:"light"}},t={render:()=>{const{darkTheme:o}=Y();if(!o)return null;const e="background"in o&&typeof o.background=="object"&&o.background!==null&&"default"in o.background&&typeof o.background.default=="object"&&o.background.default!==null&&"value"in o.background.default?o.background.default.value:void 0;return r.jsx(p,{swatchData:o,theme:e})},parameters:{colorScheme:"dark"}},c={render:()=>{const o=Q("--color-");return r.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,300px)] gap-4",children:Object.entries(o).map(([e,{color:n,name:s}])=>r.jsx(h,{color:n,textBackgroundColor:"transparent",textColor:m(n,u.colors.background.default),backgroundColor:s,name:s},e))})},parameters:{colorScheme:"light"}},l={render:()=>{const o=Q("--color-","dark");return r.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,300px)] gap-4",children:Object.entries(o).map(([e,{color:n,name:s}])=>r.jsx(h,{color:n,name:s,backgroundColor:s,borderColor:"var(--color-border-muted)",textBackgroundColor:"transparent",textColor:m(n,g.colors.background.default)},e))})},parameters:{colorScheme:"dark"}},d={render:()=>{const o=k(u.colors);return r.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,300px)] gap-4",children:o.map(({name:e,color:n})=>r.jsx(h,{color:n,textBackgroundColor:"transparent",textColor:m(n,u.colors.background.default),name:e},e))})},parameters:{colorScheme:"light"}},i={render:()=>{const o=k(g.colors);return r.jsx("div",{className:"grid grid-cols-[repeat(auto-fill,300px)] gap-4",children:o.map(({name:e,color:n})=>r.jsx(h,{color:n,textBackgroundColor:"transparent",textColor:m(n,g.colors.background.default),name:e},e))})},parameters:{colorScheme:"dark"}};var j,C,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const {
      lightTheme
    } = useJsonColor();
    if (!lightTheme) {
      return null; // or some fallback component
    }
    return <ColorSwatchGroup swatchData={lightTheme} />;
  },
  parameters: {
    colorScheme: 'light'
  }
}`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,y,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const {
      darkTheme
    } = useJsonColor();
    if (!darkTheme) {
      return null;
    }
    const backgroundColor = 'background' in darkTheme && typeof darkTheme.background === 'object' && darkTheme.background !== null && 'default' in darkTheme.background && typeof darkTheme.background.default === 'object' && darkTheme.background.default !== null && 'value' in darkTheme.background.default ? darkTheme.background.default.value : undefined;
    return <ColorSwatchGroup swatchData={darkTheme} theme={backgroundColor} />;
  },
  parameters: {
    colorScheme: 'dark'
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,D,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const lightThemeColors = getCSSVariablesFromStylesheet('--color-');
    return <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
        {Object.entries(lightThemeColors).map(([name, {
        color,
        name: colorName
      }]) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, lightThemeJS.colors.background.default // TODO Use CSS instead of JS object once CSS object is cleaned up
      )} backgroundColor={colorName} name={colorName} />)}
      </div>;
  },
  parameters: {
    colorScheme: 'light'
  }
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var J,B,F;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const darkThemeColors = getCSSVariablesFromStylesheet('--color-', 'dark');
    return <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
        {Object.entries(darkThemeColors).map(([name, {
        color,
        name: colorName
      }]) => <ColorSwatch key={name} color={color} name={colorName} backgroundColor={colorName} borderColor="var(--color-border-muted)" textBackgroundColor="transparent" textColor={getContrastYIQ(color, darkThemeJS.colors.background.default)} />)}
      </div>;
  },
  parameters: {
    colorScheme: 'dark'
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var L,I,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const colors = getJSColors(lightThemeJS.colors);
    return <div className="grid grid-cols-[repeat(auto-fill,300px)] gap-4">
        {colors.map(({
        name,
        color
      }) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, lightThemeJS.colors.background.default)} name={name} />)}
      </div>;
  },
  parameters: {
    colorScheme: 'light'
  }
}`,...(O=(I=d.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var M,U,A;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const colors = getJSColors(darkThemeJS.colors);
    return <div className={\`grid grid-cols-[repeat(auto-fill,300px)] gap-4\`}>
        {colors.map(({
        name,
        color
      }) => <ColorSwatch key={name} color={color} textBackgroundColor="transparent" textColor={getContrastYIQ(color, darkThemeJS.colors.background.default)} name={name} />)}
      </div>;
  },
  parameters: {
    colorScheme: 'dark'
  }
}`,...(A=(U=i.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const se=["FigmaLightTheme","FigmaDarkTheme","CSSLightTheme","CSSDarkTheme","JSLightTheme","JSDarkTheme"];export{l as CSSDarkTheme,c as CSSLightTheme,t as FigmaDarkTheme,a as FigmaLightTheme,i as JSDarkTheme,d as JSLightTheme,se as __namedExportsOrder,ne as default};
