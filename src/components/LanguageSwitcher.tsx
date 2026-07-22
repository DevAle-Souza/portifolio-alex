"use client";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-[100] flex items-center rounded-full border border-white/20 bg-black/40 p-1 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-bold transition-colors cursor-pointer",
          language === "en"
            ? "bg-white text-black"
            : "text-white/70 hover:text-white"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-bold transition-colors cursor-pointer",
          language === "pt"
            ? "bg-white text-black"
            : "text-white/70 hover:text-white"
        )}
      >
        PT
      </button>
    </div>
  );
};
