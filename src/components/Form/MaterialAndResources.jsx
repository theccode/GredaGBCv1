import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
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
      <Box
        fullWidth
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "green",
        }}
      >
        <Typography variant="h2">Materials & Resources (MR) </Typography>
      </Box>
      <PreviewModal open={open} setOpen={setOpen}>
        <img src={previewImgSrc} />
      </PreviewModal>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="lifeCycleImpactReduction">
            Life Cycle Impact Reduction
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="lifeCycleImpactReduction"
            value={lifeCycleImpactReduction.value || ""}
            onChange={handleChange}
            error={!!lifeCycleImpactReduction.error}
            helperText={lifeCycleImpactReduction.error}
            required={lifeCycleImpactReduction.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="environmentalProductDeclaration">
            Environmental Product Declaration
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="environmentalProductDeclaration"
            value={environmentalProductDeclaration.value || ""}
            onChange={handleChange}
            required={environmentalProductDeclaration.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="environmentalProductDeclarationUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="responsibleSourcingOfRawMaterials">
            Responsible Sourcing of Raw Materials.
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="responsibleSourcingOfRawMaterials"
            value={responsibleSourcingOfRawMaterials.value || ""}
            onChange={handleChange}
            error={!!responsibleSourcingOfRawMaterials.error}
            helperText={responsibleSourcingOfRawMaterials.error}
            required={responsibleSourcingOfRawMaterials.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <label htmlFor="sustainableGreenProducts">
            Sustainable/Green Products
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="sustainableGreenProducts"
            value={sustainableGreenProducts.value || ""}
            onChange={handleChange}
            error={!!sustainableGreenProducts.error}
            helperText={sustainableGreenProducts.error}
            required={sustainableGreenProducts.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="sustainableGreenProductsUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="materialsWithRecycledContent">
            Materials With Recycled Content
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="materialsWithRecycledContent"
            value={materialsWithRecycledContent.value || ""}
            onChange={handleChange}
            error={!!materialsWithRecycledContent.error}
            helperText={materialsWithRecycledContent.error}
            required={materialsWithRecycledContent.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="materialsWithRecycledContentUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="materialsWithLowEmbodiedEnergy">
            Materials With Low Embodied Energy
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="materialsWithLowEmbodiedEnergy"
            value={materialsWithLowEmbodiedEnergy.value || ""}
            onChange={handleChange}
            error={!!materialsWithLowEmbodiedEnergy.error}
            helperText={materialsWithLowEmbodiedEnergy.error}
            required={materialsWithLowEmbodiedEnergy.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="materialsWithLowEmbodiedEnergyUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="reusedMaterials">Reused Materials</label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="reusedMaterials"
            value={reusedMaterials.value || ""}
            onChange={handleChange}
            error={!!reusedMaterials.error}
            helperText={reusedMaterials.error}
            required={reusedMaterials.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="reusedMaterialsUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="locallySourceMaterials">
            Locally Sourced Materials
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="locallySourcedMaterials"
            value={locallySourcedMaterials.value || ""}
            onChange={handleChange}
            error={!!locallySourcedMaterials.error}
            helperText={locallySourcedMaterials.error}
            required={locallySourcedMaterials.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="locallySourcedMaterialsUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="materialsWithThirdpartyCertification">
            Materials With Third-Party Certification/Verifications
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="materialsWithThirdpartyCertification"
            value={materialsWithThirdpartyCertification.value || ""}
            onChange={handleChange}
            error={!!materialsWithThirdpartyCertification.error}
            helperText={materialsWithThirdpartyCertification.error}
            required={materialsWithThirdpartyCertification.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="materialsWithThirdpartyCertificationUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
