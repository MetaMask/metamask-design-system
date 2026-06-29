// Third party dependencies.
import { IconName } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';
import type { ReactTestInstance } from 'react-test-renderer';

// Internal dependencies.
import { createRenderer } from '../../test-utils/createRenderer';

import { SectionHeader } from './SectionHeader';

const ROOT_TEST_ID = 'section-header-root';
const TITLE_ROW_TEST_ID = 'section-header-title-row';
const TITLE_TEXT_TEST_ID = 'section-header-title-text';
const CHILDREN_TEST_ID = 'section-header-children';

describe('SectionHeader', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const flattenStyles = (
    styleProp: StyleProp<ViewStyle> | undefined,
  ): ViewStyle[] => {
    if (styleProp === null || styleProp === undefined) {
      return [];
    }
    if (Array.isArray(styleProp)) {
      return styleProp.flatMap((item) =>
        flattenStyles(item as StyleProp<ViewStyle>),
      );
    }
    if (typeof styleProp === 'object') {
      return [styleProp as ViewStyle];
    }
    return [];
  };

  const findPressableStyleFn = (
    instance: ReactTestInstance,
  ): ((state: { pressed: boolean }) => StyleProp<ViewStyle>) | null => {
    if (typeof instance.props.style === 'function') {
      return instance.props.style;
    }

    for (const child of instance.children) {
      if (typeof child === 'object' && child !== null && 'props' in child) {
        const styleFn = findPressableStyleFn(child as ReactTestInstance);
        if (styleFn) {
          return styleFn;
        }
      }
    }

    return null;
  };

  const getPressableStyleFn = (
    tree: ReturnType<typeof createRenderer>,
  ): ((state: { pressed: boolean }) => StyleProp<ViewStyle>) => {
    const styleFn = findPressableStyleFn(tree.root);

    if (!styleFn) {
      throw new Error('Expected Pressable style to be a function');
    }

    return styleFn;
  };

  const countDirectChildInstances = (instance: ReactTestInstance): number =>
    instance.children.filter(
      (child) =>
        typeof child === 'object' && child !== null && 'props' in child,
    ).length;

  const findInstanceWithStyle = (
    instance: ReactTestInstance,
    expectedStyle: ReturnType<ReturnType<typeof useTailwind>>,
  ): ReactTestInstance | null => {
    const styles = flattenStyles(instance.props.style);

    if (
      styles.some((item) =>
        Object.entries(expectedStyle as ViewStyle).every(
          ([key, value]) => item[key as keyof ViewStyle] === value,
        ),
      )
    ) {
      return instance;
    }

    for (const child of instance.children) {
      if (typeof child === 'object' && child !== null && 'props' in child) {
        const found = findInstanceWithStyle(
          child as ReactTestInstance,
          expectedStyle,
        );
        if (found) {
          return found;
        }
      }
    }

    return null;
  };

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

    it('renders children below the header row', () => {
      const { getByText, getByTestId } = render(
        <SectionHeader title="Section">
          <Text testID={CHILDREN_TEST_ID}>Subtitle</Text>
        </SectionHeader>,
      );

      expect(getByText('Section')).toBeOnTheScreen();
      expect(getByTestId(CHILDREN_TEST_ID)).toBeOnTheScreen();
    });

    it('uses a vertical outer wrapper when children are provided', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" testID={ROOT_TEST_ID}>
          <Text testID={CHILDREN_TEST_ID}>Subtitle</Text>
        </SectionHeader>,
      );

      const rootInstance = getByTestId(ROOT_TEST_ID);

      expect(rootInstance).not.toHaveStyle(tw`flex-row`);
      expect(countDirectChildInstances(rootInstance)).toBe(2);
    });

    it('uses a horizontal outer wrapper when children are omitted', () => {
      const { getByTestId } = render(
        <SectionHeader title="Section" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`flex-row`);
    });

    it('renders children when title is an empty string', () => {
      const { getByTestId } = render(
        <SectionHeader title="">
          <Text testID={CHILDREN_TEST_ID}>Subtitle only</Text>
        </SectionHeader>,
      );

      expect(getByTestId(CHILDREN_TEST_ID)).toBeOnTheScreen();
    });

    it('renders children with start and end accessories', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startAccessory={<Text testID="section-header-start-acc">S</Text>}
          endAccessory={<Text testID="section-header-end-acc">E</Text>}
        >
          <Text testID={CHILDREN_TEST_ID}>Subtitle</Text>
        </SectionHeader>,
      );

      expect(getByTestId('section-header-start-acc')).toBeOnTheScreen();
      expect(getByTestId(CHILDREN_TEST_ID)).toBeOnTheScreen();
      expect(getByTestId('section-header-end-acc')).toBeOnTheScreen();
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

    it('forwards startIconProps to start Icon when startIconName is set', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          startIconName={IconName.Add}
          startIconProps={{ testID: 'section-header-start-icon' }}
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

    it('forwards endIconProps to end Icon when endIconName is set', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.Add}
          endIconProps={{ testID: 'section-header-end-icon' }}
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

    it('applies shrink and min-w-0 to mainContent when row accessories are present', () => {
      const tree = createRenderer(
        <SectionHeader title="Section" endIconName={IconName.ArrowRight} />,
      );

      expect(
        findInstanceWithStyle(tree.root, tw`shrink min-w-0`),
      ).not.toBeNull();
    });

    it('applies w-full shrink and min-w-0 to the title row when row accessories are present', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          endIconName={IconName.ArrowRight}
          titleWrapperProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveStyle(tw`w-full`);
      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveStyle(tw`shrink`);
      expect(getByTestId(TITLE_ROW_TEST_ID)).toHaveStyle(tw`min-w-0`);
    });
  });

  describe('isInteractive', () => {
    it('defaults accessibilityRole to button when isInteractive is true', () => {
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID).props.accessibilityRole).toBe('button');
    });

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

    it('does not call onPress when disabled', () => {
      const onPress = jest.fn();
      const { getByTestId } = render(
        <SectionHeader
          title="Section"
          isInteractive
          disabled
          onPress={onPress}
          testID={ROOT_TEST_ID}
        />,
      );

      fireEvent.press(getByTestId(ROOT_TEST_ID));
      expect(onPress).not.toHaveBeenCalled();
    });

    it('does not apply pressed opacity when disabled', () => {
      const tree = createRenderer(
        <SectionHeader
          title="Section"
          isInteractive
          disabled
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      const styleFn = getPressableStyleFn(tree);
      const pressedStyles = flattenStyles(styleFn({ pressed: true }));
      const unpressedStyles = flattenStyles(styleFn({ pressed: false }));

      expect(pressedStyles).toStrictEqual(
        expect.not.arrayContaining([expect.objectContaining(tw`opacity-70`)]),
      );
      expect(unpressedStyles).toStrictEqual(
        expect.not.arrayContaining([expect.objectContaining(tw`opacity-70`)]),
      );
    });

    it('applies pressed opacity when enabled', () => {
      const tree = createRenderer(
        <SectionHeader
          title="Section"
          isInteractive
          onPress={jest.fn()}
          testID={ROOT_TEST_ID}
        />,
      );

      const styleFn = getPressableStyleFn(tree);
      const pressedStyles = flattenStyles(styleFn({ pressed: true }));
      const unpressedStyles = flattenStyles(styleFn({ pressed: false }));

      expect(pressedStyles).toStrictEqual(
        expect.arrayContaining([expect.objectContaining(tw`opacity-70`)]),
      );
      expect(unpressedStyles).toStrictEqual(
        expect.not.arrayContaining([expect.objectContaining(tw`opacity-70`)]),
      );
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
