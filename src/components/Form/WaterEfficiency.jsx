import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import Webcam from "react-webcam";

export default function WaterEfficiency() {
    const {
        formValues,
        handleChange,
        handleBack,
        handleNext,
        variant,
        margin
    } = useContext(AppContext);
    const { waterQuality, highEfficiencyWaterFixtures, rainWaterManagement, outdoorWaterUseReduction, surfaceWaterRunOff, waterRecycling, meteringAndLeakageDetectionSystem, waterEfficientIrrigation, waterConservationAndManagementPlan } = formValues;

    const isError = useCallback(
        () =>
            Object.keys({ waterQuality, highEfficiencyWaterFixtures, rainWaterManagement, outdoorWaterUseReduction, surfaceWaterRunOff, waterRecycling, meteringAndLeakageDetectionSystem, waterEfficientIrrigation, waterConservationAndManagementPlan }).some(
                (name) =>
                    (formValues[name].required && !formValues[name].value) ||
                    formValues[name].error
            ),
        [formValues, waterQuality, highEfficiencyWaterFixtures, rainWaterManagement, outdoorWaterUseReduction, surfaceWaterRunOff, waterRecycling, meteringAndLeakageDetectionSystem, waterEfficientIrrigation, waterConservationAndManagementPlan]
    );
    const onFileChange = (event) => {
        console.log(event.target.files[0]);
    };
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 1 } }}
                        placeholder="Water Quality"
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Water Quality"
                        name="waterQuality"
                        defaultValue={waterQuality.value}
                        onChange={handleChange}
                        required={waterQuality.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a photo </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="image/*"
                                capture="environment"
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 3 } }}
                        label="High Efficiency Water Fixtures"
                        name="highEfficiencyWaterFixtures"
                        placeholder="High Efficiency Water Fixtures"
                        value={highEfficiencyWaterFixtures.value}
                        onChange={handleChange}
                        error={!!highEfficiencyWaterFixtures.error}
                        helperText={highEfficiencyWaterFixtures.error}
                        required={highEfficiencyWaterFixtures.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a video </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="video/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Rain Water Management"
                        name="rainWaterManagement"
                        placeholder="Rain Water Management"
                        value={rainWaterManagement.value}
                        onChange={handleChange}
                        error={!!rainWaterManagement.error}
                        helperText={rainWaterManagement.error}
                        required={rainWaterManagement.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a photo </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="image/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Outdoor Water Use Reduction"
                        name="outdoorWaterUseReduction"
                        placeholder="Outdoor Water Use Reduction"
                        value={outdoorWaterUseReduction.value}
                        onChange={handleChange}
                        error={!!outdoorWaterUseReduction.error}
                        helperText={outdoorWaterUseReduction.error}
                        required={outdoorWaterUseReduction.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a photo </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="image/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 1 } }}
                        label="Surface Water Run Off/Stormwater mgt."
                        name="surfaceWaterRunOff"
                        placeholder="Surface Water Run Off/Stormwater mgt."
                        value={surfaceWaterRunOff.value}
                        onChange={handleChange}
                        error={!!surfaceWaterRunOff.error}
                        helperText={surfaceWaterRunOff.error}
                        required={surfaceWaterRunOff.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a video </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="video/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Water Recycle"
                        name="waterRecycling"
                        placeholder="Water Recycle"
                        value={waterRecycling.value}
                        onChange={handleChange}
                        error={!!waterRecycling.error}
                        helperText={waterRecycling.error}
                        required={waterRecycling.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a video </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="video/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Metering and Leakage Detection System"
                        name="meteringAndLeakageDetectionSystem"
                        placeholder="Metering and Leakage Detection System"
                        value={meteringAndLeakageDetectionSystem.value}
                        onChange={handleChange}
                        error={!!meteringAndLeakageDetectionSystem.error}
                        helperText={meteringAndLeakageDetectionSystem.error}
                        required={meteringAndLeakageDetectionSystem.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a photo </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="image/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Water Efficient Irrigation"
                        name="waterEfficientIrrigation"
                        placeholder="Water Efficient Irrigation"
                        value={waterEfficientIrrigation.value}
                        onChange={handleChange}
                        error={!!waterEfficientIrrigation.error}
                        helperText={waterEfficientIrrigation.error}
                        required={waterEfficientIrrigation.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a video </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="video/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 1 } }}
                        label="Water Conservation And Management Plan"
                        name="waterConservationAndManagementPlan"
                        placeholder="Water Conservation And Management Plan"
                        value={waterConservationAndManagementPlan.value}
                        onChange={handleChange}
                        error={!!waterConservationAndManagementPlan.error}
                        helperText={waterConservationAndManagementPlan.error}
                        required={waterConservationAndManagementPlan.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach a photo </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="image/*"
                                capture="environment"
                                required
                                onChange={(event) => onFileChange(event)}
                            />
                        </label>
                    </Button>
                </Grid>
                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={agreenemt.value}
                                onChange={handleChange}
                                name="agreenemt"
                                color="primary"
                                required={agreenemt.required}
                            />
                        }
                        label="Agree to terms and conditions"
                    />
                    <FormHelperText error={!!agreenemt.error}>
                        {agreenemt.error}
                    </FormHelperText>
                </Grid> */}
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
