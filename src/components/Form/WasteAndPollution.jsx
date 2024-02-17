import React, { useCallback, useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import MapModal from "../Modal/Modal";
import { useJsApiLoader } from "@react-google-maps/api";

export default function WasteAndPollution() {
  const [open, setOpen] = useState(false);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [city, setCity] = useState("");
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBcToE_NsPbwhi45kvxkmtBZVVmiAtjPqc",
  });
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);

  const {
    constructionWasteManagement,
    operationalWaste,
    publicTransportAccess,
    wasteDisposalFacilities,
    lowEmittingVehicles,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        constructionWasteManagement,
        operationalWaste,
        publicTransportAccess,
        wasteDisposalFacilities,
        lowEmittingVehicles,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      constructionWasteManagement,
      operationalWaste,
      publicTransportAccess,
      wasteDisposalFacilities,
      lowEmittingVehicles,
    ]
  );
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
  };

  useEffect(() => {
    console.log(isLoaded);
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      const latlng = new window.google.maps.LatLng(lat, lng);
      console.log(latlng);
      geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK") {
          if (results[0]) {
            for (let i = 0; i < results[0].address_components.length; i++) {
              const types = results[0].address_components[i].types;
              if (types.includes("locality") || types.includes("political")) {
                setCity(results[0].address_components[i].long_name);
                break;
              }
            }
          } else {
            console.log("No results found");
          }
        } else {
          console.log("Geocoder failed due to: " + status);
        }
      });
    }
  }, [isLoaded, lat, lng]);
  const handleSave = () => {
    console.log(lat);
    console.log(lng);
    console.log("city", city);
    setOpen(false);
  };
  return (
    <>
      <MapModal
        open={open}
        setOpen={setOpen}
        onSave={handleSave}
        setLat={setLat}
        setLng={setLng}
      />
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
          <Button variant="contained" component="label">
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
            InputProps={{ inputProps: { min: 0, max: 3 } }}
            placeholder="Operational Waste"
            InputLabelProps={{
              shrink: true,
            }}
            label="Operational Waste"
            name="operationalWaste"
            defaultValue={operationalWaste.value}
            onChange={handleChange}
            required={operationalWaste.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Public Transport Access"
            name="publicTransportAccess"
            placeholder="Public Transport Access"
            value={publicTransportAccess.value}
            onChange={handleChange}
            error={!!publicTransportAccess.error}
            helperText={publicTransportAccess.error}
            required={publicTransportAccess.required}
          />
          <Button
            variant="contained"
            component="label"
            onClick={() => setOpen(true)}
          >
            <label>
              <span className="btn">Attach a Map</span>
              <AddLocationAltIcon />{" "}
            </label>
            <span>{lat}</span>
            <span>:{lng}</span>
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 3 } }}
            label="Waste Disposal Facilities"
            name="wasteDisposalFacilities"
            placeholder="Waste Disposal Facilities"
            value={wasteDisposalFacilities.value}
            onChange={handleChange}
            error={!!wasteDisposalFacilities.error}
            helperText={wasteDisposalFacilities.error}
            required={wasteDisposalFacilities.required}
          />
          <Button variant="contained" component="label">
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
            label="Low Emitting Vehicles"
            name="lowEmittingVehicles"
            placeholder="Low Emitting Vehicles"
            value={lowEmittingVehicles.value}
            onChange={handleChange}
            error={!!lowEmittingVehicles.error}
            helperText={lowEmittingVehicles.error}
            required={lowEmittingVehicles.required}
          />
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
