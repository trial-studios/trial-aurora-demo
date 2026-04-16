import React, { useMemo, useState } from "react";

export default function Header({
  navItems,
  lang,
  setLang,
  languages,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredLanguages = useMemo(() => {
    return languages.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [languages, search]);

  const activeLanguage =
    languages.find((item) => item.code === lang)?.label || "English";

  return (
    <header className="ts-header">
      <div className="ts-container ts-header-inner">
        <a href="/" className="ts-logo">
          AURORA
        </a>

        <nav className="ts-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ts-lang-wrap">
          <button
            className="ts-lang-btn"
            onClick={() => setOpen(!open)}
          >
            {activeLanguage}
          </button>

          {open && (
            <div className="ts-lang-dropdown">
              <input
                className="ts-lang-search"
                placeholder="Search language..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="ts-lang-list">
                {filteredLanguages.map((item) => (
                  <button
                    key={item.code}
                    className={`ts-lang-option ${
                      lang === item.code ? "active" : ""
                    }`}
                    onClick={() => {
                      setLang(item.code);
                      setOpen(false);
                      setSearch("");
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}