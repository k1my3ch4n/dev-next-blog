const observers = new Set<MockIntersectionObserver>();

const createEntry = (
  target: Element,
  isIntersecting: boolean,
): IntersectionObserverEntry => ({
  boundingClientRect: target.getBoundingClientRect(),
  intersectionRatio: isIntersecting ? 1 : 0,
  intersectionRect: target.getBoundingClientRect(),
  isIntersecting,
  rootBounds: null,
  target,
  time: performance.now(),
});

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: readonly number[];
  private readonly elements = new Set<Element>();

  constructor(
    private readonly callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {},
  ) {
    this.root = options.root ?? null;
    this.rootMargin = options.rootMargin ?? "0px";
    this.thresholds = Array.isArray(options.threshold)
      ? options.threshold
      : [options.threshold ?? 0];
    observers.add(this);
  }

  disconnect(): void {
    this.elements.clear();
    observers.delete(this);
  }

  observe(target: Element): void {
    this.elements.add(target);
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve(target: Element): void {
    this.elements.delete(target);
  }

  trigger(target: Element, isIntersecting: boolean): void {
    if (!this.elements.has(target)) return;

    this.callback([createEntry(target, isIntersecting)], this);
  }
}

export const intersectionObserverMock = {
  Constructor: MockIntersectionObserver,
  get instances(): readonly MockIntersectionObserver[] {
    return [...observers];
  },
  reset(): void {
    observers.forEach((observer) => observer.disconnect());
    observers.clear();
  },
  trigger(target: Element, isIntersecting = true): void {
    observers.forEach((observer) => observer.trigger(target, isIntersecting));
  },
};
