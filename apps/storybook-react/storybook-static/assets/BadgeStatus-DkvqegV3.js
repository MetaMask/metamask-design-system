import{r as g,j as a}from"./iframe-BknD6R0A.js";import{d as e,k as t}from"./index-CiWXofBh.js";import{t as s}from"./tw-merge-B12XlTeZ.js";const m={[e.Active]:"bg-success-default border-success-default",[e.Inactive]:"bg-background-default border-success-default",[e.Disconnected]:"bg-icon-muted border-icon-muted",[e.New]:"bg-primary-default border-primary-default",[e.Attention]:"bg-error-default border-error-default"},f={[t.Md]:"h-2 w-2",[t.Lg]:"h-2.5 w-2.5"},d=g.forwardRef(({status:r,size:o=t.Md,hasBorder:n=!0,className:u,style:i,...l},c)=>{const p=s("inline-flex rounded-full",n?"border-2 border-background-default":"",u),S=s("z-10 rounded-full border-2",f[o],m[r]);return a.jsx("div",{ref:c,className:p,style:i,...l,children:a.jsx("div",{className:S})})});d.displayName="BadgeStatus";d.__docgenInfo={description:"",methods:[],displayName:"BadgeStatus",props:{status:{required:!0,tsType:{name:"BadgeStatusStatus"},description:`Optional prop to control the status of the badge
Possible values:
- BadgeStatusStatus.Active. (Connected)
- BadgeStatusStatus.Inactive. (Connected)
- BadgeStatusStatus.Disconnected.
- BadgeStatusStatus.New.
- BadgeStatusStatus.Attention.`},hasBorder:{required:!1,tsType:{name:"boolean"},description:`Optional prop to determine whether the badge should display a border

@default true`,defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"BadgeStatusSize"},description:`Optional prop to control the size of the BadgeStatus
Possible values:
- BadgeStatusSize.Md (8px),
- BadgeStatusSize.Lg (10px),

@default AvatarBaseSize.Md`,defaultValue:{value:"BadgeStatusSize.Md",computed:!0}},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the BadgeStatus component.
These classes will be merged with the component's default classes using twMerge.`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`}}};export{d as B};
