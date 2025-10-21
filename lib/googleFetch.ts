export async function googleFetch(url: string, options: RequestInit = {}, timeoutMs = 15000, retries = 1) {
  const attempt = async (attemptNo: number): Promise<Response> => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(id);
      if (!res.ok) throw new Error(`Non-OK response: ${res.status}`);
      return res;
    } catch (err) {
      clearTimeout(id);
      if (attemptNo <= retries) {
        // small backoff
        await new Promise((r) => setTimeout(r, 500 * attemptNo));
        return attempt(attemptNo + 1);
      }
      throw err;
    }
  };

  return attempt(0);
}
