import "@testing-library/jest-dom";
import { intersectionObserverMock } from "./src/test/mocks/intersectionObserver";
import { server } from "./src/test/mocks/server";

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();
  intersectionObserverMock.reset();
});

afterAll(() => {
  server.close();
});

Object.defineProperty(globalThis, "IntersectionObserver", {
  configurable: true,
  value: intersectionObserverMock.Constructor,
  writable: true,
});

if (!globalThis.requestAnimationFrame) {
  Object.defineProperty(globalThis, "requestAnimationFrame", {
    configurable: true,
    value: (callback: FrameRequestCallback) =>
      window.setTimeout(() => callback(performance.now()), 0),
    writable: true,
  });
}

if (!globalThis.cancelAnimationFrame) {
  Object.defineProperty(globalThis, "cancelAnimationFrame", {
    configurable: true,
    value: (handle: number) => window.clearTimeout(handle),
    writable: true,
  });
}

Object.defineProperty(window, "scrollTo", {
  configurable: true,
  value: jest.fn(),
  writable: true,
});
