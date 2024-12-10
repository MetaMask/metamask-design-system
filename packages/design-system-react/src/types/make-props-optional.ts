export type MakePropsOptional<Props> = {
  [K in keyof Props]?: Props[K];
};
