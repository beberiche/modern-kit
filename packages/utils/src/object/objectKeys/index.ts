import { ObjectKeys } from '@modern-kit/types';

export const objectKeys = <T extends Record<ObjectKeys<T>, T[keyof T]>>(
  obj: T
): ObjectKeys<T>[] => {
  return Object.keys(obj) as ObjectKeys<T>[];
};
