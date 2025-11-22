import {useTheme} from "../../hooks/useTheme.ts";
import './theme-button.css'

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="theme-switch">
            <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />
            <span className="slider">
                <span className="sun"></span>
                <span className="moon"></span>
            </span>
        </label>
    );
}
