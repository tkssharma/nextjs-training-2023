export function wait(seconds: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(() => {}), seconds * 1000)
  );
}
