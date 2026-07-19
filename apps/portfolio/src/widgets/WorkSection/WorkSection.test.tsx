import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WORKS } from "@shared/data";
import WorkSection from "./WorkSection";

describe("WorkSection", () => {
  it("filters the rendered work cards by type", async () => {
    const user = userEvent.setup();
    const openSourceWorks = WORKS.filter((work) => work.type === "openSource");
    const otherWorks = WORKS.filter((work) => work.type !== "openSource");
    render(<WorkSection />);

    await user.click(screen.getByRole("tab", { name: /^Open Source \d+$/ }));

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(
      openSourceWorks.length,
    );
    openSourceWorks.forEach((work) => {
      expect(
        screen.getByRole("heading", { level: 3, name: work.title }),
      ).toBeInTheDocument();
    });
    otherWorks.forEach((work) => {
      expect(
        screen.queryByRole("heading", { level: 3, name: work.title }),
      ).not.toBeInTheDocument();
    });
  });

  it("opens an internal work detail and closes it with Escape", async () => {
    const user = userEvent.setup();
    const internalWork = WORKS.find((work) => !work.externalUrl);

    expect(internalWork).toBeDefined();
    render(<WorkSection />);

    const workHeading = screen.getByRole("heading", {
      level: 3,
      name: internalWork?.title,
    });
    const workCard = workHeading.closest("article");

    expect(workCard).not.toBeNull();
    await user.click(workCard!);

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", {
        level: 2,
        name: internalWork?.title,
      }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("renders an external work as a safe new-tab link", () => {
    const externalWork = WORKS.find((work) => work.externalUrl);

    expect(externalWork).toBeDefined();
    render(<WorkSection />);

    const workHeading = screen.getByRole("heading", {
      level: 3,
      name: externalWork?.title,
    });
    const workLink = workHeading.closest("a");

    expect(workLink).toHaveAttribute("href", externalWork?.externalUrl);
    expect(workLink).toHaveAttribute("target", "_blank");
    expect(workLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
