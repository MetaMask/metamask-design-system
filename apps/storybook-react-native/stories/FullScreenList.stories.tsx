/**
 * Page Template: FullScreenList
 *
 * The most common full-screen pattern in MetaMask Mobile (~47 HeaderStandard usages).
 * Navigator sets `headerShown: false`; the screen owns its header and safe-area inset.
 *
 * Canonical production examples:
 *   - app/components/Views/Settings/index.tsx
 *   - app/components/UI/Bridge/Views/BridgeView/BridgeView.tsx
 *   - app/components/UI/Stake/components/StakeEarningsHistory/
 *
 * Jira: DSYS-938
 */
import {
  Box,
  Button,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  HeaderStandard,
  Icon,
  IconColor,
  IconName,
  IconSize,
  ListItem,
  SectionDivider,
  SectionHeader,
  Text,
  TextColor,
  TextVariant,
} from '@metamask/design-system-react-native';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { ScrollView } from 'react-native';

const meta: Meta = {
  title: 'Examples/Page Templates/Full Screen List',
  component: () => null,
};

export default meta;
type Story = StoryObj;

const noopPress = () => undefined;

// ---------------------------------------------------------------------------
// Shared row data types
// ---------------------------------------------------------------------------

type SettingsRowData = {
  iconName: IconName;
  iconColor: IconColor;
  label: string;
  description?: string;
  isDestructive?: boolean;
};

type NetworkRowData = {
  name: string;
  rpcUrl: string;
  chainId: string;
  isActive?: boolean;
};

// ---------------------------------------------------------------------------
// Settings list — models app/components/Views/Settings/index.tsx
// ---------------------------------------------------------------------------

const SETTINGS_SECTIONS: { title: string; rows: SettingsRowData[] }[] = [
  {
    title: 'Security & Privacy',
    rows: [
      {
        iconName: IconName.Lock,
        iconColor: IconColor.IconDefault,
        label: 'Security & Privacy',
        description: 'Reveal SRP, auto-lock, biometrics',
      },
      {
        iconName: IconName.Eye,
        iconColor: IconColor.IconDefault,
        label: 'Reveal Secret Recovery Phrase',
        description: 'Back up your 12-word phrase',
      },
    ],
  },
  {
    title: 'Preferences',
    rows: [
      {
        iconName: IconName.Global,
        iconColor: IconColor.IconDefault,
        label: 'Networks',
        description: 'Manage RPC endpoints and chain IDs',
      },
      {
        iconName: IconName.Setting,
        iconColor: IconColor.IconDefault,
        label: 'Advanced',
        description: 'State logs, gas controls, experimental',
      },
      {
        iconName: IconName.Notification,
        iconColor: IconColor.IconDefault,
        label: 'Notifications',
        description: 'Push alerts and in-app banners',
      },
    ],
  },
  {
    title: 'About',
    rows: [
      {
        iconName: IconName.Info,
        iconColor: IconColor.IconDefault,
        label: 'About MetaMask',
        description: 'Version, terms, and privacy policy',
      },
      {
        iconName: IconName.Logout,
        iconColor: IconColor.ErrorDefault,
        label: 'Delete wallet',
        isDestructive: true,
      },
    ],
  },
];

const SettingsRow: React.FC<SettingsRowData> = ({
  iconName,
  iconColor,
  label,
  description,
  isDestructive,
}) => (
  <ListItem
    isInteractive
    onPress={noopPress}
    avatar={<Icon name={iconName} size={IconSize.Lg} color={iconColor} />}
    title={label}
    titleProps={{
      fontWeight: FontWeight.Medium,
      color: isDestructive ? TextColor.ErrorDefault : undefined,
    }}
    description={description}
    descriptionProps={{ color: TextColor.TextAlternative }}
  />
);

// ---------------------------------------------------------------------------
// Network list — models Bridge / Networks settings rows
// ---------------------------------------------------------------------------

const NETWORKS: NetworkRowData[] = [
  {
    name: 'Ethereum',
    rpcUrl: 'mainnet.infura.io',
    chainId: '1',
    isActive: true,
  },
  { name: 'Polygon', rpcUrl: 'polygon-rpc.com', chainId: '137' },
  { name: 'Arbitrum One', rpcUrl: 'arb1.arbitrum.io', chainId: '42161' },
  { name: 'Optimism', rpcUrl: 'mainnet.optimism.io', chainId: '10' },
  { name: 'Base', rpcUrl: 'mainnet.base.org', chainId: '8453' },
  { name: 'BNB Chain', rpcUrl: 'bsc-dataseed.binance.org', chainId: '56' },
];

const NetworkRow: React.FC<NetworkRowData> = ({
  name,
  rpcUrl,
  chainId,
  isActive,
}) => (
  <ListItem
    isInteractive
    onPress={noopPress}
    title={name}
    titleProps={{ fontWeight: FontWeight.Medium }}
    description={`${rpcUrl} · Chain ${chainId}`}
    descriptionProps={{ color: TextColor.TextAlternative }}
    endAccessory={
      isActive ? (
        <Icon
          name={IconName.Check}
          size={IconSize.Md}
          color={IconColor.PrimaryDefault}
        />
      ) : undefined
    }
  />
);

