interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;

export function isRateLimited(key: string): boolean {
  const now = Date.now();

  if (!rateLimitMap.has(key)) {
    rateLimitMap.set(key, { timestamps: [] });
  }

  const record = rateLimitMap.get(key)!;

  record.timestamps = record.timestamps.filter(ts => now - ts < WINDOW_MS);

  if (record.timestamps.length >= MAX_REQUESTS) {
    return true;
  }

  record.timestamps.push(now);
  return false;
}
