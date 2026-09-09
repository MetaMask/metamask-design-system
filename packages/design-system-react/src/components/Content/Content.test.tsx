import {
  BoxAlignItems,
  BoxFlexDirection,
  ContentVariant,
  FontWeight,
  SensitiveTextLength,
  TextColor,
  TextVariant,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React from 'react';

import { TWCLASSMAP_TEXT_FONTWEIGHT } from '../Text/Text.constants';

import { Content } from './Content';

const ROOT_TEST_ID = 'content-root';

describe('Content', () => {
  describe('title', () => {
    it('renders string title in the document', () => {
      const { getByText } = render(
        <Content title="Label" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByText('Label')).toBeInTheDocument();
    });

    it('applies default title text classes', () => {
      const { getByText } = render(
        <Content title="Title" data-testid={ROOT_TEST_ID} />,
      );

      const title = getByText('Title');
      expect(title).toHaveClass('text-s-body-md');
      expect(title).toHaveClass(TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium]);
      expect(title).toHaveClass(TextColor.TextDefault);
    });

    it('renders custom title node in the document', () => {
      const { getByText } = render(
        <Content
          title={<span data-testid="custom-title">Custom node</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Custom node')).toBeInTheDocument();
    });

    it('omits title row when title is undefined', () => {
      const { getByText, queryByText } = render(
        <Content value="100" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByText('100')).toBeInTheDocument();
      expect(queryByText('Label')).not.toBeInTheDocument();
    });
  });

  describe('titleProps', () => {
    it('merges titleProps over default title text classes', () => {
      const { getByText } = render(
        <Content
          title="Custom"
          titleProps={{
            variant: TextVariant.BodySm,
            color: TextColor.TextAlternative,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      const title = getByText('Custom');
      expect(title).toHaveClass('text-s-body-sm');
      expect(title).toHaveClass(TextColor.TextAlternative);
    });
  });

  describe('description', () => {
    it('renders string description in the document', () => {
      const { getByText } = render(
        <Content
          title="Title"
          description="Secondary"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Secondary')).toBeInTheDocument();
    });

    it('applies default description text classes', () => {
      const { getByText } = render(
        <Content title="Title" description="Desc" data-testid={ROOT_TEST_ID} />,
      );

      const description = getByText('Desc');
      expect(description).toHaveClass('text-s-body-sm');
      expect(description).toHaveClass(
        TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium],
      );
      expect(description).toHaveClass(TextColor.TextAlternative);
    });

    it('renders description without title', () => {
      const { getByText } = render(
        <Content description="Only description" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByText('Only description')).toBeInTheDocument();
    });
  });

  describe('descriptionProps', () => {
    it('merges descriptionProps over default description text classes', () => {
      const { getByText } = render(
        <Content
          title="Title"
          description="Desc"
          descriptionProps={{ color: TextColor.ErrorDefault }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Desc')).toHaveClass(TextColor.ErrorDefault);
    });

    it('hides description when descriptionProps.isHidden is true', () => {
      const { getByText, queryByText } = render(
        <Content
          title="Title"
          description="Secondary"
          descriptionProps={{ isHidden: true }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(queryByText('Secondary')).not.toBeInTheDocument();
      expect(getByText('••••••')).toBeInTheDocument();
    });
  });

  describe('value', () => {
    it('renders string value in the document', () => {
      const { getByText } = render(
        <Content title="Label" value="100" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByText('100')).toBeInTheDocument();
    });

    it('renders custom value node in the document', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value={<span data-testid="custom-value">Custom value</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Custom value')).toBeInTheDocument();
    });
  });

  describe('valueProps', () => {
    it('merges valueProps over default value text classes', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="100"
          valueProps={{ color: TextColor.ErrorDefault }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('100')).toHaveClass(TextColor.ErrorDefault);
    });

    it('hides value when valueProps.isHidden is true', () => {
      const { getByText, queryByText } = render(
        <Content
          title="Label"
          value="$1,234.56"
          valueProps={{ isHidden: true }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(queryByText('$1,234.56')).not.toBeInTheDocument();
      expect(getByText('••••••')).toBeInTheDocument();
    });

    it('hides value with custom length when valueProps.length is set', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="$1,234.56"
          valueProps={{
            isHidden: true,
            length: SensitiveTextLength.Medium,
          }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(
        getByText('•'.repeat(Number(SensitiveTextLength.Medium))),
      ).toBeInTheDocument();
    });
  });

  describe('subvalue', () => {
    it('renders string subvalue in the document', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="100"
          subvalue="Balance"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Balance')).toBeInTheDocument();
    });

    it('renders subvalue without value', () => {
      const { getByText } = render(
        <Content subvalue="Fee only" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByText('Fee only')).toBeInTheDocument();
    });

    it('renders custom subvalue node in the document', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          value="100"
          subvalue={<span data-testid="custom-subvalue">Custom subvalue</span>}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId('custom-subvalue')).toBeInTheDocument();
    });
  });

  describe('subvalueProps', () => {
    it('merges subvalueProps over default subvalue text classes', () => {
      const { getByText } = render(
        <Content
          title="Label"
          value="100"
          subvalue="Balance"
          subvalueProps={{ color: TextColor.ErrorDefault }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Balance')).toHaveClass(TextColor.ErrorDefault);
    });

    it('hides subvalue when subvalueProps.isHidden is true', () => {
      const { getByText, queryByText } = render(
        <Content
          title="Label"
          value="100"
          subvalue="+2.4%"
          subvalueProps={{ isHidden: true }}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(queryByText('+2.4%')).not.toBeInTheDocument();
      expect(getByText('••••••')).toBeInTheDocument();
    });
  });

  describe('avatar', () => {
    it('renders avatar slot content in the document', () => {
      const { getByTestId, getByText } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          avatar={<span data-testid="avatar-icon">S</span>}
          title="Label"
        />,
      );

      expect(getByTestId('avatar-icon')).toBeInTheDocument();
      expect(getByText('Label')).toBeInTheDocument();
    });
  });

  describe('titleStartAccessory', () => {
    it('renders titleStartAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          titleStartAccessory={<span data-testid="title-start">A</span>}
        />,
      );

      expect(getByTestId('title-start')).toBeInTheDocument();
    });
  });

  describe('titleEndAccessory', () => {
    it('renders titleEndAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          titleEndAccessory={<span data-testid="title-end">B</span>}
        />,
      );

      expect(getByTestId('title-end')).toBeInTheDocument();
    });
  });

  describe('descriptionStartAccessory', () => {
    it('renders descriptionStartAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          description="Secondary"
          descriptionStartAccessory={
            <span data-testid="description-start">A</span>
          }
        />,
      );

      expect(getByTestId('description-start')).toBeInTheDocument();
    });
  });

  describe('descriptionEndAccessory', () => {
    it('renders descriptionEndAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          description="Secondary"
          descriptionEndAccessory={<span data-testid="description-end">B</span>}
        />,
      );

      expect(getByTestId('description-end')).toBeInTheDocument();
    });
  });

  describe('valueStartAccessory', () => {
    it('renders valueStartAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          value="100"
          valueStartAccessory={<span data-testid="value-start">X</span>}
        />,
      );

      expect(getByTestId('value-start')).toBeInTheDocument();
    });
  });

  describe('valueEndAccessory', () => {
    it('renders valueEndAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          value="100"
          valueEndAccessory={<span data-testid="value-end">Y</span>}
        />,
      );

      expect(getByTestId('value-end')).toBeInTheDocument();
    });
  });

  describe('subvalueStartAccessory', () => {
    it('renders subvalueStartAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          value="100"
          subvalue="Balance"
          subvalueStartAccessory={<span data-testid="subvalue-start">X</span>}
        />,
      );

      expect(getByTestId('subvalue-start')).toBeInTheDocument();
    });
  });

  describe('subvalueEndAccessory', () => {
    it('renders subvalueEndAccessory in the document', () => {
      const { getByTestId } = render(
        <Content
          data-testid={ROOT_TEST_ID}
          title="Label"
          value="100"
          subvalue="Balance"
          subvalueEndAccessory={<span data-testid="subvalue-end">Y</span>}
        />,
      );

      expect(getByTestId('subvalue-end')).toBeInTheDocument();
    });
  });

  describe('variant', () => {
    it('applies center alignment on root by default', () => {
      const { getByTestId } = render(
        <Content title="Label" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass(BoxFlexDirection.Row);
      expect(getByTestId(ROOT_TEST_ID)).toHaveClass(BoxAlignItems.Center);
    });

    it('applies start alignment on root when variant is MultiLine', () => {
      const { getByTestId } = render(
        <Content
          title="Label"
          variant={ContentVariant.MultiLine}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass(BoxAlignItems.Start);
    });

    it('does not render description or subvalue when variant is OneLine', () => {
      const warnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => undefined);

      const { getByText, queryByText } = render(
        <Content
          title="Title"
          description="Secondary"
          value="100"
          subvalue="Balance"
          variant={ContentVariant.OneLine}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Title')).toBeInTheDocument();
      expect(getByText('100')).toBeInTheDocument();
      expect(queryByText('Secondary')).not.toBeInTheDocument();
      expect(queryByText('Balance')).not.toBeInTheDocument();
      warnSpy.mockRestore();
    });

    it('renders description and subvalue when variant is TwoLines', () => {
      const { getByText } = render(
        <Content
          title="Title"
          description="Secondary"
          value="100"
          subvalue="Balance"
          variant={ContentVariant.TwoLines}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Secondary')).toBeInTheDocument();
      expect(getByText('Balance')).toBeInTheDocument();
    });

    it('renders multi-line description nodes in the document', () => {
      const { getByText } = render(
        <Content
          title="Title"
          variant={ContentVariant.MultiLine}
          description={
            <>
              <span>Secondary line</span>
              <span>Third line</span>
            </>
          }
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Secondary line')).toBeInTheDocument();
      expect(getByText('Third line')).toBeInTheDocument();
    });

    it('warns when OneLine ignores description and subvalue', () => {
      const warnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => undefined);

      render(
        <Content
          title="Title"
          description="Secondary"
          subvalue="Balance"
          variant={ContentVariant.OneLine}
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(warnSpy).toHaveBeenCalledWith(
        'Content: `description` is ignored when `variant` is `ContentVariant.OneLine`.',
      );
      expect(warnSpy).toHaveBeenCalledWith(
        'Content: `subvalue` is ignored when `variant` is `ContentVariant.OneLine`.',
      );
      warnSpy.mockRestore();
    });
  });

  describe('className', () => {
    it('applies className on the root Box', () => {
      const { getByTestId } = render(
        <Content title="Label" className="mt-2" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toHaveClass('mt-2');
    });
  });

  describe('right column alignment', () => {
    it('does not stretch value and subvalue rows to full width', () => {
      const { getByText } = render(
        <Content
          title="Amount"
          value="1.23456789 ETH"
          subvalue="~$1"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('1.23456789 ETH').parentElement).not.toHaveClass(
        'w-full',
      );
      expect(getByText('~$1').parentElement?.parentElement).not.toHaveClass(
        'w-full',
      );
    });

    it('keeps title and description rows full width', () => {
      const { getByText } = render(
        <Content
          title="Title"
          description="Secondary"
          data-testid={ROOT_TEST_ID}
        />,
      );

      expect(getByText('Title').parentElement).toHaveClass('w-full');
      expect(getByText('Secondary').parentElement?.parentElement).toHaveClass(
        'w-full',
      );
    });
  });

  describe('root layout', () => {
    it('passes data-testid to the root Box', () => {
      const { getByTestId } = render(
        <Content title="Label" data-testid={ROOT_TEST_ID} />,
      );

      expect(getByTestId(ROOT_TEST_ID)).toBeInTheDocument();
    });
  });
});
