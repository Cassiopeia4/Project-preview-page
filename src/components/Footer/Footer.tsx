import logoDark from '/Logo-UMK-poziom-niebieskie.png';
import logoLight from '/Logo-UMK-poziom-białe.png';
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

import './footer.css'

export const Footer = () => {
    const [theme, setTheme] = useState(
        document.documentElement.getAttribute("data-theme") || "light"
    );

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const t = document.documentElement.getAttribute("data-theme");
            setTheme(t || "light");
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const navigate = useNavigate();

    const linkHandler = (sectionName: string) => {
        navigate("/"+sectionName);
    };

    return (
        <footer>
            <div className="img">
                <img
                    src={theme === "dark" ? logoLight : logoDark}
                    alt="Logo UMK"
                />
            </div>
            <h3>Zespół nr. 4</h3>
            <ul>
                <li><a onClick={e => {
                    e.preventDefault();
                    linkHandler("");
                }}>O Projekcie</a></li>
                <li><a onClick={e => {
                    e.preventDefault();
                    linkHandler("team")
                }}>Zespół</a></li>
                <li><a onClick={e => {
                    e.preventDefault();
                    linkHandler("work")
                }}>Przebieg prac</a></li>
                <li><a onClick={e =>{
                    e.preventDefault();
                    linkHandler("documentation")
                }}>Dokunentacja</a></li>
                <li><a onClick={e => {
                    e.preventDefault();
                    linkHandler("contact")
                }}>Kontakt</a></li>
            </ul>
        </footer>
    );
};
