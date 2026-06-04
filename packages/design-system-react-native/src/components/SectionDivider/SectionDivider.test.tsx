import { BoxBorderColor } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React, { createRef } from 'react';
import type { View } from 'react-native';

import { SectionDivider } from './SectionDivider';

const ROOT_TEST_ID = 'section-divider';

describe('SectionDivider', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  describe('when rendered with defaults', () => {
    it('applies default border and vertical margin tokens', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw`my-5 border-t border-muted`,
      );
    });

    it('applies full-width stretch to the root', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
        alignSelf: 'stretch',
      });
    });
  });

  describe('when marginVertical is 0', () => {
    it('applies my-0 instead of default my-5', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} marginVertical={0} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`my-0`);
    });
  });

  describe('when borderWidth is 0', () => {
    it('keeps zero border width instead of defaulting to 1', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} borderWidth={0} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-t-0`);
    });
  });

  describe('when borderWidth is greater than 1', () => {
    it('maps the width to a border-t-* class', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} borderWidth={2} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-t-2`);
    });
  });

  describe('when borderColor is overridden', () => {
    it('applies the given border color token', async () => {
      const { getByTestId } = await render(
        <SectionDivider
          testID={ROOT_TEST_ID}
          borderColor={BoxBorderColor.BorderDefault}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`border-default`);
    });
  });

  describe('when twClassName is provided', () => {
    it('merges twClassName into resolved styles', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} twClassName="opacity-50" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`opacity-50`);
    });

    it('lets twClassName override default self-stretch', async () => {
      const { getByTestId } = await render(
        <SectionDivider testID={ROOT_TEST_ID} twClassName="self-center" />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle({
        alignSelf: 'center',
      });
    });
  });

  describe('when style is provided', () => {
    it('lets caller style override default stretch', async () => {
      const { getByTestId } = await render(
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
    it('exposes the underlying view on ref', async () => {
      const ref = createRef<View>();

      await render(<SectionDivider ref={ref} testID={ROOT_TEST_ID} />);

      expect(ref.current).not.toBeNull();
    });
  });
});
