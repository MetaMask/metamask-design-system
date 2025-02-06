import type { Meta, StoryObj } from '@storybook/react-native';

import ImageOrSvg from './ImageOrSvg';
import type { ImageOrSvgProps } from './ImageOrSvg.types';

const meta: Meta<ImageOrSvgProps> = {
  title: 'Primitives/ImageOrSvg',
  component: ImageOrSvg,
};

export default meta;
type Story = StoryObj<ImageOrSvgProps>;

export const RemoteImage: Story = {
  args: {
    src: { uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    width: 200,
    height: 200,
  },
};

export const RemoteSvg: Story = {
  args: {
    src: {
      uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
    },
    width: 200,
    height: 200,
  },
};

const sampleLocalPng = require('./assets/ethereum-eth-logo.png');
export const LocalImage: Story = {
  args: {
    src: sampleLocalPng,
    width: 200,
    height: 200,
  },
};
