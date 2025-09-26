import {
  Box,
  BoxAlignItems,
  BoxFlexDirection,
  BoxJustifyContent,
  Icon,
  IconColor,
  IconName,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Examples/Backgrounds',
  component: () => null,
  // Remove default padding
  decorators: [
    (Story) => (
      <Box className="-m-4">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const Backgrounds: React.FC = () => {
  return (
    <Box className="min-h-screen bg-default p-8">
      <Text variant={TextVariant.HeadingLg} className="mb-8">
        Background Token Examples
      </Text>

      {/* Background layers demonstration */}
      <Box className="space-y-6">
        {/* Default Background with Section */}
        <Box className="rounded-lg bg-default p-6">
          <Text variant={TextVariant.HeadingMd} className="mb-4">
            Background Default
          </Text>
          <Text color={TextColor.TextAlternative} className="mb-4">
            This is the default background surface
          </Text>

          <Box className="rounded-lg bg-section p-4">
            <Text variant={TextVariant.HeadingSm} className="mb-2">
              Background Section
            </Text>
            <Text color={TextColor.TextAlternative} className="mb-4">
              Section background over default
            </Text>

            <Box className="rounded-lg bg-subsection p-4">
              <Box
                flexDirection={BoxFlexDirection.Row}
                alignItems={BoxAlignItems.Center}
                justifyContent={BoxJustifyContent.Center}
                gap={2}
                className="py-8"
              >
                <Icon name={IconName.Info} />
                <Text variant={TextVariant.HeadingSm}>
                  Background Subsection
                </Text>
              </Box>
              <Text color={TextColor.TextAlternative} className="text-center">
                Subsection background over section
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Modal-like example */}
        <Box className="rounded-lg bg-alternative p-8">
          <Text variant={TextVariant.HeadingMd} className="mb-4">
            Background Alternative
          </Text>
          <Text color={TextColor.TextAlternative} className="mb-6">
            Sunken surface below background/default
          </Text>

          <Box className="mx-auto max-w-md rounded-lg bg-default p-6">
            <Box
              flexDirection={BoxFlexDirection.Column}
              alignItems={BoxAlignItems.Center}
              gap={4}
            >
              <Icon name={IconName.Info} />
              <Text variant={TextVariant.HeadingMd}>Modal Content</Text>
              <Text color={TextColor.TextAlternative} className="text-center">
                This demonstrates background-default over background-alternative
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Text color examples */}
        <Box className="rounded-lg bg-default p-6">
          <Text variant={TextVariant.HeadingMd} className="mb-4">
            Text & Icon Colors
          </Text>
          <Box className="space-y-2">
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={2}
            >
              <Icon name={IconName.Info} />
              <Text>Default text and icon color</Text>
            </Box>
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={2}
            >
              <Icon name={IconName.Info} color={IconColor.IconAlternative} />
              <Text color={TextColor.TextAlternative}>
                Alternative text and icon color
              </Text>
            </Box>
            <Box
              flexDirection={BoxFlexDirection.Row}
              alignItems={BoxAlignItems.Center}
              gap={2}
            >
              <Icon name={IconName.Info} color={IconColor.IconMuted} />
              <Text color={TextColor.TextMuted}>Muted text and icon color</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Default: Story = {
  render: () => <Backgrounds />,
};
