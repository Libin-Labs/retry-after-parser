export function parseRetryAfter(value: string, now = Date.now()): number {
  if (typeof value !== 'string' || !Number.isFinite(now))
    throw new TypeError('Expected text and finite reference time');
  const text = value.trim();
  if (/^\d+$/.test(text)) {
    const seconds = Number(text);
    if (!Number.isSafeInteger(seconds) || seconds > Number.MAX_SAFE_INTEGER / 1000)
      throw new RangeError('Delay too large');
    return seconds * 1000;
  }
  const parsed = Date.parse(text);
  if (!Number.isFinite(parsed)) throw new RangeError('Invalid Retry-After value');
  return Math.max(0, parsed - now);
}
