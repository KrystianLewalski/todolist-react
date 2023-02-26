import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <header className="section__legend">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;