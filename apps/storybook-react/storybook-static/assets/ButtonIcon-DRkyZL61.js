import{r as g,j as r}from"./iframe-BknD6R0A.js";import{l as e,h as a}from"./index-CiWXofBh.js";import{t as l}from"./tw-merge-B12XlTeZ.js";import{I as b}from"./Icon-2yQHbUm6.js";const I={[e.Sm]:"h-6 w-6",[e.Md]:"h-8 w-8",[e.Lg]:"h-10 w-10"},w={[e.Sm]:a.Sm,[e.Md]:a.Md,[e.Lg]:a.Lg},p=g.forwardRef(({className:d,iconName:c,iconProps:t,ariaLabel:u,isDisabled:o=!1,isInverse:n=!1,isFloating:s=!1,size:i=e.Md,style:m,...f},h)=>{const S=!o,y=l("inline-flex items-center justify-center p-0",I[i],s&&["rounded-full",!n&&"bg-icon-default text-background-default",n&&"bg-icon-default text-background-default"],!s&&["bg-transparent rounded",S&&"hover:bg-hover active:bg-pressed",!n&&"text-icon-default",n&&"text-background-default"],o&&"cursor-not-allowed opacity-50",d);return r.jsx("button",{ref:h,className:y,disabled:o,"aria-label":u,style:m,...f,children:r.jsx(b,{name:c,size:w[i],className:l("text-inherit",t==null?void 0:t.className),...t})})});p.displayName="ButtonIcon";p.__docgenInfo={description:"",methods:[],displayName:"ButtonIcon",props:{iconName:{required:!0,tsType:{name:"IconName"},description:"Required prop to specify the icon to show"},ariaLabel:{required:!0,tsType:{name:"string"},description:"Required prop to provide an accessible label for the button"},iconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`SVGProps<SVGElementProps> & {
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
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]}],raw:"Partial<IconProps>"},description:"Optional prop to pass additional properties to the icon"},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, disables the button

@default false`,defaultValue:{value:"false",computed:!1}},isInverse:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, applies inverse styling to the button

@default false`,defaultValue:{value:"false",computed:!1}},isFloating:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, applies floating/contained styling to the button

@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"ButtonIconSize"},description:`Optional prop to control the size of the button

@default ButtonIconSize.Md`,defaultValue:{value:"ButtonIconSize.Md",computed:!0}},className:{required:!1,tsType:{name:"string"},description:"Optional prop for additional CSS classes to be applied to the ButtonIcon component"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`}}};export{p as B};
