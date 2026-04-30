import type { TextFieldPropsShared } from '../TextField/TextField.types';

/**
 * TextArea shared props (ADR-0004). Same field contract as `TextField` for
 * multiline use, without start/end accessories. Platform packages layer
 * container and `TextInput` behavior.
 */
export type TextAreaPropsShared = Omit<
  TextFieldPropsShared,
  'startAccessory' | 'endAccessory'
>;
