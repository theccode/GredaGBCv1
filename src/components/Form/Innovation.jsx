import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";

export default function Innovation() {
    const {
        formValues,
        handleChange,
        handleBack,
        handleNext,
        variant,
        margin
    } = useContext(AppContext);
    const { innovativeTechnologies, innovativeMaterialsAndProducts, innovativeDesign } = formValues;

    const isError = useCallback(
        () =>
            Object.keys({ innovativeTechnologies, innovativeMaterialsAndProducts, innovativeDesign }).some(
                (name) =>
                    (formValues[name].required && !formValues[name].value) ||
                    formValues[name].error
            ),
        [formValues, innovativeTechnologies, innovativeMaterialsAndProducts, innovativeDesign]
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
                        label="Innovative Technologies"
                        name="innovativeTechnologies"
                        InputProps={{ inputProps: { min: 0, max: 2 } }}
                        placeholder="Innovative Technologies"
                        value={innovativeTechnologies.value}
                        onChange={handleChange}
                        error={!!innovativeTechnologies.error}
                        helperText={innovativeTechnologies.error}
                        required={innovativeTechnologies.required}
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
                        placeholder="Innovative Materials And Products"
                        InputLabelProps={{
                            shrink: true
                        }}
                        label="Innovative Materials And Products"
                        name="innovativeMaterialsAndProducts"
                        defaultValue={innovativeMaterialsAndProducts.value}
                        onChange={handleChange}
                        required={innovativeMaterialsAndProducts.required}
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
                        label="Innovative Design"
                        name="innovativeDesign"
                        placeholder="Innovative Design"
                        value={innovativeDesign.value}
                        onChange={handleChange}
                        error={!!innovativeDesign.error}
                        helperText={innovativeDesign.error}
                        required={innovativeDesign.required}
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
