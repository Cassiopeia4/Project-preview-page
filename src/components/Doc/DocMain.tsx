import {useProjectData} from "../../contexts/DataContext.tsx";
import {Loading} from "../Loading/Loading.tsx";

import './DocMain.css'

export const DocMain = () => {

    const projectData = useProjectData();

    if(!projectData) return <Loading />;

    return (
        <section className="section fade-in-up hero">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 className="h2">Dokumentacja Projektu</h2>
                    <p className="text-secondary">
                        {projectData.documentation.description}
                    </p>
                </div>

                <div className="doc-placeholder">
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
                                    {section}
                                </h4>
                                <p className="small" style={{ color: 'var(--text-secondary)' }}>
                                    Wkrótce dostępne
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}