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
  const { children, ...propsWithoutChildren } = props;

  return useMemo(() => {
    if (
      children !== undefined &&
      children !== null &&
      hasSlotChildren(children)
    ) {
      const slotChildren = partitionNonSlots
        ? partitionChildren(children, isSlotElement).matched
        : Children.toArray(children).filter(
            (child) => child !== null && child !== undefined,
          );

      const parsed = parse(slotChildren);
      const mergedProps = merge(props, parsed);

      const partitionedChildren = partitionNonSlots
        ? (() => {
            const { rest } = partitionChildren(children, isSlotElement);
            return rest.length > 0 ? rest : null;
          })()
        : null;

      return {
        mergedProps: mergedProps,
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
  }, [
    children,
    hasSlotChildren,
    isSlotElement,
    merge,
    parse,
    partitionNonSlots,
    props,
    propsWithoutChildren,
  ]);
};
