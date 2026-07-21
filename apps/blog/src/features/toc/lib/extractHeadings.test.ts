import extractHeadings from "./extractHeadings";

describe("extractHeadings", () => {
  it("extracts only level two and three headings", () => {
    const markdown = [
      "# Page title",
      "## Section",
      "### Detail",
      "#### Ignored",
    ].join("\n");

    expect(extractHeadings(markdown)).toEqual([
      { id: "section", text: "Section", depth: 2 },
      { id: "detail", text: "Detail", depth: 3 },
    ]);
  });

  it("creates GitHub-compatible unique slugs for duplicate headings", () => {
    const markdown = ["## Repeated Heading", "## Repeated Heading", "### Repeated Heading"].join("\n");

    expect(extractHeadings(markdown)).toEqual([
      { id: "repeated-heading", text: "Repeated Heading", depth: 2 },
      { id: "repeated-heading-1", text: "Repeated Heading", depth: 2 },
      { id: "repeated-heading-2", text: "Repeated Heading", depth: 3 },
    ]);
  });

  it("uses the visible text from inline markdown", () => {
    expect(extractHeadings("## **Bold** and `code`")).toEqual([
      { id: "bold-and-code", text: "Bold and code", depth: 2 },
    ]);
  });

  it("returns an empty list when no supported headings exist", () => {
    expect(extractHeadings("Paragraph only")).toEqual([]);
  });
});
