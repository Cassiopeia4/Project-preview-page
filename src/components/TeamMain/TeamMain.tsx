import {useProjectData} from "../../contexts/DataContext.tsx";
import {Loading} from "../Loading/Loading.tsx";

import './team-main.css'

export const TeamMain = () => {

    const projectData = useProjectData();

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase();
    };

    if(!projectData) return <Loading />;

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 className="h2">Nasz Zespół</h2>
                    <p className="text-secondary" dangerouslySetInnerHTML={{ __html: `Poznaj zespół pracujący nad ${projectData.project.name}` }}></p>
                </div>

                <div className="team-grid">
                    {projectData.team.map((member) => (
                        <div key={member.id} className="card team-member fade-in-up">
                            <div className="team-avatar">
                                {getInitials(member.name)}
                            </div>
                            <h3 className="h3 team-name">{member.name}</h3>
                            <div className="team-roles">
                                {member.roles.length === 0 && "brak ról."}
                                {member.roles.map((role: string, index: number) => (
                                    <span key={index} className="team-role"> {role} </span>
                                ))}
                            </div>
                            <p className="body team-description">{member.description.length > 0 ? member.description : "brak opisu."}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}