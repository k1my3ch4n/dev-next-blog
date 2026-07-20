import { act, renderHook } from "@testing-library/react";
import { intersectionObserverMock } from "@/test/mocks/intersectionObserver";
import { useScrollSpy } from "./useScrollSpy";

const appendSection = (id: string): HTMLElement => {
  const section = document.createElement("div");
  section.id = id;
  document.body.appendChild(section);
  return section;
};

describe("useScrollSpy", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("returns the first section id as the initial active id", () => {
    appendSection("a");
    appendSection("b");

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ["a", "b"] }),
    );

    expect(result.current).toBe("a");
  });

  it("observes every existing section element", () => {
    const sectionA = appendSection("a");
    const sectionB = appendSection("b");

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ["a", "b"] }),
    );

    act(() => {
      intersectionObserverMock.trigger(sectionA, true);
    });
    expect(result.current).toBe("a");

    act(() => {
      intersectionObserverMock.trigger(sectionB, true);
    });
    expect(result.current).toBe("b");
  });

  it("passes a custom rootMargin to the observer", () => {
    appendSection("a");

    renderHook(() =>
      useScrollSpy({ sectionIds: ["a"], rootMargin: "-10% 0px -50% 0px" }),
    );

    expect(intersectionObserverMock.instances[0]?.rootMargin).toBe(
      "-10% 0px -50% 0px",
    );
  });

  it("disconnects the observer on unmount", () => {
    appendSection("a");

    const { unmount } = renderHook(() => useScrollSpy({ sectionIds: ["a"] }));
    expect(intersectionObserverMock.instances).toHaveLength(1);

    unmount();

    expect(intersectionObserverMock.instances).toHaveLength(0);
  });

  it("returns an empty string when no section ids are provided", () => {
    const { result } = renderHook(() => useScrollSpy({ sectionIds: [] }));

    expect(result.current).toBe("");
  });

  it("does nothing when no section elements exist", () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: ["missing"] }),
    );

    expect(result.current).toBe("missing");
    expect(intersectionObserverMock.instances).toHaveLength(0);
  });
});
