import { Box, Button, TextField } from "@mui/material";
import { Formik, Field } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  createUser,
  updateUserProfile,
  uploadImageToFirebase,
} from "../../utils/firebase/firebase.util";
import SuccessModal from "../Modal/SuccessModal";
import { useState } from "react";
import { errors } from "../../utils/error/error.util";
import { encode as base64_encode } from "base-64";
import { updatePhoneNumber } from "firebase/auth";
const Assessor = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = async (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const url = await uploadImageToFirebase(file);
        setFieldValue("photo", url);
      } catch (error) {
        console.log(JSON.stringify(error));
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    photo: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  };
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const user = await createUser(values.email, values.password);
      if (typeof user === "object") {
        setMessage("Assessor added successfully!");
        setSuccess(true);
        setOpen(true);
      }
      await updateUserProfile(user, {
        displayName: values.firstName + " " + values.lastName,
        photoURL: values.photo,
      });
    } catch (error) {
      console.log(error);
      if (errors[error.code]) {
        setMessage("There was error adding Assessor: " + errors[error.code]);
        setSuccess(false);
        setOpen(true);
      }
      return;
    }
    resetForm();
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const userSchema = yup.object({
    photo: yup.string().required("Photo is required"),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid email.").required("required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid.")
      .required("required"),
  });
  return (
    <>
      <SuccessModal open={open} setOpen={setOpen}>
        <h1 style={{ color: `${success ? "green" : "red"}` }}>{message}</h1>
      </SuccessModal>
      <Box m="20px">
        <Header
          title="CREATE A NEW ASSESSOR"
          subtitle="Create a New Assessor Profile"
        />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Preview"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "4px",
                    maxWidth: "100px",
                    display: "block",
                    marginBottom: "10px",
                  }}
                />
              ) : (
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "4px",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  No Image
                </div>
              )}
              <label for="files" class="btn">
                <CloudUploadIcon /> <br />
                Select A Profile Photo
              </label>
              <Field
                type="file"
                accept=".jpg, .jpeg, .png"
                width="50"
                height="70"
                fullWidth
                name="image"
                id="files"
                style={{ visibility: "hidden" }}
                sx={{ gridColumn: "span 2", marginBottom: "10px !important" }}
                onChange={(e) => handlePhotoChange(e, setFieldValue)}
              />

              {errors.photo && (
                <div style={{ color: "red" }}>{errors.photo}</div>
              )}
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0,1fr))"
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4",
                    marginTop: "10px",
                  },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Photo"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={base64_encode(values.photo)}
                  name="photo"
                  disabled
                  hidden
                  error={!!touched.photo && !!errors.photo}
                  helperText={touched.photo && errors.photo}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Confirm Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  error={!!touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  sx={{ gridColumn: "span 2" }}
                />
                {/* 
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              /> */}
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add New Assessor
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};
export default Assessor;
