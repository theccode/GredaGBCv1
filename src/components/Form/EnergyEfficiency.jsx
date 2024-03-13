import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";

export default function EnergyEfficiency() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [previewVideoSrc, setPreviewVideoSrc] = useState("");
  const [openVideo, setOpenVideo] = useState(false);
  const [energyEfficientEquipmentImgSrc, setEnergyEfficientEquipmentImgSrc] =
    useState(null);
  const [renewableEnergyUseImgSrc, setRenewableEnergyUseImgSrc] =
    useState(null);
  const [
    energyMeteringAndMonitoringImgSrc,
    setEnergyMeteringAndMonitoringImgSrc,
  ] = useState(null);
  const [
    lowAndZeroCarbonTechnologiesImgSrc,
    setLowAndZeroCarbonTechnologiesImgSrc,
  ] = useState(null);
  const [
    energyEfficientColdStorageImgSrc,
    setEnergyEfficientColdStorageImgSrc,
  ] = useState(null);
  const [
    efficientVentilationAndACEquipmentImgSrc,
    setEfficientVentilationAndACEquipmentImgSrc,
  ] = useState(null);
  const [
    alternativePassiveDesignVideoSrc,
    setAlternativePassiveDesignVideoSrc,
  ] = useState(null);
  const [ecofriendlyRefrigerantsImgSrc, setEcofriendlyRefrigerantsImgSrc] =
    useState(null);
  const {
    greenhouseGasEmissionReduction,
    energyEfficientEquipment,
    renewalEnergyUse,
    energyMeteringAndMonitoring,
    lowAndZeroCarbonTechnologies,
    energyEfficientColdStorage,
    efficientVentilationAndACEquipment,
    alternativePassiveDesign,
    emboddiedEnergyInBuildingElement,
    ecofriendlyRefrigerants,
    energyEfficientEquipmentUrl,
    renewalEnergyUseUrl,
    energyMeteringAndMonitoringUrl,
    lowAndZeroCarbonTechnologiesUrl,
    energyEfficientColdStorageUrl,
    efficientVentilationAndACEquipmentUrl,
    alternativePassiveDesignUrl,
    ecofriendlyRefrigerantsUrl,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        greenhouseGasEmissionReduction,
        energyEfficientEquipment,
        renewalEnergyUse,
        energyMeteringAndMonitoring,
        lowAndZeroCarbonTechnologies,
        energyEfficientColdStorage,
        efficientVentilationAndACEquipment,
        alternativePassiveDesign,
        emboddiedEnergyInBuildingElement,
        ecofriendlyRefrigerants,
        energyEfficientEquipmentUrl,
        renewalEnergyUseUrl,
        energyMeteringAndMonitoringUrl,
        lowAndZeroCarbonTechnologiesUrl,
        energyEfficientColdStorageUrl,
        efficientVentilationAndACEquipmentUrl,
        alternativePassiveDesignUrl,
        ecofriendlyRefrigerantsUrl,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      greenhouseGasEmissionReduction,
      energyEfficientEquipment,
      renewalEnergyUse,
      energyMeteringAndMonitoring,
      lowAndZeroCarbonTechnologies,
      energyEfficientColdStorage,
      efficientVentilationAndACEquipment,
      alternativePassiveDesign,
      emboddiedEnergyInBuildingElement,
      ecofriendlyRefrigerants,
      energyEfficientEquipmentUrl,
      renewalEnergyUseUrl,
      energyMeteringAndMonitoringUrl,
      lowAndZeroCarbonTechnologiesUrl,
      energyEfficientColdStorageUrl,
      efficientVentilationAndACEquipmentUrl,
      alternativePassiveDesignUrl,
      ecofriendlyRefrigerantsUrl,
    ]
  );

  useEffect(() => {
    //Energy Efficient Equipments
    if (energyEfficientEquipmentUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEnergyEfficientEquipmentImgSrc(reader.result);
      };
      reader.readAsDataURL(energyEfficientEquipmentUrl.value);
    } else {
      setEnergyEfficientEquipmentImgSrc(null);
    }
    //Renewable Energy Use
    if (renewalEnergyUseUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRenewableEnergyUseImgSrc(reader.result);
      };
      reader.readAsDataURL(renewalEnergyUseUrl.value);
    } else {
      setRenewableEnergyUseImgSrc(null);
    }
    //Energy Metering And Monitoring
    if (energyMeteringAndMonitoringUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEnergyMeteringAndMonitoringImgSrc(reader.result);
      };
      reader.readAsDataURL(energyMeteringAndMonitoringUrl.value);
    } else {
      setEnergyMeteringAndMonitoringImgSrc(null);
    }
    //Low And Zero Carbon Technologies
    if (lowAndZeroCarbonTechnologiesUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLowAndZeroCarbonTechnologiesImgSrc(reader.result);
      };
      reader.readAsDataURL(lowAndZeroCarbonTechnologiesUrl.value);
    } else {
      setLowAndZeroCarbonTechnologiesImgSrc(null);
    }
    //Energy Efficient Cold Storage
    if (energyEfficientColdStorageUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEnergyEfficientColdStorageImgSrc(reader.result);
      };
      reader.readAsDataURL(energyEfficientColdStorageUrl.value);
    } else {
      setEnergyEfficientColdStorageImgSrc(null);
    }
    //Efficient Ventilation and A/C Equipment
    if (efficientVentilationAndACEquipmentUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEfficientVentilationAndACEquipmentImgSrc(reader.result);
      };
      reader.readAsDataURL(efficientVentilationAndACEquipmentUrl.value);
    } else {
      setEfficientVentilationAndACEquipmentImgSrc(null);
    }
    //Alternative Passive Design
    if (alternativePassiveDesignUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAlternativePassiveDesignVideoSrc(reader.result);
      };
      reader.readAsDataURL(alternativePassiveDesignUrl.value);
    } else {
      setAlternativePassiveDesignVideoSrc(null);
    }
    //Eco-friendly refrigerants
    if (ecofriendlyRefrigerantsUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEcofriendlyRefrigerantsImgSrc(reader.result);
      };
      reader.readAsDataURL(ecofriendlyRefrigerantsUrl.value);
    } else {
      setEcofriendlyRefrigerantsImgSrc(null);
    }
  }, [
    energyEfficientEquipmentUrl.value,
    renewalEnergyUseUrl.value,
    energyMeteringAndMonitoringUrl.value,
    lowAndZeroCarbonTechnologiesUrl.value,
    energyEfficientColdStorageUrl.value,
    efficientVentilationAndACEquipmentUrl.value,
    alternativePassiveDesignUrl.value,
    ecofriendlyRefrigerantsUrl.value,
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
        <Typography variant="h2">
          Energy Efficient And Carbon Emission Mgt. (EEMR)
        </Typography>
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
          <label htmlFor="greenhouseGasEmissionReduction">
            Greenhouse Gas Emission Reduction
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="greenhouseGasEmissionReduction"
            value={greenhouseGasEmissionReduction.value || ""}
            onChange={handleChange}
            error={!!greenhouseGasEmissionReduction.error}
            helperText={greenhouseGasEmissionReduction.error}
            required={greenhouseGasEmissionReduction.required}
          >
            {[...Array(5).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="energyEfficientEquipment">
            Energy Efficient Equipment
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="energyEfficientEquipment"
            value={energyEfficientEquipment.value || ""}
            onChange={handleChange}
            required={energyEfficientEquipment.required}
          >
            {[...Array(5).keys()].map((number) => (
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
                id="energyEfficientEquipmentUrl"
                type="file"
                accept="image/*"
                capture="environment"
                name="energyEfficientEquipmentUrl"
                onChange={handleChange}
                error={!!energyEfficientEquipmentUrl.error}
                helperText={energyEfficientEquipmentUrl.error}
                required={energyEfficientEquipmentUrl.required}
              />
            </Button>
          </label>
          {energyEfficientEquipmentUrl.value && (
            <span className="valueInput">
              ({energyEfficientEquipmentUrl.value.name})
            </span>
          )}
          <span>
            {energyEfficientEquipmentImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(energyEfficientEquipmentImgSrc);
                  setOpen(true);
                }}
                src={energyEfficientEquipmentImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{energyEfficientEquipmentUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="renewableEnergyUse">Renewable Energy Use</label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="renewalEnergyUse"
            value={renewalEnergyUse.value || ""}
            onChange={handleChange}
            error={!!renewalEnergyUse.error}
            helperText={renewalEnergyUse.error}
            required={renewalEnergyUse.required}
          >
            {[...Array(5).keys()].map((number) => (
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
                id="renewableEnergyUse"
                type="file"
                accept="image/*"
                capture="environment"
                name="renewalEnergyUseUrl"
                onChange={handleChange}
                error={!!renewalEnergyUseUrl.error}
                helperText={renewalEnergyUseUrl.error}
                required={renewalEnergyUseUrl.required}
              />
            </Button>
          </label>
          {renewalEnergyUseUrl.value && (
            <span className="valueInput">
              ({renewalEnergyUseUrl.value.name})
            </span>
          )}
          <span>
            {renewableEnergyUseImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(renewableEnergyUseImgSrc);
                  setOpen(true);
                }}
                src={renewableEnergyUseImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{renewalEnergyUseUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="energyMeteringAndMonitoring">
            Energy Metering And Monitoring
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="energyMeteringAndMonitoring"
            value={energyMeteringAndMonitoring.value || ""}
            onChange={handleChange}
            error={!!energyMeteringAndMonitoring.error}
            helperText={energyMeteringAndMonitoring.error}
            required={energyMeteringAndMonitoring.required}
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
                id="energyMeteringAndMonitoring"
                type="file"
                accept="image/*"
                capture="environment"
                name="energyMeteringAndMonitoringUrl"
                onChange={handleChange}
                error={!!energyMeteringAndMonitoringUrl.error}
                helperText={energyMeteringAndMonitoringUrl.error}
                required={energyMeteringAndMonitoringUrl.required}
              />
            </Button>
          </label>
          {energyMeteringAndMonitoringUrl.value && (
            <span className="valueInput">
              ({energyMeteringAndMonitoringUrl.value.name})
            </span>
          )}
          <span>
            {energyMeteringAndMonitoringImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(energyMeteringAndMonitoringImgSrc);
                  setOpen(true);
                }}
                src={energyMeteringAndMonitoringImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {energyMeteringAndMonitoringUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="lowAndZeroCarbonTechnologies">
            Low And Zero Carbon Technologies
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="lowAndZeroCarbonTechnologies"
            value={lowAndZeroCarbonTechnologies.value || ""}
            onChange={handleChange}
            error={!!lowAndZeroCarbonTechnologies.error}
            helperText={lowAndZeroCarbonTechnologies.error}
            required={lowAndZeroCarbonTechnologies.required}
          >
            {[...Array(5).keys()].map((number) => (
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
                id="lowAndZeroCarbonTechnologies"
                type="file"
                accept="image/*"
                capture="environment"
                name="lowAndZeroCarbonTechnologiesUrl"
                onChange={handleChange}
                error={!!lowAndZeroCarbonTechnologiesUrl.error}
                helperText={lowAndZeroCarbonTechnologiesUrl.error}
                required={lowAndZeroCarbonTechnologiesUrl.required}
              />
            </Button>
          </label>
          {lowAndZeroCarbonTechnologiesUrl.value && (
            <span className="valueInput">
              ({lowAndZeroCarbonTechnologiesUrl.value.name})
            </span>
          )}
          <span>
            {lowAndZeroCarbonTechnologiesImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(lowAndZeroCarbonTechnologiesImgSrc);
                  setOpen(true);
                }}
                src={lowAndZeroCarbonTechnologiesImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {lowAndZeroCarbonTechnologiesUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="energyEfficientColdStorage">
            Energy Efficient Cold Storage
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="energyEfficientColdStorage"
            value={energyEfficientColdStorage.value || ""}
            onChange={handleChange}
            error={!!energyEfficientColdStorage.error}
            helperText={energyEfficientColdStorage.error}
            required={energyEfficientColdStorage.required}
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
                id="energyEfficientColdStorage"
                type="file"
                accept="image/*"
                capture="environment"
                name="energyEfficientColdStorageUrl"
                onChange={handleChange}
                error={!!energyEfficientColdStorageUrl.error}
                helperText={energyEfficientColdStorageUrl.error}
                required={energyEfficientColdStorageUrl.required}
              />
            </Button>
          </label>
          {energyEfficientColdStorageUrl.value && (
            <span className="valueInput">
              ({energyEfficientColdStorageUrl.value.name})
            </span>
          )}
          <span>
            {energyEfficientColdStorageImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(energyEfficientColdStorageImgSrc);
                  setOpen(true);
                }}
                src={energyEfficientColdStorageImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{energyEfficientEquipmentUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="efficientVentilationAndACEquipment">
            Efficient Ventilation And A/C Equipment
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="efficientVentilationAndACEquipment"
            value={efficientVentilationAndACEquipment.value || ""}
            onChange={handleChange}
            error={!!efficientVentilationAndACEquipment.error}
            helperText={efficientVentilationAndACEquipment.error}
            required={efficientVentilationAndACEquipment.required}
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
                id="efficientVentilationAndACEquipment"
                type="file"
                accept="image/*"
                capture="environment"
                name="efficientVentilationAndACEquipmentUrl"
                onChange={handleChange}
                error={!!efficientVentilationAndACEquipmentUrl.error}
                helperText={efficientVentilationAndACEquipmentUrl.error}
                required={efficientVentilationAndACEquipmentUrl.required}
              />
            </Button>
          </label>
          {efficientVentilationAndACEquipmentUrl.value && (
            <span className="valueInput">
              ({efficientVentilationAndACEquipmentUrl.value.name})
            </span>
          )}
          <span>
            {efficientVentilationAndACEquipmentImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(efficientVentilationAndACEquipmentImgSrc);
                  setOpen(true);
                }}
                src={efficientVentilationAndACEquipmentImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {efficientVentilationAndACEquipmentUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="alternativePassiveDesign">
            Alternative Passive Design
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="alternativePassiveDesign"
            value={alternativePassiveDesign.value || ""}
            onChange={handleChange}
            error={!!alternativePassiveDesign.error}
            helperText={alternativePassiveDesign.error}
            required={alternativePassiveDesign.required}
          >
            {[...Array(5).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="alternativePassiveDesignUrl">
            <Button variant="contained" component="label">
              <VideoCallIcon />
              <input
                style={{ display: "none" }}
                id="alternativePassiveDesign"
                type="file"
                accept="video/*"
                capture="environment"
                name="alternativePassiveDesignUrl"
                onChange={handleChange}
                error={!!alternativePassiveDesignUrl.error}
                helperText={alternativePassiveDesignUrl.error}
                required={alternativePassiveDesignUrl.required}
              />
            </Button>
          </label>
          {alternativePassiveDesignUrl.value && (
            <span className="valueInput">
              ({alternativePassiveDesignUrl.value.name})
            </span>
          )}
          <span>
            {alternativePassiveDesignVideoSrc && (
              <video
                onClick={() => {
                  setPreviewVideoSrc(alternativePassiveDesignVideoSrc);
                  setOpenVideo(true);
                }}
                width="50"
                height="50"
                style={{ cursor: "pointer" }}
              >
                <source
                  src={alternativePassiveDesignVideoSrc}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </span>
          <h5 style={{ color: "red" }}>{alternativePassiveDesignUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="emboddiedEnergyInBuildingElement">
            Embodied Energy In Building Elements
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="emboddiedEnergyInBuildingElement"
            value={emboddiedEnergyInBuildingElement.value || ""}
            onChange={handleChange}
            error={!!emboddiedEnergyInBuildingElement.error}
            helperText={emboddiedEnergyInBuildingElement.error}
            required={emboddiedEnergyInBuildingElement.required}
          >
            {[...Array(4).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="ecofriendlyRefrigerants">
            Eco-friendly Refrigerants.
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="ecofriendlyRefrigerants"
            value={ecofriendlyRefrigerants.value || ""}
            onChange={handleChange}
            error={!!ecofriendlyRefrigerants.error}
            helperText={ecofriendlyRefrigerants.error}
            required={ecofriendlyRefrigerants.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="ecofriendlyRefrigerantsUrl">
            <Button variant="contained" component="label">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="ecofriendlyRefrigerants"
                type="file"
                accept="image/*"
                capture="environment"
                name="ecofriendlyRefrigerantsUrl"
                onChange={handleChange}
                error={!!ecofriendlyRefrigerantsUrl.error}
                helperText={ecofriendlyRefrigerantsUrl.error}
                required={ecofriendlyRefrigerantsUrl.required}
              />
            </Button>
          </label>
          {ecofriendlyRefrigerantsUrl.value && (
            <span className="valueInput">
              ({ecofriendlyRefrigerantsUrl.value.name})
            </span>
          )}
          <span>
            {ecofriendlyRefrigerantsImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(ecofriendlyRefrigerantsImgSrc);
                  setOpen(true);
                }}
                src={ecofriendlyRefrigerantsImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{ecofriendlyRefrigerantsUrl.error}</h5>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button
          onClick={handleBack}
          sx={{ mr: 1 }}
          color="secondary"
          variant="contained"
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
