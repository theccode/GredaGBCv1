import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            label="Greenhouse Gas Emission Reduction"
            name="greenhouseGasEmissionReduction"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            placeholder="Greenhouse Gas Emission Reduction"
            value={greenhouseGasEmissionReduction.value}
            onChange={handleChange}
            error={!!greenhouseGasEmissionReduction.error}
            helperText={greenhouseGasEmissionReduction.error}
            required={greenhouseGasEmissionReduction.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            placeholder="Energy Efficient Equipment"
            InputLabelProps={{
              shrink: true,
            }}
            label="Energy Efficient Equipment"
            name="energyEfficientEquipment"
            defaultValue={energyEfficientEquipment.value}
            onChange={handleChange}
            required={energyEfficientEquipment.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput1">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            label="Renewable Energy Use"
            name="renewalEnergyUse"
            placeholder="Renewable Energy Use"
            value={renewalEnergyUse.value}
            onChange={handleChange}
            error={!!renewalEnergyUse.error}
            helperText={renewalEnergyUse.error}
            required={renewalEnergyUse.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput1">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Energy Metering And Monitoring"
            name="energyMeteringAndMonitoring"
            placeholder="Energy Metering And Monitoring"
            value={energyMeteringAndMonitoring.value}
            onChange={handleChange}
            error={!!energyMeteringAndMonitoring.error}
            helperText={energyMeteringAndMonitoring.error}
            required={energyMeteringAndMonitoring.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput1">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            label="Low And Zero Carbon Technologies"
            name="lowAndZeroCarbonTechnologies"
            placeholder="Low And Zero Carbon Technologies"
            value={lowAndZeroCarbonTechnologies.value}
            onChange={handleChange}
            error={!!lowAndZeroCarbonTechnologies.error}
            helperText={lowAndZeroCarbonTechnologies.error}
            required={lowAndZeroCarbonTechnologies.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput1">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Energy Efficient Cold Storage"
            name="energyEfficientColdStorage"
            placeholder="Energy Efficient Cold Storage"
            value={energyEfficientColdStorage.value}
            onChange={handleChange}
            error={!!energyEfficientColdStorage.error}
            helperText={energyEfficientColdStorage.error}
            required={energyEfficientColdStorage.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput1">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Efficient Ventilation And A/C Equipment"
            name="efficientVentilationAndACEquipment"
            placeholder="Efficient Ventilation And A/C Equipment"
            value={efficientVentilationAndACEquipment.value}
            onChange={handleChange}
            error={!!efficientVentilationAndACEquipment.error}
            helperText={efficientVentilationAndACEquipment.error}
            required={efficientVentilationAndACEquipment.required}
          />
          <Button variant="contained" component="label">
            <label for="cameraFileInput1">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            label="Alternative Passive Design"
            name="alternativePassiveDesign"
            placeholder="Alternative Passive Design"
            value={alternativePassiveDesign.value}
            onChange={handleChange}
            error={!!alternativePassiveDesign.error}
            helperText={alternativePassiveDesign.error}
            required={alternativePassiveDesign.required}
          />
          <Button variant="contained" component="label">
            <label for="alternativePassiveDesignUrl">
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
            </label>
          </Button>
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
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 3 } }}
            label="Emboddied Energy In Building Elements"
            name="emboddiedEnergyInBuildingElement"
            placeholder="Emboddied Energy In Building Elements"
            value={emboddiedEnergyInBuildingElement.value}
            onChange={handleChange}
            error={!!emboddiedEnergyInBuildingElement.error}
            helperText={emboddiedEnergyInBuildingElement.error}
            required={emboddiedEnergyInBuildingElement.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Eco-friendly Refrigerants"
            name="ecofriendlyRefrigerants"
            placeholder="Eco-friendly Refrigerants"
            value={ecofriendlyRefrigerants.value}
            onChange={handleChange}
            error={!!ecofriendlyRefrigerants.error}
            helperText={ecofriendlyRefrigerants.error}
            required={ecofriendlyRefrigerants.required}
          />
          <Button variant="contained" component="label">
            <label for="ecofriendlyRefrigerantsUrl">
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
            </label>
          </Button>
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
