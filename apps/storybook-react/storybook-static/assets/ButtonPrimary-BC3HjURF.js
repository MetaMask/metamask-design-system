import{r as p,j as d}from"./iframe-BknD6R0A.js";import{t as c}from"./tw-merge-B12XlTeZ.js";import{B as h}from"./ButtonBase-DbNzlsEJ.js";const a=p.forwardRef(({className:i,isDanger:t,isInverse:e,isDisabled:o,isLoading:n,...r},s)=>{const l=c(!t&&!e&&["bg-primary-default text-primary-inverse",n&&"bg-primary-default-pressed"],t&&!e&&["bg-error-default text-error-inverse",n&&"bg-error-default-pressed"],e&&!t&&["bg-default text-default",n&&"bg-default-pressed"],e&&t&&["bg-default text-error-default",n&&"bg-default-pressed"],!(o??n)&&[!t&&!e&&["hover:bg-primary-default-hover","active:bg-primary-default-pressed"],t&&!e&&["hover:bg-error-default-hover","active:bg-error-default-pressed"],e&&!t&&["hover:bg-default-hover","active:bg-default-pressed"],e&&t&&["hover:bg-default-hover","active:bg-default-pressed"]],n&&"cursor-not-allowed",o&&!n&&["opacity-50","cursor-not-allowed"],i);return d.jsx(h,{ref:s,className:l,isDisabled:o,isLoading:n,"data-theme":!e&&"light",...r})});a.displayName="ButtonPrimary";a.__docgenInfo={description:"",methods:[],displayName:"ButtonPrimary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Required prop for the content to be rendered within the ButtonBase"},className:{required:!1,tsType:{name:"string"},description:`Optional prop for additional CSS classes to be applied to the ButtonBase component.
These classes will be merged with the component's default classes using twMerge.`},size:{required:!1,tsType:{name:"ButtonBaseSize"},description:`Optional prop to control the size of the ButtonBase

@default ButtonBaseSize.Lg`},textProps:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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

@default TextColor.TextDefault`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop for testing purposes"}]}}],raw:"Partial<TextProps>"},description:"Optional props to be passed to the Text component when children is a string"},isFullWidth:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, makes the button take up the full width of its container

@default false`},asChild:{required:!1,tsType:{name:"boolean"},description:`Optional boolean that determines if the component should merge its props onto its immediate child
instead of rendering a button element

@default false`},isLoading:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, shows a loading spinner

@default false`},loadingText:{required:!1,tsType:{name:"string"},description:"Optional prop for text to display when button is in loading state"},loadingTextProps:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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

@default TextColor.TextDefault`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop for testing purposes"}]}}],raw:"Partial<TextProps>"},description:"Optional props to be passed to the loading Text component"},startIconName:{required:!1,tsType:{name:"IconName"},description:"Optional prop to specify an icon to show at the start of the button"},startIconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`SVGProps<SVGElementProps> & {
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
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]}],raw:"Partial<IconProps>"},description:"Optional prop to pass additional properties to the start icon"},startAccessory:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional prop for a custom element to show at the start of the button"},endIconName:{required:!1,tsType:{name:"IconName"},description:"Optional prop to specify an icon to show at the end of the button"},endIconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`SVGProps<SVGElementProps> & {
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
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]}],raw:"Partial<IconProps>"},description:"Optional prop to pass additional properties to the end icon"},endAccessory:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional prop for a custom element to show at the end of the button"},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, disables the button

@default false`},loadingIconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`SVGProps<SVGElementProps> & {
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
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},{key:"data-testid",value:{name:"string",required:!1},description:"Optional prop to add a test id to the icon"}]}}]}],raw:"Partial<IconProps>"},description:"Optional prop to pass additional properties to the loading icon"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`Optional CSS styles to be applied to the component.
Should be used sparingly and only for dynamic styles that can't be achieved with className.`},isDanger:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, applies error/danger styling to the button

@default false`},isInverse:{required:!1,tsType:{name:"boolean"},description:`Optional prop that when true, applies dark theme styling to the button

@default false`}}};export{a as B};
