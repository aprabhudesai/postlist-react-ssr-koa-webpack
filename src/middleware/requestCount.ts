let requestCount = 0;

export default async (ctx, next) => {
  requestCount++;
  console.log('Current Requests:', requestCount);
  await next();
  requestCount--;
}