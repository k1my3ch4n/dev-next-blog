import { render, screen } from "@testing-library/react";
import LoadingPage from "./loading";

describe("LoadingPage", () => {
  it("exposes an accessible loading status", () => {
    render(<LoadingPage />);

    expect(
      screen.getByRole("status", { name: "페이지 로딩 중" }),
    ).toBeInTheDocument();
  });
});
