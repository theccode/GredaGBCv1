import { Box, Typography, Paper, Container } from "@mui/material";
import StepForm from "../Form/StepForm";
const NewBuildingInfo = () => {
    return (
        <Box>
            <Typography>
                New Building Information
            </Typography>
            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <StepForm />
                </Paper>
            </Container>
        </Box>
    )
}
export default NewBuildingInfo;