// Third party dependencies.
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

// Internal dependencies.
import { TitleSubpage } from './TitleSubpage';

const CONTAINER_TEST_ID = 'title-subpage-container';
const AMOUNT_TEST_ID = 'title-subpage-amount';
const TITLE_ROW_TEST_ID = 'title-subpage-title';
const SUBTITLE_ROW_TEST_ID = 'title-subpage-subtitle';
const BOTTOM_LABEL_TEST_ID = 'title-subpage-bottom-label';
const TITLE_AVATAR_TEST_ID = 'title-subpage-title-avatar';
const TITLE_AVATAR_SLOT_TEST_ID = 'title-subpage-title-avatar-slot';
const IDENTITY_ROW_TEST_ID = 'title-subpage-identity-row';

const defaultTitleAvatar = <Text testID={TITLE_AVATAR_TEST_ID} />;

describe('TitleSubpage', () => {
  let tw: ReturnType<typeof useTailwind>;

  beforeAll(async () => {
    const { result } = await renderHook(() => useTailwind());

    tw = result.current;
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders string title', async () => {
      const { getByText } = await render(
        <TitleSubpage titleAvatar={defaultTitleAvatar} title="Section" />,
      );

      expect(getByText('Section')).toBeOnTheScreen();
    });

    it('renders titleAvatar in the identity row', async () => {
      const { getByTestId } = await render(
        <TitleSubpage titleAvatar={defaultTitleAvatar} title="Section" />,
      );

      expect(getByTestId(TITLE_AVATAR_TEST_ID)).toBeOnTheScreen();
    });

    it('passes titleAvatar through as startAccessory without a fixed-size overflow wrapper', async () => {
      const { getByTestId, queryByTestId } = await render(
        <TitleSubpage titleAvatar={defaultTitleAvatar} title="Section" />,
      );

      expect(getByTestId(TITLE_AVATAR_TEST_ID)).toBeOnTheScreen();
      expect(queryByTestId(TITLE_AVATAR_SLOT_TEST_ID)).not.toBeOnTheScreen();
    });

    it('forwards identityRowProps testID to identity BoxRow', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Section"
          identityRowProps={{ testID: IDENTITY_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(IDENTITY_ROW_TEST_ID)).toBeOnTheScreen();
    });

    it('renders string amount when provided', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });

    it('renders React node amount', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Total"
          amount={<Text testID="title-subpage-amount-node">Custom amount</Text>}
        />,
      );

      expect(getByTestId('title-subpage-amount-node')).toBeOnTheScreen();
    });

    it('renders container with testID when provided', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Test"
          testID={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeOnTheScreen();
    });

    it('forwards amountProps testID to amount Text when amount is a string', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountProps={{ testID: AMOUNT_TEST_ID }}
        />,
      );

      expect(getByTestId(AMOUNT_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when title is provided', () => {
    it('renders title and amount', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title={<Text>Custom Top</Text>}
          amount="$4.42"
        />,
      );

      expect(getByText('Custom Top')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });

    it('renders title and titleEndAccessory', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Step 1"
          amount="$4.42"
          titleEndAccessory={<Text>Title extra</Text>}
        />,
      );

      expect(getByText('Step 1')).toBeOnTheScreen();
      expect(getByText('Title extra')).toBeOnTheScreen();
    });

    it('forwards titleProps testID to title row Text when title is a string', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Step 1"
          amount="$4.42"
          titleProps={{ testID: TITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when title is false', () => {
    it('does not render title node', async () => {
      const showTitle = false;
      const { getByText, queryByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title={
            showTitle ? (
              <Text testID="title-subpage-title-slot">Top</Text>
            ) : (
              false
            )
          }
          amount="$4.42"
        />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(queryByTestId('title-subpage-title-slot')).not.toBeOnTheScreen();
    });

    it('does not render title row or titleEndAccessory', async () => {
      const showTitle = false;
      const { getByText, queryByTestId, queryByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title={
            showTitle ? (
              <Text testID="title-subpage-title-slot">Top</Text>
            ) : (
              false
            )
          }
          amount="$4.42"
          titleEndAccessory={<Text>Only title accessory</Text>}
        />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(queryByText('Only title accessory')).not.toBeOnTheScreen();
      expect(queryByTestId('title-subpage-title-slot')).not.toBeOnTheScreen();
    });
  });

  describe('when titleEndAccessory is false', () => {
    it('does not render titleEndAccessory', async () => {
      const showTitleEndAccessory = false;
      const { getByText, queryByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Hi"
          amount="$4.42"
          titleEndAccessory={
            showTitleEndAccessory ? (
              <Text testID="title-subpage-title-end-accessory">Accessory</Text>
            ) : (
              false
            )
          }
        />,
      );

      expect(getByText('Hi')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(
        queryByTestId('title-subpage-title-end-accessory'),
      ).not.toBeOnTheScreen();
    });
  });

  describe('when subtitle is provided', () => {
    it('renders string subtitle between title and amount', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Account 1"
          amount="$4.42"
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('Account 1')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
    });

    it('renders subtitle and subtitleEndAccessory', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Extra context"
          amount="$4.42"
          subtitleEndAccessory={<Text>Sub extra</Text>}
        />,
      );

      expect(getByText('Extra context')).toBeOnTheScreen();
      expect(getByText('Sub extra')).toBeOnTheScreen();
    });

    it('forwards subtitleProps testID to subtitle row Text when subtitle is a string', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle="Account 1"
          amount="$4.42"
          subtitleProps={{ testID: SUBTITLE_ROW_TEST_ID }}
        />,
      );

      expect(getByTestId(SUBTITLE_ROW_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when subtitle is false', () => {
    it('does not render subtitle row or subtitleEndAccessory', async () => {
      const showSubtitle = false;
      const { getByText, queryByTestId, queryByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          subtitle={
            showSubtitle ? (
              <Text testID="title-subpage-subtitle-slot">Sub</Text>
            ) : (
              false
            )
          }
          amount="$4.42"
          subtitleEndAccessory={<Text>Only sub accessory</Text>}
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(queryByText('Only sub accessory')).not.toBeOnTheScreen();
      expect(
        queryByTestId('title-subpage-subtitle-slot'),
      ).not.toBeOnTheScreen();
    });
  });

  describe('when amount is false', () => {
    it('does not render amount node', async () => {
      const showAmount = false;
      const { getByText, queryByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount={
            showAmount ? (
              <Text testID="title-subpage-amount-slot">$1</Text>
            ) : (
              false
            )
          }
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(queryByTestId('title-subpage-amount-slot')).not.toBeOnTheScreen();
    });
  });

  describe('when bottomLabel is provided', () => {
    it('renders bottomLabel text', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
        />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });

    it('renders bottomLabel and bottomLabelEndAccessory', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={<Text>Fee info</Text>}
        />,
      );

      expect(getByText('0.002 ETH')).toBeOnTheScreen();
      expect(getByText('Fee info')).toBeOnTheScreen();
    });

    it('forwards bottomLabelProps testID to bottom label Text', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelProps={{ testID: BOTTOM_LABEL_TEST_ID }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_TEST_ID)).toBeOnTheScreen();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory when bottomLabel is omitted', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomAccessory={<Text>Custom Bottom</Text>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeOnTheScreen();
    });
  });

  describe('when bottomLabel and bottomAccessory are both provided', () => {
    it('renders only bottomLabel', async () => {
      const { getByText, queryByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabel="Label Priority"
          bottomAccessory={<Text>Accessory</Text>}
        />,
      );

      expect(getByText('Label Priority')).toBeOnTheScreen();
      expect(queryByText('Accessory')).not.toBeOnTheScreen();
    });
  });

  describe('when bottomLabel is omitted and bottomLabelEndAccessory is provided', () => {
    it('does not render bottomLabelEndAccessory without bottomLabel', async () => {
      const { queryByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabelEndAccessory={<Text>Only accessory</Text>}
          bottomAccessory={<Text>Full row</Text>}
        />,
      );

      expect(queryByText('Only accessory')).not.toBeOnTheScreen();
    });

    it('renders bottomAccessory', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          bottomLabelEndAccessory={<Text>Only accessory</Text>}
          bottomAccessory={<Text>Full row</Text>}
        />,
      );

      expect(getByText('Full row')).toBeOnTheScreen();
    });
  });

  describe('when amountEndAccessory is provided', () => {
    it('renders amount and amountEndAccessory', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountEndAccessory={<Text>Info</Text>}
        />,
      );

      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(getByText('Info')).toBeOnTheScreen();
    });

    it('does not render amount row when amount is an empty string', async () => {
      const { getByText, queryByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount=""
          amountEndAccessory={<Text>Accessory only</Text>}
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(queryByText('Accessory only')).not.toBeOnTheScreen();
    });
  });

  describe('when amountEndAccessory is false', () => {
    it('does not render amountEndAccessory', async () => {
      const showAmountEndAccessory = false;
      const { getByText, queryByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Send"
          amount="$4.42"
          amountEndAccessory={
            showAmountEndAccessory ? (
              <Text testID="title-subpage-amount-end-accessory">Accessory</Text>
            ) : (
              false
            )
          }
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(
        queryByTestId('title-subpage-amount-end-accessory'),
      ).not.toBeOnTheScreen();
    });
  });

  describe('when title, amountEndAccessory, and bottomLabel are provided', () => {
    it('renders all slots', async () => {
      const { getByText } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title={<Text>Send</Text>}
          amount="$4.42"
          amountEndAccessory={<Text>i</Text>}
          bottomLabel="0.002 ETH"
        />,
      );

      expect(getByText('Send')).toBeOnTheScreen();
      expect(getByText('$4.42')).toBeOnTheScreen();
      expect(getByText('i')).toBeOnTheScreen();
      expect(getByText('0.002 ETH')).toBeOnTheScreen();
    });
  });

  describe('style and twClassName', () => {
    it('applies custom style to root container', async () => {
      const customStyle = { opacity: 0.5 };
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Test"
          testID={CONTAINER_TEST_ID}
          style={customStyle}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveStyle(customStyle);
    });

    it('merges twClassName with base styles', async () => {
      const { getByTestId } = await render(
        <TitleSubpage
          titleAvatar={defaultTitleAvatar}
          title="Test"
          testID={CONTAINER_TEST_ID}
          twClassName="bg-default"
        />,
      );

      const container = getByTestId(CONTAINER_TEST_ID);

      expect(container).toHaveStyle(tw`bg-default`);
    });
  });
});
