import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState('light')
    const colorTheme = theme === 'light' ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        const current = localStorage.getItem('theme');
        root.classList.add(current !== null ? current : 'light');
    }, [theme])

    return [colorTheme, setTheme];
}