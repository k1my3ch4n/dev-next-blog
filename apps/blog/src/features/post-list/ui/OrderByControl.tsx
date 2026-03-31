type OrderBy = "DESC" | "ASC";

interface OrderByControlProps {
  count: number;
  orderBy: OrderBy;
  onOrderChange: (orderBy: OrderBy) => void;
}

const OrderByControl = ({
  count,
  orderBy,
  onOrderChange,
}: OrderByControlProps) => (
  <div className="flex justify-between items-center mb-6">
    <p className="text-xs font-medium text-[var(--ink-muted)]">{count} posts</p>
    <nav className="flex items-center gap-3" aria-label="정렬">
      <button
        className={`text-sm bg-transparent border-none cursor-pointer ${orderBy === "DESC" ? "font-bold text-[var(--ink)]" : "text-[var(--ink-muted)]"}`}
        onClick={() => onOrderChange("DESC")}
        aria-pressed={orderBy === "DESC"}
      >
        최신 순
      </button>
      <span className="text-[var(--ink-muted)]">/</span>
      <button
        className={`text-sm bg-transparent border-none cursor-pointer ${orderBy === "ASC" ? "font-bold text-[var(--ink)]" : "text-[var(--ink-muted)]"}`}
        onClick={() => onOrderChange("ASC")}
        aria-pressed={orderBy === "ASC"}
      >
        오래된 순
      </button>
    </nav>
  </div>
);

export default OrderByControl;
