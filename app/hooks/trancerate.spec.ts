import { describe, expect, it } from 'vitest';
import { toFable, toZenkaku } from './translate';

describe('toFable', () => {
  it('一行', () => {
    expect(toFable('プロとして')).toBe('プロとして───');
  });
  it('複数行', () => {
    expect(toFable('素晴らしい...\nプロやな')).toBe(
      '素晴らしい・・・───\nプロやな───'
    );
  });
});

describe('toZenkaku', () => {
  it('三点リーダ', () => {
    expect(toZenkaku('...')).toBe('・・・');
  });
});
