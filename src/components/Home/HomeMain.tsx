import {useProjectData} from "../../contexts/DataContext.tsx";
import {CheckIcon} from "../../assets/Icons/CheckIcon.tsx";

import './HomeMain.css'
import {Loading} from "../Loading/Loading.tsx";

export const HomeMain = () => {

    const projectData = useProjectData();

    if(!projectData) return <Loading />;

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content fade-in-up mb-xl">
                    <h1 className="h1 hero-title" dangerouslySetInnerHTML={{ __html: projectData.project.name }}></h1>
                    <p className="body hero-subtitle" >{projectData.project.subtitle}</p>
                    <p className="text-secondary mb-xl" dangerouslySetInnerHTML={{ __html: projectData.project.description }}></p>

                    <div className="features-list">
                        {projectData.project.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <CheckIcon/>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}