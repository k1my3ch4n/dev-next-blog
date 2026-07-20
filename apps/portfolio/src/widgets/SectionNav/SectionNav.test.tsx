import { act, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@repo/components";
import { NAV_SECTIONS } from "@shared/data";
import { intersectionObserverMock } from "@/test/mocks/intersectionObserver";
import SectionNav from "./SectionNav";

describe("SectionNav", () => {
  beforeEach(() => {
    NAV_SECTIONS.forEach((section) => {
      const el = document.createElement("section");
      el.id = section.id;
      document.body.appendChild(el);
    });
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("marks the intersecting section's nav link as current", () => {
    render(
      <ThemeProvider>
        <SectionNav />
      </ThemeProvider>,
    );

    const accomplishmentsSection = document.getElementById("accomplishments");
    expect(accomplishmentsSection).not.toBeNull();

    act(() => {
      intersectionObserverMock.trigger(
        accomplishmentsSection as HTMLElement,
        true,
      );
    });

    const currentLinks = screen.getAllByRole("link", { current: true });
    expect(currentLinks.length).toBeGreaterThan(0);
    currentLinks.forEach((link) => {
      expect(link).toHaveTextContent("핵심 성과");
    });

    screen
      .getAllByRole("link", { name: "메인" })
      .forEach((link) => expect(link).not.toHaveAttribute("aria-current"));
  });
});
