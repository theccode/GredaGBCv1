import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
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
      <Box
        fullWidth
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "green",
        }}
      >
        <Typography variant="h2">Innovation (IN)</Typography>
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
          <label htmlFor="innovativeTechnologies">
            Innovative Technologies
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="innovativeTechnologies"
            value={innovativeTechnologies.value || ""}
            onChange={handleChange}
            error={!!innovativeTechnologies.error}
            helperText={innovativeTechnologies.error}
            required={innovativeTechnologies.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="innovativeTechnologiesUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="innovativeMaterialsAndProducts">
            Innovative Materials & Products
          </label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="innovativeMaterialsAndProducts"
            value={innovativeMaterialsAndProducts.value || ""}
            onChange={handleChange}
            required={innovativeMaterialsAndProducts.required}
          >
            {[...Array(3).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="innovativeMaterialsAndProductsUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
          <label htmlFor="innovativeDesign">Innovative Design</label>
          <Select
            variant={variant}
            margin={margin}
            fullWidth
            type="number"
            name="innovativeDesign"
            value={innovativeDesign.value}
            onChange={handleChange}
            error={!!innovativeDesign.error}
            helperText={innovativeDesign.error}
            required={innovativeDesign.required}
          >
            {[...Array(5).keys()].map((number) => (
              <MenuItem key={number} value={String(number)}>
                {number}
              </MenuItem>
            ))}
          </Select>
          <label for="innovativeDesignUrl">
            <Button variant="contained" component="label">
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
            </Button>
          </label>
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
