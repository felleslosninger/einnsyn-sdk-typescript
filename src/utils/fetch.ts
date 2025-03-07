const MAX_API_RETRIES = 10;

const sleep = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

/**
 * Wrapper around fetch() that retries on 429 responses
 */
const fetchWrapper: typeof fetch = async (input, ...rest) => {
  let retries = 0;
  async function call(): Promise<Response> {
    // Requests can only be read once, so create a clone:
    const inputClone = input instanceof Request ? input.clone() : input;
    const response = await fetch(inputClone, ...rest);
    if (response.status === 429 && ++retries <= MAX_API_RETRIES) {
      await sleep(retries * 1000 + Math.random() * retries * 1000);
      return await call();
    }
    return response;
  }
  return await call();
};
export default fetchWrapper;
