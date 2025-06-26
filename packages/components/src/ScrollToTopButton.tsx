"use client";

import { useScrollToTop } from "@repo/hooks";

const ScrollToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-[20px] right-[20px] px-[20px] py-[10px] cursor-pointer rounded-[40px] shadow-inner-border"
          onClick={scrollToTop}
        >
          맨 위로
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
