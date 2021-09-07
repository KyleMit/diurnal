import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFrown, faGrin, faGrinHearts, faMeh, faSmile } from "@fortawesome/free-solid-svg-icons"
import { IDay } from "../utils/dates"
import { Box} from "@mui/material"
import { makeStyles } from '@mui/styles';
import { lightBlue, teal, green, lightGreen, yellow } from '@mui/material/colors';
import { Theme } from "@mui/material/styles"

const useStyles = makeStyles((theme: Theme) => ({
    icons: {
        marginTop: theme.spacing(3),
        textAlign: 'center'

    }
}));

const AddDay: FC<IDay> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.icons}>
            <FontAwesomeIcon icon={faFrown} size='2x' color={lightBlue[300]} />
            <FontAwesomeIcon icon={faMeh} size='2x' color={teal[300]} />
            <FontAwesomeIcon icon={faSmile} size='2x' color={green[400]} />
            <FontAwesomeIcon icon={faGrin} size='2x' color={lightGreen[600]} />
            <FontAwesomeIcon icon={faGrinHearts} size='2x' color={yellow[700]} />
        </Box>
    )
}

export default AddDay
