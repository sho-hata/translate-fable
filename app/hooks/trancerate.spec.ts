import { describe, expect, it } from 'vitest';
import { toFable, toZenkaku } from './translate';

describe('toFable', () => {
  it('一行', () => {
    expect(toFable('プロとして')).toBe('プロとして───');
  });
  it('複数行', () => {
    expect(toFable('あー...\n素晴らしい...\nプロやな')).toBe(
      'あー・・・───\n素晴らしい・・・───\nプロやな───'
    );
  });
  it('末尾が記号', () => {
    expect(toFable('あー...\n素晴らしい...\nプロやな。')).toBe(
      'あー・・・───\n素晴らしい・・・───\nプロやな。'
    );
  });
});

describe('toZenkaku', () => {
  it('三点リーダ', () => {
    expect(toZenkaku('...')).toBe('・・・');
  });
});
