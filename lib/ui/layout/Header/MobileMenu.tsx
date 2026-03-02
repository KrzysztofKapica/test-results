"use client";

import { useState } from "react";
import SideNav from "./SideNav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden relative h-10 w-10 rounded-lg  focus:outline-none z-50 cursor-pointer"
      >
        <span
          className={
            "absolute left-1/2 top-1/2 block h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 bg-black transition-all duration-200 before:content-[''] before:absolute before:h-0.5 before:w-7 before:left-1/2 before:-translate-x-1/2 before:bg-black before:transition-all before:duration-200 after:content-[''] after:absolute after:h-0.5 after:w-7 after:left-1/2 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-200    before:-translate-y-2 after:translate-y-2 before:rotate-0 after:rotate-0"
          }
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <SideNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
