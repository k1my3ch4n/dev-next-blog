"use client";

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterTabsProps {
  options: FilterOption[];
  selected: string;
  onSelect: (value: string) => void;
  ariaLabel: string;
}

const FilterTabs = ({
  options,
  selected,
  onSelect,
  ariaLabel,
}: FilterTabsProps) => {
  return (
    <nav className="flex flex-wrap gap-1.5" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`filter-btn ${selected === option.value ? "active" : ""}`}
          aria-pressed={selected === option.value}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
        </button>
      ))}
    </nav>
  );
};

export default FilterTabs;
