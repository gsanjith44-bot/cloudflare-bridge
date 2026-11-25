
export default {
  async fetch(request) {
    const flaskBaseURL = "https://mpu-4.onrender.com";

    const url = new URL(request.url);
    const route = url.pathname;

    const allowedRoutes = [
      "/activity",
      "/location",
      "/device",
      "/walking",
      "/alert"
    ];

    if (!allowedRoutes.includes(route)) {
      return new Response("Invalid route", { status: 404 });
    }

    const targetURL = flaskBaseURL + route + url.search;

    return fetch(targetURL, {
      method: request.method,
      headers: request.headers,
      body: ["GET", "HEAD"].includes(request.method)
        ? undefined
        : request.body
    });
  }
};
