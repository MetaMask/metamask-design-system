import {
  FontWeight,
  IconAlertSeverity,
  TextColor,
} from '@metamask/design-system-shared';
import { render } from '@testing-library/react';
import React from 'react';

import { TextAlign } from '../../types';
import { TWCLASSMAP_TEXT_FONTWEIGHT } from '../Text/Text.constants';

import { TitleAlert } from './TitleAlert';

const CONTAINER_TEST_ID = 'title-alert-container';
const TITLE_TEST_ID = 'title-alert-title';
const TITLE_ROW_WRAPPER_TEST_ID = 'title-alert-title-wrapper';
const DESCRIPTION_TEST_ID = 'title-alert-description';

describe('TitleAlert', () => {
  describe('rendering', () => {
    it('renders string title', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
        />,
      );

      expect(getByText('High price impact')).toBeInTheDocument();
    });

    it('applies default title text classes', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
        />,
      );

      expect(getByText('High price impact')).toHaveClass('text-s-heading-lg');
    });

    it('renders numeric title', () => {
      const { getByText } = render(
        <TitleAlert severity={IconAlertSeverity.Info} title={42} />,
      );

      expect(getByText('42')).toBeInTheDocument();
    });

    it('forwards data-testid to root container', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Alert"
          data-testid={CONTAINER_TEST_ID}
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toBeInTheDocument();
    });

    it('forwards titleProps data-testid to title Text when title is a string', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Danger}
          title="Error"
          titleProps={{ 'data-testid': TITLE_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_TEST_ID)).toBeInTheDocument();
    });

    it('forwards titleWrapperProps data-testid to the title row container', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Danger}
          title="Error"
          titleWrapperProps={{ 'data-testid': TITLE_ROW_WRAPPER_TEST_ID }}
        />,
      );

      expect(getByTestId(TITLE_ROW_WRAPPER_TEST_ID)).toBeInTheDocument();
    });

    it('applies default title row layout classes', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Danger}
          title="Error"
          titleWrapperProps={{ 'data-testid': TITLE_ROW_WRAPPER_TEST_ID }}
        />,
      );

      const titleRow = getByTestId(TITLE_ROW_WRAPPER_TEST_ID);
      expect(titleRow).toHaveClass('flex-row');
      expect(titleRow).toHaveClass('items-center');
      expect(titleRow).toHaveClass('justify-center');
      expect(titleRow).toHaveClass('self-stretch');
    });

    it('renders string description with string title', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
          description="Swap details here."
        />,
      );

      expect(getByText('High price impact')).toBeInTheDocument();
      expect(getByText('Swap details here.')).toBeInTheDocument();
    });

    it('applies default description text classes', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="High price impact"
          description="Swap details here."
        />,
      );

      const description = getByText('Swap details here.');
      expect(description).toHaveClass('text-s-body-sm');
      expect(description).toHaveClass(
        TWCLASSMAP_TEXT_FONTWEIGHT[FontWeight.Medium],
      );
      expect(description).toHaveClass(TextColor.TextAlternative);
      expect(description).toHaveClass(TextAlign.Center);
    });

    it('forwards descriptionProps data-testid to description Text when description is a string', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Title"
          description="Desc"
          descriptionProps={{ 'data-testid': DESCRIPTION_TEST_ID }}
        />,
      );

      expect(getByTestId(DESCRIPTION_TEST_ID)).toBeInTheDocument();
    });
  });

  describe('when title is provided', () => {
    it('renders React node as title', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={<span data-testid="title-alert-node">Node</span>}
        />,
      );

      expect(getByTestId('title-alert-node')).toBeInTheDocument();
    });

    it('renders React node as description', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Warning}
          title="T"
          description={<span data-testid="title-alert-desc-node">D</span>}
        />,
      );

      expect(getByTestId('title-alert-desc-node')).toBeInTheDocument();
    });
  });

  describe('when description is not renderable', () => {
    it('omits description when description is an empty string', () => {
      const { queryByTestId, getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="T"
          description=""
          descriptionProps={{ 'data-testid': DESCRIPTION_TEST_ID }}
        />,
      );

      expect(queryByTestId(DESCRIPTION_TEST_ID)).not.toBeInTheDocument();
      expect(getByText('T')).toBeInTheDocument();
    });

    it('renders description when title is false', () => {
      const { getByText } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={false}
          description="Only description"
        />,
      );

      expect(getByText('Only description')).toBeInTheDocument();
    });
  });

  describe('when title is not renderable', () => {
    it('omits title row when title is false', () => {
      const showTitle = false;

      const { queryByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title={
            showTitle ? (
              <span data-testid="title-alert-title-slot">Top</span>
            ) : (
              false
            )
          }
        />,
      );

      expect(queryByTestId('title-alert-title-slot')).not.toBeInTheDocument();
    });

    it('omits title row when title is an empty string', () => {
      const { queryByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title=""
          titleProps={{ 'data-testid': TITLE_TEST_ID }}
        />,
      );

      expect(queryByTestId(TITLE_TEST_ID)).not.toBeInTheDocument();
    });
  });

  describe('className', () => {
    it('merges className onto the root container', () => {
      const { getByTestId } = render(
        <TitleAlert
          severity={IconAlertSeverity.Info}
          title="Test"
          data-testid={CONTAINER_TEST_ID}
          className="mt-4"
        />,
      );

      expect(getByTestId(CONTAINER_TEST_ID)).toHaveClass('mt-4');
    });
  });
});
