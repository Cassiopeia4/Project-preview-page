import { useEffect, useState } from "react";

export function useTheme() {
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || system
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(prev => (prev === "light" ? "dark" : "light"));

    return { theme, toggleTheme };
}