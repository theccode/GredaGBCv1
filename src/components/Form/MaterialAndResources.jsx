import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";

export default function MaterialAndResources() {
    const {
        formValues,
        handleChange,
        handleBack,
        handleNext,
        variant,
        margin
    } = useContext(AppContext);
    const { lifeCycleImpactReduction, environmentalProductDeclaration, responsibleSourcingOfRawMaterials, sustainableGreenProducts, materialsWithRecycledContent, materialsWithLowEmbodiedEnergy, reusedMaterials, locallySourcedMaterials, materialsWithThirdpartyCertification } = formValues;

    const isError = useCallback(
        () =>
            Object.keys({ lifeCycleImpactReduction, environmentalProductDeclaration, responsibleSourcingOfRawMaterials, sustainableGreenProducts, materialsWithRecycledContent, materialsWithLowEmbodiedEnergy, reusedMaterials, locallySourcedMaterials, materialsWithThirdpartyCertification }).some(
                (name) =>
                    (formValues[name].required && !formValues[name].value) ||
                    formValues[name].error
            ),
        [formValues, lifeCycleImpactReduction, environmentalProductDeclaration, responsibleSourcingOfRawMaterials, sustainableGreenProducts, materialsWithRecycledContent, materialsWithLowEmbodiedEnergy, reusedMaterials, locallySourcedMaterials, materialsWithThirdpartyCertification]
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
                        label="Life Cycle Impact Reduction"
                        name="lifeCycleImpactReduction"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        placeholder="Life Cycle Impact Reduction"
                        value={lifeCycleImpactReduction.value}
                        onChange={handleChange}
                        error={!!lifeCycleImpactReduction.error}
                        helperText={lifeCycleImpactReduction.error}
                        required={lifeCycleImpactReduction.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        placeholder="Environmental Product Declaration"
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Environmental Product Declaration"
                        name="environmentalProductDeclaration"
                        defaultValue={environmentalProductDeclaration.value}
                        onChange={handleChange}
                        required={environmentalProductDeclaration.required}
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
                        label="Resposible Sourcing of Raw Materials"
                        name="responsibleSourcingOfRawMaterials"
                        placeholder="Resposible Sourcing of Raw Materials"
                        value={responsibleSourcingOfRawMaterials.value}
                        onChange={handleChange}
                        error={!!responsibleSourcingOfRawMaterials.error}
                        helperText={responsibleSourcingOfRawMaterials.error}
                        required={responsibleSourcingOfRawMaterials.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Sustainable/Green Products"
                        name="sustainableGreenProducts"
                        placeholder="Sustainable/Green Products"
                        value={sustainableGreenProducts.value}
                        onChange={handleChange}
                        error={!!sustainableGreenProducts.error}
                        helperText={sustainableGreenProducts.error}
                        required={sustainableGreenProducts.required}
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
                        label="Materials With Recycled Content"
                        name="materialsWithRecycledContent"
                        placeholder="Materials With Recycled Content"
                        value={materialsWithRecycledContent.value}
                        onChange={handleChange}
                        error={!!materialsWithRecycledContent.error}
                        helperText={materialsWithRecycledContent.error}
                        required={materialsWithRecycledContent.required}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
                    <TextField
                        variant={variant}
                        margin={margin}
                        fullWidth
                        type="number"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        label="Materials With Low Emboddied Energy"
                        name="materialsWithLowEmbodiedEnergy"
                        placeholder="Materials With Low Emboddied Energy"
                        value={materialsWithLowEmbodiedEnergy.value}
                        onChange={handleChange}
                        error={!!materialsWithLowEmbodiedEnergy.error}
                        helperText={materialsWithLowEmbodiedEnergy.error}
                        required={materialsWithLowEmbodiedEnergy.required}
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
                        label="Reused Materials"
                        name="reusedMaterials"
                        placeholder="Reused Materials"
                        value={reusedMaterials.value}
                        onChange={handleChange}
                        error={!!reusedMaterials.error}
                        helperText={reusedMaterials.error}
                        required={reusedMaterials.required}
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
                        label="Locally Sourced Materials"
                        name="locallySourcedMaterials"
                        placeholder="Locally Sourced Materials"
                        value={locallySourcedMaterials.value}
                        onChange={handleChange}
                        error={!!locallySourcedMaterials.error}
                        helperText={locallySourcedMaterials.error}
                        required={locallySourcedMaterials.required}
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
                        label="Materials With Third-Party Certification/Verification"
                        name="materialsWithThirdpartyCertification"
                        placeholder="Materials With Third-Party Certification/Verification"
                        value={materialsWithThirdpartyCertification.value}
                        onChange={handleChange}
                        error={!!materialsWithThirdpartyCertification.error}
                        helperText={materialsWithThirdpartyCertification.error}
                        required={materialsWithThirdpartyCertification.required}
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
