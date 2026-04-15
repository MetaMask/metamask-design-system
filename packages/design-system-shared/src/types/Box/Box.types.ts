/**
 * Box - all spacing-related props
 */
export type BoxSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * Box - border width values (only valid Tailwind CSS border width utilities)
 */
export type BoxBorderWidth = 0 | 1 | 2 | 4 | 8;

/**
 * Box - flexDirection
 * Convert from enum to const object (ADR-0003)
 */
export const BoxFlexDirection = {
  Row: 'flex-row',
  RowReverse: 'flex-row-reverse',
  Column: 'flex-col',
  ColumnReverse: 'flex-col-reverse',
} as const;
export type BoxFlexDirection =
  (typeof BoxFlexDirection)[keyof typeof BoxFlexDirection];

/**
 * Box - flexWrap
 * Convert from enum to const object (ADR-0003)
 */
export const BoxFlexWrap = {
  NoWrap: 'flex-nowrap',
  Wrap: 'flex-wrap',
  WrapReverse: 'flex-wrap-reverse',
} as const;
export type BoxFlexWrap = (typeof BoxFlexWrap)[keyof typeof BoxFlexWrap];

/**
 * Box - alignItems
 * Convert from enum to const object (ADR-0003)
 */
export const BoxAlignItems = {
  Start: 'items-start',
  Center: 'items-center',
  End: 'items-end',
  Stretch: 'items-stretch',
  Baseline: 'items-baseline',
} as const;
export type BoxAlignItems = (typeof BoxAlignItems)[keyof typeof BoxAlignItems];

/**
 * Box - justifyContent
 * Convert from enum to const object (ADR-0003)
 */
export const BoxJustifyContent = {
  Start: 'justify-start',
  Center: 'justify-center',
  End: 'justify-end',
  Between: 'justify-between',
  Around: 'justify-around',
  Evenly: 'justify-evenly',
} as const;
export type BoxJustifyContent =
  (typeof BoxJustifyContent)[keyof typeof BoxJustifyContent];

/**
 * Box - backgroundColor
 * Convert from enum to const object (ADR-0003)
 */
export const BoxBackgroundColor = {
  /** Default background color */
  BackgroundDefault: 'bg-default',
  /** Alternative background color */
  BackgroundAlternative: 'bg-alternative',
  /** Section background color */
  BackgroundSection: 'bg-section',
  /** Subsection background color */
  BackgroundSubsection: 'bg-subsection',
  /** Muted background color */
  BackgroundMuted: 'bg-muted',
  /** Primary default background color */
  PrimaryDefault: 'bg-primary-default',
  /** Primary alternative background color */
  PrimaryAlternative: 'bg-primary-alternative',
  /** Primary muted background color */
  PrimaryMuted: 'bg-primary-muted',
  /** Primary inverse background color */
  PrimaryInverse: 'bg-primary-inverse',
  /** Error default background color */
  ErrorDefault: 'bg-error-default',
  /** Error alternative background color */
  ErrorAlternative: 'bg-error-alternative',
  /** Error muted background color */
  ErrorMuted: 'bg-error-muted',
  /** Error inverse background color */
  ErrorInverse: 'bg-error-inverse',
  /** Warning default background color */
  WarningDefault: 'bg-warning-default',
  /** Warning muted background color */
  WarningMuted: 'bg-warning-muted',
  /** Warning inverse background color */
  WarningInverse: 'bg-warning-inverse',
  /** Success default background color */
  SuccessDefault: 'bg-success-default',
  /** Success muted background color */
  SuccessMuted: 'bg-success-muted',
  /** Success inverse background color */
  SuccessInverse: 'bg-success-inverse',
  /** Info default background color */
  InfoDefault: 'bg-info-default',
  /** Info muted background color */
  InfoMuted: 'bg-info-muted',
  /** Info inverse background color */
  InfoInverse: 'bg-info-inverse',
  /** Flask default background color */
  FlaskDefault: 'bg-flask-default',
  /** Flask inverse background color */
  FlaskInverse: 'bg-flask-inverse',
  /** Overlay alternative background color */
  OverlayAlternative: 'bg-overlay-alternative',
  /** Overlay default background color */
  OverlayDefault: 'bg-overlay-default',
  /** Overlay inverse background color */
  OverlayInverse: 'bg-overlay-inverse',
  /** Transparent background color */
  Transparent: 'bg-transparent',
} as const;
export type BoxBackgroundColor =
  (typeof BoxBackgroundColor)[keyof typeof BoxBackgroundColor];

