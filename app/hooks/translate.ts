export const toFable = (target: string): string => {
  return addEmDashToEnd(toZenkaku(target).replace(/\n/g, '───\n'));
};

export const toZenkaku = (target: string): string => {
  return target.replace(/\./g, '・');
};

export const addEmDashToEnd = (target: string): string => {
  return target + '───';
};
