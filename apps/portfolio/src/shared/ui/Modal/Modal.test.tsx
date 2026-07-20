import { useState } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

const ModalHarness = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        titleId="modal-title"
      >
        <h2 id="modal-title">모달 제목</h2>
        <p>모달 본문</p>
      </Modal>
    </>
  );
};

const openModal = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("button", { name: "모달 열기" }));
};

describe("Modal", () => {
  it("does not render the dialog while closed", () => {
    render(<ModalHarness />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("exposes an accessible name via aria-labelledby when open", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await openModal(user);

    expect(screen.getByRole("dialog", { name: "모달 제목" })).toBeInTheDocument();
  });

  it("closes when the close button is clicked", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await openModal(user);
    await user.click(screen.getByRole("button", { name: "닫기" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes when Escape is pressed", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await openModal(user);
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("closes on backdrop click but not on click inside the panel", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await openModal(user);

    const dialog = screen.getByRole("dialog");
    await user.click(dialog);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    const backdrop = dialog.parentElement as HTMLElement;
    await user.click(backdrop);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("locks body scroll while open and restores it on close", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    expect(document.body.style.overflow).toBe("");

    await openModal(user);
    expect(document.body.style.overflow).toBe("hidden");

    await user.keyboard("{Escape}");
    await waitFor(() => expect(document.body.style.overflow).toBe(""));
  });

  it("moves focus to the first focusable element on open and restores it to the trigger on close", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    const trigger = screen.getByRole("button", { name: "모달 열기" });
    await user.click(trigger);

    expect(screen.getByRole("button", { name: "닫기" })).toHaveFocus();

    await user.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it("toggles the scroll indicator based on scroll position", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await openModal(user);

    const scrollContainer = screen.getByText("모달 본문")
      .parentElement as HTMLElement;
    Object.defineProperty(scrollContainer, "scrollHeight", {
      value: 500,
      configurable: true,
    });
    Object.defineProperty(scrollContainer, "clientHeight", {
      value: 300,
      configurable: true,
    });
    Object.defineProperty(scrollContainer, "scrollTop", {
      value: 0,
      configurable: true,
    });

    fireEvent.scroll(scrollContainer);
    expect(screen.getByText("스크롤")).toBeInTheDocument();

    Object.defineProperty(scrollContainer, "scrollTop", {
      value: 200,
      configurable: true,
    });
    fireEvent.scroll(scrollContainer);
    expect(screen.queryByText("스크롤")).not.toBeInTheDocument();
  });

  it("traps Tab focus within the dialog, wrapping from the last to the first focusable element", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await openModal(user);

    const closeButton = screen.getByRole("button", { name: "닫기" });
    expect(closeButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(closeButton).toHaveFocus();

    await user.tab();
    expect(closeButton).toHaveFocus();
  });

  it("removes the keydown listener and resets body overflow on unmount", () => {
    const handleClose = jest.fn();
    const { unmount } = render(
      <Modal isOpen onClose={handleClose} titleId="unmount-title">
        <h2 id="unmount-title">Title</h2>
      </Modal>,
    );

    expect(document.body.style.overflow).toBe("hidden");

    unmount();

    expect(document.body.style.overflow).toBe("");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).not.toHaveBeenCalled();
  });
});
