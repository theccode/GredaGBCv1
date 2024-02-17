import { Copyright } from '../copyright/copyright.shared';
import './footer.styles.scss';
import { Box } from "@mui/material"

export const Footer = ({ display }) => {
    return (
        <Box className='footer-container' display={display}>
            <Copyright />
        </Box>
    )
}