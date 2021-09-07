import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react"
import { dateToISO, getAllDaysInMonth, getBlankStartDays, getMonthTitle, Weekdays } from "../utils/dates";
import { makeStyles } from '@mui/styles';
import { CircleOutlined } from "@mui/icons-material";

const useStyles = makeStyles({
    calendar: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridAutoRows: 50
    },
    cell: {
        textAlign: 'center'
    }
});

interface IMonthProps {
    month: number;
    year: number;
}

const Month: FC<IMonthProps> = ({month, year}) => {
    const classes = useStyles();

    const blankDays = getBlankStartDays(month, year);
    const monthDays = getAllDaysInMonth(month, year)



    return (
        <div>
            <Typography textAlign="center" variant="h5" component="h2">
                {getMonthTitle(month, year)}
            </Typography>
            <Box className={classes.calendar}>
                {Weekdays.map(weekday => (
                    <Box className={classes.cell} key={weekday}>
                        {weekday}
                    </Box>
            ))}
            </Box>
            <Box className={classes.calendar}>
                {blankDays.map(el => (
                    <Box className={classes.cell} key={el}></Box>
                ))}
                {monthDays.map(day => (
                    <Stack
                        key={dateToISO(day)}
                        justifyContent="center"
                        alignItems="center"
                        className={classes.cell}
                    >
                        {day.getDate()}
                        <CircleOutlined/>
                    </Stack>
                ))}
            </Box>
        </div>
    )
}

export default Month
