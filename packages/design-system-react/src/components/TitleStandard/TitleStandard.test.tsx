import { FontWeight, TextColor } from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React from 'react';

import { TWCLASSMAP_TEXT_FONTWEIGHT } from '../Text/Text.constants';

import { TitleStandard } from './TitleStandard';

const CONTAINER_TEST_ID = 'title-standard-container';
const TITLE_TEST_ID = 'title-standard-title';
const TITLE_ROW_WRAPPER_TEST_ID = 'title-standard-title-row';
const BOTTOM_LABEL_TEST_ID = 'title-standard-bottom-label';
const BOTTOM_LABEL_ROW_WRAPPER_TEST_ID = 'title-standard-bottom-label-row';

describe('TitleStandard', () => {
  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(<TitleStandard title="$4.42" />);

      expect(getByText('$4.42')).toBeInTheDocument();
    });

    it('applies default title text classes', () => {
      const { getByText } = render(<TitleStandard title="$4.42" />);

      expect(getByText('$4.42')).toHaveClass('text-s-heading-lg');
    });

    it('renders React node title', () => {
      const { getByTestId } = render(
        <TitleStandard
          title={
            <span data-testid="title-standard-title-node">Custom title</span>
          }
        />,
      );

      expect(getByTestId('title-standard-title-node')).toBeInTheDocument();
    });

    it('renders numeric title', () => {
      const { getByText } = render(<TitleStandard title={42} />);

      expect(getByText('42')).toBeInTheDocument();
    });

    it('forwards data-testid to root container', () => {
      const { getByTestId } = render(
        <TitleStandard title="Test" data-testid={CONTAINER_TEST_ID} />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
    });

    it('forwards titleProps data-testid to title Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="$4.42"
          titleProps={{ 'data-testid': TITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeInTheDocument();
    });

    it('forwards titleWrapperProps data-testid to the title row container', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="$4.42"
          titleWrapperProps={{ 'data-testid': TITLE_ROW_WRAPPER_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_WRAPPER_TEST_ID)).toBeInTheDocument();
    });

    it('applies default title row layout classes', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="$4.42"
          titleWrapperProps={{ 'data-testid': TITLE_ROW_WRAPPER_TEST_ID }}
        />,
      );

      const titleRow = getByTestId(TITLE_ROW_WRAPPER_TEST_ID);
      expect(titleRow).toHaveClass('flex-row');
      expect(titleRow).toHaveClass('items-center');
    });
  });

  describe('when topAccessory is provided', () => {
    it('renders topAccessory and title', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" topAccessory={<span>Custom Top</span>} />,
      );

      expect(getByText('Custom Top')).toBeInTheDocument();
      expect(getByText('$4.42')).toBeInTheDocument();
    });
  });

  describe('when topAccessory is false', () => {
    it('does not render topAccessory node', () => {
      const showTop = false;
      const { getByText, queryByTestId } = render(
        <TitleStandard
          title="$4.42"
          topAccessory={
            showTop ? (
              <span data-testid="title-standard-top-slot">Top</span>
            ) : (
              false
            )
          }
        />,
      );

      expect(getByText('$4.42')).toBeInTheDocument();
      expect(queryByTestId('title-standard-top-slot')).not.toBeInTheDocument();
    });
  });

  describe('when bottomLabel is provided', () => {
    it('renders bottomLabel text', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" bottomLabel="0.002 ETH" />,
      );

      expect(getByText('0.002 ETH')).toBeInTheDocument();
    });

    it('applies default bottom label text classes', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" bottomLabel="0.002 ETH" />,
      );

      const bottomLabel = getByText('0.002 ETH');
      expect(bottomLabel).toHaveClass('text-s-body-sm');
      expect(bottomLabel).toHaveClass(
        TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium],
      );
      expect(bottomLabel).toHaveClass(TextColor.TextAlternative);
    });

    it('forwards bottomLabelProps data-testid to bottom label Text', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelProps={{ 'data-testid': BOTTOM_LABEL_TEST_ID }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_TEST_ID)).toBeInTheDocument();
    });

    it('forwards bottomLabelWrapperProps data-testid to the bottom label row container', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelWrapperProps={{
            'data-testid': BOTTOM_LABEL_ROW_WRAPPER_TEST_ID,
          }}
        />,
      );

      expect(getByTestId(BOTTOM_LABEL_ROW_WRAPPER_TEST_ID)).toBeInTheDocument();
    });

    it('renders bottomLabel and bottomLabelEndAccessory', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={<span>Extra</span>}
        />,
      );

      expect(getByText('0.002 ETH')).toBeInTheDocument();
      expect(getByText('Extra')).toBeInTheDocument();
    });

    it('does not render bottomLabelEndAccessory when it is false', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="0.002 ETH"
          bottomLabelEndAccessory={false}
        />,
      );

      expect(getByText('0.002 ETH')).toBeInTheDocument();
    });
  });

  describe('when bottomAccessory is provided', () => {
    it('renders bottomAccessory when bottomLabel is omitted', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomAccessory={<span>Custom Bottom</span>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeInTheDocument();
    });

    it('renders bottomAccessory when bottomLabel is false', () => {
      const { getByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel={false}
          bottomAccessory={<span>Custom Bottom</span>}
        />,
      );

      expect(getByText('Custom Bottom')).toBeInTheDocument();
    });
  });

  describe('when bottomLabel and bottomAccessory are both provided', () => {
    it('renders only bottomLabel', () => {
      const { getByText, queryByText } = render(
        <TitleStandard
          title="$4.42"
          bottomLabel="Label Priority"
          bottomAccessory={<span>Accessory</span>}
        />,
      );

      expect(getByText('Label Priority')).toBeInTheDocument();
      expect(queryByText('Accessory')).not.toBeInTheDocument();
    });
  });

  describe('when bottomLabelEndAccessory is provided without bottomLabel', () => {
    it('does not render bottomLabelEndAccessory', () => {
      const { getByText, queryByTestId } = render(
        <TitleStandard
          title="$4.42"
          bottomAccessory={<span>Custom Bottom</span>}
          bottomLabelEndAccessory={
            <span data-testid="bottom-label-end-only">End</span>
          }
        />,
      );

      expect(getByText('Custom Bottom')).toBeInTheDocument();
      expect(queryByTestId('bottom-label-end-only')).not.toBeInTheDocument();
    });
  });

  describe('when titleEndAccessory is provided', () => {
    it('renders title and titleEndAccessory', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" titleEndAccessory={<span>Info</span>} />,
      );

      expect(getByText('$4.42')).toBeInTheDocument();
      expect(getByText('Info')).toBeInTheDocument();
    });
  });

  describe('when titleEndAccessory is false', () => {
    it('renders title only', () => {
      const { getByText } = render(
        <TitleStandard title="$4.42" titleEndAccessory={false} />,
      );

      expect(getByText('$4.42')).toBeInTheDocument();
    });
  });

  describe('when topAccessory, titleEndAccessory, and bottomLabel are provided', () => {
    it('renders all slots', () => {
      const { getByText } = render(
        <TitleStandard
          topAccessory={<span>Send</span>}
          title="$4.42"
          titleEndAccessory={<span>i</span>}
          bottomLabel="0.002 ETH"
        />,
      );

      expect(getByText('Send')).toBeInTheDocument();
      expect(getByText('$4.42')).toBeInTheDocument();
      expect(getByText('i')).toBeInTheDocument();
      expect(getByText('0.002 ETH')).toBeInTheDocument();
    });
  });

  describe('className', () => {
    it('merges className onto the root container', () => {
      const { getByTestId } = render(
        <TitleStandard
          title="Test"
          data-testid={CONTAINER_TEST_ID}
          className="mt-4"
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveClass('mt-4');
    });
  });
});
