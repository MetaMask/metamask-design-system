import { FontWeight, TextColor } from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React, { createRef } from 'react';

import { TWCLASSMAP_TEXT_FONTWEIGHT } from '../Text/Text.constants';

import { TitleSubpage } from './TitleSubpage';

const CONTAINER_TEST_ID = 'title-subpage-container';
const AMOUNT_TEST_ID = 'title-subpage-amount';
const TITLE_ROW_TEST_ID = 'title-subpage-title';
const SUBTITLE_ROW_TEST_ID = 'title-subpage-subtitle';
const BOTTOM_LABEL_TEST_ID = 'title-subpage-bottom-label';
const TITLE_AVATAR_TEST_ID = 'title-subpage-title-avatar';
const IDENTITY_ROW_TEST_ID = 'title-subpage-identity-row';

const defaultTitleAvatar = <span data-testid={TITLE_AVATAR_TEST_ID} />;

describe('TitleSubpage', () => {
  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(
        <TitleSubpage titleAvatar={defaultTitleAvatar} title="Section" />,
      );

      expect(getByText('Section')).toBeInTheDocument();
    });

    it('renders titleAvatar in the identity row', () => {
      const { getByTestId } = render(
        <TitleSubpage titleAvatar={defaultTitleAvatar} title="Section" />,
      );

      expect(getByTestId(TITLE_AVATAR_TEST_ID)).toBeInTheDocument();
    });

    it('forwards identityRowProps data-testid to identity row', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Section"
          identityRowProps={{ 'data-testid': IDENTITY_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(IDENTITY_ROW_TEST_ID)).toBeInTheDocument();
    });

    it('applies default identity row layout classes', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Section"
          identityRowProps={{ 'data-testid': IDENTITY_ROW_TEST_ID }}
        />,
      );

      const identityRow = getByTestId(IDENTITY_ROW_TEST_ID);
      expect(identityRow).toHaveClass('flex-row');
      expect(identityRow).toHaveClass('items-center');
      expect(identityRow).toHaveClass('h-14');
    });

    it('lets identityRowProps.className override the default h-14', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Section"
          identityRowProps={{
            'data-testid': IDENTITY_ROW_TEST_ID,
            className: 'h-16',
          }}
        />,
      );

      const identityRow = getByTestId(IDENTITY_ROW_TEST_ID);
      expect(identityRow).toHaveClass('h-16');
      expect(identityRow).not.toHaveClass('h-14');
      expect(identityRow).toHaveClass('flex-row');
    });

    it('forwards titleColumnProps to the title column Box', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Section"
          titleColumnProps={{ 'data-testid': 'title-subpage-title-column' }}
        />,
      );

      expect(getByTestId('title-subpage-title-column')).toBeInTheDocument();
    });

    it('forwards bottomLabelWrapperProps to the bottom label row Box', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Section"
          bottomLabel="0.002 ETH"
          bottomLabelWrapperProps={{
            'data-testid': 'title-subpage-bottom-label-row',
          }}
        />,
      );

      expect(getByTestId('title-subpage-bottom-label-row')).toBeInTheDocument();
    });

    it('renders string amount when provided', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
        />,
      );

      expect(getByText('Send')).toBeInTheDocument();
      expect(getByText('$4.42')).toBeInTheDocument();
    });

    it('applies default amount text class', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
        />,
      );

      expect(getByText('$4.42')).toHaveClass('text-s-display-lg');
    });

    it('renders string amount as a paragraph, not a heading', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
        />,
      );

      const amount = getByText('$4.42');
      expect(amount.tagName).toBe('P');
      expect(amount).toHaveClass('text-s-display-lg');
    });

    it('renders title as the only semantic heading', () => {
      const { container } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
        />,
      );

      const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');
      expect(headings).toHaveLength(1);
      expect(headings[0]).toHaveTextContent('Send');
      expect(headings[0]).toHaveClass('text-s-heading-sm');
    });

    it('renders React node amount', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Total"
          amount={
            <span data-testid="title-subpage-amount-node">Custom amount</span>
          }
        />,
      );

      expect(getByTestId('title-subpage-amount-node')).toBeInTheDocument();
    });

    it('forwards data-testid to root container', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Test"
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
    });

    it('forwards amountProps data-testid to amount Text when amount is a string', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountProps={{ 'data-testid': AMOUNT_TEST_ID }}
        />,
      );

      expect(getByTestId(AMOUNT_TEST_ID)).toBeInTheDocument();
    });

    it('masks a string amount when amountProps.isHidden is true', () => {
      const { getByText, queryByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountProps={{ isHidden: true }}
        />,
      );

      expect(getByText('••••••')).toBeInTheDocument();
      expect(queryByText('$4.42')).not.toBeInTheDocument();
    });

    it('masks a string amount with a valid custom amountProps.length', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountProps={{ isHidden: true, length: '8' }}
        />,
      );

      expect(getByText('••••••••')).toBeInTheDocument();
    });

    it('falls back to Short and warns for an invalid amountProps.length', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountProps={{ isHidden: true, length: 'abc' }}
        />,
      );

      expect(getByText('••••••')).toBeInTheDocument();
      expect(consoleSpy).toHaveBeenCalledWith(
        'Invalid length provided: abc. Falling back to Short.',
      );

      consoleSpy.mockRestore();
    });

    it('masks a string subtitle when subtitleProps.isHidden is true', () => {
      const { getByText, queryByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Account 1"
          subtitleProps={{ isHidden: true }}
        />,
      );

      expect(getByText('••••••')).toBeInTheDocument();
      expect(queryByText('Account 1')).not.toBeInTheDocument();
    });
  });

  describe('root container', () => {
    it('forwards ref to the root div', () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <TitleSubpage
          ref={ref}
          titleAvatar={defaultTitleAvatar}
          title="Test"
        />,
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('applies style to the root container', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Test"
          data-testid={CONTAINER_TEST_ID}
          style={{ marginTop: '16px' }}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle({
        marginTop: '16px',
      });
    });
  });

  describe('when title is provided', () => {
    it('renders title and amount', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title={<span>Custom Top</span>}
          amount="$4.42"
        />,
      );

      expect(getByText('Custom Top')).toBeInTheDocument();
      expect(getByText('$4.42')).toBeInTheDocument();
    });

    it('applies default title text classes', () => {
      const { getByText } = render(
        <TitleSubpage titleAvatar={defaultTitleAvatar} title="Step 1" />,
      );

      const title = getByText('Step 1');
      expect(title).toHaveClass('text-s-heading-sm');
      expect(title).toHaveClass(TextColor.TextDefault);
    });

    it('renders title and titleEndAccessory', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Step 1"
          amount="$4.42"
          titleEndAccessory={<span>Title extra</span>}
        />,
      );

      expect(getByText('Step 1')).toBeInTheDocument();
      expect(getByText('Title extra')).toBeInTheDocument();
    });

    it('forwards titleProps data-testid to title Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Step 1"
          amount="$4.42"
          titleProps={{ 'data-testid': TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeInTheDocument();
    });
  });

  describe('when title is false', () => {
    it('does not render title node or titleEndAccessory', () => {
      const showTitle = false;
      const { getByText, queryByTestId, queryByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title={
            showTitle ? (
              <span data-testid="title-subpage-title-slot">Top</span>
            ) : (
              false
            )
          }
          amount="$4.42"
          titleEndAccessory={<span>Only title accessory</span>}
        />,
      );

      expect(getByText('$4.42')).toBeInTheDocument();
      expect(queryByTestId('title-subpage-title-slot')).not.toBeInTheDocument();
      expect(queryByText('Only title accessory')).not.toBeInTheDocument();
    });
  });

  describe('when subtitle is provided', () => {
    it('renders string subtitle between title and amount', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Account 1"
          amount="$4.42"
        />,
      );

      expect(getByText('Send')).toBeInTheDocument();
      expect(getByText('Account 1')).toBeInTheDocument();
      expect(getByText('$4.42')).toBeInTheDocument();
    });

    it('applies default subtitle text classes', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Account 1"
        />,
      );

      const subtitle = getByText('Account 1');
      expect(subtitle).toHaveClass('text-s-body-sm');
      expect(subtitle).toHaveClass(
        TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium],
      );
      expect(subtitle).toHaveClass(TextColor.TextAlternative);
    });

    it('renders subtitle and subtitleEndAccessory', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Extra context"
          amount="$4.42"
          subtitleEndAccessory={<span>Sub extra</span>}
        />,
      );

      expect(getByText('Extra context')).toBeInTheDocument();
      expect(getByText('Sub extra')).toBeInTheDocument();
    });

    it('forwards subtitleProps data-testid to subtitle Text when subtitle is a string', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Account 1"
          amount="$4.42"
          subtitleProps={{ 'data-testid': SUBTITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(SUBTITLE_ROW_TEST_ID)).toBeInTheDocument();
    });
  });

  describe('when subtitle is false', () => {
    it('does not render subtitle row or subtitleEndAccessory', () => {
      const showSubtitle = false;
      const { getByText, queryByTestId, queryByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle={
            showSubtitle ? (
              <span data-testid="title-subpage-subtitle-slot">Sub</span>
            ) : (
              false
            )
          }
          amount="$4.42"
          subtitleEndAccessory={<span>Only sub accessory</span>}
        />,
      );

      expect(getByText('Send')).toBeInTheDocument();
      expect(getByText('$4.42')).toBeInTheDocument();
      expect(queryByText('Only sub accessory')).not.toBeInTheDocument();
      expect(
        queryByTestId('title-subpage-subtitle-slot'),
      ).not.toBeInTheDocument();
    });
  });

  describe('when amount is false or empty', () => {
    it('does not render amount node', () => {
      const showAmount = false;
      const { getByText, queryByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount={
            showAmount ? (
              <span data-testid="title-subpage-amount-slot">$1</span>
            ) : (
              false
            )
          }
        />,
      );

      expect(getByText('Send')).toBeInTheDocument();
      expect(
        queryByTestId('title-subpage-amount-slot'),
      ).not.toBeInTheDocument();
    });

    it('does not render amount row when amount is an empty string', () => {
      const { getByText, queryByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount=""
          amountEndAccessory={<span>Accessory only</span>}
        />,
      );

      expect(getByText('Send')).toBeInTheDocument();
      expect(queryByText('Accessory only')).not.toBeInTheDocument();
    });
  });

  describe('when bottomLabel is provided', () => {
    it('renders bottomLabel text', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
        />,
      );

      expect(getByText('0.002 ETH')).toBeInTheDocument();
    });

    it('renders bottomLabel and bottomLabelEndAccessory', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={<span>Fee info</span>}
        />,
      );

      expect(getByText('0.002 ETH')).toBeInTheDocument();
      expect(getByText('Fee info')).toBeInTheDocument();
    });

    it('forwards bottomLabelProps data-testid to bottom label Text', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelProps={{ 'data-testid': BOTTOM_LABEL_TEST_ID }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_TEST_ID)).toBeInTheDocument();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory when bottomLabel is omitted', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomAccessory={<span>Custom Bottom</span>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeInTheDocument();
    });
  });

  describe('when bottomLabel and bottomAccessory are both provided', () => {
    it('renders only bottomLabel', () => {
      const { getByText, queryByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="Label Priority"
          bottomAccessory={<span>Accessory</span>}
        />,
      );

      expect(getByText('Label Priority')).toBeInTheDocument();
      expect(queryByText('Accessory')).not.toBeInTheDocument();
    });
  });

  describe('when amountEndAccessory is provided', () => {
    it('renders amount and amountEndAccessory', () => {
      const { getByText } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountEndAccessory={<span>Info</span>}
        />,
      );

      expect(getByText('$4.42')).toBeInTheDocument();
      expect(getByText('Info')).toBeInTheDocument();
    });
  });

  describe('className', () => {
    it('merges className onto the root container', () => {
      const { getByTestId } = render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Test"
          data-testid={CONTAINER_TEST_ID}
          className="mt-4"
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveClass('mt-4');
    });
  });
});
