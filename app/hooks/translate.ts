export const toFable = (target: string): string => {
  return toZenkaku(target).replace('\n', '───\n') + '───';
};

export const toZenkaku = (target: string): string => {
  return target.replace('...', '・・・');
};
