import PageHeader from "@/components/PageHeader";
import LinkedInIcon from "@/icons/LinkedInIcon";
import EmailIcon from "@/icons/EmailIcon";

export default function Contact() {
    return (
        <main>
            <PageHeader title="CONTACT" />

            <section className="contact">
                <div className="contact-intro">
                    <p>
                        Interested in connecting, talking games, or exploring what’s next? 
                        Feel free to reach out through email or connect with me on LinkedIn.
                    </p>
                </div>

                <div className="contact-info">
                    <a
                        className="contact-item border"
                        href="mailto:kaiden.zapanta@gmail.com"
                    >
                        <span className="contact-icon">
                            <EmailIcon />
                        </span>

                        <div>
                            <h2>EMAIL</h2>
                            <p>kaiden.zapanta@gmail.com</p>
                        </div>
                    </a>

                    <a
                        className="contact-item border"
                        href="https://linkedin.com/in/kaidenzapanta/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="contact-icon">
                            <LinkedInIcon />
                        </span>

                        <div>
                            <h2>LINKEDIN</h2>
                            <p>linkedin.com/in/kaidenzapanta</p>
                        </div>
                    </a>
                </div>
            </section>
        </main>
    );
}

