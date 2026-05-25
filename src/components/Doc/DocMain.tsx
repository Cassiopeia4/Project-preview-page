import { useProjectData } from "../../contexts/DataContext.tsx";
import { Loading } from "../Loading/Loading.tsx";

import './DocMain.css'

export const DocMain = () => {

    const projectData = useProjectData();

    if(!projectData) return <Loading />;

    return (
        <section className="section hero">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 className="h2">Dokumentacja Projektu</h2>
                    <p className="text-secondary">
                        {projectData.documentation.description}
                    </p>
                </div>

                <div className="doc-placeholder fade-in-up ">
                    <div className="doc-placeholder-icon">
                        📄
                    </div>
                    <h3 className="h3 mb-md">Dokumentacja w przygotowaniu</h3>
                    <p className="text-secondary mb-lg">
                        Ta sekcja będzie systematycznie uzupełniana w trakcie realizacji projektu.
                        Znajdziesz tutaj kompletną dokumentację techniczną, instrukcje użytkownika oraz przewodniki wdrożeniowy.
                    </p>

                    <div className="doc-sections">
                        {projectData.documentation.sections.map((section, index) => (
                            <div key={index} className="doc-section-item">
                                <h4 className="small" style={{
                                    fontWeight: '600',
                                    color: 'var(--text-primary)',
                                    marginBottom: '4px'
                                }}>
                                    {section.title}
                                </h4>
                                
                                {/* Warunkowe renderowanie pobierania lub tekstu zastępczego */}
                                {section.file ? (
                                    <a 
                                        href={section.file} 
                                        download={`${section.title.replace(/\s+/g, '_')}.pdf`}
                                        target="_blank" 
                                        className="small" 
                                        style={{ 
                                            color: 'var(--text-primary)', 
                                            textDecoration: 'underline',
                                            cursor: 'pointer',
                                            fontWeight: '500'
                                        }}
                                    >
                                        Pobierz
                                    </a>
                                ) : (
                                    <p className="small" style={{ color: 'var(--text-secondary)' }}>
                                        Wkrótce dostępne
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}