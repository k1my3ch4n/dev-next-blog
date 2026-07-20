import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ErrorPage from "./error";

describe("ErrorPage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("calls the reset callback when retrying", async () => {
    const user = userEvent.setup();
    const reset = jest.fn();

    render(<ErrorPage error={new Error("boom")} reset={reset} />);
    await user.click(screen.getByRole("button", { name: "다시 시도" }));

    expect(reset).toHaveBeenCalledTimes(1);
  });

  it("navigates home when the home action is clicked", async () => {
    const user = userEvent.setup();

    render(<ErrorPage error={new Error("boom")} reset={jest.fn()} />);
    await user.click(screen.getByRole("button", { name: "홈으로 이동" }));

    expect(window.location.href).toBe("http://localhost/");
  });
});
