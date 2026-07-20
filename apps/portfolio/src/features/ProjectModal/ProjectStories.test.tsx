import { render, screen } from "@testing-library/react";
import type { StoryPoint } from "@shared/data";
import ProjectStories from "./ProjectStories";

const story: StoryPoint = {
  title: "느린 빌드",
  problem: "빌드가 오래 걸렸다",
  solution: "캐시를 도입했다",
  extension: "다른 프로젝트에도 적용했다",
};

describe("ProjectStories", () => {
  it("renders nothing when there are no stories", () => {
    const { container } = render(<ProjectStories stories={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("renders a card for each story when stories exist", () => {
    render(<ProjectStories stories={[story]} />);

    expect(
      screen.getByRole("heading", { name: "문제 해결 과정" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: story.title }),
    ).toBeInTheDocument();
  });
});
