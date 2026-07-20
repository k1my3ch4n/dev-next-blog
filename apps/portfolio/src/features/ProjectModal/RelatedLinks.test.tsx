import { render, screen } from "@testing-library/react";
import type { WorkLink } from "@shared/data";
import RelatedLinks from "./RelatedLinks";

const link: WorkLink = { label: "README", url: "https://example.com/readme" };

describe("RelatedLinks", () => {
  it("renders nothing when there are no links", () => {
    const { container } = render(<RelatedLinks links={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders a safe external link for each entry when links exist", () => {
    render(<RelatedLinks links={[link]} />);

    const renderedLink = screen.getByRole("link", { name: /README/ });
    expect(renderedLink).toHaveAttribute("href", link.url);
    expect(renderedLink).toHaveAttribute("target", "_blank");
    expect(renderedLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
