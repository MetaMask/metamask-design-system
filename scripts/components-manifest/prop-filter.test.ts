import { includeDesignSystemProp } from './prop-filter';

describe('includeDesignSystemProp', () => {
  it('keeps className, style, children, and testID from React or React Native types', () => {
    for (const name of ['className', 'style', 'children', 'testID']) {
      expect(
        includeDesignSystemProp({
          name,
          parent: {
            fileName: '/repo/node_modules/@types/react/index.d.ts',
          },
        }),
      ).toBe(true);
    }
  });

  it('keeps shared props when the workspace package resolves through node_modules', () => {
    expect(
      includeDesignSystemProp({
        name: 'flexDirection',
        parent: {
          fileName:
            '/repo/node_modules/@metamask/design-system-shared/dist/types/Box/Box.types.d.cts',
        },
      }),
    ).toBe(true);
  });

  it('keeps props declared in design-system source', () => {
    expect(
      includeDesignSystemProp({
        name: 'variant',
        parent: {
          fileName:
            '/repo/packages/design-system-react/src/components/Button/Button.types.ts',
        },
      }),
    ).toBe(true);
  });

  it('drops inherited host props such as ViewProps onLayout', () => {
    expect(
      includeDesignSystemProp({
        name: 'onLayout',
        parent: {
          fileName:
            '/repo/node_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts',
        },
        declarations: [
          {
            fileName:
              '/repo/node_modules/react-native/Libraries/Components/View/ViewPropTypes.d.ts',
          },
        ],
      }),
    ).toBe(false);
  });
});
