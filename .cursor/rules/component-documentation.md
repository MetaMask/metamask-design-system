# Component Documentation

Documentation standards for Storybook stories and README files for React and React Native components.

## Critical Rules

### README Structure

- **React Web**: Use `.mdx` format with Storybook Canvas integration
- **React Native**: Use `.md` format with comprehensive static examples
- **ALWAYS** include: component description, basic usage, props documentation
- **NEVER** duplicate prop type definitions (reference types file instead)

**React Web (.mdx):**

````mdx
import { Controls, Canvas } from '@storybook/addon-docs/blocks';
import * as ComponentStories from './Component.stories';

# Component

Brief one-line description of component purpose.

## Usage

\```tsx
import { Component, ComponentVariant } from '@metamask/design-system-react';

<Component variant={ComponentVariant.Primary}>Content</Component>
\```

<Canvas of={ComponentStories.Default} />

## Props

### variant

Description of the variant prop.

Available values:

- `ComponentVariant.Primary` - Primary styling
- `ComponentVariant.Secondary` - Secondary styling

| TYPE             | REQUIRED | DEFAULT                  |
| ---------------- | -------- | ------------------------ |
| ComponentVariant | No       | ComponentVariant.Primary |

<Canvas of={ComponentStories.Variant} />

## Component API

<Controls />
````

**React Native (.md):**

````md
# [Component](https://www.figma.com/design/link)

![Component](./Component.png)

Brief description of component purpose and platform.

## Props

### variant

Description of the variant prop.

**Type:** `ComponentVariant`
**Required:** No
**Default:** `ComponentVariant.Primary`

**Available values:**

- `ComponentVariant.Primary` - Primary styling
- `ComponentVariant.Secondary` - Secondary styling

## Usage

### Basic Usage

\```tsx
import { Component, ComponentVariant } from '@metamask/design-system-react-native';

<Component variant={ComponentVariant.Primary}>Content</Component>
\```

### With Multiple Props

\```tsx
<Component
variant={ComponentVariant.Primary}
size={ComponentSize.Md}
onPress={handlePress}

> Content
> </Component> > \```

## Accessibility

- Component supports screen readers via accessibilityLabel
- Uses semantic role for proper announcement
````

### Storybook Stories

- **ALWAYS** create meta with title, component, parameters, argTypes
- **ALWAYS** include Default story with minimal args
- **ALWAYS** create showcase stories for major props (Variant, Size, etc.)
- **NEVER** use string literals in stories (use enums)

**React Web:**

```tsx
// ❌ Wrong - No meta configuration
export const Primary = () => <Button>Click me</Button>;

// ✅ Correct - Proper meta with argTypes
import type { Meta, StoryObj } from '@storybook/react-vite';
import README from './Button.README.mdx';
import { Button, ButtonVariant, ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
  title: 'React Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(ButtonVariant),
      mapping: ButtonVariant,
      description: 'Defines the visual style of the button',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variant: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant={ButtonVariant.Primary}>Primary</Button>
      <Button variant={ButtonVariant.Secondary}>Secondary</Button>
    </div>
  ),
};
```

**React Native:**

```tsx
// ❌ Wrong - String literals in controls
argTypes: {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'select' },
  },
}

// ✅ Correct - Enum values in controls
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant, ButtonSize } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Helper for platform-specific rendering
const ButtonStory: React.FC<ButtonProps> = (props) => {
  const tw = useTailwind();
  return (
    <View style={tw`bg-default p-4`}>
      <Button {...props} />
    </View>
  );
};

export const Variant: Story = {
  render: (args) => (
    <View style={tw`flex-col gap-4`}>
      <ButtonStory {...args} variant={ButtonVariant.Primary} />
      <ButtonStory {...args} variant={ButtonVariant.Secondary} />
    </View>
  ),
};
```

### Cross-Platform Consistency

- **ALWAYS** document same props in both platforms
- **ALWAYS** use same section headings (Props, Usage, Accessibility)
- **ALWAYS** use same enum names and values across platforms
- **Web**: Interactive Canvas examples, minimal written examples
- **Native**: Comprehensive written examples, multiple usage patterns

## Platform Patterns

### React Web README (.mdx)

**Structure:**

1. Imports (Storybook blocks + stories)
2. Title and description
3. Basic usage code block
4. Canvas of Default story
5. Props section (one subsection per prop)
6. Component API (Controls block)

**Canvas Integration:**

```mdx
<Canvas of={ComponentStories.Default} />
<Canvas of={ComponentStories.Variant} />
```

**Props Documentation:**

```mdx
### propName

Description of prop purpose and behavior.

Available values:

- `EnumName.Value1` - Description
- `EnumName.Value2` - Description

| TYPE     | REQUIRED | DEFAULT         |
| -------- | -------- | --------------- |
| EnumName | No       | EnumName.Value1 |

