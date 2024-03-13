import React, { useCallback, useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
export default function WaterEfficiency() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const [waterQualityImgSrc, setWaterQualityImgSrc] = useState(null);
  const [
    highEfficiencyWaterFixturesVideoSrc,
    setHighEfficiencyWaterFixturesVideoSrc,
  ] = useState("");
  const [rainWaterManagementImgSrc, setRainWaterManagementImgSrc] =
    useState(null);
  const [outdoorWaterUseReductionImgSrc, setOutdoorWaterUseReductionImgSrc] =
    useState(null);
  const [surfaceWaterRunOffVideoSrc, setSurfaceWaterRunOffVideoSrc] =
    useState(null);
  const [waterRecyclingVideoSrc, setWaterRecyclingVideoSrc] = useState(null);
  const [
    meteringAndLeakageDetectionSystemImgSrc,
    setMeteringAndLeakageDetectionSystemImgSrc,
  ] = useState(null);
  const [
    waterEfficientIrrigationVideoSrc,
    setWaterEfficientIrrigationVideoSrc,
  ] = useState(null);
  const [
    waterConservationAndManagementPlanImgSrc,
    setWaterConservationAndManagementPlanImgSrc,
  ] = useState(null);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [previewVideoSrc, setPreviewVideoSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const {
    waterQuality,
    highEfficiencyWaterFixtures,
    rainWaterManagement,
    outdoorWaterUseReduction,
    surfaceWaterRunOff,
    waterRecycling,
    meteringAndLeakageDetectionSystem,
    waterEfficientIrrigation,
    waterConservationAndManagementPlan,
    waterQualityUrl,
    highEfficiencyWaterFixturesUrl,
    rainWaterManagementUrl,
    outdoorWaterUseReductionUrl,
    surfaceWaterRunOffUrl,
    waterRecyclingUrl,
    meteringAndLeakageDetectionSystemUrl,
    waterEfficientIrrigationUrl,
    waterConservationAndManagementPlanUrl,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        waterQuality,
        highEfficiencyWaterFixtures,
        rainWaterManagement,
        outdoorWaterUseReduction,
        surfaceWaterRunOff,
        waterRecycling,
        meteringAndLeakageDetectionSystem,
        waterEfficientIrrigation,
        waterConservationAndManagementPlan,
        waterQualityUrl,
        highEfficiencyWaterFixturesUrl,
        rainWaterManagementUrl,
        outdoorWaterUseReductionUrl,
        surfaceWaterRunOffUrl,
        waterRecyclingUrl,
        meteringAndLeakageDetectionSystemUrl,
        waterEfficientIrrigationUrl,
        waterConservationAndManagementPlanUrl,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      waterQuality,
      highEfficiencyWaterFixtures,
      rainWaterManagement,
      outdoorWaterUseReduction,
      surfaceWaterRunOff,
      waterRecycling,
      meteringAndLeakageDetectionSystem,
      waterEfficientIrrigation,
      waterConservationAndManagementPlan,
      waterQualityUrl,
      highEfficiencyWaterFixturesUrl,
      rainWaterManagementUrl,
      outdoorWaterUseReductionUrl,
      surfaceWaterRunOffUrl,
      waterRecyclingUrl,
      meteringAndLeakageDetectionSystemUrl,
      waterEfficientIrrigationUrl,
      waterConservationAndManagementPlanUrl,
    ]
  );

  useEffect(() => {
    //water quality
    if (waterQualityUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setWaterQualityImgSrc(reader.result);
      };
      reader.readAsDataURL(waterQualityUrl.value);
    } else {
      setWaterQualityImgSrc(null);
    }
    //high Efficiency Water Fixtures
    if (highEfficiencyWaterFixturesUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setHighEfficiencyWaterFixturesVideoSrc(reader.result);
      };
      reader.readAsDataURL(highEfficiencyWaterFixturesUrl.value);
    } else {
      setHighEfficiencyWaterFixturesVideoSrc(null);
    }
    //rain water management
    if (rainWaterManagementUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRainWaterManagementImgSrc(reader.result);
      };
      reader.readAsDataURL(rainWaterManagementUrl.value);
    } else {
      setRainWaterManagementImgSrc(null);
    }
    //outdoor water use reduction
    if (outdoorWaterUseReductionUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOutdoorWaterUseReductionImgSrc(reader.result);
      };
      reader.readAsDataURL(outdoorWaterUseReductionUrl.value);
    } else {
      setOutdoorWaterUseReductionImgSrc(null);
    }
    //surface water run off/stormwater mgt
    if (surfaceWaterRunOffUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSurfaceWaterRunOffVideoSrc(reader.result);
      };
      reader.readAsDataURL(surfaceWaterRunOffUrl.value);
    } else {
      setSurfaceWaterRunOffVideoSrc(null);
    }
    //water recycling
    if (waterRecyclingUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setWaterRecyclingVideoSrc(reader.result);
      };
      reader.readAsDataURL(waterRecyclingUrl.value);
    } else {
      setWaterRecyclingVideoSrc(null);
    }
    //metering and leakage detection system
    if (meteringAndLeakageDetectionSystemUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMeteringAndLeakageDetectionSystemImgSrc(reader.result);
      };
      reader.readAsDataURL(meteringAndLeakageDetectionSystemUrl.value);
    } else {
      setMeteringAndLeakageDetectionSystemImgSrc(null);
    }
    //water efficient irrigation
    if (waterEfficientIrrigationUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setWaterEfficientIrrigationVideoSrc(reader.result);
      };
      reader.readAsDataURL(waterEfficientIrrigationUrl.value);
    } else {
      setWaterEfficientIrrigationVideoSrc(null);
    }
    //water conservation and management plan
    if (waterConservationAndManagementPlanUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setWaterConservationAndManagementPlanImgSrc(reader.result);
      };
      reader.readAsDataURL(waterConservationAndManagementPlanUrl.value);
    } else {
      setWaterConservationAndManagementPlanImgSrc(null);
    }
  }, [
    waterQualityUrl.value,
    highEfficiencyWaterFixturesUrl.value,
    rainWaterManagementUrl.value,
    outdoorWaterUseReductionUrl.value,
    surfaceWaterRunOffUrl.value,
    waterRecyclingUrl.value,
    meteringAndLeakageDetectionSystemUrl.value,
    waterEfficientIrrigationUrl.value,
    waterConservationAndManagementPlanUrl.value,
  ]);

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
        <Typography variant="h2">Water Efficiency (WE)</Typography>
      </Box>
      <PreviewModal open={open} setOpen={setOpen}>
        <img src={previewImgSrc} />
      </PreviewModal>
      <PreviewModal open={openVideo} setOpen={setOpenVideo}>
        <video width="320" height="240" autoplay controls>
          <source src={previewVideoSrc} type="video/mp4" />
          <source src={previewVideoSrc} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </PreviewModal>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="waterQuality">Water Quality</label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="waterQuality"
            value={waterQuality.value || ""}
            onChange={handleChange}
            error={!!waterQuality.error}
            required={waterQuality.required}
          >
            {[...Array(2).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="cameraFileInput11"
                type="file"
                accept="image/*"
                capture="environment"
                name="waterQualityUrl"
                onChange={handleChange}
                error={!!waterQualityUrl.error}
                helperText={waterQualityUrl.error}
                required={waterQualityUrl.required}
              />
            </Button>
          </label>
          {waterQualityUrl.value && (
            <span className="valueInput">({waterQualityUrl.value.name})</span>
          )}
          <span>
            {waterQualityImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(waterQualityImgSrc);
                  setOpen(true);
                }}
                src={waterQualityImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{waterQualityUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label for="highEfficiencyWaterFixtures">
            High Efficiency Water Fixtures
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="highEfficiencyWaterFixtures"
            value={highEfficiencyWaterFixtures.value || ""}
            onChange={handleChange}
            error={!!highEfficiencyWaterFixtures.error}
            helperText={highEfficiencyWaterFixtures.error}
            required={highEfficiencyWaterFixtures.required}
          >
            {[...Array(4).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput2">
            <Button variant="contained" component="label">
              <VideoCallIcon />
              <input
                style={{ display: "none" }}
                id="highEfficiencyWaterFixtures"
                type="file"
                accept="video/*"
                capture="environment"
                name="highEfficiencyWaterFixturesUrl"
                onChange={handleChange}
                error={!!highEfficiencyWaterFixturesUrl.error}
                helperText={highEfficiencyWaterFixturesUrl.error}
                required={highEfficiencyWaterFixturesUrl.required}
              />
            </Button>
          </label>
          {highEfficiencyWaterFixturesUrl.value && (
            <span className="valueInput">
              ({highEfficiencyWaterFixturesUrl.value.name})
            </span>
          )}
          <span>
            {highEfficiencyWaterFixturesVideoSrc && (
              <video
                onClick={() => {
                  setPreviewVideoSrc(highEfficiencyWaterFixturesVideoSrc);
                  setOpenVideo(true);
                }}
                width="50"
                height="50"
                style={{ cursor: "pointer" }}
              >
                <source
                  src={highEfficiencyWaterFixturesVideoSrc}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {highEfficiencyWaterFixturesUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="rainWaterManagement">Rain Water Management</label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="rainWaterManagement"
            value={rainWaterManagement.value || ""}
            onChange={handleChange}
            error={!!rainWaterManagement.error}
            helperText={rainWaterManagement.error}
            required={rainWaterManagement.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />

              <input
                style={{ display: "none" }}
                id="rainWaterManagement"
                type="file"
                accept="image/*"
                capture="environment"
                name="rainWaterManagementUrl"
                onChange={handleChange}
                error={!!rainWaterManagementUrl.error}
                helperText={rainWaterManagementUrl.error}
                required={rainWaterManagementUrl.required}
              />
            </Button>
          </label>
          {rainWaterManagementUrl.value && (
            <span className="valueInput">
              ({rainWaterManagementUrl.value.name})
            </span>
          )}
          <span>
            {rainWaterManagementImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(rainWaterManagementImgSrc);
                  setOpen(true);
                }}
                src={rainWaterManagementImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{rainWaterManagementUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label for="outdoorWaterUseReduction">
            Outdoor Water Use Reduction
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="outdoorWaterUseReduction"
            value={outdoorWaterUseReduction.value || ""}
            onChange={handleChange}
            error={!!outdoorWaterUseReduction.error}
            helperText={outdoorWaterUseReduction.error}
            required={outdoorWaterUseReduction.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />

              <input
                style={{ display: "none" }}
                id="outdoorWaterUseReduction"
                type="file"
                accept="image/*"
                capture="environment"
                name="outdoorWaterUseReductionUrl"
                onChange={handleChange}
                error={!!outdoorWaterUseReductionUrl.error}
                helperText={outdoorWaterUseReductionUrl.error}
                required={outdoorWaterUseReductionUrl.required}
              />
            </Button>
          </label>
          {outdoorWaterUseReductionUrl.value && (
            <span className="valueInput">
              ({outdoorWaterUseReductionUrl.value.name})
            </span>
          )}
          <span>
            {outdoorWaterUseReductionImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(outdoorWaterUseReductionImgSrc);
                  setOpen(true);
                }}
                src={outdoorWaterUseReductionImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{outdoorWaterUseReductionUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="surfaceWaterRunOff">
            Surface Water Run Off/Stormwater Mgt.
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="surfaceWaterRunOff"
            value={surfaceWaterRunOff.value || ""}
            onChange={handleChange}
            error={!!surfaceWaterRunOff.error}
            helperText={surfaceWaterRunOff.error}
            required={surfaceWaterRunOff.required}
          >
            {[...Array(2).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <VideoCallIcon />
              <input
                style={{ display: "none" }}
                id="wurfaceWaterRunOff"
                type="file"
                accept="video/*"
                capture="environment"
                name="surfaceWaterRunOffUrl"
                onChange={handleChange}
                error={!!surfaceWaterRunOffUrl.error}
                helperText={surfaceWaterRunOffUrl.error}
                required={surfaceWaterRunOffUrl.required}
              />
            </Button>
          </label>
          {surfaceWaterRunOffUrl.value && (
            <span className="valueInput">
              ({surfaceWaterRunOffUrl.value.name})
            </span>
          )}
          <span>
            {surfaceWaterRunOffVideoSrc && (
              <video
                onClick={() => {
                  setPreviewVideoSrc(surfaceWaterRunOffVideoSrc);
                  setOpenVideo(true);
                }}
                width="50"
                height="50"
                style={{ cursor: "pointer" }}
              >
                <source src={surfaceWaterRunOffVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </span>
          <h5 style={{ color: "red" }}>{surfaceWaterRunOffUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="waterRecycling">Water Recycling</label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="waterRecycling"
            value={waterRecycling.value || ""}
            onChange={handleChange}
            error={!!waterRecycling.error}
            helperText={waterRecycling.error}
            required={waterRecycling.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <VideoCallIcon />
              <input
                style={{ display: "none" }}
                id="waterRecycling"
                type="file"
                accept="video/*"
                capture="environment"
                name="waterRecyclingUrl"
                onChange={handleChange}
                error={!!waterRecyclingUrl.error}
                helperText={waterRecyclingUrl.error}
                required={waterRecyclingUrl.required}
              />
            </Button>
          </label>
          {waterRecyclingUrl.value && (
            <span className="valueInput">({waterRecyclingUrl.value.name})</span>
          )}
          <span>
            {waterRecyclingVideoSrc && (
              <video
                onClick={() => {
                  setPreviewVideoSrc(waterRecyclingVideoSrc);
                  setOpenVideo(true);
                }}
                width="50"
                height="50"
                style={{ cursor: "pointer" }}
              >
                <source src={waterRecyclingVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </span>
          <h5 style={{ color: "red" }}>{waterRecyclingUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="meteringAndLeakageDetectionSystem">
            Metering & Leakage Detection System
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="meteringAndLeakageDetectionSystem"
            value={meteringAndLeakageDetectionSystem.value || ""}
            onChange={handleChange}
            error={!!meteringAndLeakageDetectionSystem.error}
            helperText={meteringAndLeakageDetectionSystem.error}
            required={meteringAndLeakageDetectionSystem.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="meteringAndLeakageDetectionSystem"
                type="file"
                accept="image/*"
                capture="environment"
                name="meteringAndLeakageDetectionSystemUrl"
                onChange={handleChange}
                error={!!meteringAndLeakageDetectionSystemUrl.error}
                helperText={meteringAndLeakageDetectionSystemUrl.error}
                required={meteringAndLeakageDetectionSystemUrl.required}
              />
            </Button>
          </label>
          {meteringAndLeakageDetectionSystemUrl.value && (
            <span className="valueInput">
              ({meteringAndLeakageDetectionSystemUrl.value.name})
            </span>
          )}
          <span>
            {meteringAndLeakageDetectionSystemImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(meteringAndLeakageDetectionSystemImgSrc);
                  setOpen(true);
                }}
                src={meteringAndLeakageDetectionSystemImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {meteringAndLeakageDetectionSystemUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="waterEfficientIrrigation">
            Water Efficient Irrigation
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="waterEfficientIrrigation"
            value={waterEfficientIrrigation.value || ""}
            onChange={handleChange}
            error={!!waterEfficientIrrigation.error}
            helperText={waterEfficientIrrigation.error}
            required={waterEfficientIrrigation.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <VideoCallIcon />
              <input
                style={{ display: "none" }}
                id="waterEfficientIrrigation"
                type="file"
                accept="video/*"
                capture="environment"
                name="waterEfficientIrrigationUrl"
                onChange={handleChange}
                error={!!waterEfficientIrrigationUrl.error}
                helperText={waterEfficientIrrigationUrl.error}
                required={waterEfficientIrrigationUrl.required}
              />
            </Button>
          </label>
          {waterEfficientIrrigationUrl.value && (
            <span className="valueInput">
              ({waterEfficientIrrigationUrl.value.name})
            </span>
          )}
          <span>
            {waterEfficientIrrigationVideoSrc && (
              <video
                onClick={() => {
                  setPreviewVideoSrc(waterEfficientIrrigationVideoSrc);
                  setOpenVideo(true);
                }}
                width="50"
                height="50"
                style={{ cursor: "pointer" }}
              >
                <source
                  src={waterEfficientIrrigationVideoSrc}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </span>
          <h5 style={{ color: "red" }}>{waterEfficientIrrigationUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="waterConservationAndManagementPlan">
            Water Conservation & Management Plan
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="waterConservationAndManagementPlan"
            value={waterConservationAndManagementPlan.value || ""}
            onChange={handleChange}
            error={!!waterConservationAndManagementPlan.error}
            helperText={waterConservationAndManagementPlan.error}
            required={waterConservationAndManagementPlan.required}
          >
            {[...Array(2).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="cameraFileInput1">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />

              <input
                style={{ display: "none" }}
                id="waterConservationAndManagementPlan"
                type="file"
                accept="image/*"
                capture="environment"
                name="waterConservationAndManagementPlanUrl"
                onChange={handleChange}
                error={!!waterConservationAndManagementPlanUrl.error}
                helperText={waterConservationAndManagementPlanUrl.error}
                required={waterConservationAndManagementPlanUrl.required}
              />
            </Button>
          </label>
          {waterConservationAndManagementPlanUrl.value && (
            <span className="valueInput">
              ({waterConservationAndManagementPlanUrl.value.name})
            </span>
          )}
          <span>
            {waterConservationAndManagementPlanImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(waterConservationAndManagementPlanImgSrc);
                  setOpen(true);
                }}
                src={waterConservationAndManagementPlanImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {waterConservationAndManagementPlanUrl.error}
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
