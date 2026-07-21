import { act, fireEvent, render, screen } from "@testing-library/react";
import type { TocHeading } from "../lib/extractHeadings";
import TocSidebar from "./TocSidebar";

const headings: TocHeading[] = [
  { id: "first", text: "First", depth: 2 },
  { id: "second", text: "Second", depth: 3 },
  { id: "third", text: "Third", depth: 2 },
];

const appendHeading = (id: string, top: number) => {
  const heading = document.createElement("h2");
  heading.id = id;
  heading.getBoundingClientRect = jest.fn(() => ({
    bottom: top + 20,
    height: 20,
    left: 0,
    right: 100,
    top,
    width: 100,
    x: 0,
    y: top,
    toJSON: () => ({}),
  }));
  document.body.appendChild(heading);
  return heading;
};

describe("TocSidebar", () => {
  beforeEach(() => {
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 500,
    });
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 0,
      writable: true,
    });
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 1200,
    });
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders nothing when no headings exist", () => {
    const { container } = render(<TocSidebar headings={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders heading links and indents level three entries", () => {
    headings.forEach((heading, index) => appendHeading(heading.id, index * 200));
    render(<TocSidebar headings={headings} />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "First" })).toHaveAttribute(
      "href",
      "#first",
    );
    expect(screen.getByRole("link", { name: "Second" }).parentElement).toHaveClass(
      "pl-[14px]",
    );
  });

  it("updates the active heading while scrolling and selects the last at the bottom", () => {
    appendHeading("first", -200);
    appendHeading("second", 90);
    appendHeading("third", 300);
    render(<TocSidebar headings={headings} />);

    expect(screen.getByRole("link", { name: "Second" })).toHaveClass(
      "text-[var(--accent)]",
    );

    act(() => {
      Object.defineProperty(window, "scrollY", {
        configurable: true,
        value: 700,
      });
      fireEvent.scroll(window);
    });

    expect(screen.getByRole("link", { name: "Third" })).toHaveClass(
      "text-[var(--accent)]",
    );
  });
});
