import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";

export default function EnergyEfficiency() {
    const {
        formValues,
        handleChange,
        handleBack,
        handleNext,
        variant,
        margin
    } = useContext(AppContext);
    const { greenhouseGasEmissionReduction, energyEfficientEquipment, renewalEnergyUse, energyMeteringAndMonitoring, lowAndZeroCarbonTechnologies, energyEfficientColdStorage, efficientVentilationAndACEquipment, alternativePassiveDesign, emboddiedEnergyInBuildingElement, ecofriendlyRefrigerants } = formValues;

    const isError = useCallback(
        () =>
            Object.keys({ greenhouseGasEmissionReduction, energyEfficientEquipment, renewalEnergyUse, energyMeteringAndMonitoring, lowAndZeroCarbonTechnologies, energyEfficientColdStorage, efficientVentilationAndACEquipment, alternativePassiveDesign, emboddiedEnergyInBuildingElement, ecofriendlyRefrigerants }).some(
                (name) =>
                    (formValues[name].required && !formValues[name].value) ||
                    formValues[name].error
            ),
        [formValues, greenhouseGasEmissionReduction, energyEfficientEquipment, renewalEnergyUse, energyMeteringAndMonitoring, lowAndZeroCarbonTechnologies, energyEfficientColdStorage, efficientVentilationAndACEquipment, alternativePassiveDesign, emboddiedEnergyInBuildingElement, ecofriendlyRefrigerants]
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
                        label="Greenhouse Gas Emission Reduction"
                        name="greenhouseGasEmissionReduction"
                        InputProps={{ inputProps: { min: 0, max: 4 } }}
                        placeholder="Greenhouse Gas Emission Reduction"
                        value={greenhouseGasEmissionReduction.value}
                        onChange={handleChange}
                        error={!!greenhouseGasEmissionReduction.error}
                        helperText={greenhouseGasEmissionReduction.error}
                        required={greenhouseGasEmissionReduction.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 4 } }}
                        placeholder="Energy Efficient Equipment"
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Energy Efficient Equipment"
                        name="energyEfficientEquipment"
                        defaultValue={energyEfficientEquipment.value}
                        onChange={handleChange}
                        required={energyEfficientEquipment.required}
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
                        InputProps={{ inputProps: { min: 0, max: 4 } }}
                        label="Renewable Energy Use"
                        name="renewalEnergyUse"
                        placeholder="Renewable Energy Use"
                        value={renewalEnergyUse.value}
                        onChange={handleChange}
                        error={!!renewalEnergyUse.error}
                        helperText={renewalEnergyUse.error}
                        required={renewalEnergyUse.required}
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
                        label="Energy Metering And Monitoring"
                        name="energyMeteringAndMonitoring"
                        placeholder="Energy Metering And Monitoring"
                        value={energyMeteringAndMonitoring.value}
                        onChange={handleChange}
                        error={!!energyMeteringAndMonitoring.error}
                        helperText={energyMeteringAndMonitoring.error}
                        required={energyMeteringAndMonitoring.required}
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
                        InputProps={{ inputProps: { min: 0, max: 4 } }}
                        label="Low And Zero Carbon Technologies"
                        name="lowAndZeroCarbonTechnologies"
                        placeholder="Low And Zero Carbon Technologies"
                        value={lowAndZeroCarbonTechnologies.value}
                        onChange={handleChange}
                        error={!!lowAndZeroCarbonTechnologies.error}
                        helperText={lowAndZeroCarbonTechnologies.error}
                        required={lowAndZeroCarbonTechnologies.required}
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
                        label="Energy Efficient Cold Storage"
                        name="energyEfficientColdStorage"
                        placeholder="Energy Efficient Cold Storage"
                        value={energyEfficientColdStorage.value}
                        onChange={handleChange}
                        error={!!energyEfficientColdStorage.error}
                        helperText={energyEfficientColdStorage.error}
                        required={energyEfficientColdStorage.required}
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
                        label="Efficient Ventilation And A/C Equipment"
                        name="efficientVentilationAndACEquipment"
                        placeholder="Efficient Ventilation And A/C Equipment"
                        value={efficientVentilationAndACEquipment.value}
                        onChange={handleChange}
                        error={!!efficientVentilationAndACEquipment.error}
                        helperText={efficientVentilationAndACEquipment.error}
                        required={efficientVentilationAndACEquipment.required}
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
                        InputProps={{ inputProps: { min: 0, max: 4 } }}
                        label="Alternative Passive Design"
                        name="alternativePassiveDesign"
                        placeholder="Alternative Passive Design"
                        value={alternativePassiveDesign.value}
                        onChange={handleChange}
                        error={!!alternativePassiveDesign.error}
                        helperText={alternativePassiveDesign.error}
                        required={alternativePassiveDesign.required}
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
                        InputProps={{ inputProps: { min: 0, max: 3 } }}
                        label="Emboddied Energy In Building Elements"
                        name="emboddiedEnergyInBuildingElement"
                        placeholder="Emboddied Energy In Building Elements"
                        value={emboddiedEnergyInBuildingElement.value}
                        onChange={handleChange}
                        error={!!emboddiedEnergyInBuildingElement.error}
                        helperText={emboddiedEnergyInBuildingElement.error}
                        required={emboddiedEnergyInBuildingElement.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Eco-friendly Refrigerants"
                        name="ecofriendlyRefrigerants"
                        placeholder="Eco-friendly Refrigerants"
                        value={ecofriendlyRefrigerants.value}
                        onChange={handleChange}
                        error={!!ecofriendlyRefrigerants.error}
                        helperText={ecofriendlyRefrigerants.error}
                        required={ecofriendlyRefrigerants.required}
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
