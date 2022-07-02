import { describe, expect, it } from 'vitest';
import { toFable } from './translate';

describe('translate', () => {
  it('一行', () => {
    const target = 'プロとして';
    const result = toFable(target);

    expect(result).toBe('プロとして───');
  });
  it('複数行', () => {
    const target = '素晴らしい\nプロやな';
    const result = toFable(target);

    expect(result).toBe('素晴らしい───\nプロやな───');
  });
});
