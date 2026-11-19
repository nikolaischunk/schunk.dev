"use client";

import { useSyncExternalStore } from "react";
import Panel from "./Panel";
import Index from "./Index";

const designs = ["panel", "index"] as const;
type Design = (typeof designs)[number];

const KEY = "schunk.design";
const EVENT = "schunk:design";

function read(): Design {
  try {
    const v = localStorage.getItem(KEY);
    return designs.includes(v as Design) ? (v as Design) : "panel";
  } catch {
    return "panel";
  }
}

function write(d: Design) {
  try {
    localStorage.setItem(KEY, d);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

// Each icon is a small drawing of its layout.
const icons: Record<Design, React.ReactNode> = {
  panel: (
    <>
      <rect x="2.5" y="3.5" width="7" height="13" rx="1" fill="currentColor" />
      <rect x="2.5" y="3.5" width="15" height="13" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  index: (
    <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M3 5h14" />
      <path d="M3 10h11" />
      <path d="M3 15h13" />
    </g>
  ),
};

const labels: Record<Design, string> = {
  panel: "Panel layout",
  index: "Index layout",
};

function Switcher({ current }: { current: Design }) {
  return (
    <div
      role="group"
      aria-label="Page layout"
      className="fixed right-4 top-4 z-[200] flex gap-1 rounded-xl bg-black/80 p-1 shadow-lg backdrop-blur md:right-6 md:top-6"
    >
      {designs.map((d) => (
        <button
          key={d}
          type="button"
          aria-label={labels[d]}
          title={labels[d]}
          aria-pressed={current === d}
          onClick={() => write(d)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
            current === d ? "bg-accent text-black" : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
            {icons[d]}
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function Designs() {
  const design = useSyncExternalStore(subscribe, read, () => "panel" as Design);

  return (
    <>
      <Switcher current={design} />
      {design === "panel" && <Panel />}
      {design === "index" && <Index />}
    </>
  );
}
