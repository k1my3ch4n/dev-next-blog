"use client";

export interface FilterOption<T extends string = string> {
  value: T;
  label: string;
  count?: number;
}

export interface FilterTabsProps<T extends string> {
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  mode?: "toggle" | "tabs";
}

const FilterTabs = <T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  mode = "toggle",
}: FilterTabsProps<T>) => {
  const buttons = options.map((option) => {
    const isSelected = value === option.value;

    return (
      <button
        key={option.value}
        type="button"
        role={mode === "tabs" ? "tab" : undefined}
        aria-selected={mode === "tabs" ? isSelected : undefined}
        aria-pressed={mode === "toggle" ? isSelected : undefined}
        className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap ${
          isSelected
            ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm dark:shadow-[0_0_8px_var(--accent-soft)]"
            : "border-[var(--border)] text-[var(--ink-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        }`}
        onClick={() => onChange(option.value)}
      >
        {option.label}
        {option.count !== undefined && (
          <span
            className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
              isSelected
                ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                : "text-[var(--ink-muted)]"
            }`}
          >
            {option.count}
          </span>
        )}
      </button>
    );
  });

  if (mode === "tabs") {
    return (
      <div
        className="flex gap-1.5 overflow-x-auto pb-1"
        role="tablist"
        aria-label={ariaLabel}
      >
        {buttons}
      </div>
    );
  }

  return (
    <nav className="flex flex-wrap gap-1.5" aria-label={ariaLabel}>
      {buttons}
    </nav>
  );
};

export default FilterTabs;
