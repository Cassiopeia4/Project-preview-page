import {useLocation, useNavigate} from "react-router-dom";

import './Header.css';
import {useProjectData} from "../../contexts/DataContext.tsx";
import {Loading} from "../Loading/Loading.tsx";

export const Header = () => {
    const navItems = [
        { name: '', label: 'O Projekcie' },
        { name: 'team', label: 'Zespół' },
        { name: 'work', label: 'Przebieg Prac' },
        { name: 'documentation', label: 'Dokumentacja' }
    ];

    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (sectionName: string) => {
        navigate("/"+sectionName);
    };

    const projectData = useProjectData();

    if(!projectData) return <Loading />;

    return (
        <header className="app-header">
            <nav className="navbar">
                <div className="navbar-content container">
                    <a href="/" className="logo"
                       onClick={(e) => {
                           e.preventDefault();
                           handleNavClick('');
                       }}
                       dangerouslySetInnerHTML={{ __html: projectData.project.name }}
                    ></a>
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={`#${item.name}`}
                                    className={`nav-link ${location.pathname.split('/')[1] === item.name ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.name);
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}