import React, { useCallback, useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useJsApiLoader } from "@react-google-maps/api";
import MapModal from "../Modal/Modal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { TextField } from "@mui/material";
export default function SiteAndTransport() {
  const [landscapingAndPlantersImageSrc, setLandscapingAndPlantersImageSrc] =
    useState(null);
  const [
    facilitiesForCyclingOrWalkingImageSrc,
    setFacilitiesForCyclingOrWalkingImgSrc,
  ] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBcToE_NsPbwhi45kvxkmtBZVVmiAtjPqc",
  });
  const [open, setOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [previewImgSrc, sestPreviewImgSrc] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [city, setCity] = useState("");

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
      latlng &&
        geocoder &&
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === "OK") {
            if (results && results[0]) {
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
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "green",
        }}
      >
        <Typography variant="h2">Site And Transport (ST)</Typography>
      </Box>
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
          <label htmlFor="protectOrRestoreHabitat">
            Protect or Restore Habitat
          </label>
          <Select
            variant={variant}
            fullWidth
            label="Protect Or Restore Habitat"
            value={protectOrRestoreHabitat.value || ""}
            type="number"
            name="protectOrRestoreHabitat"
            onChange={handleChange}
            error={!!protectOrRestoreHabitat.error}
            required={protectOrRestoreHabitat.required}
          >
            {[...Array(7).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label for="Heat Island Reduction">Heat Island Reduction</label>
          <Select
            variant={variant}
            fullWidth
            label="Heat Island Reduction"
            name="heatIslandReduction"
            value={heatIslandReduction.value || ""}
            onChange={handleChange}
            error={!!heatIslandReduction.error}
            required={heatIslandReduction.required}
          >
            {[...Array(5).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label for="landscapingAndPlanters">Landscaping and Planters</label>
          <Select
            variant={variant}
            fullWidth
            label="Landscaping And Planters"
            name="landscapingAndPlanters"
            value={landscapingAndPlanters.value || ""}
            onChange={handleChange}
            error={!!landscapingAndPlanters.error}
            required={landscapingAndPlanters.required}
          >
            {[...Array(5).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label for="accessToPublicTransport">
            Access To Publilc Transport
          </label>
          <Select
            variant={variant}
            fullWidth
            name="accessToPublicTransport"
            value={accessToPublicTransport.value || ""}
            onChange={handleChange}
            error={!!accessToPublicTransport.error}
            required={accessToPublicTransport.required}
          >
            {[...Array(4).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
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
          <label for="facilitiesForCyclingOrWalking">
            Facilities for Cycling or Walkling
          </label>
          <Select
            variant={variant}
            fullWidth
            name="facilitiesForCyclingOrWalking"
            value={facilitiesForCyclingOrWalking.value || ""}
            onChange={handleChange}
            error={!!facilitiesForCyclingOrWalking.error}
            required={facilitiesForCyclingOrWalking.required}
          >
            {[...Array(4).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="facilitiesForCyclingOrWalkingUrl">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />
              <input
                id="facilitiesForCyclingOrWalkingUrl"
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
            </Button>
          </label>
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
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button
          onClick={handleBack}
          sx={{ mr: 1 }}
          variant="contained"
          color="secondary"
        >
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
