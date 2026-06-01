export const pickProp = <T>(
  propValue: T | undefined,
  slotValue: T | undefined,
): T | undefined => (propValue !== undefined ? propValue : slotValue);

export const mergePropsWithSlots = <TProps extends Record<string, unknown>>(
  props: TProps,
  slotProps: Partial<TProps>,
): Omit<TProps, 'children'> => {
  const { children: _children, ...rest } = props;
  const merged = { ...rest } as Omit<TProps, 'children'>;

  for (const key of Object.keys(slotProps)) {
    if (key === 'children') {
      continue;
    }

    const propKey = key as keyof typeof rest;
    (merged as Record<string, unknown>)[key] = pickProp(
      rest[propKey],
      slotProps[propKey as keyof TProps],
    );
  }

  return merged;
};
