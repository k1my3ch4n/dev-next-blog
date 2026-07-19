import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { WorkDetail } from "@shared/data";
import WorkFilter from "./WorkFilter";

const createWork = (id: string, type: WorkDetail["type"]): WorkDetail => ({
  id,
  title: `${id} title`,
  description: `${id} description`,
  shortDescription: `${id} short description`,
  cardTypo: { main: id, sub: type },
  type,
  period: "2026.01 — 2026.02",
  techStack: ["React"],
  stories: [],
  gradient: "linear-gradient(#000, #fff)",
  relatedLinks: [],
});

const works = [
  createWork("career-work", "career"),
  createWork("personal-work", "personal"),
  createWork("open-source-work", "openSource"),
];

const renderWorkFilter = () =>
  render(
    <WorkFilter works={works}>
      {(filteredWorks) => (
        <ul aria-label="작업 목록">
          {filteredWorks.map((work) => (
            <li key={work.id}>{work.title}</li>
          ))}
        </ul>
      )}
    </WorkFilter>,
  );

describe("WorkFilter", () => {
  it("shows the count for each filter and all works initially", () => {
    renderWorkFilter();

    expect(screen.getByRole("tab", { name: /^전체 3$/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: /^Career 1$/ })).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /^Personal 1$/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /^Open Source 1$/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /^Hackathon 0$/ }),
    ).toBeInTheDocument();
    expect(
      within(screen.getByRole("list", { name: "작업 목록" })).getAllByRole(
        "listitem",
      ),
    ).toHaveLength(3);
  });

  it("shows only works matching the selected filter", async () => {
    const user = userEvent.setup();
    renderWorkFilter();

    await user.click(screen.getByRole("tab", { name: /^Personal 1$/ }));

    const workList = within(screen.getByRole("list", { name: "작업 목록" }));
    expect(workList.getAllByRole("listitem")).toHaveLength(1);
    expect(workList.getByText("personal-work title")).toBeInTheDocument();
    expect(workList.queryByText("career-work title")).not.toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /^Personal 1$/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
