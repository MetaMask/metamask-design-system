// Third party dependencies.
import { IconName } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

// Internal dependencies.
import { SectionHeader } from './SectionHeader';

const ROOT_TEST_ID = 'section-header-root';
const TITLE_ROW_TEST_ID = 'section-header-title-row';
const TITLE_TEXT_TEST_ID = 'section-header-title-text';

describe('SectionHeader', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(<SectionHeader title="Assets" />);

      expect(getByText('Assets')).toBeOnTheScreen();
    });

    it('renders React node title', () => {
      const { getByTestId } = render(
        <SectionHeader
          title={<Text testID="section-header-title-node">Custom</Text>}
        />,
      );

      expect(getByTestId('section-header-title-node')).toBeOnTheScreen();
    });

    it('forwards testID to outer BoxRow', () => {
      const { getByTestId } = render(
        <SectionHeader title="Test" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards titleProps testID to title Text when title is a string', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleProps={{ testID: TITLE_TEXT_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEXT_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards titleWrapperProps to inner BoxRow', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleWrapperProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeOnTheScreen();
    });

    it('renders titleAccessory in the inner row', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleAccessory={<Text testID="section-header-title-acc">Info</Text>}
        />,
      );

      expect(getByTestId('section-header-title-acc')).toBeOnTheScreen();
    });

    describe('when title is an empty string', () => {
      it('omits inner title row', () => {
        const { queryByTestId } = render(
          <SectionHeader
            title=""
            titleWrapperProps={{ testID: TITLE_ROW_TEST_ID }}
          />,
        );

        expect(queryByTestId(TITLE_ROW_TEST_ID)).toBeNull();
      });
    });
  });

  describe('startIconName and startAccessory', () => {
    it('prefers start icon over startAccessory when startIconName is set', () => {
      const { queryByTestId } = render(
        <SectionHeader
          title="Section"
          startIconName={IconName.Add}
          startAccessory={<Text testID="section-header-start-acc">X</Text>}
        />,
      );

      expect(queryByTestId('section-header-start-acc')).toBeNull();
    });

    it('renders startAccessory when no start icon is resolved', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startAccessory={<Text testID="section-header-start-acc">X</Text>}
        />,
      );

      expect(getByTestId('section-header-start-acc')).toBeOnTheScreen();
    });

    it('resolves start icon from startIconProps.name when startIconName is omitted', () => {
      const { getByTestId, queryByTestId } = render(
        <SectionHeader
          title="Section"
          testID={ROOT_TEST_ID}
          startIconProps={{ name: IconName.Add }}
          startAccessory={<Text testID="section-header-start-acc">X</Text>}
        />,
      );

      expect(queryByTestId('section-header-start-acc')).toBeNull();
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('uses startIconName over startIconProps.name when both are set', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startIconName={IconName.Add}
          startIconProps={{
            name: IconName.Close,
            testID: 'section-header-start-icon',
          }}
        />,
      );

      expect(getByTestId('section-header-start-icon').props.name).toBe(
        IconName.Add,
      );
    });
  });

  describe('endIconName and endAccessory', () => {
    it('prefers end icon over endAccessory when endIconName is set', () => {
      const { queryByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.Close}
          endAccessory={<Text testID="section-header-end-acc">X</Text>}
        />,
      );

      expect(queryByTestId('section-header-end-acc')).toBeNull();
    });

    it('renders endAccessory when no end icon is resolved', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endAccessory={<Text testID="section-header-end-acc">X</Text>}
        />,
      );

      expect(getByTestId('section-header-end-acc')).toBeOnTheScreen();
    });

    it('resolves end icon from endIconProps.name when endIconName is omitted', () => {
      const { getByTestId, queryByTestId } = render(
        <SectionHeader
          title="Section"
          testID={ROOT_TEST_ID}
          endIconProps={{ name: IconName.Close }}
          endAccessory={<Text testID="section-header-end-acc">X</Text>}
        />,
      );

      expect(queryByTestId('section-header-end-acc')).toBeNull();
      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('uses endIconName over endIconProps.name when both are set', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.Add}
          endIconProps={{
            name: IconName.Close,
            testID: 'section-header-end-icon',
          }}
        />,
      );

      expect(getByTestId('section-header-end-icon').props.name).toBe(
        IconName.Add,
      );
    });
  });

  describe('root layout', () => {
    it('applies gap-1 to outer row', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`gap-1`);
    });

    it('applies default padding to outer row', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`px-4 pb-2 pt-3`);
    });

    it('applies gap-1 to inner title row', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          titleWrapperProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveStyle(tw`gap-1`);
    });

    it('merges twClassName into outer row styles', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          testID={ROOT_TEST_ID}
          twClassName="mt-4"
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`gap-1`);
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`px-4 pb-2 pt-3`);
      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-4`);
    });
  });

  describe('isInteractive', () => {
    it('forwards testID to Pressable root when isInteractive is true', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });

    it('calls onPress when pressed', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it('applies default padding to Pressable root', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`px-4 pb-2 pt-3`);
    });

    it('merges custom style prop on Pressable root', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
          style={{ marginTop: 8 }}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({ marginTop: 8 });
    });

    it('defaults end icon to ArrowRight when no end icon or endAccessory is provided', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          endIconProps={{ testID: 'section-header-end-icon' }}
        />,
      );

      expect(getByTestId('section-header-end-icon').props.name).toBe(
        IconName.ArrowRight,
      );
    });

    it('renders endAccessory instead of default ArrowRight when endAccessory is provided', () => {
      const { getByTestId, queryByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          endIconProps={{ testID: 'section-header-end-icon' }}
          endAccessory={<Text testID="section-header-end-acc">X</Text>}
        />,
      );

      expect(getByTestId('section-header-end-acc')).toBeOnTheScreen();
      expect(queryByTestId('section-header-end-icon')).toBeNull();
    });
  });
});
