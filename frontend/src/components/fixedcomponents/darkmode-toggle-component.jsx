import { useState, useEffect } from "react"

export const DarkMode = () => {

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);


    return (
        <>
            <div className="flex w-fit text-[var(--headingColor)] items-center gap-2">
                Dark Mode
                <div className={`w-20 flex ${isDark ? 'justify-end' : 'justify-start'} bg-[var(--lightBackground)] rounded-full border-2 border-[var(--primaryColor)] !py-1 !px-2`}>
                    <button onClick={() => setIsDark(!isDark)} className={`w-10 !bg-[var(--primaryColor)] rounded-full border-2 border-[var(--primaryColor)] text- !p-0 text-center`}>
                        {isDark ? "OFF" : "ON"}
                    </button>
                </div>
            </div>
        </>
    )
}