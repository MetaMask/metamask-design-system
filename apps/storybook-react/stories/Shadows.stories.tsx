import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

interface ShadowBoxProps {
  /** Text to display inside the box */
  children: string;
  /** Shadow class to apply */
  className: string;
  /** Style to apply to the box */
  style?: React.CSSProperties;
}

const ShadowBox: React.FC<ShadowBoxProps> = ({
  children,
  className,
  style,
}) => (
  <div
    className={`w-32 h-32 flex items-center justify-center bg-alternative text-default rounded-md m-2 ${className}`}
    style={style}
  >
    {children}
  </div>
);

const meta = {
  title: 'Design Tokens/Shadows',
  component: ShadowBox,
  tags: ['autodocs'],
} satisfies Meta<typeof ShadowBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
  render: () => (
    <div className="flex">
      <ShadowBox className="shadow-primary shadow-xs">xs primary</ShadowBox>
      <ShadowBox className="shadow-error shadow-xs">xs error</ShadowBox>
      <ShadowBox className="shadow-xs">xs</ShadowBox>
      <ShadowBox className="shadow-sm">sm</ShadowBox>
      <ShadowBox className="shadow-md">md</ShadowBox>
      <ShadowBox className="shadow-lg">lg</ShadowBox>
      <ShadowBox className="shadow-xl">xl</ShadowBox>
    </div>
  ),
};
