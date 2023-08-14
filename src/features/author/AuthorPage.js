import Container from "../../common/Container"
import TitleHeader from "../../common/Header"
import Section from "../../common/Section"

export default () => (
    <Container>
        <TitleHeader title="O autorze" />
        <Section
            title="Krystian Lewalski"
            body={
                <>Brałem udział w kursie Frontend Developer od podstaw,
                    organizowanym przez YouCode.
                    Chciałbym stale rozwijać się w technologii React. </>
            }
        />
    </Container>
);