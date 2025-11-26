import {Loading} from "../Loading/Loading.tsx";
import {useProjectData} from "../../contexts/DataContext.tsx";
import {useState} from "react";

import './contact.css'

export const ContactMain = () => {
    const [newsletterEmail, setNewsletterEmail] = useState<string>("");

    const [formName, setFormName] = useState<string>("");
    const [formEmail, setFormEmail] = useState<string>("");
    const [formMessage, setFormMessage] = useState<string>("");

    const projectData = useProjectData();

    if(!projectData) return <Loading />;

    const handleSubmitEmail= () => {
        console.log(newsletterEmail);
    };
    const handleSubmitForm = () => {
        console.log({formName, formEmail, formMessage});
    };

    return (
        <section className="section contact-main">
            <div className="text-center mb-xl">
                <h2 className="h2">Kontakt</h2>
                <p className="text-secondary"
                   dangerouslySetInnerHTML={{__html: `Chcesz wiedzieć więcej o ${projectData.project.name} ?`}}>
                </p>
            </div>
            <div className="container fade-in-up">
                <div>
                    <h3>Chcesz otrzymywać powiadomienia o postępach w projekcie?</h3>
                    <form onSubmit={handleSubmitEmail}>
                        <input
                            type="email"
                            placeholder="Twój email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                        />
                        <button type="submit" className='work-in-progress-btn' disabled>Zapisz się</button>
                    </form>
                </div>

                <div className="contact-form-wrapper">
                    <h3>Napisz do nas</h3>
                    <form onSubmit={handleSubmitForm}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Imię"
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formEmail}
                                onChange={(e) => setFormEmail(e.target.value)}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Wiadomość"
                            rows={5}
                            value={formMessage}
                            onChange={(e) => setFormMessage(e.target.value)}
                        />
                        <button type="submit" className='work-in-progress-btn' disabled>Wyślij</button>
                    </form>
                </div>

                <div className='contact-info-text'>
                    <h3>Dane kontaktowe</h3>
                    <div>
                        <p><strong>Email:</strong> fkaniewski.web@gmail.com</p>
                        <p><strong>Telefon:</strong> +48 604 947 826</p>
                        <p>
                            <strong>Adres:</strong> Wydział Matematyki i Informatyki UMK,<br/>
                            ul. Fryderyka Chopina 12/18, 87-100 Toruń
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}