import { Theme } from './Theme.types';
import {
  useElevatedListItemClass,
  useElevatedSurfaceClass,
} from './elevatedSurface';
import { usePureBlack, useTheme } from './hooks';

jest.mock('./hooks', () => ({
  useTheme: jest.fn(),
  usePureBlack: jest.fn(),
}));

const mockUseTheme = jest.mocked(useTheme);
const mockUsePureBlack = jest.mocked(usePureBlack);

describe('useElevatedSurfaceClass', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns bg-default for light theme', () => {
    mockUseTheme.mockReturnValue(Theme.Light);
    mockUsePureBlack.mockReturnValue(false);

    expect(useElevatedSurfaceClass()).toBe('bg-default');
  });

  it('returns bg-default for standard dark theme', () => {
    mockUseTheme.mockReturnValue(Theme.Dark);
    mockUsePureBlack.mockReturnValue(false);

    expect(useElevatedSurfaceClass()).toBe('bg-default');
  });

  it('returns bg-alternative for pure-black dark theme', () => {
    mockUseTheme.mockReturnValue(Theme.Dark);
    mockUsePureBlack.mockReturnValue(true);

    expect(useElevatedSurfaceClass()).toBe('bg-alternative');
  });

  it('returns bg-default for pure-black light theme', () => {
    mockUseTheme.mockReturnValue(Theme.Light);
    mockUsePureBlack.mockReturnValue(true);

    expect(useElevatedSurfaceClass()).toBe('bg-default');
  });
});

describe('useElevatedListItemClass', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns bg-default for unselected rows in standard dark theme', () => {
    mockUseTheme.mockReturnValue(Theme.Dark);
    mockUsePureBlack.mockReturnValue(false);

    expect(useElevatedListItemClass()).toBe('bg-default');
  });

  it('returns transparent class for unselected rows in pure-black dark theme', () => {
    mockUseTheme.mockReturnValue(Theme.Dark);
    mockUsePureBlack.mockReturnValue(true);

    expect(useElevatedListItemClass()).toBe('');
  });

  it('returns bg-section for selected rows in pure-black dark theme', () => {
    mockUseTheme.mockReturnValue(Theme.Dark);
    mockUsePureBlack.mockReturnValue(true);

    expect(useElevatedListItemClass({ isSelected: true })).toBe('bg-section');
  });

  it('returns bg-section for selected rows in standard dark theme', () => {
    mockUseTheme.mockReturnValue(Theme.Dark);
    mockUsePureBlack.mockReturnValue(false);

    expect(useElevatedListItemClass({ isSelected: true })).toBe('bg-section');
  });
});
