import React, { useCallback, useContext } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } =
    useContext(AppContext);
  const { buildingName, buildingLocation, digitalAddress, phone } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({
        buildingName,
        buildingLocation,
        digitalAddress,
        phone,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, buildingName, buildingLocation, digitalAddress, phone]
  );

  return (
    <>
      <Box
        fullWidth
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "green",
        }}
      >
        <Typography variant="h2">Building Data (BD) </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Name of building"
            name="buildingName"
            placeholder="The name of the building"
            value={buildingName.value}
            onChange={handleChange}
            error={!!buildingName.error}
            helperText={buildingName.error}
            required={buildingName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Building Location"
            name="buildingLocation"
            placeholder="Location of the building"
            value={buildingLocation.value}
            onChange={handleChange}
            error={!!buildingLocation.error}
            helperText={buildingLocation.error}
            required={buildingLocation.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Digital Address"
            name="digitalAddress"
            placeholder="Digital Address of Building"
            value={digitalAddress.value}
            onChange={handleChange}
            error={!!digitalAddress.error}
            helperText={digitalAddress.error}
            required={digitalAddress.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            value={phone.value}
            onChange={handleChange}
            error={!!phone.error}
            helperText={phone.error}
            required={phone.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
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
