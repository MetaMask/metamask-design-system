// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// External dependencies.
import { IconName } from '../Icon';

// Internal dependencies.
import { HeaderRoot } from './HeaderRoot';

const CONTAINER_TEST_ID = 'header-root-container';
const LEFT_CHILDREN_TEST_ID = 'header-root-left-children';
const END_ACCESSORY_TEST_ID = 'header-root-end-accessory';
const END_BUTTON_TEST_ID = 'header-root-end-button';

describe('HeaderRoot', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders container with testID when provided', async () => {
      const { getByTestId } = await render(
        <HeaderRoot title="Title" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('renders title in left section when title provided and no children', async () => {
      const { getByText } = await render(<HeaderRoot title="Test Title" />);

      expect(getByText('Test Title')).toBeOnTheScreen();
    });

    it('renders title when title is a React node', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderRoot
          title={<Text testID="header-root-title-node">Node Title</Text>}
          titleProps={{ testID: 'header-root-title-string-props' }}
        />,
      );

      expect(getByTestId('header-root-title-node')).toBeOnTheScreen();
      expect(queryByTestId('header-root-title-string-props')).toBeNull();
    });

    it('renders title with testID when provided via titleProps', async () => {
      const { getByTestId } = await render(
        <HeaderRoot
          title="Test Title"
          titleProps={{ testID: 'header-root-title' }}
        />,
      );

      expect(getByTestId('header-root-title')).toBeOnTheScreen();
    });

    it('renders titleAccessory in title row when no children', async () => {
      const { getByTestId, getByText } = await render(
        <HeaderRoot
          title="Title"
          titleAccessory={<Text testID={LEFT_CHILDREN_TEST_ID}>Accessory</Text>}
        />,
      );

      expect(getByText('Title')).toBeOnTheScreen();
      expect(getByTestId(LEFT_CHILDREN_TEST_ID)).toBeOnTheScreen();
    });

    it('renders children in left section when children provided', async () => {
      const { getByTestId, queryByText } = await render(
        <HeaderRoot title="Ignored Title" testID={CONTAINER_TEST_ID}>
          <Text testID={LEFT_CHILDREN_TEST_ID}>Custom Content</Text>
        </HeaderRoot>,
      );

      expect(getByTestId(LEFT_CHILDREN_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
      expect(queryByText('Ignored Title')).not.toBeOnTheScreen();
    });

    it('prioritizes children over title when both provided', async () => {
      const { getByText, queryByText } = await render(
        <HeaderRoot title="Title Text">
          <Text>Children Text</Text>
        </HeaderRoot>,
      );

      expect(getByText('Children Text')).toBeOnTheScreen();
      expect(queryByText('Title Text')).not.toBeOnTheScreen();
    });

    it('renders title row when children is null', async () => {
      const { getByText } = await render(
        <HeaderRoot title="Title When Children Null">{null}</HeaderRoot>,
      );

      expect(getByText('Title When Children Null')).toBeOnTheScreen();
    });

    it('renders title row when children is false from conditional rendering', async () => {
      const { getByText } = await render(
        <HeaderRoot title="Settings">{false}</HeaderRoot>,
      );

      expect(getByText('Settings')).toBeOnTheScreen();
    });

    it('renders nothing in left section when no children and no title or titleAccessory', async () => {
      const { getByTestId, queryByText } = await render(
        <HeaderRoot testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
      expect(queryByText('Title')).not.toBeOnTheScreen();
    });

    it('does not render title row when title is false from conditional expression', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderRoot
          testID={CONTAINER_TEST_ID}
          title={false}
          titleAccessory={
            <Text testID={LEFT_CHILDREN_TEST_ID}>Should not show</Text>
          }
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
      expect(queryByTestId(LEFT_CHILDREN_TEST_ID)).toBeNull();
    });

    it('does not render title row when titleAccessory is false from conditional expression', async () => {
      const { getByText, queryByTestId } = await render(
        <HeaderRoot
          title="Visible"
          titleAccessory={false}
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByText('Visible')).toBeOnTheScreen();
      expect(queryByTestId(LEFT_CHILDREN_TEST_ID)).toBeNull();
    });
  });

  describe('end section', () => {
    it('renders endAccessory when provided', async () => {
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          endAccessory={<Text testID={END_ACCESSORY_TEST_ID}>End Content</Text>}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeOnTheScreen();
    });

    it('renders single ButtonIcon when endButtonIconProps has one item', async () => {
      const onPressMock = jest.fn();
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: onPressMock,
              testID: END_BUTTON_TEST_ID,
            },
          ]}
        />,
      );

      expect(getByTestId(END_BUTTON_TEST_ID)).toBeOnTheScreen();
    });

    it('calls onPress when end ButtonIcon is pressed', async () => {
      const onPressMock = jest.fn();
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: onPressMock,
              testID: END_BUTTON_TEST_ID,
            },
          ]}
        />,
      );

      await fireEvent.press(getByTestId(END_BUTTON_TEST_ID));

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('renders multiple ButtonIcons when endButtonIconProps has multiple items', async () => {
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: jest.fn(),
              testID: 'end-button-close',
            },
            {
              iconName: IconName.Search,
              onPress: jest.fn(),
              testID: 'end-button-search',
            },
          ]}
        />,
      );

      expect(getByTestId('end-button-close')).toBeOnTheScreen();
      expect(getByTestId('end-button-search')).toBeOnTheScreen();
    });

    it('does not render end section when no endAccessory and no endButtonIconProps', async () => {
      const { queryByTestId } = await render(<HeaderRoot title="Title" />);

      expect(queryByTestId(END_ACCESSORY_TEST_ID)).toBeNull();
      expect(queryByTestId(END_BUTTON_TEST_ID)).toBeNull();
    });

    it('does not render end ButtonIcons when endButtonIconProps is empty array', async () => {
      const { queryByTestId } = await render(
        <HeaderRoot title="Title" endButtonIconProps={[]} />,
      );

      expect(queryByTestId(END_BUTTON_TEST_ID)).toBeNull();
    });

    it('prioritizes endAccessory over endButtonIconProps', async () => {
      const { getByTestId, queryByTestId } = await render(
        <HeaderRoot
          title="Title"
          endAccessory={<Text testID={END_ACCESSORY_TEST_ID}>Custom End</Text>}
          endButtonIconProps={[
            {
              iconName: IconName.Close,
              onPress: jest.fn(),
              testID: END_BUTTON_TEST_ID,
            },
          ]}
        />,
      );

      expect(getByTestId(END_ACCESSORY_TEST_ID)).toBeOnTheScreen();
      expect(queryByTestId(END_BUTTON_TEST_ID)).toBeNull();
    });
  });

  describe('includesTopInset', () => {
    beforeEach(() => {
      jest.mocked(useSafeAreaInsets).mockReturnValue({
        top: 50,
        bottom: 0,
        left: 0,
        right: 0,
      });
    });

    it('applies marginTop style when includesTopInset is true', async () => {
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          testID={CONTAINER_TEST_ID}
          includesTopInset
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle({ marginTop: 50 });
    });

    it('does not apply marginTop when includesTopInset is false', async () => {
      const { getByTestId } = await render(
        <HeaderRoot title="Title" testID={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).not.toHaveStyle({ marginTop: 50 });
    });
  });

  describe('style and twClassName', () => {
    it('applies custom style to container', async () => {
      const customStyle = { backgroundColor: 'red' };
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          testID={CONTAINER_TEST_ID}
          style={customStyle}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });

    it('merges twClassName with base styles', async () => {
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          testID={CONTAINER_TEST_ID}
          twClassName="bg-default"
        />,
      );

      const container = getByTestId(CONTAINER_TEST_ID);

      expect(container).toHaveStyle(tw`min-h-14`);
      expect(container).toHaveStyle(tw`bg-default`);
    });
  });

  describe('titleProps', () => {
    it('spreads titleProps to title Text when title is set', async () => {
      const { getByTestId } = await render(
        <HeaderRoot
          title="Title"
          titleProps={{
            testID: 'title-with-props',
            accessibilityLabel: 'Main title',
          }}
        />,
      );

      const title = getByTestId('title-with-props');

      expect(title).toBeOnTheScreen();
      expect(title.props.accessibilityLabel).toBe('Main title');
    });
  });
});
