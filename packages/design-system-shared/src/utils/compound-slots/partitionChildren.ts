import { Children } from 'react';
import type { ReactNode } from 'react';

export type PartitionedChildren = {
  matched: ReactNode[];
  rest: ReactNode[];
};

export const partitionChildren = (
  children: ReactNode,
  predicate: (child: ReactNode) => boolean,
): PartitionedChildren => {
  const matched: ReactNode[] = [];
  const rest: ReactNode[] = [];

  Children.toArray(children).forEach((child) => {
    if (predicate(child)) {
      matched.push(child);
      return;
    }

    rest.push(child);
  });

  return { matched, rest };
};
