import { useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setTheme, toggleTheme } from "../../redux/slices/themeSlice";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode) as Theme;

  const updateHtmlClass = (theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme: Theme = prefersDark ? "dark" : "light";
      dispatch(setTheme(defaultTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    updateHtmlClass(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle Theme"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
      type="button"
    >
    {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
}
