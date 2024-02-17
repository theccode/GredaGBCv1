import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import BuildingInfo from "./BuildingInfo";
import SiteAndTransport from "./SiteAndTransport";
import Confirm from "./Confirm";
import Success from "./Success";
import { AppContext } from "../../context/form.context";
import WaterEfficiency from "./WaterEfficiency";
import EnergyEfficiency from "./EnergyEfficiency";
import IndoorEnvironQuality from "./IndoorEnvironQuality";
import MaterialAndResources from "./MaterialAndResources";
import WasteAndPollution from "./WasteAndPollution";
import Innovation from "./Innovation";
import Gallery from "./Gallery";
// Step titles
const labels = ["Building Info", "Site And Transport", "Water Efficiency", "Energy Eff.& Carbon Em. Mgt.", "Indoor Environment Quality", "Material & Resources", "Water & Pol.", "Innovation", "Gallery (Images & Vidoes)", "Confirmation"];
const handleSteps = (step) => {
    switch (step) {
        case 0:
            return <BuildingInfo />;
        case 1:
            return <SiteAndTransport />;
        case 2:
            return <WaterEfficiency />
        case 3:
            return <EnergyEfficiency />
        case 4:
            return <IndoorEnvironQuality />
        case 5:
            return <MaterialAndResources />
        case 6:
            return <WasteAndPollution />
        case 7:
            return <Innovation />
        case 8:
            return <Gallery />
        case 9:
            return <Confirm />
        default:
            throw new Error("Unknown step");
    }
};

export default function StepForm() {
    const { activeStep } = useContext(AppContext);

    return (
        <>
            {activeStep === labels.length ? (
                <Success />
            ) : (
                <>
                    <Box sx={{ my: 5 }}>
                        <Typography variant="h4" align="center">
                            GREDA GBC Data Collection Form

                        </Typography>
                        <Typography variant="subtitle2" align="center" sx={{ mt: 2 }}>
                            Use this form to provide values for the various variables in each step.
                        </Typography>
                    </Box>
                    <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
                        {labels.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {handleSteps(activeStep)}
                </>
            )}
        </>
    );
}
