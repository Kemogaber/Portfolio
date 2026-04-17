import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDarkmode, setDarkMode] = useState(false);

  useEffect(() => {
    const StoredTheme = localStorage.getItem("theme");
    if (StoredTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);
  const ToggleTheme = () => {
    if (isDarkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={ToggleTheme}
      className={cn(
        "max-sm:hidden z-50 p-3 rounded-full transition-all duration-300",
        "bg-white/10 backdrop-blur-sm border border-white/20",
        "hover:bg-white/20 hover:border-white/30 hover:scale-110",
        "focus:outline-none focus:ring-2 focus:ring-white/50",
        "dark:bg-black/10 dark:border-black/20",
        "dark:hover:bg-black/20 dark:hover:border-black/30 dark:focus:ring-black/50",
      )}
    >
      {isDarkmode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
