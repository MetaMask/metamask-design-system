import { IconSemanticSemantic } from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { renderHook } from '@testing-library/react-hooks';
import { render } from '@testing-library/react-native';
import React from 'react';

import { IconSize } from '../../types';
import { TWCLASSMAP_ICON_SIZE_DIMENSION } from '../Icon/Icon.constants';

import { IconSemantic } from './IconSemantic';
import { ICON_SEMANTIC_MAP } from './IconSemantic.constants';

type IconSemanticSemanticUnion =
  (typeof IconSemanticSemantic)[keyof typeof IconSemanticSemantic];

describe('IconSemantic', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('when a semantic is provided', () => {
    it.each(Object.values(IconSemanticSemantic) as IconSemanticSemanticUnion[])(
      'renders %s with the mapped icon name and color styles',
      (semantic) => {
        const { getByTestId } = render(
          <IconSemantic semantic={semantic} testID="icon-semantic" />,
        );

        const icon = getByTestId('icon-semantic');
        const { name, color } = ICON_SEMANTIC_MAP[semantic];

        expect(icon).toBeOnTheScreen();
        expect(icon.props.name).toBe(name);
        expect(icon).toHaveStyle(
          tw.style(color, TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Md]),
        );
      },
    );
  });

  describe('when size is Lg', () => {
    it('applies large icon dimensions for Info semantic', () => {
      const { getByTestId } = render(
        <IconSemantic
          semantic={IconSemanticSemantic.Info}
          size={IconSize.Lg}
          testID="icon-semantic"
        />,
      );

      const icon = getByTestId('icon-semantic');
      const { color } = ICON_SEMANTIC_MAP[IconSemanticSemantic.Info];

      expect(icon).toBeOnTheScreen();
      expect(icon).toHaveStyle(
        tw.style(color, TWCLASSMAP_ICON_SIZE_DIMENSION[IconSize.Lg]),
      );
    });
  });
});
