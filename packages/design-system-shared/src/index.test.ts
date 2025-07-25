import {
  AvatarAccountVariant,
  AvatarAccountSize,
  AvatarShape,
  AVATAR_ACCOUNT_SIZE_TO_PIXELS,
  type BaseAvatarAccountProps,
} from './index';

describe('@metamask/design-system-shared', () => {
  describe('AvatarAccountVariant', () => {
    it('should export the correct variant values', () => {
      expect(AvatarAccountVariant.Blockies).toBe('blockies');
      expect(AvatarAccountVariant.Jazzicon).toBe('jazzicon');
      expect(AvatarAccountVariant.Maskicon).toBe('maskicon');
    });
  });

  describe('AvatarAccountSize', () => {
    it('should export the correct size values', () => {
      expect(AvatarAccountSize.Xs).toBe('xs');
      expect(AvatarAccountSize.Sm).toBe('sm');
      expect(AvatarAccountSize.Md).toBe('md');
      expect(AvatarAccountSize.Lg).toBe('lg');
      expect(AvatarAccountSize.Xl).toBe('xl');
    });
  });

  describe('AvatarShape', () => {
    it('should export the correct shape values', () => {
      expect(AvatarShape.Circle).toBe('circle');
      expect(AvatarShape.Square).toBe('square');
    });
  });

  describe('AVATAR_ACCOUNT_SIZE_TO_PIXELS', () => {
    it('should map size values to correct pixel numbers', () => {
      expect(AVATAR_ACCOUNT_SIZE_TO_PIXELS[AvatarAccountSize.Xs]).toBe(16);
      expect(AVATAR_ACCOUNT_SIZE_TO_PIXELS[AvatarAccountSize.Sm]).toBe(24);
      expect(AVATAR_ACCOUNT_SIZE_TO_PIXELS[AvatarAccountSize.Md]).toBe(32);
      expect(AVATAR_ACCOUNT_SIZE_TO_PIXELS[AvatarAccountSize.Lg]).toBe(40);
      expect(AVATAR_ACCOUNT_SIZE_TO_PIXELS[AvatarAccountSize.Xl]).toBe(48);
    });
  });

  describe('BaseAvatarAccountProps', () => {
    it('should be a valid type', () => {
      const props: BaseAvatarAccountProps = {
        address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
        variant: AvatarAccountVariant.Jazzicon,
        size: AvatarAccountSize.Md,
      };

      expect(props.address).toBe('0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8');
      expect(props.variant).toBe(AvatarAccountVariant.Jazzicon);
      expect(props.size).toBe(AvatarAccountSize.Md);
    });

    it('should allow optional variant and size', () => {
      const props: BaseAvatarAccountProps = {
        address: '0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8',
      };

      expect(props.address).toBe('0x9Cbf7c41B7787F6c621115010D3B044029FE2Ce8');
      expect(props.variant).toBeUndefined();
      expect(props.size).toBeUndefined();
    });
  });
});