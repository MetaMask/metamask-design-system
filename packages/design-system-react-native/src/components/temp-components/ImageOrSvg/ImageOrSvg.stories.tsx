import type { Meta, StoryObj } from '@storybook/react-native';

import ImageOrSvg from './ImageOrSvg';
import type { ImageOrSvgProps } from './ImageOrSvg.types';

const meta: Meta<ImageOrSvgProps> = {
  title: 'Temp Components/ImageOrSvg',
  component: ImageOrSvg,
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<ImageOrSvgProps>;

export const RemoteImage: Story = {
  args: {
    width: 200,
    height: 200,
  },
  render: (args) => (
    <ImageOrSvg
      {...args}
      src={{ uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' }}
    />
  ),
};

export const RemoteSvg: Story = {
  args: {
    width: 200,
    height: 200,
  },
  render: (args) => (
    <ImageOrSvg
      {...args}
      src={{ uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' }}
    />
  ),
};

const sampleLocalPng = require('./assets/ethereum-eth-logo.png');
export const LocalImage: Story = {
  args: {
    width: 200,
    height: 200,
  },
  render: (args) => <ImageOrSvg {...args} src={sampleLocalPng} />,
};

import SampleLocalSvg from './assets/ethereum-eth-logo.svg';
export const LocalSvg: Story = {
  args: {
    width: 200,
    height: 200,
  },
  render: (args) => <ImageOrSvg {...args} src={SampleLocalSvg} />,
};
