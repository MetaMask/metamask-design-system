import { createEnumOptions } from './create-enum-options';

describe('createEnumOptions', () => {
  enum TestEnum {
    One = 'one',
    Two = 'two',
    Three = 'three',
  }

  enum NumericEnum {
    Zero = 0,
    One = 1,
    Two = 2,
  }

  enum MixedEnum {
    String = 'string',
    Number = 123,
    Auto = 'auto',
  }

  it('should create formatted options from string enum with enum name', () => {
    const options = createEnumOptions(TestEnum, 'TestEnum');
    expect(options).toStrictEqual([
      'TestEnum.One',
      'TestEnum.Two',
      'TestEnum.Three',
    ]);
  });

  it('should create formatted options from numeric enum with enum name', () => {
    const options = createEnumOptions(NumericEnum, 'NumericEnum');
    expect(options).toStrictEqual([
      'NumericEnum.Zero',
      'NumericEnum.One',
      'NumericEnum.Two',
    ]);
  });

  it('should create formatted options from mixed enum with enum name', () => {
    const options = createEnumOptions(MixedEnum, 'MixedEnum');
    expect(options).toStrictEqual([
      'MixedEnum.String',
      'MixedEnum.Number',
      'MixedEnum.Auto',
    ]);
  });

  it('should handle empty enum with enum name', () => {
    enum EmptyEnum {}
    const options = createEnumOptions(EmptyEnum, 'EmptyEnum');
    expect(options).toStrictEqual([]);
  });

  it('should handle enum name with special characters', () => {
    const options = createEnumOptions(TestEnum, 'Test.Enum');
    expect(options).toStrictEqual([
      'Test.Enum.One',
      'Test.Enum.Two',
      'Test.Enum.Three',
    ]);
  });

  it('should show only keys when no enum name is provided for string enum', () => {
    const options = createEnumOptions(TestEnum);
    expect(options).toStrictEqual(['One', 'Two', 'Three']);
  });

  it('should show only keys when no enum name is provided for numeric enum', () => {
    const options = createEnumOptions(NumericEnum);
    expect(options).toStrictEqual(['Zero', 'One', 'Two']);
  });

  it('should show only keys when no enum name is provided for mixed enum', () => {
    const options = createEnumOptions(MixedEnum);
    expect(options).toStrictEqual(['String', 'Number', 'Auto']);
  });

  it('should return empty array for empty enum when no enum name is provided', () => {
    enum EmptyEnum {}
    const options = createEnumOptions(EmptyEnum);
    expect(options).toStrictEqual([]);
  });
});
