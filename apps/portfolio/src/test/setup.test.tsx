import { render, screen } from "@testing-library/react";

const SmokeTestComponent = () => (
  <button type="button">테스트 준비 완료</button>
);

describe("portfolio test environment", () => {
  it("renders React components with jest-dom matchers", () => {
    render(<SmokeTestComponent />);

    expect(
      screen.getByRole("button", { name: "테스트 준비 완료" }),
    ).toBeInTheDocument();
  });
});
