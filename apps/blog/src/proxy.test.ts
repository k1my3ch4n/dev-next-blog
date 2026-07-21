/** @jest-environment node */

import { NextRequest } from "next/server";
import proxy from "./proxy";

const request = (pathname: string) =>
  new NextRequest(`https://blog.k1my3ch4n.xyz${pathname}`);

describe("proxy", () => {
  it.each(["/", "/blog", "/showcase", "/blog/post-key"])(
    "allows the public route %s",
    (pathname) => {
      const response = proxy(request(pathname));

      expect(response.headers.get("x-middleware-next")).toBe("1");
    },
  );

  it.each(["/_next/static/chunk.js", "/favicon.ico", "/feed.xml", "/api/health"])(
    "allows framework and asset route %s",
    (pathname) => {
      const response = proxy(request(pathname));

      expect(response.headers.get("x-middleware-next")).toBe("1");
    },
  );

  it("redirects an unknown application route home", () => {
    const response = proxy(request("/private"));

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(
      "https://blog.k1my3ch4n.xyz/",
    );
  });
});
