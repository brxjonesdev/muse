const MIN_INTERVAL = 1000;

let nextAvailableTime = 0;
let queue = Promise.resolve();

export function musicBrainzRateLimit(): Promise<void> {
  const request = queue.then(async () => {
    const now = Date.now();
    const waitTime = Math.max(0, nextAvailableTime - now);

    if (waitTime > 0) {
      await new Promise((resolve) => {
        setTimeout(resolve, waitTime);
      });
    }

    nextAvailableTime = Date.now() + MIN_INTERVAL;
  });

  queue = request.catch(() => {});

  return request;
}