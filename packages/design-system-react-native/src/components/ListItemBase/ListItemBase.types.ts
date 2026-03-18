import type { BoxHorizontalProps } from '../temp-components/BoxHorizontal/BoxHorizontal.types';
import type { TextProps } from '../Text/Text.types';

export type ListItemBaseProps = Omit<
  BoxHorizontalProps,
  'children' | 'endAccessory' | 'textProps'
> & {
  title?: React.ReactNode;
  titleProps?: Partial<Omit<TextProps, 'children'>>;
  titleStartAccessory?: React.ReactNode;
  titleEndAccessory?: React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleProps?: Partial<Omit<TextProps, 'children'>>;
  subtitleStartAccessory?: React.ReactNode;
  subtitleEndAccessory?: React.ReactNode;
  value?: React.ReactNode;
  valueProps?: Partial<Omit<TextProps, 'children'>>;
  valueStartAccessory?: React.ReactNode;
  valueEndAccessory?: React.ReactNode;
  supporting?: React.ReactNode;
  supportingProps?: Partial<Omit<TextProps, 'children'>>;
  supportingStartAccessory?: React.ReactNode;
  supportingEndAccessory?: React.ReactNode;
};
