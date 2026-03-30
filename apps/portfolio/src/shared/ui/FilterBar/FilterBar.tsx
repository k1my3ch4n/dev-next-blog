"use client";

interface FilterOption<T extends string> {
  value: T;
  label: string;
}

interface FilterBarProps<T extends string> {
  options: FilterOption<T>[];
  activeValue: T;
  onChange: (value: T) => void;
}

const FilterBar = <T extends string>({
  options,
  activeValue,
  onChange,
}: FilterBarProps<T>) => {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1">
      {options.map((option) => (
        <button
          key={option.value}
          className={`text-[0.8125rem] font-medium px-4 py-1.5 rounded-full border transition-colors whitespace-nowrap ${
            activeValue === option.value
              ? "bg-[var(--accent)] text-white border-[var(--accent)]"
              : "border-[var(--border)] text-[var(--ink-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
