import { Container } from "@mui/material";
import { dateToYMD } from "../utils/dates";
import AddDay from "./AddDay";
import Month from "./Month";

const Home = () => {
    const today = new Date();
    const {day, month, year} = dateToYMD(today);

    return (
        <Container maxWidth="md">
            <Month
                month={month}
                year={year}
            />
            <AddDay
                day={day}
                month={month}
                year={year}
            />
        </Container>
    )
}

export default Home
