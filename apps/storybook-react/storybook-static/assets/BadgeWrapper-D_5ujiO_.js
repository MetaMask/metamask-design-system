import{r as e,j as l}from"./iframe-BknD6R0A.js";import{i as u,B as o}from"./index-CiWXofBh.js";import{t as V}from"./tw-merge-B12XlTeZ.js";const R=e.forwardRef(({children:B,childrenContainerProps:w,badge:v,badgeContainerProps:O,position:c=o.BottomRight,positionAnchorShape:r=u.Circular,positionXOffset:f=0,positionYOffset:m=0,customPosition:s,className:T="",style:P,...S},W)=>{const[h,C]=e.useState(0),[g,q]=e.useState(0),[b,A]=e.useState(0),[y,N]=e.useState(0),p=e.useRef(null),d=e.useRef(null);e.useLayoutEffect(()=>{if(p.current){const{width:t,height:n}=p.current.getBoundingClientRect();C(t),q(n)}if(d.current){const{width:t,height:n}=d.current.getBoundingClientRect();A(t),N(n)}},[]);const x=e.useMemo(()=>{if(s)return s;const t=r===u.Rectangular?0:h*.1464,n=r===u.Rectangular?0:g*.1464,X=b/2,Y=y/2,i=t-X+f,a=n-Y+m;switch(c){case o.TopRight:return{top:a,right:i};case o.TopLeft:return{top:a,left:i};case o.BottomLeft:return{bottom:a,left:i};case o.BottomRight:default:return{bottom:a,right:i}}},[c,r,h,g,b,y,f,m,s]),j=V("relative inline-flex self-start",T);return l.jsxs("div",{ref:W,className:j,style:P,...S,children:[l.jsx("div",{className:"inline-flex",ref:p,...w,children:B}),l.jsx("div",{ref:d,className:"absolute",style:x,...O,children:v})]})});R.displayName="BadgeWrapper";R.__docgenInfo={description:"",methods:[],displayName:"BadgeWrapper",props:{positionAnchorShape:{required:!1,tsType:{name:"BadgeWrapperPositionAnchorShape"},description:`Optional prop to determine the shape of the anchoring element.
This prop gets used along with position, positionXOffset, and positionYOffset
to determine the final position.
Possible values:
BadgeWrapperPositionAnchorShape.Circular,
- BadgeWrapperPositionAnchorShape.Rectangular,

@default BadgeWrapperPositionAnchorShape.Circular`,defaultValue:{value:"BadgeWrapperPositionAnchorShape.Circular",computed:!0}},position:{required:!1,tsType:{name:"BadgeWrapperPosition"},description:`Optional prop to control the preset position of the badge.
This prop gets used along with positionAnchorShape, positionXOffset, and positionYOffset
to determine the final position.

@default BadgeWrapperPosition.TopRight`,defaultValue:{value:"BadgeWrapperPosition.BottomRight",computed:!0}},positionXOffset:{required:!1,tsType:{name:"number"},description:`Optional prop to move the preset position horizontally.
This prop gets used along with position, positionAnchorShape, and positionYOffset
to determine the final position.

@default 0`,defaultValue:{value:"0",computed:!1}},positionYOffset:{required:!1,tsType:{name:"number"},description:`Optional prop to move the preset position vertically.
This prop gets used along with position, positionAnchorShape, and positionXOffset
to determine the final position.

@default 0`,defaultValue:{value:"0",computed:!1}},customPosition:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  top?: number | string | undefined;
  right?: number | string | undefined;
  bottom?: number | string | undefined;
  left?: number | string | undefined;
}`,signature:{properties:[{key:"top",value:{name:"union",raw:"number | string | undefined",elements:[{name:"number"},{name:"string"},{name:"undefined"}],required:!1}},{key:"right",value:{name:"union",raw:"number | string | undefined",elements:[{name:"number"},{name:"string"},{name:"undefined"}],required:!1}},{key:"bottom",value:{name:"union",raw:"number | string | undefined",elements:[{name:"number"},{name:"string"},{name:"undefined"}],required:!1}},{key:"left",value:{name:"union",raw:"number | string | undefined",elements:[{name:"number"},{name:"string"},{name:"undefined"}],required:!1}}]}},description:`Optional prop to customize the position through the position object.
Position object - {top: 0, right: 0, bottom: 0, left: 0}`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The element that the badge will attach itself to."},childrenContainerProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:"'div'"}],raw:"ComponentProps<'div'>"},description:"Optional prop to pass additional props to the children container"},badge:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Any element that will be placed in the position of the badge."},badgeContainerProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:"'div'"}],raw:"ComponentProps<'div'>"},description:"Optional prop to pass additional props to the badge container"},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the BadgeWrapper component.
These classes will be merged with the component's default classes using twMerge.`,defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Optional prop to control the style."},"data-testid":{required:!1,tsType:{name:"string"},description:"Optional prop to add a test id to the BadgeWrapper"}}};export{R as B};
