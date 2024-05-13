export const excludeFields = <T extends Record<string, any>, K extends keyof T>(
  objects: T,
  keys: K[],
): Omit<T, K> =>
  Object.fromEntries(
    Object.entries(objects).filter(([key]) => !keys.includes(key as K)),
  ) as Omit<T, K>;
