import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PreviewModal from "../Modal/PreviewModal";
export default function MaterialAndResources() {
  const [
    environmentalProductDeclarationImgSrc,
    setEnvironmentalProductDeclarationImgSrc,
  ] = useState(null);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [open, setOpen] = useState(false);
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const [sustainableGreenProductsImgSrc, setSustainableGreenProductsImgSrc] =
    useState(null);
  const [
    materialsWithRecycledContentImgSrc,
    setMaterialsWithRecycledContentImgSrc,
  ] = useState(null);
  const [
    materialsWithLowEmbodiedEnergyImgSrc,
    setMaterialsWithLowEmbodiedEnergyImgSrc,
  ] = useState(null);
  const [reusedMaterialsImgSrc, setReusedMaterialsImgSrc] = useState(null);
  const [locallySourcedMaterialsImgSrc, setLocallySourcedMaterialsImgSrc] =
    useState(null);
  const [
    materialsWithThirdpartyCertificationImgSrc,
    setMaterialsWithThirdpartyCertificationImgSrc,
  ] = useState(null);
  const {
    lifeCycleImpactReduction,
    environmentalProductDeclaration,
    responsibleSourcingOfRawMaterials,
    sustainableGreenProducts,
    materialsWithRecycledContent,
    materialsWithLowEmbodiedEnergy,
    reusedMaterials,
    locallySourcedMaterials,
    materialsWithThirdpartyCertification,
    environmentalProductDeclarationUrl,
    sustainableGreenProductsUrl,
    materialsWithRecycledContentUrl,
    materialsWithLowEmbodiedEnergyUrl,
    reusedMaterialsUrl,
    locallySourcedMaterialsUrl,
    materialsWithThirdpartyCertificationUrl,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        lifeCycleImpactReduction,
        environmentalProductDeclaration,
        responsibleSourcingOfRawMaterials,
        sustainableGreenProducts,
        materialsWithRecycledContent,
        materialsWithLowEmbodiedEnergy,
        reusedMaterials,
        locallySourcedMaterials,
        materialsWithThirdpartyCertification,
        environmentalProductDeclarationUrl,
        sustainableGreenProductsUrl,
        materialsWithRecycledContentUrl,
        materialsWithLowEmbodiedEnergyUrl,
        reusedMaterialsUrl,
        locallySourcedMaterialsUrl,
        materialsWithThirdpartyCertificationUrl,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      lifeCycleImpactReduction,
      environmentalProductDeclaration,
      responsibleSourcingOfRawMaterials,
      sustainableGreenProducts,
      materialsWithRecycledContent,
      materialsWithLowEmbodiedEnergy,
      reusedMaterials,
      locallySourcedMaterials,
      materialsWithThirdpartyCertification,
      environmentalProductDeclarationUrl,
      sustainableGreenProductsUrl,
      materialsWithRecycledContentUrl,
      materialsWithLowEmbodiedEnergyUrl,
      reusedMaterialsUrl,
      locallySourcedMaterialsUrl,
      materialsWithThirdpartyCertificationUrl,
    ]
  );

  useEffect(() => {
    //Environmental Product Declaration
    if (environmentalProductDeclarationUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEnvironmentalProductDeclarationImgSrc(reader.result);
      };
      reader.readAsDataURL(environmentalProductDeclarationUrl.value);
    } else {
      setEnvironmentalProductDeclarationImgSrc(null);
    }
    //Sustainable/Green Products
    if (sustainableGreenProductsUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSustainableGreenProductsImgSrc(reader.result);
      };
      reader.readAsDataURL(sustainableGreenProductsUrl.value);
    } else {
      setSustainableGreenProductsImgSrc(null);
    }
    //Materials with recycled content
    if (materialsWithRecycledContentUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMaterialsWithRecycledContentImgSrc(reader.result);
      };
      reader.readAsDataURL(materialsWithRecycledContentUrl.value);
    } else {
      setMaterialsWithRecycledContentImgSrc(null);
    }
    //Materials with low embodied energy
    if (materialsWithLowEmbodiedEnergyUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMaterialsWithLowEmbodiedEnergyImgSrc(reader.result);
      };
      reader.readAsDataURL(materialsWithLowEmbodiedEnergyUrl.value);
    } else {
      setMaterialsWithLowEmbodiedEnergyImgSrc(null);
    }
    //Materials with low embodied energy
    if (reusedMaterialsUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReusedMaterialsImgSrc(reader.result);
      };
      reader.readAsDataURL(reusedMaterialsUrl.value);
    } else {
      setReusedMaterialsImgSrc(null);
    }
    //Locally Sourced Materials
    if (locallySourcedMaterialsUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocallySourcedMaterialsImgSrc(reader.result);
      };
      reader.readAsDataURL(locallySourcedMaterialsUrl.value);
    } else {
      setLocallySourcedMaterialsImgSrc(null);
    }
    //Materials with third-party certification/verification
    if (materialsWithThirdpartyCertificationUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMaterialsWithThirdpartyCertificationImgSrc(reader.result);
      };
      reader.readAsDataURL(materialsWithThirdpartyCertificationUrl.value);
    } else {
      setMaterialsWithThirdpartyCertificationImgSrc(null);
    }
  }, [
    environmentalProductDeclarationUrl.value,
    sustainableGreenProductsUrl.value,
    materialsWithRecycledContentUrl.value,
    materialsWithLowEmbodiedEnergyUrl.value,
    reusedMaterialsUrl.value,
    locallySourcedMaterialsUrl.value,
    materialsWithThirdpartyCertificationUrl.value,
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
            label="Life Cycle Impact Reduction"
            name="lifeCycleImpactReduction"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            placeholder="Life Cycle Impact Reduction"
            value={lifeCycleImpactReduction.value}
            onChange={handleChange}
            error={!!lifeCycleImpactReduction.error}
            helperText={lifeCycleImpactReduction.error}
            required={lifeCycleImpactReduction.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            placeholder="Environmental Product Declaration"
            InputLabelProps={{
              shrink: true,
            }}
            label="Environmental Product Declaration"
            name="environmentalProductDeclaration"
            defaultValue={environmentalProductDeclaration.value}
            onChange={handleChange}
            required={environmentalProductDeclaration.required}
          />
          <Button variant="contained" component="label">
            <label for="environmentalProductDeclarationUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="environmentalProductDeclaration"
                type="file"
                accept="image/*"
                capture="environment"
                name="environmentalProductDeclarationUrl"
                onChange={handleChange}
                error={!!environmentalProductDeclarationUrl.error}
                helperText={environmentalProductDeclarationUrl.error}
                required={environmentalProductDeclarationUrl.required}
              />
            </label>
          </Button>
          {environmentalProductDeclarationUrl.value && (
            <span className="valueInput">
              ({environmentalProductDeclarationUrl.value.name})
            </span>
          )}
          <span>
            {environmentalProductDeclarationImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(environmentalProductDeclarationImgSrc);
                  setOpen(true);
                }}
                src={environmentalProductDeclarationImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {environmentalProductDeclarationUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Resposible Sourcing of Raw Materials"
            name="responsibleSourcingOfRawMaterials"
            placeholder="Resposible Sourcing of Raw Materials"
            value={responsibleSourcingOfRawMaterials.value}
            onChange={handleChange}
            error={!!responsibleSourcingOfRawMaterials.error}
            helperText={responsibleSourcingOfRawMaterials.error}
            required={responsibleSourcingOfRawMaterials.required}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Sustainable/Green Products"
            name="sustainableGreenProducts"
            placeholder="Sustainable/Green Products"
            value={sustainableGreenProducts.value}
            onChange={handleChange}
            error={!!sustainableGreenProducts.error}
            helperText={sustainableGreenProducts.error}
            required={sustainableGreenProducts.required}
          />
          <Button variant="contained" component="label">
            <label for="sustainableGreenProductsUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="sustainableGreenProducts"
                type="file"
                accept="image/*"
                capture="environment"
                name="sustainableGreenProductsUrl"
                onChange={handleChange}
                error={!!sustainableGreenProductsUrl.error}
                helperText={sustainableGreenProductsUrl.error}
                required={sustainableGreenProductsUrl.required}
              />
            </label>
          </Button>
          {sustainableGreenProductsUrl.value && (
            <span className="valueInput">
              ({sustainableGreenProductsUrl.value.name})
            </span>
          )}
          <span>
            {sustainableGreenProductsImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(sustainableGreenProductsImgSrc);
                  setOpen(true);
                }}
                src={sustainableGreenProductsImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{sustainableGreenProductsUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Materials With Recycled Content"
            name="materialsWithRecycledContent"
            placeholder="Materials With Recycled Content"
            value={materialsWithRecycledContent.value}
            onChange={handleChange}
            error={!!materialsWithRecycledContent.error}
            helperText={materialsWithRecycledContent.error}
            required={materialsWithRecycledContent.required}
          />
          <Button variant="contained" component="label">
            <label for="materialsWithRecycledContentUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="materialsWithRecycledContent"
                type="file"
                accept="image/*"
                capture="environment"
                name="materialsWithRecycledContentUrl"
                onChange={handleChange}
                error={!!materialsWithRecycledContentUrl.error}
                helperText={materialsWithRecycledContentUrl.error}
                required={materialsWithRecycledContentUrl.required}
              />
            </label>
          </Button>
          {materialsWithRecycledContentUrl.value && (
            <span className="valueInput">
              ({materialsWithRecycledContentUrl.value.name})
            </span>
          )}
          <span>
            {materialsWithRecycledContentImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(materialsWithRecycledContentImgSrc);
                  setOpen(true);
                }}
                src={materialsWithRecycledContentImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {materialsWithRecycledContentUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Materials With Low Emboddied Energy"
            name="materialsWithLowEmbodiedEnergy"
            placeholder="Materials With Low Emboddied Energy"
            value={materialsWithLowEmbodiedEnergy.value}
            onChange={handleChange}
            error={!!materialsWithLowEmbodiedEnergy.error}
            helperText={materialsWithLowEmbodiedEnergy.error}
            required={materialsWithLowEmbodiedEnergy.required}
          />
          <Button variant="contained" component="label">
            <label for="materialsWithLowEmbodiedEnergyUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="materialsWithLowEmbodiedEnergy"
                type="file"
                accept="image/*"
                capture="environment"
                name="materialsWithLowEmbodiedEnergyUrl"
                onChange={handleChange}
                error={!!materialsWithLowEmbodiedEnergyUrl.error}
                helperText={materialsWithLowEmbodiedEnergyUrl.error}
                required={materialsWithLowEmbodiedEnergyUrl.required}
              />
            </label>
          </Button>
          {materialsWithLowEmbodiedEnergyUrl.value && (
            <span className="valueInput">
              ({materialsWithLowEmbodiedEnergyUrl.value.name})
            </span>
          )}
          <span>
            {materialsWithLowEmbodiedEnergyImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(materialsWithLowEmbodiedEnergyImgSrc);
                  setOpen(true);
                }}
                src={materialsWithLowEmbodiedEnergyImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {materialsWithLowEmbodiedEnergyUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Reused Materials"
            name="reusedMaterials"
            placeholder="Reused Materials"
            value={reusedMaterials.value}
            onChange={handleChange}
            error={!!reusedMaterials.error}
            helperText={reusedMaterials.error}
            required={reusedMaterials.required}
          />
          <Button variant="contained" component="label">
            <label for="reusedMaterialsUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="reusedMaterialsUrl"
                type="file"
                accept="image/*"
                capture="environment"
                name="reusedMaterialsUrl"
                onChange={handleChange}
                error={!!reusedMaterialsUrl.error}
                helperText={reusedMaterialsUrl.error}
                required={reusedMaterialsUrl.required}
              />
            </label>
          </Button>
          {reusedMaterialsUrl.value && (
            <span className="valueInput">
              ({reusedMaterialsUrl.value.name})
            </span>
          )}
          <span>
            {reusedMaterialsImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(reusedMaterialsImgSrc);
                  setOpen(true);
                }}
                src={reusedMaterialsImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{reusedMaterialsUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Locally Sourced Materials"
            name="locallySourcedMaterials"
            placeholder="Locally Sourced Materials"
            value={locallySourcedMaterials.value}
            onChange={handleChange}
            error={!!locallySourcedMaterials.error}
            helperText={locallySourcedMaterials.error}
            required={locallySourcedMaterials.required}
          />
          <Button variant="contained" component="label">
            <label for="locallySourcedMaterialsUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="locallySourcedMaterials"
                type="file"
                accept="image/*"
                capture="environment"
                name="locallySourcedMaterialsUrl"
                onChange={handleChange}
                error={!!locallySourcedMaterialsUrl.error}
                helperText={locallySourcedMaterialsUrl.error}
                required={locallySourcedMaterialsUrl.required}
              />
            </label>
          </Button>
          {locallySourcedMaterialsUrl.value && (
            <span className="valueInput">
              ({locallySourcedMaterialsUrl.value.name})
            </span>
          )}
          <span>
            {locallySourcedMaterialsImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(locallySourcedMaterialsImgSrc);
                  setOpen(true);
                }}
                src={locallySourcedMaterialsImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{locallySourcedMaterialsUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            label="Materials With Third-Party Certification/Verification"
            name="materialsWithThirdpartyCertification"
            placeholder="Materials With Third-Party Certification/Verification"
            value={materialsWithThirdpartyCertification.value}
            onChange={handleChange}
            error={!!materialsWithThirdpartyCertification.error}
            helperText={materialsWithThirdpartyCertification.error}
            required={materialsWithThirdpartyCertification.required}
          />
          <Button variant="contained" component="label">
            <label for="materialsWithThirdpartyCertificationUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="materialsWithThirdpartyCertification"
                type="file"
                accept="image/*"
                capture="environment"
                name="materialsWithThirdpartyCertificationUrl"
                onChange={handleChange}
                error={!!materialsWithThirdpartyCertificationUrl.error}
                helperText={materialsWithThirdpartyCertificationUrl.error}
                required={materialsWithThirdpartyCertificationUrl.required}
              />
            </label>
          </Button>
          {materialsWithThirdpartyCertificationUrl.value && (
            <span className="valueInput">
              ({materialsWithThirdpartyCertificationUrl.value.name})
            </span>
          )}
          <span>
            {materialsWithThirdpartyCertificationImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(materialsWithThirdpartyCertificationImgSrc);
                  setOpen(true);
                }}
                src={materialsWithThirdpartyCertificationImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {materialsWithThirdpartyCertificationUrl.error}
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