/**
 * Box - borderColor
 * Convert from enum to const object (ADR-0003)
 */
export const BoxBorderColor = {
  /** Background default for cut out effect */
  BackgroundDefault: 'border-background-default',
  /** Default border color */
  BorderDefault: 'border-default',
  /** Muted border color */
  BorderMuted: 'border-muted',
  /** Primary default border color */
  PrimaryDefault: 'border-primary-default',
  /** Primary alternative border color */
  PrimaryAlternative: 'border-primary-alternative',
  /** Primary muted border color */
  PrimaryMuted: 'border-primary-muted',
  /** Primary inverse border color */
  PrimaryInverse: 'border-primary-inverse',
  /** Error default border color */
  ErrorDefault: 'border-error-default',
  /** Error alternative border color */
  ErrorAlternative: 'border-error-alternative',
  /** Error muted border color */
  ErrorMuted: 'border-error-muted',
  /** Error inverse border color */
  ErrorInverse: 'border-error-inverse',
  /** Warning default border color */
  WarningDefault: 'border-warning-default',
  /** Warning muted border color */
  WarningMuted: 'border-warning-muted',
  /** Warning inverse border color */
  WarningInverse: 'border-warning-inverse',
  /** Success default border color */
  SuccessDefault: 'border-success-default',
  /** Success muted border color */
  SuccessMuted: 'border-success-muted',
  /** Success inverse border color */
  SuccessInverse: 'border-success-inverse',
  /** Info default border color */
  InfoDefault: 'border-info-default',
  /** Info muted border color */
  InfoMuted: 'border-info-muted',
  /** Info inverse border color */
  InfoInverse: 'border-info-inverse',
  /** Flask default border color */
  FlaskDefault: 'border-flask-default',
  /** Flask inverse border color */
  FlaskInverse: 'border-flask-inverse',
  /** Overlay alternative border color */
  OverlayAlternative: 'border-overlay-alternative',
  /** Overlay default border color */
  OverlayDefault: 'border-overlay-default',
  /** Overlay inverse border color */
  OverlayInverse: 'border-overlay-inverse',
  /** Transparent border color */
  Transparent: 'border-transparent',
} as const;
export type BoxBorderColor =
  (typeof BoxBorderColor)[keyof typeof BoxBorderColor];

/**
 * Box component shared props (ADR-0004)
 * Platform-independent properties shared across React and React Native.
 */
export type BoxPropsShared = {
  /**
   * The flex-direction style of the component.
   */
  flexDirection?: BoxFlexDirection;
  /**
   * The flex-wrap style of the component.
   */
  flexWrap?: BoxFlexWrap;
  /**
   * The gap between the component's children.
   * Use 0-12 for a gap of 0px-48px.
   */
  gap?: BoxSpacing;
  /**
   * The align-items style of the component.
   */
  alignItems?: BoxAlignItems;
  /**
   * The justify-content style of the component.
   */
  justifyContent?: BoxJustifyContent;
  /**
   * The margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  margin?: BoxSpacing;
  /**
   * The top margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginTop?: BoxSpacing;
  /**
   * The right margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginRight?: BoxSpacing;
  /**
   * The bottom margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginBottom?: BoxSpacing;
  /**
   * The left margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginLeft?: BoxSpacing;
  /**
   * The horizontal margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginHorizontal?: BoxSpacing;
  /**
   * The vertical margin of the component.
   * Use 0-12 for margin of 0px-48px.
   */
  marginVertical?: BoxSpacing;
  /**
   * The padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  padding?: BoxSpacing;
  /**
   * The top padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingTop?: BoxSpacing;
  /**
   * The right padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingRight?: BoxSpacing;
  /**
   * The bottom padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingBottom?: BoxSpacing;
  /**
   * The left padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingLeft?: BoxSpacing;
  /**
   * The horizontal padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingHorizontal?: BoxSpacing;
  /**
   * The vertical padding of the component.
   * Use 0-12 for padding of 0px-48px.
   */
  paddingVertical?: BoxSpacing;
  /**
   * The border width of the component.
   * Use 0, 1, 2, 4, or 8 for border width of 0px, 1px, 2px, 4px, or 8px.
   */
  borderWidth?: BoxBorderWidth;
  /**
   * The border color of the component.
   */
  borderColor?: BoxBorderColor;
  /**
   * The background color of the component.
   */
  backgroundColor?: BoxBackgroundColor;
};
