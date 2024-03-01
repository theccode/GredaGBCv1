import React, { useCallback, useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useJsApiLoader } from "@react-google-maps/api";
import MapModal from "../Modal/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
export default function SiteAndTransport() {
  const [landscapingAndPlantersImageSrc, setLandscapingAndPlantersImageSrc] =
    useState(null);
  const [
    facilitiesForCyclingOrWalkingImageSrc,
    setFacilitiesForCyclingOrWalkingImgSrc,
  ] = useState(null);
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [previewImgSrc, sestPreviewImgSrc] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [city, setCity] = useState("");
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBcToE_NsPbwhi45kvxkmtBZVVmiAtjPqc",
  });
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    protectOrRestoreHabitat,
    heatIslandReduction,
    landscapingAndPlanters,
    accessToPublicTransport,
    facilitiesForCyclingOrWalking,
    landscapingAndPlantersUrl,
    facilitiesForCyclingOrWalkingUrl,
    accessToPublicTransportCoordinates,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        protectOrRestoreHabitat,
        heatIslandReduction,
        landscapingAndPlanters,
        accessToPublicTransport,
        facilitiesForCyclingOrWalking,
        landscapingAndPlantersUrl,
        facilitiesForCyclingOrWalkingUrl,
        accessToPublicTransportCoordinates,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      protectOrRestoreHabitat,
      heatIslandReduction,
      landscapingAndPlanters,
      accessToPublicTransport,
      facilitiesForCyclingOrWalking,
      landscapingAndPlantersUrl,
      facilitiesForCyclingOrWalkingUrl,
      accessToPublicTransportCoordinates,
    ]
  );
  //image
  useEffect(() => {
    if (landscapingAndPlantersUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLandscapingAndPlantersImageSrc(reader.result);
      };
      reader.readAsDataURL(landscapingAndPlantersUrl.value);
    } else {
      setLandscapingAndPlantersImageSrc(null);
    }

    if (facilitiesForCyclingOrWalkingUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFacilitiesForCyclingOrWalkingImgSrc(reader.result);
      };
      reader.readAsDataURL(facilitiesForCyclingOrWalkingUrl.value);
    } else {
      setFacilitiesForCyclingOrWalkingImgSrc(null);
    }
  }, [landscapingAndPlantersUrl.value, facilitiesForCyclingOrWalkingUrl.value]);
  //Location
  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      const latlng = new window.google.maps.LatLng(lat, lng);
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
    accessToPublicTransportCoordinates.value = city;
    setLocationOpen(false);
  };

  return (
    <>
      <MapModal
        open={locationOpen}
        setOpen={setLocationOpen}
        onSave={handleSave}
        setLat={setLat}
        setLng={setLng}
      />
      <PreviewModal open={open} setOpen={setOpen}>
        <img src={previewImgSrc} alt="Image previewed." />
      </PreviewModal>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            label="Protect Or Restore Habitat"
            name="protectOrRestoreHabitat"
            InputProps={{ inputProps: { min: 0, max: 6 } }}
            placeholder="Protect Or Restore Habitat"
            value={protectOrRestoreHabitat.value}
            onChange={handleChange}
            error={!!protectOrRestoreHabitat.error}
            helperText={protectOrRestoreHabitat.error}
            required={protectOrRestoreHabitat.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            placeholder="Heat Island Reduction"
            InputLabelProps={{
              shrink: true,
            }}
            label="Heat Island Reduction"
            name="heatIslandReduction"
            defaultValue={heatIslandReduction.value}
            onChange={handleChange}
            required={heatIslandReduction.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            label="Landscaping And Planters"
            name="landscapingAndPlanters"
            placeholder="Landscaping And Planters"
            value={landscapingAndPlanters.value}
            onChange={handleChange}
            error={!!landscapingAndPlanters.error}
            helperText={landscapingAndPlanters.error}
            required={landscapingAndPlanters.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="cameraFileInput1"
                type="file"
                accept="image/*"
                capture="environment"
                name="landscapingAndPlantersUrl"
                onChange={handleChange}
                error={!!landscapingAndPlantersUrl.error}
                helperText={landscapingAndPlantersUrl.error}
                required={landscapingAndPlantersUrl.required}
              />
            </label>
          </Button>
          {landscapingAndPlantersUrl.value && (
            <span className="valueInput">
              ({landscapingAndPlantersUrl.value.name})
            </span>
          )}
          <span>
            {landscapingAndPlantersImageSrc && (
              <img
                onClick={() => {
                  sestPreviewImgSrc(landscapingAndPlantersImageSrc);
                  setOpen(true);
                }}
                src={landscapingAndPlantersImageSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{landscapingAndPlantersUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 3 } }}
            label="Access To Public Transport"
            name="accessToPublicTransport"
            placeholder="Access To Public Transport"
            value={accessToPublicTransport.value}
            onChange={handleChange}
            error={!!accessToPublicTransport.error}
            helperText={accessToPublicTransport.error}
            required={accessToPublicTransport.required}
          />
          <Button
            variant="contained"
            component="label"
            onClick={() => setLocationOpen(true)}
          >
            <label>
              <AddLocationAltIcon />
            </label>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              disabled
              type="text"
              name="accessToPublicTransportCoordinates"
              value={accessToPublicTransportCoordinates.value}
              onChange={handleChange}
              error={!!accessToPublicTransportCoordinates.error}
              helperText={accessToPublicTransportCoordinates.error}
              required={accessToPublicTransportCoordinates.required}
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 3 } }}
            defaultValue="0"
            label="Facilities for Cycling or Walking"
            name="facilitiesForCyclingOrWalking"
            placeholder="Facilities for Cycling or Walking"
            value={facilitiesForCyclingOrWalking.value}
            onChange={handleChange}
            error={!!facilitiesForCyclingOrWalking.error}
            helperText={facilitiesForCyclingOrWalking.error}
            required={facilitiesForCyclingOrWalking.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput">
              <AddPhotoAlternateIcon />
              <input
                id="cameraFileInput2"
                type="file"
                style={{ display: "none", backgroundColor: "white" }}
                accept="image/*"
                capture="environment"
                name="facilitiesForCyclingOrWalkingUrl"
                onChange={handleChange}
                error={!!facilitiesForCyclingOrWalkingUrl.error}
                helperText={facilitiesForCyclingOrWalkingUrl.error}
                required={facilitiesForCyclingOrWalkingUrl.required}
              />
            </label>
          </Button>
          {facilitiesForCyclingOrWalkingUrl.value && (
            <span className="valueInput">
              : ({facilitiesForCyclingOrWalkingUrl.value.name})
            </span>
          )}
          <span>
            {facilitiesForCyclingOrWalkingImageSrc && (
              <img
                onClick={() => {
                  sestPreviewImgSrc(facilitiesForCyclingOrWalkingImageSrc);
                  setOpen(true);
                }}
                src={facilitiesForCyclingOrWalkingImageSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {facilitiesForCyclingOrWalkingUrl.error}
          </h5>
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
        <Button onClick={handleBack} sx={{ mr: 1, backgroundColor: "white" }}>
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
