import {
  BoxFlexDirection,
  ContentVerticalAlignment,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';

import { Content } from './Content';

const ROOT_TEST_ID = 'content-root';

describe('Content', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(() => {
    tw = renderHook(() => useTailwind()).result.current;
  });

  describe('title', () => {
    it('renders string title on screen', () => {
      const { getByText } = render(
        <Content title="Label" testID={ROOT_TEST_ID} />,
      );

      expect(getByText('Label')).toBeOnTheScreen();
    });

    it('renders default title text styles', () => {
      const { getByText } = render(
        <Content title="Title" testID={ROOT_TEST_ID} />,
      );

      // eslint-disable-next-line tailwindcss/no-custom-classname
      const bodyMdStyles = tw`text-${TextVariant.BodyMd}` as {
        fontSize?: number;
      };

      expect(getByText('Title')).toHaveStyle({
        fontSize: bodyMdStyles.fontSize,
      });
      expect(getByText('Title')).toHaveStyle(tw.style('text-default'));
    });

    it('renders custom title node on screen', () => {
      const { getByText } = render(
        <Content
          title={<Text testID="custom-title">Custom node</Text>}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Custom node')).toBeOnTheScreen();
    });

    it('omits title row when title is undefined', () => {
      const { getByText, queryByText } = render(
        <Content value="100" testID={ROOT_TEST_ID} />,
      );

      expect(getByText('100')).toBeOnTheScreen();
      expect(queryByText('Label')).toBeNull();
    });
  });

  describe('titleProps', () => {
    it('merges titleProps over default title text styles', () => {
      const { getByText } = render(
        <Content
          title="Custom"
          titleProps={{
            variant: TextVariant.BodySm,
            color: TextColor.TextAlternative,
          }}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Custom')).toHaveStyle(tw.style('text-alternative'));
    });
  });

  describe('description', () => {
    it('renders string description on screen', () => {
      const { getByText } = render(
        <Content title="Title" description="Secondary" testID={ROOT_TEST_ID} />,
      );

      expect(getByText('Secondary')).toBeOnTheScreen();
    });

    it('renders default description text styles', () => {
      const { getByText } = render(
        <Content title="Title" description="Desc" testID={ROOT_TEST_ID} />,
      );

      // eslint-disable-next-line tailwindcss/no-custom-classname
      const bodySmStyles = tw`text-${TextVariant.BodySm}` as {
        fontSize?: number;
      };

      expect(getByText('Desc')).toHaveStyle({
        fontSize: bodySmStyles.fontSize,
      });
      expect(getByText('Desc')).toHaveStyle(tw.style('text-alternative'));
    });

    it('renders description without title', () => {
      const { getByText } = render(
        <Content description="Only description" testID={ROOT_TEST_ID} />,
      );

      expect(getByText('Only description')).toBeOnTheScreen();
    });
  });

  describe('descriptionProps', () => {
    it('merges descriptionProps over default description text styles', () => {
      const { getByText } = render(
        <Content
          title="Title"
          description="Desc"
          descriptionProps={{ color: TextColor.ErrorDefault }}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Desc')).toHaveStyle(tw.style('text-error-default'));
    });
  });

  describe('value', () => {
    it('renders string value on screen', () => {
      const { getByText } = render(
        <Content title="Label" value="100" testID={ROOT_TEST_ID} />,
      );

      expect(getByText('100')).toBeOnTheScreen();
    });

    it('renders custom value node on screen', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value={<Text testID="custom-value">Custom value</Text>}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Custom value')).toBeOnTheScreen();
    });
  });

  describe('valueProps', () => {
    it('merges valueProps over default value text styles', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="100"
          valueProps={{ color: TextColor.ErrorDefault }}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('100')).toHaveStyle(tw.style('text-error-default'));
    });
  });

  describe('subvalue', () => {
    it('renders string subvalue on screen', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="100"
          subvalue="Balance"
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Balance')).toBeOnTheScreen();
    });

    it('renders subvalue without value', () => {
      const { getByText } = render(
        <Content subvalue="Fee only" testID={ROOT_TEST_ID} />,
      );

      expect(getByText('Fee only')).toBeOnTheScreen();
    });

    it('renders custom subvalue node on screen', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          value="100"
          subvalue={<Text testID="custom-subvalue">Custom subvalue</Text>}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId('custom-subvalue')).toBeOnTheScreen();
    });
  });

  describe('subvalueProps', () => {
    it('merges subvalueProps over default subvalue text styles', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="100"
          subvalue="Balance"
          subvalueProps={{ color: TextColor.ErrorDefault }}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Balance')).toHaveStyle(tw.style('text-error-default'));
    });
  });

  describe('avatar', () => {
    it('renders avatar slot content on screen', () => {
      const { getByTestId, getByText } = render(
        <Content
          testID={ROOT_TEST_ID}
          avatar={<Text testID="avatar-icon">S</Text>}
          title="Label"
        />,
      );

      expect(getByTestId('avatar-icon')).toBeOnTheScreen();
      expect(getByText('Label')).toBeOnTheScreen();
    });
  });

  describe('titleStartAccessory', () => {
    it('renders titleStartAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          titleStartAccessory={<Text testID="title-start">A</Text>}
        />,
      );

      expect(getByTestId('title-start')).toBeOnTheScreen();
    });
  });

  describe('titleEndAccessory', () => {
    it('renders titleEndAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          titleEndAccessory={<Text testID="title-end">B</Text>}
        />,
      );

      expect(getByTestId('title-end')).toBeOnTheScreen();
    });
  });

  describe('descriptionStartAccessory', () => {
    it('renders descriptionStartAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          description="Secondary"
          descriptionStartAccessory={<Text testID="description-start">A</Text>}
        />,
      );

      expect(getByTestId('description-start')).toBeOnTheScreen();
    });
  });

  describe('descriptionEndAccessory', () => {
    it('renders descriptionEndAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          description="Secondary"
          descriptionEndAccessory={<Text testID="description-end">B</Text>}
        />,
      );

      expect(getByTestId('description-end')).toBeOnTheScreen();
    });
  });

  describe('valueStartAccessory', () => {
    it('renders valueStartAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          value="100"
          valueStartAccessory={<Text testID="value-start">X</Text>}
        />,
      );

      expect(getByTestId('value-start')).toBeOnTheScreen();
    });
  });

  describe('valueEndAccessory', () => {
    it('renders valueEndAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          value="100"
          valueEndAccessory={<Text testID="value-end">Y</Text>}
        />,
      );

      expect(getByTestId('value-end')).toBeOnTheScreen();
    });
  });

  describe('subvalueStartAccessory', () => {
    it('renders subvalueStartAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          value="100"
          subvalue="Balance"
          subvalueStartAccessory={<Text testID="subvalue-start">X</Text>}
        />,
      );

      expect(getByTestId('subvalue-start')).toBeOnTheScreen();
    });
  });

  describe('subvalueEndAccessory', () => {
    it('renders subvalueEndAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          testID={ROOT_TEST_ID}
          title="Label"
          value="100"
          subvalue="Balance"
          subvalueEndAccessory={<Text testID="subvalue-end">Y</Text>}
        />,
      );

      expect(getByTestId('subvalue-end')).toBeOnTheScreen();
    });
  });

  describe('startAccessory', () => {
    it('renders startAccessory on the content row', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          startAccessory={<Text testID="start-accessory">S</Text>}
        />,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
    });

    it('renders startAccessory with avatar on the content row', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          startAccessory={<Text testID="start-accessory">S</Text>}
          avatar={<Text testID="avatar-slot">A</Text>}
        />,
      );

      expect(getByTestId('start-accessory')).toBeOnTheScreen();
      expect(getByTestId('avatar-slot')).toBeOnTheScreen();
    });
  });

  describe('endAccessory', () => {
    it('renders endAccessory on the content row', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          endAccessory={<Text testID="end-accessory">E</Text>}
        />,
      );

      expect(getByTestId('end-accessory')).toBeOnTheScreen();
    });
  });

  describe('topAccessory', () => {
    it('renders topAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          topAccessory={<View testID="top-accessory" />}
        />,
      );

      expect(getByTestId('top-accessory')).toBeOnTheScreen();
    });

    it('uses BoxColumn root when topAccessory is provided', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          topAccessory={<View testID="top-accessory" />}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('flex', BoxFlexDirection.Column),
      );
    });

    it('applies twClassName on column shell root', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          topAccessory={<View testID="top-accessory" />}
          twClassName="px-2"
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`px-2`);
    });
  });

  describe('bottomAccessory', () => {
    it('renders bottomAccessory on screen', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          bottomAccessory={<View testID="bottom-accessory" />}
        />,
      );

      expect(getByTestId('bottom-accessory')).toBeOnTheScreen();
    });

    it('uses BoxColumn root when only bottomAccessory is provided', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          bottomAccessory={<View testID="bottom-accessory" />}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw.style('flex', BoxFlexDirection.Column),
      );
    });
  });

  describe('verticalAlignment', () => {
    it('applies center alignment on flat BoxRow root by default', () => {
      const { getByTestId } = render(
        <Content title="Label" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw`flex-row items-center gap-4 min-h-[46px]`,
      );
    });

    it('applies top alignment on flat BoxRow root when verticalAlignment is Top', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          verticalAlignment={ContentVerticalAlignment.Top}
          testID={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(
        tw`flex-row items-start gap-4 min-h-[46px]`,
      );
    });
  });

  describe('twClassName', () => {
    it('applies twClassName on flat BoxRow root', () => {
      const { getByTestId } = render(
        <Content title="Label" twClassName="mt-2" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveStyle(tw`mt-2`);
    });
  });

  describe('root layout', () => {
    it('passes testID to flat BoxRow root', () => {
      const { getByTestId } = render(
        <Content title="Label" testID={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeOnTheScreen();
    });
  });
});
