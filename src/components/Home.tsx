import { Container } from "@mui/material";
import Month from "./Month";

const Home = () => {
    const today = new Date();


    return (
        <Container maxWidth="md">
            <Month
                month={today.getMonth()}
                year={today.getFullYear()}
            />
        </Container>
    )
}

export default Home
