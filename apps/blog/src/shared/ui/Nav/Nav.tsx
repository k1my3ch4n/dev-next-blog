"use client";

import { usePathname } from "next/navigation";
import { ThemeToggle } from "@repo/components";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

const Nav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const linkClass = (active: boolean) =>
    `relative text-[0.8125rem] font-medium tracking-wide py-2 no-underline transition-colors after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-0.5 after:bg-[var(--accent)] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.4,0,0.2,1)] ${
      active
        ? "text-[var(--accent)] after:scale-x-100"
        : "text-[var(--ink-muted)] hover:text-[var(--ink)] after:scale-x-0"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] backdrop-blur-[16px] backdrop-saturate-[180%] border-b border-[var(--border)]">
      <div className="max-w-[1060px] mx-auto px-5 flex items-center justify-between h-14">
        <a
          href="/"
          className="font-bold text-sm tracking-tight text-[var(--ink)] no-underline"
        >
          k<span className="text-[var(--accent)]">1</span>my
          <span className="text-[var(--accent)]">3</span>ch
          <span className="text-[var(--accent)]">4</span>n
        </a>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={linkClass(isActive(link.href))}
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
      <div className="sm:hidden overflow-x-auto border-t border-[var(--border)]">
        <div className="flex gap-4 px-5 py-2 min-w-max">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass(isActive(link.href))}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
