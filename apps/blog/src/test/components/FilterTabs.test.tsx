import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterTabs } from "@repo/components";

describe("FilterTabs", () => {
  it("marks the selected option as pressed", () => {
    render(
      <FilterTabs
        options={[
          { value: "all", label: "All" },
          { value: "react", label: "React" },
        ]}
        value="react"
        onChange={jest.fn()}
        ariaLabel="Post filters"
      />,
    );

    expect(
      screen.getByRole("navigation", { name: "Post filters" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "React" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("reports the selected value when an option is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <FilterTabs
        options={[{ value: "react", label: "React" }]}
        value=""
        onChange={onSelect}
        ariaLabel="Post filters"
      />,
    );

    await user.click(screen.getByRole("button", { name: "React" }));

    expect(onSelect).toHaveBeenCalledWith("react");
  });
});
