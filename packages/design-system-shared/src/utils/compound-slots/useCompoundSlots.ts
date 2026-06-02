import { Children, useMemo } from 'react';
import type { ReactNode } from 'react';

import { mergePropsWithSlots } from './mergePropsWithSlots';
import { partitionChildren } from './partitionChildren';

export type UseCompoundSlotsOptions<
  TProps extends { children?: ReactNode },
  TParsed extends Partial<TProps>,
  TMerged extends Omit<TProps, 'children'>,
> = {
  props: TProps;
  isSlotElement: (child: ReactNode) => boolean;
  hasSlotChildren: (children: ReactNode) => boolean;
  parse: (children: ReactNode) => TParsed;
  merge?: (props: TProps, parsed: TParsed) => TMerged;
  partitionNonSlots?: boolean;
};

export type UseCompoundSlotsResult<TMerged extends Record<string, unknown>> = {
  mergedProps: TMerged;
  children: ReactNode | null;
  hasSlots: boolean;
};

export const useCompoundSlots = <
  TProps extends { children?: ReactNode },
  TParsed extends Partial<TProps>,
  TMerged extends Omit<TProps, 'children'> = Omit<TProps, 'children'>,
>({
  props,
  isSlotElement,
  hasSlotChildren,
  parse,
  merge = mergePropsWithSlots as (
    componentProps: TProps,
    parsed: TParsed,
  ) => TMerged,
  partitionNonSlots = false,
}: UseCompoundSlotsOptions<
  TProps,
  TParsed,
  TMerged
>): UseCompoundSlotsResult<TMerged> => {
  return useMemo(() => {
    const { children, ...propsWithoutChildren } = props;

    if (
      children !== undefined &&
      children !== null &&
      hasSlotChildren(children)
    ) {
      let slotChildren: ReactNode[];
      let nonSlotChildren: ReactNode[] | null = null;

      if (partitionNonSlots) {
        const { matched, rest } = partitionChildren(children, isSlotElement);
        slotChildren = matched;
        nonSlotChildren = rest;
      } else {
        slotChildren = Children.toArray(children).filter(
          (child) => child !== null && child !== undefined,
        );
      }

      const parsed = parse(slotChildren);
      const mergedProps = merge(props, parsed);

      const partitionedChildren =
        nonSlotChildren && nonSlotChildren.length > 0 ? nonSlotChildren : null;

      return {
        mergedProps,
        children: partitionedChildren,
        hasSlots: true,
      };
    }

    const partitionedChildren =
      partitionNonSlots &&
      children !== undefined &&
      children !== null &&
      !hasSlotChildren(children)
        ? children
        : null;

    return {
      mergedProps: propsWithoutChildren as TMerged,
      children: partitionedChildren,
      hasSlots: false,
    };
  }, [hasSlotChildren, isSlotElement, merge, parse, partitionNonSlots, props]);
};
