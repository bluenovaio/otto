export async function wait(waitInMs: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, waitInMs);
  });
}
