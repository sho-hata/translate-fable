export const toFable = (target: string): string => {
  return target.replace('\n', '───\n') + '───';
};
