import Container from "../../common/Container"
import TitleHeader from "../../common/Header"
import Section from "../../common/Section"

export default () => (
    <Container>
        <TitleHeader title="O autorze" />
        <Section
            title="Krystian Lewalski"
            body={
                <>Uwielbiam grać w różnego rodzaju gry. Interesuję się także 
                mechaniką oraz historią. Od końca poprzedniego roku do tego małego 
                grona dołączyło programowanie. </>
            }
        />
    </Container>
);