<Canvas of={ComponentStories.PropName} />
```

### React Native README (.md)

**Structure:**

1. Title with Figma link
2. Image reference
3. Description
4. Props sections (organized by category if many props)
5. Usage section (Basic + Advanced patterns)
6. Value reference tables (if applicable)
7. Accessibility notes
8. Contributing guidelines (optional)

**Usage Examples:**

````md
## Usage

### Basic Usage

\```tsx
import { Component } from '@metamask/design-system-react-native';

<Component>Content</Component>
\```

### With Props

\```tsx
<Component
variant={ComponentVariant.Primary}
onPress={handlePress}

> Content
> </Component> > \```

### Complex Pattern

\```tsx
<Box flexDirection={BoxFlexDirection.Column} gap={4}>
<Component variant={ComponentVariant.Primary}>
Primary Content
</Component>
<Component variant={ComponentVariant.Secondary}>
Secondary Content
</Component>
</Box>
\```
````

**Value Tables:**

```md
## Color Options

| Prop            | Values                                                                             |
| --------------- | ---------------------------------------------------------------------------------- |
| color           | `TextColor.TextDefault`, `TextColor.TextAlternative`, `TextColor.TextMuted`        |
| backgroundColor | `BoxBackgroundColor.BackgroundDefault`, `BoxBackgroundColor.BackgroundAlternative` |
```

### React Web Stories

**Meta Configuration:**

```tsx
const meta: Meta<typeof Component> = {
  title: 'React Components/ComponentName',
  component: Component,
  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    enumProp: {
      control: 'select',
      options: Object.keys(EnumName),
      mapping: EnumName,
      description: 'Prop description',
    },
    textProp: {
      control: 'text',
      description: 'Prop description',
    },
    booleanProp: {
      control: 'boolean',
      description: 'Prop description',
    },
  },
};
```

**Story Patterns:**

```tsx
// Default - Minimal args
export const Default: Story = {
  args: {
    children: 'Content',
  },
};

// Showcase - Multiple variants side by side
export const Variant: Story = {
  render: () => (
    <div className="space-y-4">
      <Component variant={EnumName.Value1}>Value1</Component>
      <Component variant={EnumName.Value2}>Value2</Component>
    </div>
  ),
};

// Feature - Complex usage
export const WithIcon: Story = {
  render: (args) => (
    <Component {...args} startIcon={<Icon name={IconName.Add} />}>
      With Icon
    </Component>
  ),
};
```

### React Native Stories

**Meta Configuration:**

```tsx
const meta: Meta<typeof Component> = {
  title: 'Components/ComponentName',
  component: Component,
  argTypes: {
    enumProp: {
      options: EnumName,
      control: { type: 'select' },
    },
    textProp: {
      control: { type: 'text' },
    },
    booleanProp: {
      control: { type: 'boolean' },
    },
  },
};
```

**Helper Pattern:**

```tsx
const ComponentStory: React.FC<ComponentProps> = ({ isInverse, ...props }) => {
  const tw = useTailwind();
  return (
    <View style={tw`${isInverse ? 'bg-primary-default p-4' : 'bg-default'}`}>
      <Component isInverse={isInverse} {...props} />
    </View>
  );
};

export const Variant: Story = {
  render: (args) => (
    <ScrollView style={tw`p-4`}>
      <ComponentStory {...args} variant={EnumName.Value1} />
      <ComponentStory {...args} variant={EnumName.Value2} />
    </ScrollView>
  ),
};
```

## Commands

```bash
# Run Storybook
yarn storybook                # React web (port 6006)
yarn storybook:ios            # React Native iOS
yarn storybook:android        # React Native Android

# Build Storybook
yarn build-storybook          # Build static site

# Test accessibility
yarn test:storybook           # Run Storybook accessibility tests
```

## Golden Path Examples

**Complete examples demonstrating best practices:**

**React Web:**

- @packages/design-system-react/src/components/Button/ (README.mdx + stories)
- @packages/design-system-react/src/components/Box/ (comprehensive props documentation)
- @packages/design-system-react/src/components/Text/ (typography examples)

**React Native:**

- @packages/design-system-react-native/src/components/Button/ (README.md + stories)
- @packages/design-system-react-native/src/components/Box/ (usage patterns + value tables)
- @packages/design-system-react-native/src/components/Text/ (comprehensive examples)

**Real-world examples:**

- @apps/storybook-react/stories/WalletHome.stories.tsx (complex React Web story)
- @apps/storybook-react-native/stories/WalletHome.stories.tsx (complex React Native story)

## Verification

After adding/updating component documentation, verify:

- [ ] README exists in component directory (.mdx for web, .md for native)
- [ ] README includes: description, usage, props documentation
- [ ] Web README uses Canvas blocks for interactive examples
- [ ] Native README includes comprehensive usage patterns
- [ ] Stories file exports meta with proper argTypes
- [ ] Default story exists with minimal args
- [ ] Showcase stories exist for major props (Variant, Size, etc.)
- [ ] No string literals used (all enums)
- [ ] Web meta includes README in parameters.docs.page
- [ ] Native stories use helper pattern for platform-specific rendering (if needed)
- [ ] Cross-platform: same prop names and enum values
- [ ] Storybook builds without errors: `yarn build-storybook`
- [ ] Accessibility tests pass: `yarn test:storybook`
