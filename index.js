
export default {
  async fetch(request) {
    const flaskURL = "https://mpu-4.onrender.com/activity";

    const url = new URL(request.url);
    const targetURL = flaskURL + url.search;

    return fetch(targetURL, {
      method: request.method,
      headers: request.headers,
      body: ["GET", "HEAD"].includes(request.method)
        ? undefined
        : request.body
    });
  }
};
