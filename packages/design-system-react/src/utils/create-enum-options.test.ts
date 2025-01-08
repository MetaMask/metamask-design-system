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

  it('should create formatted options from string enum', () => {
    const options = createEnumOptions(TestEnum, 'TestEnum');
    expect(options).toStrictEqual([
      'TestEnum.One',
      'TestEnum.Two',
      'TestEnum.Three',
    ]);
  });

  it('should create formatted options from numeric enum', () => {
    const options = createEnumOptions(NumericEnum, 'NumericEnum');
    expect(options).toStrictEqual([
      'NumericEnum.Zero',
      'NumericEnum.One',
      'NumericEnum.Two',
    ]);
  });

  it('should create formatted options from mixed enum', () => {
    const options = createEnumOptions(MixedEnum, 'MixedEnum');
    expect(options).toStrictEqual([
      'MixedEnum.String',
      'MixedEnum.Number',
      'MixedEnum.Auto',
    ]);
  });

  it('should handle empty enum', () => {
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
});
