import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Text,
  TextVariant,
  TextColor,
  Box,
  BoxFlexDirection,
  BoxFlexWrap,
  BoxAlignItems,
  BoxJustifyContent,
  FontWeight,
} from '@metamask/design-system-react';

const meta: Meta = {
  title: 'Design Tokens/Tailwind CSS Utilities',
  parameters: {
    docs: {
      description: {
        component:
          'Documentation of all design token aligned Tailwind CSS utilities for colors and shadows from @metamask/design-system-tailwind-preset',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Color swatch component for displaying colors
interface ColorSwatchProps {
  className: string;
  label: string;
  description?: string;
  textClassName?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ 
  className, 
  label, 
  description, 
  textClassName = 'text-default' 
}) => (
  <Box
    flexDirection={BoxFlexDirection.Column}
    gap={2}
    className="min-w-0 flex-1"
  >
    <Box
      className={`h-16 w-full rounded-lg border border-muted ${className}`}
    />
    <Box flexDirection={BoxFlexDirection.Column} gap={1}>
      <Text
        variant={TextVariant.BodySm}
        fontWeight={FontWeight.Medium}
        className={textClassName}
      >
        {label}
      </Text>
      {description && (
        <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
          {description}
        </Text>
      )}
    </Box>
  </Box>
);

// Shadow showcase component
interface ShadowShowcaseProps {
  shadowClass: string;
  label: string;
  description?: string;
}

const ShadowShowcase: React.FC<ShadowShowcaseProps> = ({ 
  shadowClass, 
  label, 
  description 
}) => (
  <Box
    flexDirection={BoxFlexDirection.Column}
    gap={2}
    className="min-w-0 flex-1"
  >
    <Box
      className={`h-16 w-full rounded-lg bg-default border border-muted ${shadowClass}`}
    />
    <Box flexDirection={BoxFlexDirection.Column} gap={1}>
      <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
        {label}
      </Text>
      {description && (
        <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
          {description}
        </Text>
      )}
    </Box>
  </Box>
);

// Section header component
interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  description 
}) => (
  <Box flexDirection={BoxFlexDirection.Column} gap={2} className="mb-6">
    <Text variant={TextVariant.HeadingLg} fontWeight={FontWeight.Bold}>
      {title}
    </Text>
    {description && (
      <Text variant={TextVariant.BodyMd} color={TextColor.TextAlternative}>
        {description}
      </Text>
    )}
  </Box>
);

// Usage example component
interface UsageExampleProps {
  title: string;
  children: React.ReactNode;
  code: string;
}

const UsageExample: React.FC<UsageExampleProps> = ({ 
  title, 
  children, 
  code 
}) => (
  <Box
    flexDirection={BoxFlexDirection.Column}
    gap={3}
    className="rounded-lg border border-muted p-4"
  >
    <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
      {title}
    </Text>
    <Box className="rounded bg-alternative p-3">{children}</Box>
    <Box className="rounded bg-muted p-3">
      <Text variant={TextVariant.BodySm} className="font-mono">
        {code}
      </Text>
    </Box>
  </Box>
);

const TailwindDesignTokensStory: React.FC = () => {
  return (
    <Box flexDirection={BoxFlexDirection.Column} gap={8} className="p-6">
      {/* Introduction */}
      <Box flexDirection={BoxFlexDirection.Column} gap={4}>
        <Text variant={TextVariant.DisplayMd} fontWeight={FontWeight.Bold}>
          Design Token Aligned Tailwind CSS Utilities
        </Text>
        <Text variant={TextVariant.BodyLg} color={TextColor.TextAlternative}>
          A comprehensive guide to all color and shadow utilities available in
          the MetaMask Design System Tailwind preset. These utilities are
          aligned with our design tokens and provide semantic, accessible color
          combinations.
        </Text>
      </Box>

      {/* Background Colors */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Background Colors"
          description="Background colors for surfaces, with hover and pressed states for interactive elements."
        />
        
        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Primary Backgrounds
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-default"
              label="bg-default"
              description="For default neutral surface"
            />
            <ColorSwatch
              className="bg-alternative"
              label="bg-alternative"
              description="For sunken neutral surface below background/default"
            />
            <ColorSwatch
              className="bg-section"
              label="bg-section"
              description="For section bg usually over background/default"
            />
            <ColorSwatch
              className="bg-subsection"
              label="bg-subsection"
              description="For subsection bg usually over background/section"
            />
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Interactive States
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-muted"
              label="bg-muted"
              description="For muted neutral surface"
            />
            <ColorSwatch
              className="bg-hover"
              label="bg-hover"
              description="General purpose hover state tint"
            />
            <ColorSwatch
              className="bg-pressed"
              label="bg-pressed"
              description="General purpose pressed state tint"
            />
          </Box>
        </Box>

        <UsageExample
          title="Background Usage Example"
          code='<div className="bg-default p-4 rounded-lg">
  <div className="bg-section p-3 rounded">
    Section content
  </div>
</div>'
        >
          <Box className="bg-default p-4 rounded-lg">
            <Box className="bg-section p-3 rounded">
              <Text>Section content</Text>
            </Box>
          </Box>
        </UsageExample>
      </Box>

      {/* Text Colors */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Text Colors"
          description="Semantic text colors with proper contrast ratios for accessibility."
        />
        
        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={4}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full rounded-lg bg-default border border-muted flex items-center justify-center">
              <Text className="text-default">text-default</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              text-default
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Default color for text
            </Text>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full rounded-lg bg-default border border-muted flex items-center justify-center">
              <Text className="text-alternative">text-alternative</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              text-alternative
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Softer color for text
            </Text>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full rounded-lg bg-default border border-muted flex items-center justify-center">
              <Text className="text-muted">text-muted</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              text-muted
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Muted color for text (Not accessible)
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Semantic Colors */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Semantic Colors"
          description="Colors that convey meaning and state, available for backgrounds, text, and borders."
        />

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Primary
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-primary-default"
              label="bg/text/border-primary-default"
              description="For primary semantic elements: interactive, active, selected"
              textClassName="text-primary-inverse"
            />
            <ColorSwatch
              className="bg-primary-alternative"
              label="bg/text/border-primary-alternative"
              description="Stronger color for primary semantic elements"
              textClassName="text-primary-inverse"
            />
            <ColorSwatch
              className="bg-primary-muted"
              label="bg/text/border-primary-muted"
              description="Muted color for primary semantic elements"
            />
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Error
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-error-default"
              label="bg/text/border-error-default"
              description="For danger semantic elements: error, critical, destructive"
              textClassName="text-error-inverse"
            />
            <ColorSwatch
              className="bg-error-alternative"
              label="bg/text/border-error-alternative"
              description="Stronger color for error semantic"
              textClassName="text-error-inverse"
            />
            <ColorSwatch
              className="bg-error-muted"
              label="bg/text/border-error-muted"
              description="Muted color for error semantic"
            />
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Warning
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-warning-default"
              label="bg/text/border-warning-default"
              description="For warning semantic elements: caution, attention, precaution"
              textClassName="text-warning-inverse"
            />
            <ColorSwatch
              className="bg-warning-muted"
              label="bg/text/border-warning-muted"
              description="Muted color option for warning semantic"
            />
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Success
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-success-default"
              label="bg/text/border-success-default"
              description="For positive semantic elements: success, confirm, complete, safe"
              textClassName="text-success-inverse"
            />
            <ColorSwatch
              className="bg-success-muted"
              label="bg/text/border-success-muted"
              description="Muted color for positive semantic"
            />
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Info
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ColorSwatch
              className="bg-info-default"
              label="bg/text/border-info-default"
              description="For informational read-only elements: info, reminder, hint"
              textClassName="text-info-inverse"
            />
            <ColorSwatch
              className="bg-info-muted"
              label="bg/text/border-info-muted"
              description="Muted color for informational semantic"
            />
          </Box>
        </Box>

        <UsageExample
          title="Semantic Color Usage Example"
          code='<div className="bg-error-muted border border-error-default p-3 rounded">
  <p className="text-error-default">Error message</p>
</div>'
        >
          <Box className="bg-error-muted border border-error-default p-3 rounded">
            <Text className="text-error-default">Error message</Text>
          </Box>
        </UsageExample>
      </Box>

      {/* Accent Colors */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Accent Colors"
          description="Expressive colors for brand differentiation and visual hierarchy."
        />
        
        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={4}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={3} className="flex-1">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Accent 01 (Orange)
            </Text>
            <Box flexDirection={BoxFlexDirection.Row} gap={2}>
              <ColorSwatch
                className="bg-accent01-light"
                label="bg-accent01-light"
                description="Light orange"
              />
              <ColorSwatch
                className="bg-accent01-normal"
                label="bg-accent01-normal"
                description="Orange"
              />
              <ColorSwatch
                className="bg-accent01-dark"
                label="bg-accent01-dark"
                description="Dark orange"
                textClassName="text-white"
              />
            </Box>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={3} className="flex-1">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Accent 02 (Purple)
            </Text>
            <Box flexDirection={BoxFlexDirection.Row} gap={2}>
              <ColorSwatch
                className="bg-accent02-light"
                label="bg-accent02-light"
                description="Light purple"
              />
              <ColorSwatch
                className="bg-accent02-normal"
                label="bg-accent02-normal"
                description="Purple"
              />
              <ColorSwatch
                className="bg-accent02-dark"
                label="bg-accent02-dark"
                description="Dark purple"
                textClassName="text-white"
              />
            </Box>
          </Box>
        </Box>
        
        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={4}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={3} className="flex-1">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Accent 03 (Lime)
            </Text>
            <Box flexDirection={BoxFlexDirection.Row} gap={2}>
              <ColorSwatch
                className="bg-accent03-light"
                label="bg-accent03-light"
                description="Light lime"
              />
              <ColorSwatch
                className="bg-accent03-normal"
                label="bg-accent03-normal"
                description="Lime"
              />
              <ColorSwatch
                className="bg-accent03-dark"
                label="bg-accent03-dark"
                description="Dark lime"
                textClassName="text-white"
              />
            </Box>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={3} className="flex-1">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Accent 04 (Indigo)
            </Text>
            <Box flexDirection={BoxFlexDirection.Row} gap={2}>
              <ColorSwatch
                className="bg-accent04-light"
                label="bg-accent04-light"
                description="Light indigo"
              />
              <ColorSwatch
                className="bg-accent04-normal"
                label="bg-accent04-normal"
                description="Indigo"
              />
              <ColorSwatch
                className="bg-accent04-dark"
                label="bg-accent04-dark"
                description="Dark indigo"
                textClassName="text-white"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Border Colors */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Border Colors"
          description="Border colors for visual separation and component boundaries."
        />
        
        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={4}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full bg-default border-2 border-default rounded-lg flex items-center justify-center">
              <Text>border-default</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              border-default
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Default color for borders
            </Text>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full bg-default border-2 border-muted rounded-lg flex items-center justify-center">
              <Text>border-muted</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              border-muted
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Muted color for borders
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Icon Colors */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Icon Colors"
          description="Icon colors that follow text color semantics with additional inverse options."
        />
        
        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={4}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full bg-default border border-muted rounded-lg flex items-center justify-center">
              <Text className="text-icon-default">🔍</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              text-icon-default
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Default color for icons
            </Text>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full bg-default border border-muted rounded-lg flex items-center justify-center">
              <Text className="text-icon-alternative">🔍</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              text-icon-alternative
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              Softer color for icons
            </Text>
          </Box>
          <Box flexDirection={BoxFlexDirection.Column} gap={2} className="flex-1">
            <Box className="h-16 w-full bg-icon-default border border-muted rounded-lg flex items-center justify-center">
              <Text className="text-icon-inverse">🔍</Text>
            </Box>
            <Text variant={TextVariant.BodySm} fontWeight={FontWeight.Medium}>
              text-icon-inverse
            </Text>
            <Text variant={TextVariant.BodyXs} color={TextColor.TextAlternative}>
              For elements on dark backgrounds
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Shadows */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Shadow Utilities"
          description="Layered shadow system with size and color combinations for depth and hierarchy."
        />

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Shadow Sizes
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ShadowShowcase
              shadowClass="shadow-xs"
              label="shadow-xs"
              description="Extra small shadow"
            />
            <ShadowShowcase
              shadowClass="shadow-sm"
              label="shadow-sm"
              description="Small shadow"
            />
            <ShadowShowcase
              shadowClass="shadow-md"
              label="shadow-md"
              description="Medium shadow"
            />
            <ShadowShowcase
              shadowClass="shadow-lg"
              label="shadow-lg"
              description="Large shadow"
            />
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            Shadow Colors (Combined with Size)
          </Text>
          <Box
            flexDirection={BoxFlexDirection.Row}
            flexWrap={BoxFlexWrap.Wrap}
            gap={4}
          >
            <ShadowShowcase
              shadowClass="shadow-md shadow-default"
              label="shadow-md shadow-default"
              description="Default neutral shadow"
            />
            <ShadowShowcase
              shadowClass="shadow-md shadow-primary"
              label="shadow-md shadow-primary"
              description="Primary colored shadow"
            />
            <ShadowShowcase
              shadowClass="shadow-md shadow-error"
              label="shadow-md shadow-error"
              description="Error/critical shadow"
            />
          </Box>
        </Box>

        <UsageExample
          title="Shadow Usage Example"
          code='<div className="shadow-lg shadow-primary p-4 rounded-lg bg-default">
  Component with primary shadow
</div>'
        >
          <Box className="shadow-lg shadow-primary p-4 rounded-lg bg-default">
            <Text>Component with primary shadow</Text>
          </Box>
        </UsageExample>
      </Box>

      {/* Interactive State Examples */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Interactive State Examples"
          description="Examples showing how colors work together for interactive elements."
        />

        <Box
          flexDirection={BoxFlexDirection.Row}
          flexWrap={BoxFlexWrap.Wrap}
          gap={4}
        >
          <Box flexDirection={BoxFlexDirection.Column} gap={3} className="flex-1">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Primary Button States
            </Text>
            <Box flexDirection={BoxFlexDirection.Column} gap={2}>
              <Box className="bg-primary-default text-primary-inverse p-3 rounded cursor-pointer">
                <Text className="text-primary-inverse">Default State</Text>
              </Box>
              <Box className="bg-primary-default-hover text-primary-inverse p-3 rounded cursor-pointer">
                <Text className="text-primary-inverse">Hover State</Text>
              </Box>
              <Box className="bg-primary-default-pressed text-primary-inverse p-3 rounded cursor-pointer">
                <Text className="text-primary-inverse">Pressed State</Text>
              </Box>
            </Box>
          </Box>

          <Box flexDirection={BoxFlexDirection.Column} gap={3} className="flex-1">
            <Text variant={TextVariant.BodyMd} fontWeight={FontWeight.Medium}>
              Muted Button States
            </Text>
            <Box flexDirection={BoxFlexDirection.Column} gap={2}>
              <Box className="bg-muted text-default p-3 rounded cursor-pointer">
                <Text>Default State</Text>
              </Box>
              <Box className="bg-muted-hover text-default p-3 rounded cursor-pointer">
                <Text>Hover State</Text>
              </Box>
              <Box className="bg-muted-pressed text-default p-3 rounded cursor-pointer">
                <Text>Pressed State</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Usage Guidelines */}
      <Box flexDirection={BoxFlexDirection.Column} gap={6}>
        <SectionHeader
          title="Usage Guidelines"
          description="Best practices for using design token aligned utilities."
        />

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            ✅ Do
          </Text>
          <Box className="bg-success-muted border border-success-default p-4 rounded-lg">
            <Box flexDirection={BoxFlexDirection.Column} gap={2}>
              <Text>• Use semantic color names for meaning (primary, error, success)</Text>
              <Text>• Combine background, text, and border colors from the same semantic group</Text>
              <Text>• Use hover and pressed states for interactive elements</Text>
              <Text>• Layer shadows with both size and color utilities</Text>
            </Box>
          </Box>
        </Box>

        <Box flexDirection={BoxFlexDirection.Column} gap={4}>
          <Text variant={TextVariant.HeadingMd} fontWeight={FontWeight.Medium}>
            ❌ Don't
          </Text>
          <Box className="bg-error-muted border border-error-default p-4 rounded-lg">
            <Box flexDirection={BoxFlexDirection.Column} gap={2}>
              <Text>• Mix arbitrary color values with design tokens</Text>
              <Text>• Use text-muted for important content (it's not accessible)</Text>
              <Text>• Combine semantic colors without considering their meaning</Text>
              <Text>• Override design token colors with custom values</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Default: Story = {
  render: () => <TailwindDesignTokensStory />,
  parameters: {
    layout: 'fullscreen',
  },
};