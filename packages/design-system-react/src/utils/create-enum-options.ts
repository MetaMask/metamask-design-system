/**
 * Creates formatted options for Storybook controls from an enum
 * @param enumObj - The enum object to convert
 * @param enumName - Optional name of the enum to use as prefix (defaults to 'ButtonBaseSize' for button size enums)
 * @returns Array of formatted enum options (e.g., ["EnumName.Key1", "EnumName.Key2"])
 */
export const createEnumOptions = (enumObj: object, enumName = 'Enum') => {
  // Filter out the numeric keys (TypeScript adds reverse mappings for number enums)
  return Object.entries(enumObj)
    .filter(([key]) => isNaN(Number(key)))
    .map(([key]) => `${enumName}.${key}`);
};
