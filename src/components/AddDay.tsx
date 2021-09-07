import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFrown, faGrin, faGrinHearts, faMeh, faSmile } from "@fortawesome/free-solid-svg-icons"
import { IDay } from "../utils/dates"
import { Box } from "@mui/material"
import { lightGreen, green, lightBlue } from '@mui/material/colors';

const AddDay: FC<IDay> = () => {

    return (
        <Box marginTop={3} textAlign='center'>
            <FontAwesomeIcon icon={faFrown} size='2x' color={lightGreen[400]} />
            <FontAwesomeIcon icon={faMeh} size='2x' color={lightGreen[600]} />
            <FontAwesomeIcon icon={faSmile} size='2x' color={green[600]} />
            <FontAwesomeIcon icon={faGrin} size='2x' color={green[800]} />
            <FontAwesomeIcon icon={faGrinHearts} size='2x' color={lightBlue[800]} />
        </Box>
    )
}

export default AddDay
