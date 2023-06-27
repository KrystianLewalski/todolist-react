import { AppSection, Header, SecondHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <AppSection>
        <Header>
            <SecondHeader>
                {title}
            </SecondHeader>
            {extraHeaderContent}
        </Header>
        {body}
    </AppSection>
);

export default Section;