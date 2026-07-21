/** @jest-environment node */

import { getFileContents } from "./fileUtils";

describe("getFileContents", () => {
  it("reads an existing markdown post", async () => {
    const result = await getFileContents({ postKey: "blog-toc" });

    expect(result.isFound).toBe(true);
    expect(result.fileContents.length).toBeGreaterThan(0);
  });

  it("reports a missing post without throwing", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

    await expect(
      getFileContents({ postKey: "definitely-missing-post" }),
    ).resolves.toEqual({ fileContents: "", isFound: false });
    expect(consoleError).toHaveBeenCalledTimes(1);

    consoleError.mockRestore();
  });
});
