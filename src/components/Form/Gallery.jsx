import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";

export default function Gallery() {
    const {
        formValues,
        handleChange,
        handleBack,
        handleNext,
        variant,
        margin
    } = useContext(AppContext);
    const { constructionWasteManagement, operationalWaste, publicTransportAccess, wasteDisposalFacilities, lowEmittingVehicles } = formValues;

    const isError = useCallback(
        () =>
            Object.keys({ constructionWasteManagement, operationalWaste, publicTransportAccess, wasteDisposalFacilities, lowEmittingVehicles }).some(
                (name) =>
                    (formValues[name].required && !formValues[name].value) ||
                    formValues[name].error
            ),
        [formValues, constructionWasteManagement, operationalWaste, publicTransportAccess, wasteDisposalFacilities, lowEmittingVehicles]
    );

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        label="Construction Waste Management"
                        name="constructionWasteManagement"
                        InputProps={{ inputProps: { min: 0, max: 4 } }}
                        placeholder="Construction Waste Management"
                        value={constructionWasteManagement.value}
                        onChange={handleChange}
                        error={!!constructionWasteManagement.error}
                        helperText={constructionWasteManagement.error}
                        required={constructionWasteManagement.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 3 } }}
                        placeholder="Operational Waste"
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Operational Waste"
                        name="operationalWaste"
                        defaultValue={operationalWaste.value}
                        onChange={handleChange}
                        required={operationalWaste.required}
                    />
                </Grid>

            </Grid>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                    Back
                </Button>
                <Button
                    variant="contained"
                    disabled={isError()}
                    color="primary"
                    onClick={!isError() ? handleNext : () => null}
                >
                    Next
                </Button>
            </Box>
        </>
    );
}
