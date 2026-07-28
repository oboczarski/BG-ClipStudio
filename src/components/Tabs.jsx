import { useEffect, useId, useRef } from "react";

export default function Tabs({ tabs, activeTab, onChange }) {
  const tablistId = useId();
  const buttonRefs = useRef([]);

  useEffect(() => {
    const active = tabs.find((tab) => tab.id === activeTab);
    if (active) document.title = `${active.label} · CSS Surface Foundry`;
  }, [activeTab, tabs]);

  function handleKeyDown(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    onChange(tabs[nextIndex].id);
    buttonRefs.current[nextIndex]?.focus();
  }

  return (
    <nav className="tabs-shell" aria-label="Studio sections">
      <div className="tabs" role="tablist" id={tablistId}>
        {tabs.map((tab, index) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              className={`tab ${selected ? "tab--active" : ""}`}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onChange(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="tab__index">{String(index + 1).padStart(2, "0")}</span>
              <span>{tab.label}</span>
              {tab.count ? <small>{tab.count}</small> : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
