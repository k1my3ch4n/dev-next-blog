import { render, screen } from "@testing-library/react";
import NotFoundPage from "./not-found";

describe("NotFoundPage", () => {
  it("shows the not-found message with a link back home", () => {
    render(<NotFoundPage />);

    expect(
      screen.getByRole("heading", { name: "페이지를 찾을 수 없습니다." }),
    ).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: "홈으로 돌아가기" });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
