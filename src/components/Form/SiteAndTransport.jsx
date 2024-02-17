import React, { useCallback, useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import { Divider } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useJsApiLoader } from "@react-google-maps/api";

export default function SiteAndTransport() {
  const [landscapingAndPlantersImageSrc, setLandscapingAndPlantersImageSrc] =
    useState(null);
  const [
    facilitiesForCyclingOrWalkingImageSrc,
    setFacilitiesForCyclingOrWalkingImgSrc,
  ] = useState(null);
  const [open, setOpen] = useState(false);
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
    ]
  );

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
              <span className="btn" style={{ background: "transparent" }}>
                <AttachFileIcon /> (Attach a photo)
              </span>
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
              <Divider />
              {landscapingAndPlantersUrl.value && (
                <span className="valueInput">
                  : ({landscapingAndPlantersUrl.value.name})
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
            label="Access To Public Transport"
            name="accessToPublicTransport"
            placeholder="Access To Public Transport"
            value={accessToPublicTransport.value}
            onChange={handleChange}
            error={!!accessToPublicTransport.error}
            helperText={accessToPublicTransport.error}
            required={accessToPublicTransport.required}
          />
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
              <span className="btn" style={{ background: "transparent" }}>
                <AttachFileIcon /> (Attach a photo)
              </span>
              <input
                id="cameraFileInput2"
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                capture="environment"
                name="facilitiesForCyclingOrWalkingUrl"
                onChange={handleChange}
                error={!!facilitiesForCyclingOrWalkingUrl.error}
                helperText={facilitiesForCyclingOrWalkingUrl.error}
                required={facilitiesForCyclingOrWalkingUrl.required}
              />
              <Divider />
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
