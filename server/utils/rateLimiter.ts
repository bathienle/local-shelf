interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_REQUESTS = 5;

export const isRateLimited = (ip: string): boolean => {
  const now = Date.now();

  const record = rateLimitMap.get(ip) || { timestamps: [] };

  record.timestamps = record.timestamps.filter(ts => now - ts < WINDOW_MS);

  if (record.timestamps.length >= MAX_REQUESTS) {
    return true;
  }

  record.timestamps.push(now);
  rateLimitMap.set(ip, record);

  return false;
};
