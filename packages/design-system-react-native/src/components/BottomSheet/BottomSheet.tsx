// src/components/BottomSheet/BottomSheet.tsx
import React, { forwardRef, useRef, useMemo, useImperativeHandle } from 'react';
import type { ViewProps } from 'react-native';
import BottomSheet, {
  BottomSheetProps as GorhomProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

export type BottomSheetHandle = {
  /** Open to the last snap point */
  expand: () => void;
  /** Close to the first snap point */
  collapse: () => void;
  /** Snap to any index */
  snapTo: (index: number) => void;
};

export type BottomSheetWrapperProps = Pick<
  GorhomProps,
  'index' | 'onChange'
> & {
  /** e.g. `['25%', '50%', '90%']` or `[100, 300, 500]` */
  snapPoints?: Array<string | number>;
} & Omit<ViewProps, 'style'>;

export const BottomSheetWrapper = forwardRef<
  BottomSheetHandle,
  BottomSheetWrapperProps
>(
  (
    {
      snapPoints = ['25%', '50%', '90%'],
      index = 0,
      onChange,
      children,
      ...viewProps
    },
    ref,
  ) => {
    const sheetRef = useRef<BottomSheet>(null);
    const _snapPoints = useMemo(() => snapPoints, [snapPoints]);

    useImperativeHandle(
      ref,
      () => ({
        expand: () => sheetRef.current?.expand(),
        collapse: () => sheetRef.current?.collapse(),
        snapTo: (i: number) => sheetRef.current?.snapTo(i),
      }),
      [],
    );

    return (
      <BottomSheet
        ref={sheetRef}
        index={index}
        snapPoints={_snapPoints}
        onChange={onChange}
        {...viewProps}
      >
        {/**
         * If you want consistent padding / scroll handling,
         * you can wrap children in BottomSheetView:
         *
         * <BottomSheetView style={{ flex: 1, padding: 16 }}>
         *   {children}
         * </BottomSheetView>
         *
         * Otherwise, just render children directly:
         */}
        {children}
      </BottomSheet>
    );
  },
);

export default BottomSheetWrapper;
