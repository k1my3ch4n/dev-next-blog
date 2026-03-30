"use client";

import { useEffect, useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

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
      <div className="relative w-full max-w-[680px] max-h-[85vh] overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--surface-raised)] shadow-[0_24px_64px_rgba(0,0,0,0.2)]">
        <button
          onClick={onClose}
          className="sticky top-3.5 float-right mr-3.5 z-10 w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] text-[var(--ink-muted)] flex items-center justify-center text-sm hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
