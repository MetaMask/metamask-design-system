import {
  Box,
  BoxAlignItems,
  BoxBackgroundColor,
  BoxFlexDirection,
  Icon,
  IconColor,
  IconName,
  Text,
  TextButton,
  TextColor,
  TextVariant,
  Button,
  ButtonVariant,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ScrollView } from 'react-native';

const meta: Meta = {
  title: 'Examples/Backgrounds',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const ButtonComponents = () => (
  <Box flexDirection={BoxFlexDirection.Row} gap={2}>
    <Button variant={ButtonVariant.Primary}>Primary Button</Button>
    <Button variant={ButtonVariant.Secondary}>Secondary Button</Button>
    <Button variant={ButtonVariant.Tertiary}>Tertiary Button</Button>
    <TextButton>Text Button</TextButton>
  </Box>
);

const TextComponents = () => (
  <>
    <Text variant={TextVariant.HeadingSm}>Text & Icon Colors</Text>
    <Box twClassName="space-y-2">
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={2}
      >
        <Icon name={IconName.Info} />
        <Text>Text Default and Icon Default</Text>
      </Box>
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={2}
      >
        <Icon name={IconName.Info} color={IconColor.IconAlternative} />
        <Text color={TextColor.TextAlternative}>
          Text Alternative and Icon Alternative
        </Text>
      </Box>
      <Box
        flexDirection={BoxFlexDirection.Row}
        alignItems={BoxAlignItems.Center}
        gap={2}
      >
        <Icon name={IconName.Info} color={IconColor.IconMuted} />
        <Text color={TextColor.TextMuted}>Text Muted and Icon Muted</Text>
      </Box>
    </Box>
  </>
);

const Backgrounds: React.FC = () => {
  const tw = useTailwind();
  return (
    <ScrollView style={tw`flex-1 bg-default`}>
      <Box
        twClassName="w-full"
        backgroundColor={BoxBackgroundColor.BackgroundDefault}
      >
        {/* Background Default */}
        <Box
          flexDirection={BoxFlexDirection.Column}
          gap={4}
          twClassName="rounded-2xl"
        >
          <Text variant={TextVariant.HeadingMd}>Background Default</Text>
          <TextComponents />
          <ButtonComponents />
          {/* Background Section */}
          <Box
            twClassName="p-4 rounded-2xl"
            backgroundColor={BoxBackgroundColor.BackgroundSection}
            flexDirection={BoxFlexDirection.Column}
            gap={4}
          >
            <Text variant={TextVariant.HeadingMd}>Background Section</Text>
            <TextComponents />
            <ButtonComponents />

            {/* Background Subsection */}
            <Box
              twClassName="p-4 rounded-2xl"
              backgroundColor={BoxBackgroundColor.BackgroundSubsection}
              flexDirection={BoxFlexDirection.Column}
              gap={4}
            >
              <Text variant={TextVariant.HeadingMd}>Background Subsection</Text>
              <TextComponents />
              <ButtonComponents />
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export const Default: Story = {
  render: () => <Backgrounds />,
};
