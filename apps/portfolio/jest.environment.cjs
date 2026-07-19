const { TestEnvironment: JSDOMEnvironment } = require("jest-environment-jsdom");

const nodeWebApiGlobals = {
  Blob: globalThis.Blob,
  BroadcastChannel: globalThis.BroadcastChannel,
  File: globalThis.File,
  FormData: globalThis.FormData,
  Headers: globalThis.Headers,
  ReadableStream: globalThis.ReadableStream,
  Request: globalThis.Request,
  Response: globalThis.Response,
  TextDecoder: globalThis.TextDecoder,
  TextEncoder: globalThis.TextEncoder,
  TransformStream: globalThis.TransformStream,
  fetch: globalThis.fetch,
};

module.exports = class PortfolioJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);

    for (const [name, value] of Object.entries(nodeWebApiGlobals)) {
      if (value !== undefined) {
        this.global[name] = value;
      }
    }
  }
};
