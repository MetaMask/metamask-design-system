type TypeStyle = {
  fontSize: FontSizes[keyof FontSizes];
  fontWeight: FontWeights[keyof FontWeights];
  lineHeight: LineHeights[keyof LineHeights];
  letterSpacing: LetterSpacing[keyof LetterSpacing];
};

export type ThemeTypography = {
  sDisplayLG: TypeStyle;
  sDisplayMD: TypeStyle;
  sHeadingLG: TypeStyle;
  sHeadingMD: TypeStyle;
  sHeadingSMRegular: TypeStyle;
  sHeadingSM: TypeStyle;
  sBodyLGMedium: TypeStyle;
  sBodyMD: TypeStyle;
  sBodyMDMedium: TypeStyle;
  sBodyMDBold: TypeStyle;
  sBodySM: TypeStyle;
  sBodySMMedium: TypeStyle;
  sBodySMBold: TypeStyle;
  sBodyXS: TypeStyle;
  sBodyXSMedium: TypeStyle;
  lDisplayLG: TypeStyle;
  lDisplayMD: TypeStyle;
  lHeadingLG: TypeStyle;
  lHeadingMD: TypeStyle;
  lHeadingSMRegular: TypeStyle;
  lHeadingSM: TypeStyle;
  lBodyLGMedium: TypeStyle;
  lBodyMD: TypeStyle;
  lBodyMDMedium: TypeStyle;
  lBodyMDBold: TypeStyle;
  lBodySM: TypeStyle;
  lBodySMMedium: TypeStyle;
  lBodySMBold: TypeStyle;
  lBodyXS: TypeStyle;
  lBodyXSMedium: TypeStyle;
};

export type FontFamilies = {
  default: string;
  accent: string;
  hero: string;
};

export type FontSizes = {
  fontSize1: number;
  fontSize2: number;
  fontSize3: number;
  fontSize4: number;
  fontSize5: number;
  fontSize6: number;
  fontSize7: number;
  fontSize8: number;
  fontSize9: number;
  fontSize10: number;
};

export type FontWeights = {
  regular: string;
  medium: string;
  bold: string;
};

export type LetterSpacing = {
  letterSpacing0: number;
  letterSpacing1: number;
};

export type LineHeights = {
  lineHeight1: number;
  lineHeight2: number;
  lineHeight3: number;
  lineHeight4: number;
  lineHeight5: number;
  lineHeight6: number;
  lineHeight7: number;
  lineHeight8: number;
  lineHeight9: number;
};
