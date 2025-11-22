import {useProjectData} from "../../contexts/DataContext.tsx";
import {Loading} from "../Loading/Loading.tsx";
import {CheckIcon} from "../../assets/Icons/CheckIcon.tsx";

import './work-main.css'

export const WorkMain = () => {

    const projectData = useProjectData();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if(!projectData) return <Loading />;

    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-xl">
                    <h2 className="h2">Przebieg Prac</h2>
                    <p className="text-secondary">
                        Harmonogram spotkań i wykonanych zadań w ramach projektu
                    </p>
                </div>

                <div className="timeline">
                    {projectData.meetings.map((meeting) => (
                        <div key={meeting.id} className="timeline-item fade-in-up">
                            <div className="timeline-date">
                                <div className="small">{formatDate(meeting.date)}</div>
                            </div>

                            <div className="timeline-marker"></div>

                            <div className="timeline-content">
                                <h3 className="h3 timeline-title">{meeting.title}</h3>
                                <p className="text-secondary mb-md">
                                    Czas trwania: {meeting.duration}
                                </p>
                                <ul className="timeline-tasks">
                                    {meeting.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="task-item">
                                            <CheckIcon/>
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}