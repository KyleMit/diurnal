import { FC } from 'react'
import { Box, Stack, Theme, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { dateToISO, getAllDaysInMonth, getBlankStartDays, getMonthTitle, IMonth, Weekdays } from '../utils/dates';
import { makeStyles } from '@mui/styles';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles((theme: Theme) => ({
    calendar: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        rowGap: theme.spacing(2),
        alignItems: 'center',
        justifyItems: 'center'
    },
    dateCell: {
        color: 'inherit',
        textDecoration: 'none',
        transition: '.4s ease background',
        '&:hover': {
            background: blueGrey[50]
        }
    }
}));


const Month: FC<IMonth> = ({month, year}) => {
    const classes = useStyles();

    const blankDays = getBlankStartDays(month, year);
    const monthDays = getAllDaysInMonth(month, year)


    return (
        <div>
            <Typography textAlign='center' variant='h5' component='h2' marginBottom={1}>
                {getMonthTitle(month, year)}
            </Typography>
            <Box className={classes.calendar}>
                {Weekdays.map(weekday => (
                        <Box key={weekday}>
                            {weekday}
                        </Box>
                ))}
                {blankDays.map(el => (
                    <Box key={el}></Box>
                ))}
                {monthDays.map(day => (
                    <Link
                        to={`/day${dateToISO(day)}`}
                        key={dateToISO(day)}
                        className={classes.dateCell}
                    >
                        <Stack
                            justifyContent='center'
                            alignItems='center'
                        >
                            <span>{day.getDate()}</span>
                            <FontAwesomeIcon icon={faCircle} size='2x' color={grey[300]} />
                        </Stack>
                    </Link>
                ))}
            </Box>
        </div>
    )
}

export default Month
