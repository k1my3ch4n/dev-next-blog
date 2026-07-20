"use client";

import { useEffect, useCallback, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  titleId?: string;
}

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

const Modal = ({ isOpen, onClose, children, titleId }: ModalProps) => {
  const dialogRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const [showIndicator, setShowIndicator] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR,
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const isScrollable = el.scrollHeight > el.clientHeight;
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 20;
    setShowIndicator(isScrollable && !isAtBottom);
  }, []);

  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current =
        document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR,
      );
      (focusable && focusable.length > 0 ? focusable[0] : dialogRef.current)?.focus();

      requestAnimationFrame(checkScroll);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      if (isOpen) {
        previousActiveElementRef.current?.focus();
      }
    };
  }, [isOpen, handleKeyDown, checkScroll]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <article
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full max-w-modal max-h-[85vh] rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] shadow-[0_24px_64px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--ink)] font-bold flex items-center justify-center text-base hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          ✕
        </button>
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {children}
        </div>
        {showIndicator && (
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--surface-raised)] border border-[var(--border)] text-caption text-[var(--ink)] shadow-sm animate-bounce pointer-events-none"
          >
            <span>↓</span>
            <span>스크롤</span>
          </div>
        )}
      </article>
    </div>
  );
};

export default Modal;