// ---------------------------------------------------------------------------
// Template 1 — Default: settings-style list with back + single end icon
//
// Maps to: Settings index, Security & Privacy, Advanced, About MetaMask.
// Key props: `onBack`, single `endButtonIconProps` (help/info).
// ---------------------------------------------------------------------------

const DefaultTemplate: React.FC = () => {
  const tw = useTailwind();

  return (
    <Box twClassName="flex-1 bg-default">
      {/* HeaderStandard owns the safe-area inset via includesTopInset */}
      <HeaderStandard
        title="Settings"
        onBack={noopPress}
        endButtonIconProps={[
          {
            iconName: IconName.Question,
            accessibilityLabel: 'Help',
            onPress: noopPress,
          },
        ]}
        includesTopInset
      />

      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`pb-8`}
        showsVerticalScrollIndicator={false}
      >
        {SETTINGS_SECTIONS.map((section, sectionIndex) => (
          <Box key={section.title}>
            {sectionIndex > 0 && <SectionDivider />}
            <SectionHeader
              title={section.title}
              accessibilityLabel={section.title}
            />
            {section.rows.map((row) => (
              <SettingsRow key={row.label} {...row} />
            ))}
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export const Default: Story = {
  render: () => <DefaultTemplate />,
  name: 'Default (Settings)',
};

// ---------------------------------------------------------------------------
// Template 2 — MultiAction: two end-accessory icon buttons
//
// Maps to: Network list (search + add), Bridge token selector.
// Key props: `onBack`, two-item `endButtonIconProps` array.
// endButtonIconProps renders right-to-left, so first item = rightmost.
// ---------------------------------------------------------------------------

const MultiActionTemplate: React.FC = () => {
  const tw = useTailwind();

  return (
    <Box twClassName="flex-1 bg-default">
      <HeaderStandard
        title="Networks"
        onBack={noopPress}
        endButtonIconProps={[
          {
            iconName: IconName.Add,
            accessibilityLabel: 'Add network',
            onPress: noopPress,
          },
          {
            iconName: IconName.Search,
            accessibilityLabel: 'Search networks',
            onPress: noopPress,
          },
        ]}
        includesTopInset
      />

      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`pb-8`}
        showsVerticalScrollIndicator={false}
      >
        <SectionHeader
          title="Enabled networks"
          accessibilityLabel="Enabled networks"
        />
        {NETWORKS.map((network) => (
          <NetworkRow key={network.chainId} {...network} />
        ))}

        <SectionDivider />

        <Box paddingHorizontal={4} paddingTop={4}>
          <Button
            variant={ButtonVariant.Secondary}
            isFullWidth
            size={ButtonSize.Lg}
            startIconName={IconName.Add}
            onPress={noopPress}
          >
            Add a network
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export const MultiAction: Story = {
  render: () => <MultiActionTemplate />,
  name: 'Multi-action (Networks)',
};

// ---------------------------------------------------------------------------
// Template 3 — RootScreen: no back button, close button instead
//
// Maps to: screens that are the root of a modal stack — user taps a top-level
// nav item and lands here; there's no back destination so `onClose` dismisses
// the entire flow.
// ---------------------------------------------------------------------------

const RootScreenTemplate: React.FC = () => {
  const tw = useTailwind();

  return (
    <Box twClassName="flex-1 bg-default">
      <HeaderStandard
        title="Notifications"
        subtitle="Manage your alert preferences"
        onClose={noopPress}
        includesTopInset
      />

      <ScrollView
        style={tw`flex-1`}
        contentContainerStyle={tw`pb-8`}
        showsVerticalScrollIndicator={false}
      >
        <SectionHeader
          title="Push notifications"
          accessibilityLabel="Push notifications"
        />
        {[
          {
            label: 'Account activity',
            description: 'Sends, receives, approvals',
          },
          { label: 'Price alerts', description: 'Significant price movements' },
          {
            label: 'Snap notifications',
            description: 'Alerts from installed Snaps',
          },
        ].map(({ label, description }) => (
          <ListItem
            key={label}
            isInteractive
            onPress={noopPress}
            title={label}
            titleProps={{ fontWeight: FontWeight.Medium }}
            description={description}
            descriptionProps={{ color: TextColor.TextAlternative }}
            endAccessory={
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.PrimaryDefault}
              >
                On
              </Text>
            }
          />
        ))}

        <SectionDivider />

        <SectionHeader
          title="In-app notifications"
          accessibilityLabel="In-app notifications"
        />
        {[
          { label: 'Announcements', description: 'New features and updates' },
          { label: 'Security alerts', description: 'Phishing warnings' },
        ].map(({ label, description }) => (
          <ListItem
            key={label}
            isInteractive
            onPress={noopPress}
            title={label}
            titleProps={{ fontWeight: FontWeight.Medium }}
            description={description}
            descriptionProps={{ color: TextColor.TextAlternative }}
            endAccessory={
              <Text
                variant={TextVariant.BodySm}
                color={TextColor.PrimaryDefault}
              >
                On
              </Text>
            }
          />
        ))}
      </ScrollView>
    </Box>
  );
};

export const RootScreen: Story = {
  render: () => <RootScreenTemplate />,
  name: 'Root screen (no back, close button)',
};
