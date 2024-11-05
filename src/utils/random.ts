export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomEnumValue<T extends object>(enumType: T): T[keyof T] {
  const values = Object.keys(enumType);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumType[enumKey as keyof typeof enumType];
}
