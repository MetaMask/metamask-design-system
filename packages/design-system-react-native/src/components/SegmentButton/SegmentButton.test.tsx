import {
  SegmentButtonVariant,
  TextColor,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { IconColor, IconName, IconSize } from '../../types';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';
import { SegmentGroup } from '../SegmentGroup/SegmentGroup';

import { SegmentButton } from './SegmentButton';

const ROOT_TEST_ID = 'segment-button';

const noopPress = () => undefined;

describe('SegmentButton', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    const { result } = renderHook(() => useTailwind());
    tw = result.current;
  });

  it('renders string children', () => {
    const { getByText } = render(
      <SegmentButton testID={ROOT_TEST_ID} onPress={noopPress}>
        Label
      </SegmentButton>,
    );

    expect(getByText('Label')).toHaveTextContent('Label');
  });

  it('exposes testID on the root pressable', () => {
    const { getByTestId } = render(
      <SegmentButton testID="custom-segment" onPress={noopPress}>
        A
      </SegmentButton>,
    );

    expect(getByTestId('custom-segment')).toBeOnTheScreen();
  });

  describe('visual matrix', () => {
    it('primary variant and selected uses ButtonPrimary default container', () => {
      const { getByTestId } = render(
        <SegmentButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SegmentButtonVariant.Primary}
          isSelected
        >
          Label
        </SegmentButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-icon-default`);
    });

    it('primary variant and unselected uses ButtonSecondary default container', () => {
      const { getByTestId } = render(
        <SegmentButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SegmentButtonVariant.Primary}
          isSelected={false}
        >
          Label
        </SegmentButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('secondary variant and selected uses ButtonSecondary default container', () => {
      const { getByTestId } = render(
        <SegmentButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SegmentButtonVariant.Secondary}
          isSelected
        >
          Label
        </SegmentButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted`);
    });

    it('secondary variant and unselected uses transparent container like ButtonTertiary', () => {
      const { getByTestId } = render(
        <SegmentButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SegmentButtonVariant.Secondary}
          isSelected={false}
        >
          Label
        </SegmentButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-transparent`);
    });

    it('secondary unselected applies alternative color to string label', () => {
      const { getByText } = render(
        <SegmentButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SegmentButtonVariant.Secondary}
          isSelected={false}
        >
          Label
        </SegmentButton>,
      );

      expect(getByText('Label')).toHaveStyle(
        tw.style(TextColor.TextAlternative),
      );
    });

    it('secondary unselected applies alternative color to start icon', () => {
      const { getByTestId } = render(
        <SegmentButton
          testID={ROOT_TEST_ID}
          onPress={noopPress}
          variant={SegmentButtonVariant.Secondary}
          isSelected={false}
          startIconName={IconName.Search}
          startIconProps={{ testID: 'segment-icon' }}
        >
          Label
        </SegmentButton>,
      );

      expect(getByTestId('segment-icon')).toHaveStyle(
        tw.style(
          IconColor.IconAlternative,
          TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Sm],
        ),
      );
    });
  });

  describe('isDisabled', () => {
    it('applies disabled opacity when isDisabled is true', () => {
      const { getByTestId } = render(
        <SegmentButton testID={ROOT_TEST_ID} onPress={noopPress} isDisabled>
          Label
        </SegmentButton>,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });
  });

  it('merges twClassName when it is a function of pressed state', () => {
    const twClassName = jest.fn((pressed: boolean) =>
      pressed ? 'opacity-80' : 'opacity-100',
    );
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Primary}
        isSelected
        twClassName={twClassName}
      >
        Label
      </SegmentButton>,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(twClassName).toHaveBeenCalledWith(true);
    fireEvent(root, 'pressOut');
    expect(twClassName).toHaveBeenCalledWith(false);
  });

  it('merges function twClassName for primary unselected (secondary-style container)', () => {
    const twClassName = jest.fn(() => 'mt-1');
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        twClassName={twClassName}
      >
        Label
      </SegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-1`);
    expect(twClassName).toHaveBeenCalled();
  });

  it('merges function twClassName for secondary unselected (tertiary-style container)', () => {
    const twClassName = jest.fn(() => 'mt-2');
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        twClassName={twClassName}
      >
        Label
      </SegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-2`);
    expect(twClassName).toHaveBeenCalled();
  });

  it('applies pressed container styles when pressIn fires', () => {
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Primary}
        isSelected
      >
        Label
      </SegmentButton>,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(root).toHaveStyle(tw`bg-icon-default-pressed`);
  });

  it('applies tertiary pressed border when secondary variant is unselected and pressed', () => {
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
      >
        Label
      </SegmentButton>,
    );

    const root = getByTestId(ROOT_TEST_ID);
    fireEvent(root, 'pressIn');
    expect(root).toHaveStyle(tw`border-background-pressed`);
  });

  it('uses loading container treatment when isLoading is true', () => {
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Primary}
        isSelected
        isLoading
      >
        Label
      </SegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-icon-default-pressed`);
  });

  it('uses muted pressed background when primary unselected and loading', () => {
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Primary}
        isSelected={false}
        isLoading
      >
        Label
      </SegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-muted-pressed`);
  });

  it('uses loading treatment for secondary unselected tertiary-like container', () => {
    const { getByTestId } = render(
      <SegmentButton
        testID={ROOT_TEST_ID}
        onPress={noopPress}
        variant={SegmentButtonVariant.Secondary}
        isSelected={false}
        isLoading
      >
        Label
      </SegmentButton>,
    );

    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`bg-pressed`);
    expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
      tw`border-background-pressed`,
    );
  });

  describe('inside SegmentGroup', () => {
    it('derives selection from group value and ignores isSelected', () => {
      const { getByTestId } = render(
        <SegmentGroup value="b" onChange={noopPress} testID="group">
          <SegmentButton
            value="a"
            testID="seg-a"
            isSelected
            onPress={noopPress}
          >
            A
          </SegmentButton>
          <SegmentButton
            value="b"
            testID="seg-b"
            isSelected={false}
            onPress={noopPress}
          >
            B
          </SegmentButton>
        </SegmentGroup>,
      );

      expect(getByTestId('seg-a')).toHaveStyle(tw`bg-muted`);
      expect(getByTestId('seg-b')).toHaveStyle(tw`bg-icon-default`);
    });
  });
});
