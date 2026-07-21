import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { PostData } from "@shared/types";
import TagProvider from "@features/tag-filter/context/TagProvider";
import TagList from "@features/tag-filter/ui/TagList";
import PostList from "./PostList";

const posts: PostData[] = [
  {
    id: 1,
    postKey: "first",
    externalUrl: null,
    title: "First post",
    tags: ["React"],
    cardTypo: { main: "First", sub: "React" },
  },
  {
    id: 2,
    postKey: "second",
    externalUrl: null,
    title: "Second post",
    tags: ["Testing"],
    cardTypo: { main: "Second", sub: "Testing" },
  },
  {
    id: 3,
    postKey: null,
    externalUrl: "https://example.com/external",
    title: "External post",
    tags: ["React", "Testing"],
    cardTypo: { main: "External", sub: "Article" },
  },
];

const renderPostList = () =>
  render(
    <TagProvider>
      <TagList tags={["React", "Testing"]} />
      <PostList posts={posts} />
    </TagProvider>,
  );

const renderedTitles = () =>
  screen
    .getAllByRole("article")
    .map((article) => within(article).getByRole("link").textContent);

describe("PostList", () => {
  it("shows all posts in descending order initially", () => {
    renderPostList();

    expect(screen.getByText("3", { selector: "span" })).toBeInTheDocument();
    expect(renderedTitles()).toEqual([
      expect.stringContaining("External post"),
      expect.stringContaining("Second post"),
      expect.stringContaining("First post"),
    ]);
    expect(screen.getByRole("button", { pressed: true })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("changes the post order", async () => {
    const user = userEvent.setup();
    renderPostList();

    const sortButtons = screen.getAllByRole("button").slice(-2);
    await user.click(sortButtons[1]);

    expect(renderedTitles()).toEqual([
      expect.stringContaining("First post"),
      expect.stringContaining("Second post"),
      expect.stringContaining("External post"),
    ]);
  });

  it("filters by a selected tag and clears the filter on a second click", async () => {
    const user = userEvent.setup();
    renderPostList();

    const reactFilter = screen.getByRole("button", { name: "React" });
    await user.click(reactFilter);

    expect(reactFilter).toHaveAttribute("aria-pressed", "true");
    expect(screen.getAllByRole("article")).toHaveLength(2);
    expect(screen.queryByText("Second post")).not.toBeInTheDocument();

    await user.click(reactFilter);

    expect(reactFilter).toHaveAttribute("aria-pressed", "false");
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });

  it("renders external posts as safe new-tab links", () => {
    renderPostList();

    const externalLink = screen.getByRole("link", { name: /External post/ });
    expect(externalLink).toHaveAttribute("href", "https://example.com/external");
    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
