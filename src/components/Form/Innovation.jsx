import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../../context/form.context";
import PreviewModal from "../Modal/PreviewModal";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";

export default function Innovation() {
  const [open, setOpen] = useState(false);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [previewVideoSrc, setPreviewVideoSrc] = useState("");
  const [openVideo, setOpenVideo] = useState(false);
  const [
    innovativeMaterialsAndProductsImgSrc,
    setInnovativeMaterialsAndProductsImgSrc,
  ] = useState(null);
  const [innovativeTechnologiesVideoSrc, setInnovativeTechnologiesVideoSrc] =
    useState(null);
  const [innovativeDesignImgSrc, setInnovativeDesignImgSrc] = useState(null);
  const { formValues, handleChange, handleBack, handleNext, variant, margin } =
    useContext(AppContext);
  const {
    innovativeTechnologies,
    innovativeMaterialsAndProducts,
    innovativeDesign,
    innovativeMaterialsAndProductsUrl,
    innovativeDesignUrl,
    innovativeTechnologiesUrl,
  } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({
        innovativeTechnologies,
        innovativeMaterialsAndProducts,
        innovativeDesign,
        innovativeMaterialsAndProductsUrl,
        innovativeDesignUrl,
        innovativeTechnologiesUrl,
      }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [
      formValues,
      innovativeTechnologies,
      innovativeMaterialsAndProducts,
      innovativeDesign,
      innovativeMaterialsAndProductsUrl,
      innovativeDesignUrl,
      innovativeTechnologiesUrl,
    ]
  );
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
  };
  useEffect(() => {
    //Innovative Technologies
    if (innovativeTechnologiesUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInnovativeTechnologiesVideoSrc(reader.result);
      };
      reader.readAsDataURL(innovativeTechnologiesUrl.value);
    } else {
      setInnovativeTechnologiesVideoSrc(null);
    }
    //Innovative Materials and Products
    if (innovativeMaterialsAndProductsUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInnovativeMaterialsAndProductsImgSrc(reader.result);
      };
      reader.readAsDataURL(innovativeMaterialsAndProductsUrl.value);
    } else {
      setInnovativeMaterialsAndProductsImgSrc(null);
    }
    //Innovative Design
    if (innovativeDesignUrl.value) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInnovativeDesignImgSrc(reader.result);
      };
      reader.readAsDataURL(innovativeDesignUrl.value);
    } else {
      setInnovativeDesignImgSrc(null);
    }
  }, [
    innovativeMaterialsAndProductsUrl.value,
    innovativeDesignUrl.value,
    innovativeTechnologiesUrl.value,
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
            label="Innovative Technologies"
            name="innovativeTechnologies"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            placeholder="Innovative Technologies"
            value={innovativeTechnologies.value}
            onChange={handleChange}
            error={!!innovativeTechnologies.error}
            helperText={innovativeTechnologies.error}
            required={innovativeTechnologies.required}
          />
          <Button variant="contained" component="label">
            <label for="innovativeTechnologiesUrl">
              <VideoCallIcon />
              <input
                style={{ display: "none" }}
                id="highEfficiencyWaterFixtures"
                type="file"
                accept="video/*"
                capture="environment"
                name="innovativeTechnologiesUrl"
                onChange={handleChange}
                error={!!innovativeTechnologiesUrl.error}
                helperText={innovativeTechnologiesUrl.error}
                required={innovativeTechnologiesUrl.required}
              />
            </label>
          </Button>
          {innovativeTechnologiesUrl.value && (
            <span className="valueInput">
              ({innovativeTechnologiesUrl.value.name})
            </span>
          )}
          <span>
            {innovativeTechnologiesVideoSrc && (
              <video
                onClick={() => {
                  setPreviewVideoSrc(innovativeTechnologiesVideoSrc);
                  setOpenVideo(true);
                }}
                width="50"
                height="50"
                style={{ cursor: "pointer" }}
              >
                <source src={innovativeTechnologiesVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </span>
          <h5 style={{ color: "red" }}>{innovativeTechnologiesUrl.error}</h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 2 } }}
            placeholder="Innovative Materials And Products"
            InputLabelProps={{
              shrink: true,
            }}
            label="Innovative Materials And Products"
            name="innovativeMaterialsAndProducts"
            defaultValue={innovativeMaterialsAndProducts.value}
            onChange={handleChange}
            required={innovativeMaterialsAndProducts.required}
          />
          <Button variant="contained" component="label">
            <label for="innovativeMaterialsAndProductsUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="innovativeMaterialsAndProducts"
                type="file"
                accept="image/*"
                capture="environment"
                name="innovativeMaterialsAndProductsUrl"
                onChange={handleChange}
                error={!!innovativeMaterialsAndProductsUrl.error}
                helperText={innovativeMaterialsAndProductsUrl.error}
                required={innovativeMaterialsAndProductsUrl.required}
              />
            </label>
          </Button>
          {innovativeMaterialsAndProductsUrl.value && (
            <span className="valueInput">
              ({innovativeMaterialsAndProductsUrl.value.name})
            </span>
          )}
          <span>
            {innovativeMaterialsAndProductsImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(innovativeMaterialsAndProductsImgSrc);
                  setOpen(true);
                }}
                src={innovativeMaterialsAndProductsImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>
            {innovativeMaterialsAndProductsUrl.error}
          </h5>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0, max: 4 } }}
            label="Innovative Design"
            name="innovativeDesign"
            placeholder="Innovative Design"
            value={innovativeDesign.value}
            onChange={handleChange}
            error={!!innovativeDesign.error}
            helperText={innovativeDesign.error}
            required={innovativeDesign.required}
          />
          <Button variant="contained" component="label">
            <label for="innovativeDesignUrl">
              <AddPhotoAlternateIcon />
              <input
                style={{ display: "none" }}
                id="innovativeMaterialsAndProducts"
                type="file"
                accept="image/*"
                capture="environment"
                name="innovativeDesignUrl"
                onChange={handleChange}
                error={!!innovativeDesignUrl.error}
                helperText={innovativeDesignUrl.error}
                required={innovativeDesignUrl.required}
              />
            </label>
          </Button>
          {innovativeDesignUrl.value && (
            <span className="valueInput">
              ({innovativeDesignUrl.value.name})
            </span>
          )}
          <span>
            {innovativeDesignImgSrc && (
              <img
                onClick={() => {
                  setPreviewImgSrc(innovativeDesignImgSrc);
                  setOpen(true);
                }}
                src={innovativeDesignImgSrc}
                width="50"
                height="50"
                alt=""
              />
            )}
          </span>
          <h5 style={{ color: "red" }}>{innovativeDesignUrl.error}</h5>
        </Grid>
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
