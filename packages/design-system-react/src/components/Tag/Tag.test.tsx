import { TagSeverity } from '@metamask/design-system-shared';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { IconName } from '../../types';
import { TextColor } from '../Text';

import { Tag } from './Tag';
import {
  MAP_TAG_SEVERITY_BACKGROUND,
  MAP_TAG_SEVERITY_ICON_COLOR,
  MAP_TAG_SEVERITY_TEXT_COLOR,
} from './Tag.constants';

describe('Tag', () => {
  it('renders children correctly', () => {
    render(
      <Tag>
        <span data-testid="tag-custom-child">Hello</span>
      </Tag>,
    );

    expect(screen.getByTestId('tag-custom-child')).toBeInTheDocument();
  });

  it('renders string children with tag text styling', () => {
    render(<Tag data-testid="tag">From string</Tag>);

    const tag = screen.getByTestId('tag');
    expect(screen.getByText('From string')).toBeInTheDocument();
    expect(tag.querySelector('p')).toHaveClass(
      'text-s-body-xs',
      TextColor.TextDefault,
    );
  });

  it('merges custom className with default classes', () => {
    render(
      <Tag className="mt-2" data-testid="tag">
        Styled
      </Tag>,
    );

    const tag = screen.getByTestId('tag');
    expect(tag).toHaveClass('mt-2', 'rounded-md', 'inline-flex');
  });

  describe('severity', () => {
    Object.values(TagSeverity).forEach((severity) => {
      it(`applies ${severity} severity styles`, () => {
        render(
          <Tag severity={severity} data-testid="tag">
            Label
          </Tag>,
        );

        const tag = screen.getByTestId('tag');
        expect(tag).toHaveClass(MAP_TAG_SEVERITY_BACKGROUND[severity]);
        expect(tag.querySelector('p')).toHaveClass(
          MAP_TAG_SEVERITY_TEXT_COLOR[severity],
        );
      });
    });
  });

  describe('startIconName and startIconProps', () => {
    it('renders start icon when startIconName is provided', () => {
      render(
        <Tag
          startIconName={IconName.Warning}
          startIconProps={{ 'data-testid': 'tag-start-icon' }}
        >
          Tagged
        </Tag>,
      );

      const icon = screen.getByTestId('tag-start-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass(
        MAP_TAG_SEVERITY_ICON_COLOR[TagSeverity.Neutral],
      );
    });

    it('resolves icon from startIconProps.name when startIconName is omitted', () => {
      render(
        <Tag
          startIconProps={{
            name: IconName.Warning,
            'data-testid': 'tag-start-icon',
          }}
        >
          From props
        </Tag>,
      );

      expect(screen.getByTestId('tag-start-icon')).toBeInTheDocument();
    });
  });

  describe('endIconName', () => {
    it('renders end icon when endIconName is provided', () => {
      render(
        <Tag
          endIconName={IconName.ArrowRight}
          endIconProps={{ 'data-testid': 'tag-end-icon' }}
        >
          Tagged
        </Tag>,
      );

      expect(screen.getByTestId('tag-end-icon')).toBeInTheDocument();
    });
  });

  describe('icons omitted', () => {
    it('does not render icons when no name is provided', () => {
      render(
        <Tag
          startIconProps={{ 'data-testid': 'tag-start-icon' }}
          endIconProps={{ 'data-testid': 'tag-end-icon' }}
        >
          No icons
        </Tag>,
      );

      expect(screen.queryByTestId('tag-start-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('tag-end-icon')).not.toBeInTheDocument();
    });
  });

  describe('startAccessory', () => {
    it('renders startAccessory when no start icon', () => {
      render(
        <Tag startAccessory={<span data-testid="tag-start-accessory">→</span>}>
          With accessory
        </Tag>,
      );

      expect(screen.getByTestId('tag-start-accessory')).toBeInTheDocument();
    });
  });

  describe('endAccessory', () => {
    it('renders endAccessory when no end icon', () => {
      render(
        <Tag endAccessory={<span data-testid="tag-end-accessory">←</span>}>
          With end accessory
        </Tag>,
      );

      expect(screen.getByTestId('tag-end-accessory')).toBeInTheDocument();
    });
  });
});
