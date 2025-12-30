// 공통 텍스트 패딩 스타일
export const TEXT_PADDING = "py-[3px] px-[2px]";

// 리스트 아이콘/번호 스타일
export const LIST_MARKER = "flex items-center justify-center min-w-[24px] h-[30px] mr-[3px]";

// 공통 텍스트 크기
export const TEXT_SIZE = {
  xs: "text-[14px]",
  sm: "text-[16px]",
  base: "text-base",
  lg: "text-[20px]",
  xl: "text-[24px]",
  "2xl": "text-[30px]",
} as const;

// 헤더 마진 크기
export const HEADER_MARGIN = {
  l: "mt-[32px] mb-[4px]",
  m: "mt-[22px] mb-[1px]",
  s: "mt-[16px]",
} as const;

// 공통 간격
export const SPACING = {
  xs: "[3px]",
  sm: "[10px]",
  md: "[20px]",
  lg: "[30px]",
  xl: "[40px]",
} as const;

// 반응형 그리드 레이아웃
export const GRID_LAYOUT = {
  responsive2Cols: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
  responsive3Cols: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full",
} as const;
