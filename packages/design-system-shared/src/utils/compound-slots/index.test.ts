import {
  createCompoundSlotSystem,
  mergePropsWithSlots,
  parseCompoundSlots,
  partitionChildren,
  pickProp,
  useCompoundSlots,
} from '.';

describe('compound-slots index', () => {
  it('re-exports compound slot utilities', () => {
    expect(createCompoundSlotSystem).toBeDefined();
    expect(mergePropsWithSlots).toBeDefined();
    expect(parseCompoundSlots).toBeDefined();
    expect(partitionChildren).toBeDefined();
    expect(pickProp).toBeDefined();
    expect(useCompoundSlots).toBeDefined();
  });
});
