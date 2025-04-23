import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';

import { AvatarGroupVariant, AvatarGroupSize } from '../../types';
import { AvatarAccountVariant } from '../AvatarAccount';
import { TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE } from '../AvatarBase/AvatarBase.constants';
import { TextColor } from '../Text';
import { AvatarGroup } from './AvatarGroup';
import { AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP } from './AvatarGroup.constants';

describe('AvatarGroup', () => {
  it('forwards ref to the root <div>', () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <AvatarGroup
        ref={ref}
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={[]}
      />,
    );
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('applies custom className and style on the container', () => {
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Account}
        avatarPropsArr={[]}
        className="my-group"
        style={{ margin: 8 }}
        data-testid="avatar-group"
      />,
    );
    const avatarGroupElement = screen.getByTestId('avatar-group');
    expect(avatarGroupElement).toHaveClass('my-group');
    expect(avatarGroupElement).toHaveStyle({ margin: '8px' });
  });

  it('applies reverse layout classes when isReverse=true', () => {
    render(
      <AvatarGroup
        variant={AvatarGroupVariant.Favicon}
        avatarPropsArr={[]}
        isReverse
        data-testid="avatar-group"
      />,
    );
    expect(screen.getByTestId('avatar-group')).toHaveClass('flex-row-reverse');
  });

  describe('AvatarGroup - Account', () => {
    const avatarAccPropsArr = [
      {
        variant: AvatarAccountVariant.Jazzicon,
        address: '0x1',
        className: 'avataraccount-1',
        'data-testid': 'avataraccount-1',
      },
      {
        variant: AvatarAccountVariant.Blockies,
        address: '0x2',
        className: 'avataraccount-2',
        'data-testid': 'avataraccount-2',
      },
    ];

    it('renders Account avatars with test‑ids when ≤ max', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={avatarAccPropsArr}
          max={2}
        />,
      );
      expect(screen.getByTestId('avataraccount-1')).toBeInTheDocument();
      expect(screen.getByTestId('avataraccount-2')).toBeInTheDocument();
      expect(screen.queryByText('+')).toBeNull();
    });

    it('applies negative spacing, zIndex, className & style for Account avatars', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={avatarAccPropsArr}
          max={2}
        />,
      );
      const negativeMarginClass =
        AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[AvatarGroupSize.Md];

      const first = screen.getByTestId('avataraccount-1');
      expect(first).toHaveStyle({ zIndex: 1 });
      expect(first).toHaveClass('avataraccount-1');
      expect(first).not.toHaveClass(negativeMarginClass);

      const second = screen.getByTestId('avataraccount-2');
      expect(second).toHaveStyle({ zIndex: 2 });
      expect(second).toHaveClass('avataraccount-2');
      expect(second).toHaveClass(negativeMarginClass);
    });

    it('shows overflow counter when length > max with correct classes', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Account}
          avatarPropsArr={[...avatarAccPropsArr, avatarAccPropsArr[0]]} // length = 3
          max={2}
          overflowTextProps={{ 'data-testid': 'overflow' }}
        />,
      );
      expect(screen.getByTestId('overflow')).toHaveStyle({ zIndex: 3 });

      const span = screen.getByText('+1');
      expect(span).toHaveClass('text-s-body-md');
      expect(span).toHaveClass(TextColor.PrimaryInverse.toLowerCase());
    });

    it('throws if an invalid variant is provided and there is at least one avatar', () => {
      expect(() =>
        render(
          <AvatarGroup
            variant={'Invalid' as any}
            avatarPropsArr={[{ foo: 'bar' } as any]}
          />,
        ),
      ).toThrow(/Invalid Avatar Variant: Invalid/);
    });
  });

  describe('AvatarGroup - Favicon', () => {
    const faviconPropsArr = [
      {
        name: 'A',
        src: 'a.png',
        className: 'avatarfavicon-1',
        'data-testid': 'avatarfavicon-1',
      },
      {
        name: 'B',
        src: 'b.png',
        className: 'avatarfavicon-2',
        'data-testid': 'avatarfavicon-2',
      },
    ];

    it('renders Favicon avatars with test‑ids', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Favicon}
          avatarPropsArr={faviconPropsArr}
        />,
      );
      expect(screen.getByTestId('avatarfavicon-1')).toBeInTheDocument();
      expect(screen.getByTestId('avatarfavicon-2')).toBeInTheDocument();
    });

    it('applies negative spacing, zIndex, className & style for Favicon avatars', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Favicon}
          avatarPropsArr={faviconPropsArr}
          max={2}
        />,
      );
      const negativeMarginClass =
        AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[AvatarGroupSize.Md];

      const first = screen.getByTestId('avatarfavicon-1');
      expect(first).toHaveStyle({ zIndex: 1 });
      expect(first).toHaveClass('avatarfavicon-1');
      expect(first).not.toHaveClass(negativeMarginClass);

      const second = screen.getByTestId('avatarfavicon-2');
      expect(second).toHaveStyle({ zIndex: 2 });
      expect(second).toHaveClass('avatarfavicon-2');
      expect(second).toHaveClass(negativeMarginClass);
    });

    it('shows overflow counter when length > max', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Favicon}
          avatarPropsArr={[...faviconPropsArr, faviconPropsArr[0]]} // length = 3
          max={1}
          overflowTextProps={{ 'data-testid': 'overflow' }}
        />,
      );
      expect(screen.getByTestId('overflow')).toHaveTextContent('+2');
      expect(screen.getByTestId('overflow')).toHaveStyle({ zIndex: 3 });
    });
  });

  describe('AvatarGroup - Network', () => {
    const netArr = [
      {
        name: 'N1',
        src: 'n1.png',
        className: 'avatarnetwork-1',
        'data-testid': 'avatarnetwork-1',
      },
      {
        name: 'N2',
        src: 'n2.png',
        className: 'avatarnetwork-2',
        'data-testid': 'avatarnetwork-2',
      },
    ];

    it('renders Network avatars with test‑ids', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Network}
          avatarPropsArr={netArr}
        />,
      );
      expect(screen.getByTestId('avatarnetwork-1')).toBeInTheDocument();
      expect(screen.getByTestId('avatarnetwork-2')).toBeInTheDocument();
    });

    it('applies negative spacing, zIndex, className & style for Network avatars', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Network}
          avatarPropsArr={netArr}
          max={2}
        />,
      );
      const negativeMarginClass =
        AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[AvatarGroupSize.Md];

      const first = screen.getByTestId('avatarnetwork-1');
      expect(first).toHaveStyle({ zIndex: 1 });
      expect(first).toHaveClass('avatarnetwork-1');
      expect(first).not.toHaveClass(negativeMarginClass);

      const second = screen.getByTestId('avatarnetwork-2');
      expect(second).toHaveStyle({ zIndex: 2 });
      expect(second).toHaveClass('avatarnetwork-2');
      expect(second).toHaveClass(negativeMarginClass);
    });

    it('shows overflow counter with square shape when length > max', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Network}
          avatarPropsArr={[...netArr, netArr[0]]} // length = 3
          max={1}
          overflowTextProps={{ 'data-testid': 'overflow' }}
        />,
      );
      expect(screen.getByTestId('overflow')).toHaveTextContent('+2');
      expect(screen.getByTestId('overflow')).toHaveStyle({ zIndex: 3 });

      const squareClass =
        TWCLASSMAP_AVATARBASE_SIZE_BORDERRADIUSS_SQUARE[AvatarGroupSize.Md];
      expect(screen.getByTestId('overflow')).toHaveClass(squareClass);
    });
  });

  describe('AvatarGroup - Token', () => {
    const tokArr = [
      {
        name: 'T1',
        src: 't1.png',
        className: 'avatartoken-1',
        'data-testid': 'avatartoken-1',
      },
      {
        name: 'T2',
        src: 't2.png',
        className: 'avatartoken-2',
        'data-testid': 'avatartoken-2',
      },
    ];

    it('renders Token avatars with test‑ids', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Token}
          avatarPropsArr={tokArr}
        />,
      );
      expect(screen.getByTestId('avatartoken-1')).toBeInTheDocument();
      expect(screen.getByTestId('avatartoken-2')).toBeInTheDocument();
    });

    it('applies negative spacing, zIndex, className & style for Token avatars', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Token}
          avatarPropsArr={tokArr}
          max={2}
        />,
      );
      const negativeMarginClass =
        AVATAR_GROUP_SIZE_NEGATIVESPACEBETWEENAVATARS_MAP[AvatarGroupSize.Md];

      const first = screen.getByTestId('avatartoken-1');
      expect(first).toHaveStyle({ zIndex: 1 });
      expect(first).toHaveClass('avatartoken-1');
      expect(first).not.toHaveClass(negativeMarginClass);

      const second = screen.getByTestId('avatartoken-2');
      expect(second).toHaveStyle({ zIndex: 2 });
      expect(second).toHaveClass('avatartoken-2');
      expect(second).toHaveClass(negativeMarginClass);
    });

    it('shows overflow counter when length > max', () => {
      render(
        <AvatarGroup
          variant={AvatarGroupVariant.Token}
          avatarPropsArr={[...tokArr, tokArr[0]]} // length = 3
          max={1}
          overflowTextProps={{ 'data-testid': 'overflow' }}
        />,
      );
      expect(screen.getByTestId('overflow')).toHaveTextContent('+2');
      expect(screen.getByTestId('overflow')).toHaveStyle({ zIndex: 3 });

      const span = screen.getByText('+2');
      expect(span).toHaveClass('text-s-body-md');
      expect(span).toHaveClass(TextColor.PrimaryInverse.toLowerCase());
    });
  });
});
