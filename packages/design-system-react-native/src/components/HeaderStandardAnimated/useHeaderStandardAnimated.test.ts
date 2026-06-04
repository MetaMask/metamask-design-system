// Third party dependencies.
import { renderHook, act } from '@testing-library/react-native';

// Internal dependencies.
import { useHeaderStandardAnimated } from './useHeaderStandardAnimated';

jest.mock('react-native-reanimated', () =>
  jest.requireActual('react-native-reanimated/mock'),
);

describe('useHeaderStandardAnimated', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('return value', () => {
    it('returns scrollY, titleSectionHeightSv, setTitleSectionHeight, and onScroll', async () => {
      const { result } = await renderHook(() => useHeaderStandardAnimated());

      expect(result.current).toHaveProperty('scrollY');
      expect(result.current).toHaveProperty('titleSectionHeightSv');
      expect(result.current).toHaveProperty('setTitleSectionHeight');
      expect(result.current).toHaveProperty('onScroll');
      expect(typeof result.current.setTitleSectionHeight).toBe('function');
      expect(typeof result.current.onScroll).toBe('function');
    });

    it('initializes scrollY with value 0', async () => {
      const { result } = await renderHook(() => useHeaderStandardAnimated());

      expect(result.current.scrollY.value).toBe(0);
    });

    it('initializes titleSectionHeightSv with value 0', async () => {
      const { result } = await renderHook(() => useHeaderStandardAnimated());

      expect(result.current.titleSectionHeightSv.value).toBe(0);
    });
  });

  describe('setTitleSectionHeight', () => {
    it('updates titleSectionHeightSv.value when called', async () => {
      const { result } = await renderHook(() => useHeaderStandardAnimated());

      await act(() => {
        result.current.setTitleSectionHeight(120);
      });

      expect(result.current.titleSectionHeightSv.value).toBe(120);
    });

    it('updates titleSectionHeightSv.value on multiple calls', async () => {
      const { result } = await renderHook(() => useHeaderStandardAnimated());

      await act(() => {
        result.current.setTitleSectionHeight(50);
      });
      expect(result.current.titleSectionHeightSv.value).toBe(50);

      await act(() => {
        result.current.setTitleSectionHeight(200);
      });
      expect(result.current.titleSectionHeightSv.value).toBe(200);
    });
  });
});
