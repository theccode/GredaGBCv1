import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AudioFileIcon from "@mui/icons-material/AudioFile";

export default function IndoorEnvironQuality() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [openAudio, setOpenAudio] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [previewVideoSrc, setPreviewVideoSrc] = useState("");
  const [optimumInteriorLightingImgSrc, setOptimumInteriorLightingImgSrc] =
    useState(null);
  const [dayLightingImgSrc, setDayLightingImgSrc] = useState(null);
  const [qualityViewsImgSrc, setQualityViewsImgSrc] = useState(null);
  const [acousticPerformanceAudioSrc, setAcousticPerformanceAudioSrc] =
    useState(null);
  const [noiseAttenuationAudioSrc, setNoiseAttenuationAudioSrc] =
    useState(null);
  const [indoorPlantersImgSrc, setIndoorPlantersImgSrc] = useState(null);
  const [
    roomsWithinTenMetersLightingSourceImgSrc,
    setRoomsWithinTenMetersLightingSourceImgSrc,
  ] = useState(null);
  const {
    lowEmittingToxicMaterials,
    optimumInteriorLighting,
    dayLighting,
    qualityViews,
    acousticPerformance,
    indoorAirQuality,
    noiseAttenuation,
    indoorPlanters,
    roomsWithinTenMetersLightingSource,
    optimumInteriorLightingUrl,
    dayLightingUrl,
    qualityViewsUrl,
    acousticPerformanceUrl,
    noiseAttenuationUrl,
    indoorPlantersurl,
    roomsWithinTenMetersLightingSourceUrl,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        lowEmittingToxicMaterials,
        optimumInteriorLighting,
        dayLighting,
        qualityViews,
        acousticPerformance,
        indoorAirQuality,
        noiseAttenuation,
        indoorPlanters,
        roomsWithinTenMetersLightingSource,
        optimumInteriorLightingUrl,
        dayLightingUrl,
        qualityViewsUrl,
        acousticPerformanceUrl,
        noiseAttenuationUrl,
        indoorPlantersurl,
        roomsWithinTenMetersLightingSourceUrl,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      lowEmittingToxicMaterials,
      optimumInteriorLighting,
      dayLighting,
      qualityViews,
      acousticPerformance,
      indoorAirQuality,
      noiseAttenuation,
      indoorPlanters,
      roomsWithinTenMetersLightingSource,
      optimumInteriorLightingUrl,
      dayLightingUrl,
      qualityViewsUrl,
      acousticPerformanceUrl,
      noiseAttenuationUrl,
      indoorPlantersurl,
      roomsWithinTenMetersLightingSourceUrl,
    ]
  );
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
  };
  useEffect(() => {
    //Optimum Interior Lighting
    if (optimumInteriorLightingUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOptimumInteriorLightingImgSrc(reader.result);
      };
      reader.readAsDataURL(optimumInteriorLightingUrl.value);
    } else setOptimumInteriorLightingImgSrc(null);
    //Daylighting
    if (dayLightingUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDayLightingImgSrc(reader.result);
      };
      reader.readAsDataURL(dayLightingUrl.value);
    } else {
      setDayLightingImgSrc(null);
    }
    //Quality Views
    if (qualityViewsUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQualityViewsImgSrc(reader.result);
      };
      reader.readAsDataURL(qualityViewsUrl.value);
    } else {
      setQualityViewsImgSrc(null);
    }
    //Acoustic Performance
    if (acousticPerformanceUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAcousticPerformanceAudioSrc(reader.result);
      };
      reader.readAsDataURL(acousticPerformanceUrl.value);
    } else {
      setAcousticPerformanceAudioSrc(null);
    }
    //Noise attenuation
    if (noiseAttenuationUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNoiseAttenuationAudioSrc(reader.result);
      };
      reader.readAsDataURL(noiseAttenuationUrl.value);
    } else {
      setNoiseAttenuationAudioSrc(null);
    }
    //Indoor Planters
    if (indoorPlantersurl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIndoorPlantersImgSrc(reader.result);
      };
      reader.readAsDataURL(indoorPlantersurl.value);
    } else {
      setIndoorPlantersImgSrc(null);
    }
    //Rooms within 10m natural lighting source
    if (roomsWithinTenMetersLightingSourceUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRoomsWithinTenMetersLightingSourceImgSrc(reader.result);
      };
      reader.readAsDataURL(roomsWithinTenMetersLightingSourceUrl.value);
    } else {
      setRoomsWithinTenMetersLightingSourceImgSrc(null);
    }
  }, [
    optimumInteriorLightingUrl.value,
    dayLightingUrl.value,
    qualityViewsUrl.value,
    acousticPerformanceUrl.value,
    noiseAttenuationUrl.value,
    indoorPlantersurl.value,
    roomsWithinTenMetersLightingSourceUrl.value,
  ]);

  return (
    <>
      <PreviewModal open={open} setOpen={setOpen}>
        <img src={previewImgSrc} />
      </PreviewModal>
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
              shrink: true,
            }}
            label="Optimum Interior Lighting"
            name="optimumInteriorLighting"
            defaultValue={optimumInteriorLighting.value}
            onChange={handleChange}
            required={optimumInteriorLighting.required}
          />
          <Button variant="contained" component="label">
            <label for="optimumInteriorLightingUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="optimumInteriorLighting"
                type="file"
                accept="image/*"
                capture="environment"
                name="optimumInteriorLightingUrl"
                onChange={handleChange}
                error={!!optimumInteriorLightingUrl.error}
                helperText={optimumInteriorLightingUrl.error}
                required={optimumInteriorLightingUrl.required}
              />
            </label>
          </Button>
          {optimumInteriorLightingUrl.value && (
            <span className="valueInput">
              ({optimumInteriorLightingUrl.value.name})
            </span>
          )}
          <span>
            {optimumInteriorLightingImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(optimumInteriorLightingImgSrc);
                  setOpen(true);
                }}
                src={optimumInteriorLightingImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{optimumInteriorLightingUrl.error}</h5>
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
          <Button variant="contained" component="label">
            <label for="dayLightingUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="dayLighting"
                type="file"
                accept="image/*"
                capture="environment"
                name="dayLightingUrl"
                onChange={handleChange}
                error={!!dayLightingUrl.error}
                helperText={dayLightingUrl.error}
                required={dayLightingUrl.required}
              />
            </label>
          </Button>
          {dayLightingUrl.value && (
            <span className="valueInput">({dayLightingUrl.value.name})</span>
          )}
          <span>
            {dayLightingImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(dayLightingImgSrc);
                  setOpen(true);
                }}
                src={dayLightingImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
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
          <Button variant="contained" component="label">
            <label for="qualityViewsUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="qualityViews"
                type="file"
                accept="image/*"
                capture="environment"
                name="qualityViewsUrl"
                onChange={handleChange}
                error={!!qualityViewsUrl.error}
                helperText={qualityViewsUrl.error}
                required={qualityViewsUrl.required}
              />
            </label>
          </Button>
          {qualityViewsUrl.value && (
            <span className="valueInput">({qualityViewsUrl.value.name})</span>
          )}
          <span>
            {qualityViewsImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(qualityViewsImgSrc);
                  setOpen(true);
                }}
                src={qualityViewsImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{qualityViewsUrl.error}</h5>
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
          <Button variant="contained" component="label">
            <label for="acousticPerformanceUrl">
              <AudioFileIcon />
              <input
                style={{ display: "none" }}
                id="acousticPerformance"
                type="file"
                accept="audio/*"
                capture="environment"
                name="acousticPerformanceUrl"
                onChange={handleChange}
                error={!!acousticPerformanceUrl.error}
                helperText={acousticPerformanceUrl.error}
                required={acousticPerformanceUrl.required}
              />
            </label>
          </Button>
          {acousticPerformanceUrl.value && (
            <span className="valueInput">
              ({acousticPerformanceUrl.value.name})
            </span>
          )}
          <span>
            {acousticPerformanceAudioSrc && (
              <audio controls>
                <source src={acousticPerformanceAudioSrc} type="audio/ogg" />
                <source src={acousticPerformanceAudioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </span>
          <h5 style={{ color: "red" }}>{acousticPerformanceUrl.error}</h5>
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
          <Button variant="contained" component="label">
            <label for="noiseAttenuationUrl">
              <AudioFileIcon />
              <input
                style={{ display: "none" }}
                id="noiseAttenuation"
                type="file"
                accept="audio/*"
                capture="environment"
                name="noiseAttenuationUrl"
                onChange={handleChange}
                error={!!noiseAttenuationUrl.error}
                helperText={noiseAttenuationUrl.error}
                required={noiseAttenuationUrl.required}
              />
            </label>
          </Button>
          {noiseAttenuationUrl.value && (
            <span className="valueInput">
              ({noiseAttenuationUrl.value.name})
            </span>
          )}
          <span>
            {noiseAttenuationAudioSrc && (
              <audio controls>
                <source src={noiseAttenuationAudioSrc} type="audio/ogg" />
                <source src={noiseAttenuationAudioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </span>
          <h5 style={{ color: "red" }}>{noiseAttenuationUrl.error}</h5>
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
          <Button variant="contained" component="label">
            <label for="indoorPlantersurl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="indoorPlanters"
                type="file"
                accept="image/*"
                capture="environment"
                name="indoorPlantersurl"
                onChange={handleChange}
                error={!!indoorPlantersurl.error}
                helperText={indoorPlantersurl.error}
                required={indoorPlantersurl.required}
              />
            </label>
          </Button>
          {indoorPlantersurl.value && (
            <span className="valueInput">({indoorPlantersurl.value.name})</span>
          )}
          <span>
            {indoorPlantersImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(indoorPlantersImgSrc);
                  setOpen(true);
                }}
                src={indoorPlantersImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{indoorPlantersurl.error}</h5>
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
          <Button variant="contained" component="label">
            <label for="roomsWithinTenMetersLightingSourceUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="roomsWithinTenMetersLightingSource"
                type="file"
                accept="image/*"
                capture="environment"
                name="roomsWithinTenMetersLightingSourceUrl"
                onChange={handleChange}
                error={!!roomsWithinTenMetersLightingSourceUrl.error}
                helperText={roomsWithinTenMetersLightingSourceUrl.error}
                required={roomsWithinTenMetersLightingSourceUrl.required}
              />
            </label>
          </Button>
          {roomsWithinTenMetersLightingSourceUrl.value && (
            <span className="valueInput">
              ({roomsWithinTenMetersLightingSourceUrl.value.name})
            </span>
          )}
          <span>
            {roomsWithinTenMetersLightingSourceImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(roomsWithinTenMetersLightingSourceImgSrc);
                  setOpen(true);
                }}
                src={roomsWithinTenMetersLightingSourceImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {roomsWithinTenMetersLightingSourceUrl.error}
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
