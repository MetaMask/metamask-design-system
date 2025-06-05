import{j as e}from"./iframe-BknD6R0A.js";import{useMDXComponents as n}from"./index-DH6Ulk9s.js";import{b as t}from"./blocks-Du73VAkD.js";import"./shadows-BG1unxJW.js";import"./index-CmxWr2Xc.js";const i=""+new URL("design.token.graphic-IL9L4eka.svg",import.meta.url).href;function s(r){const o={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Design Tokens / Color / Introduction"}),`
`,e.jsx(o.h1,{id:"color",children:"Color"}),`
`,e.jsx(o.p,{children:"Color is used to express style and communicate meaning. We follow a 3 tiered system for color design tokens."}),`
`,e.jsx("div",{className:"bg-alternative p-8 text-center",children:e.jsx("img",{width:"80%",src:i})}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"brand-colors-first-tier",children:"Brand colors (first tier)"}),`
`,e.jsxs(o.p,{children:["Brand colors are the foundation of our color system. They are primarily used as a reference for the ",e.jsx(o.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"})," and ",e.jsx(o.strong,{children:"should not"})," be used directly in most component styles."]}),`
`,e.jsx(o.p,{children:"However, in rare cases where a color needs to remain constant across themes (e.g., white always being white, regardless of light or dark mode), the corresponding brand color can be used. Always ensure there isn't an existing theme token that could be used instead."}),`
`,e.jsxs(o.p,{children:["For more details, refer to the ",e.jsx(o.a,{href:"/docs/colors-brand-colors--docs",children:"brand colors"})," section."]}),`
`,e.jsx(o.h2,{id:"theme-colors-second-tier",children:"Theme colors (second tier)"}),`
`,e.jsx(o.p,{children:"Theme colors are design tokens that are named based on their function rather than their actual color values. This makes them adaptable to different themes and ensures consistency and accessibility across your project. For most use cases, these function-based theme color tokens should be your first choice."}),`
`,e.jsxs(o.p,{children:["For more details, refer to the ",e.jsx(o.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"})," section"]}),`
`,e.jsx(o.h2,{id:"component-colors-third-tier",children:"Component colors (third tier)"}),`
`,e.jsx(o.p,{children:"Component colors provide another level of abstraction for component-specific colors. We currently do not provide any component tier colors, but this may change in the future"}),`
`,e.jsx(o.h2,{id:"next-steps",children:"Next steps"}),`
`,e.jsxs(o.p,{children:["Learn more about our ",e.jsx(o.a,{href:"/docs/colors-brand-colors--docs",children:"brand colors"})," or ",e.jsx(o.a,{href:"/docs/colors-theme-colors--docs",children:"theme colors"})," section"]}),`
`,e.jsx(o.h2,{id:"references",children:"References"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"https://www.figma.com/file/cBAUPFMnbv6tHR1J8KvBI2/Brand-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Brand Colors Library"}),"(internal use only)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"https://www.figma.com/file/kdFzEC7xzSNw7cXteqgzDW/Light-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Light Theme Colors Library"}),"(internal use only)"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.a,{href:"https://www.figma.com/file/rLKsoqpjyoKauYnFDcBIbO/Dark-Theme-Colors?node-id=0%3A1",rel:"nofollow",children:"Figma Dark Theme Colors Library"}),"(internal use only)"]}),`
`]})]})}function m(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(s,{...r})}):s(r)}export{m as default};
