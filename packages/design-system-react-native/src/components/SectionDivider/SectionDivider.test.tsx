import { BoxBorderColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React, { createRef } from 'react';
import type { View } from 'react-native';

import { SectionDivider } from './SectionDivider';

const ROOT_TEST_ID = 'section-divider';

describe('SectionDivider', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when rendered with defaults', () => {
    it('applies default border and vertical margin tokens', () => {
      const { getByTestId } = render(<SectionDivider testID={ROOT_TEST_ID} />);

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw`my-5 border-t border-muted`,
      );
    });

    it('applies full-width stretch to the root', () => {
      const { getByTestId } = render(<SectionDivider testID={ROOT_TEST_ID} />);

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
        alignSelf: 'stretch',
      });
    });
  });

  describe('when marginVertical is 0', () => {
    it('applies my-0 instead of default my-5', () => {
      const { getByTestId } = render(
        <SectionDivider testID={ROOT_TEST_ID} marginVertical={0} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`my-0`);
    });
  });

  describe('when borderWidth is 0', () => {
    it('keeps zero border width instead of defaulting to 1', () => {
      const { getByTestId } = render(
        <SectionDivider testID={ROOT_TEST_ID} borderWidth={0} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-t-0`);
    });
  });

  describe('when borderColor is overridden', () => {
    it('applies the given border color token', () => {
      const { getByTestId } = render(
        <SectionDivider
          testID={ROOT_TEST_ID}
          borderColor={BoxBorderColor.BorderDefault}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });
  });

  describe('when twClassName is provided', () => {
    it('merges twClassName into resolved styles', () => {
      const { getByTestId } = render(
        <SectionDivider testID={ROOT_TEST_ID} twClassName="opacity-50" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('lets twClassName override default self-stretch', () => {
      const { getByTestId } = render(
        <SectionDivider testID={ROOT_TEST_ID} twClassName="self-center" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
        alignSelf: 'center',
      });
    });
  });

  describe('when style is provided', () => {
    it('lets caller style override default stretch', () => {
      const { getByTestId } = render(
        <SectionDivider
          testID={ROOT_TEST_ID}
          style={{ alignSelf: 'flex-start' }}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
        alignSelf: 'flex-start',
      });
    });
  });

  describe('ref forwarding', () => {
    it('exposes the underlying view on ref', () => {
      const ref = createRef<View>();

      render(<SectionDivider ref={ref} testID={ROOT_TEST_ID} />);

      expect(ref.current).not.toBeNull();
    });
  });
});
