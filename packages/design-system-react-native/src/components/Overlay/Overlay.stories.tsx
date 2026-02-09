// Third party dependencies.
import React from 'react';

// External dependencies.\
import { BoxBackgroundColor } from '../../types';

// Internal dependencies.
import OverlayComponent from './Overlay';

const OverlayMeta = {
  title: 'Components/Overlay',
  component: OverlayComponent,
  argTypes: {
    color: {
      control: { type: 'color' },
      defaultValue: BoxBackgroundColor.OverlayDefault,
    },
  },
};
export default OverlayMeta;

export const Overlay = {
  // TODO: Replace "any" with type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (args: any) => (
    <OverlayComponent {...args} onPress={() => console.log("I'm clicked!")} />
  ),
};
