import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";

export default function IndoorEnvironQuality() {
    const {
        formValues,
        handleChange,
        handleBack,
        handleNext,
        variant,
        margin
    } = useContext(AppContext);
    const { lowEmittingToxicMaterials, optimumInteriorLighting, dayLighting, qualityViews, acousticPerformance, indoorAirQuality, noiseAttenuation, indoorPlanters, roomsWithinTenMetersLightingSource } = formValues;

    const isError = useCallback(
        () =>
            Object.keys({ lowEmittingToxicMaterials, optimumInteriorLighting, dayLighting, qualityViews, acousticPerformance, indoorAirQuality, noiseAttenuation, indoorPlanters, roomsWithinTenMetersLightingSource }).some(
                (name) =>
                    (formValues[name].required && !formValues[name].value) ||
                    formValues[name].error
            ),
        [formValues, lowEmittingToxicMaterials, optimumInteriorLighting, dayLighting, qualityViews, acousticPerformance, indoorAirQuality, noiseAttenuation, indoorPlanters, roomsWithinTenMetersLightingSource]
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
                        label="Low Emitting Toxic Materials"
                        name="lowEmittingToxicMaterials"
                        InputProps={{ inputProps: { min: 0, max: 3 } }}
                        placeholder="Low Emitting Toxic Materials"
                        value={lowEmittingToxicMaterials.value}
                        onChange={handleChange}
                        error={!!lowEmittingToxicMaterials.error}
                        helperText={lowEmittingToxicMaterials.error}
                        required={lowEmittingToxicMaterials.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        placeholder="Optimum Interior Lighting"
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Optimum Interior Lighting"
                        name="optimumInteriorLighting"
                        defaultValue={optimumInteriorLighting.value}
                        onChange={handleChange}
                        required={optimumInteriorLighting.required}
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
                        label="Daylighting"
                        name="dayLighting"
                        placeholder="Daylighting"
                        value={dayLighting.value}
                        onChange={handleChange}
                        error={!!dayLighting.error}
                        helperText={dayLighting.error}
                        required={dayLighting.required}
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
                        label="Quality Views"
                        name="qualityViews"
                        placeholder="Quality Views"
                        value={qualityViews.value}
                        onChange={handleChange}
                        error={!!qualityViews.error}
                        helperText={qualityViews.error}
                        required={qualityViews.required}
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
                        label="Acoustic Performance"
                        name="acousticPerformance"
                        placeholder="Acoustic Performance"
                        value={acousticPerformance.value}
                        onChange={handleChange}
                        error={!!acousticPerformance.error}
                        helperText={acousticPerformance.error}
                        required={acousticPerformance.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach an audio </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="audio/*"
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
                        label="Indoor Air Quality"
                        name="indoorAirQuality"
                        placeholder="Indoor Air Quality"
                        value={indoorAirQuality.value}
                        onChange={handleChange}
                        error={!!indoorAirQuality.error}
                        helperText={indoorAirQuality.error}
                        required={indoorAirQuality.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Noise Attenuation"
                        name="noiseAttenuation"
                        placeholder="Noise Attenuation"
                        value={noiseAttenuation.value}
                        onChange={handleChange}
                        error={!!noiseAttenuation.error}
                        helperText={noiseAttenuation.error}
                        required={noiseAttenuation.required}
                    />
                    <Button
                        variant="contained"
                        component="label"
                    >
                        <label for="cameraFileInput">
                            <span class="btn">*Attach an audio </span>
                            <input
                                id="cameraFileInput"
                                type="file"
                                accept="audio/*"
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
                        label="Indoor Planters"
                        name="indoorPlanters"
                        placeholder="Indoor Planters"
                        value={indoorPlanters.value}
                        onChange={handleChange}
                        error={!!indoorPlanters.error}
                        helperText={indoorPlanters.error}
                        required={indoorPlanters.required}
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
                        label="Rooms within 10m natural lighting source"
                        name="roomsWithinTenMetersLightingSource"
                        placeholder="Rooms within 10m natural lighting source"
                        value={roomsWithinTenMetersLightingSource.value}
                        onChange={handleChange}
                        error={!!roomsWithinTenMetersLightingSource.error}
                        helperText={roomsWithinTenMetersLightingSource.error}
                        required={roomsWithinTenMetersLightingSource.required}
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
