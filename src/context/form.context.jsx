import React, {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from "react";
import { initialValues } from "../initialValues";
import PreviewModal from "../components/Modal/PreviewModal";
const isText = /^[A-Z ]+$/i;
const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const isPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/; // us
const isZip = /^[0-9]{5}([- /]?[0-9]{4})?$/; // us
const isNumber = /^\d+$/;
const isAlphaNumeric = /^\w+$/;
const isFile = /\.(gif|jpe?g|tiff?|png|webp|bmp|mp4|mov|mpeg|ogg|mp3)$/i;
const maxSizeImage = 2 * 1024 * 1024; // 2MB in bytes
const maxSizeVideo = 5 * 1024 * 1024; // 5MB in bytes
// Applied to all fields
const variant = "standard";
const margin = "normal";

export const AppContext = createContext({
  activeStep: 0,
  formValues: initialValues,
  handleChange() {},
  handleNext() {},
  handleBack() {},
  variant,
  margin,
});

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case "decrease":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "form-value":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue,
          },
        },
      };
    case "form-error":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error,
          },
        },
      };

    default:
      return state;
  }
}

export function StepsProvider({ children }) {
  const [{ activeStep, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: initialValues,
  });
  const [open, setOpen] = useState(false);
  const [fileError, setFileError] = useState("");
  const handleNext = useCallback(() => dispatch({ type: "increase" }), []);
  const handleBack = useCallback(() => dispatch({ type: "decrease" }), []);

  const handleChange = useCallback((event, checked) => {
    const { type, name, value, files } = event.target;

    let fieldValue = value;
    if (type === "file") {
      fieldValue = files[0];
    } else {
      fieldValue = type === "checkbox" ? checked : value;
    }
    dispatch({ type: "form-value", name, fieldValue });

    const fieldName = initialValues[name];
    if (!fieldName) return;

    const { required, validate, minLength, maxLength, helperText } = fieldName;

    let error = "";

    if (required && !fieldValue) error = "This field is required";
    if (minLength && value && value.length < minLength)
      error = `Minimum ${minLength} characters is required.`;
    if (maxLength && value && value.length > maxLength)
      error = "Maximum length exceeded!";
    if (validate) {
      switch (validate) {
        case "text":
          if (value && !isText.test(value))
            error = helperText || "This field accepts text only.";
          break;
        case "file":
          if (value && !isFile.test(value))
            error = helperText || "This field accepts files only.";
          if (
            fieldValue &&
            fieldValue.type.startsWith("image/") &&
            fieldValue.size > maxSizeImage
          ) {
            error = helperText || "Image size must not exceed 2MB limit.";
            setFileError("Image size must not exceed 2MB limit.");
            setOpen(true);
          } else if (
            fieldValue &&
            fieldValue.type.startsWith("video/") &&
            fieldValue.size > maxSizeVideo
          ) {
            error = helperText || "Video size must not exceed 5MB limit.";
            setFileError("Video size must not exceed 5MB limit.");
            setOpen(true);
          } else if (
            fieldValue &&
            fieldValue.type.startsWith("audio/") &&
            fieldValue.size > maxSizeImage
          ) {
            setFileError("Audio size must not exceed 2MB limit.");
            setOpen(true);
          }
          break;

        case "number":
          if (value && !isNumber.test(value))
            error = helperText || "This field accepts numbers only.";
          break;
        case "alphaNumeric":
          if (value && !isAlphaNumeric.test(value))
            error =
              helperText || "This field accepts both numbers and text only.";
          break;

        case "email":
          if (value && !isEmail.test(value))
            error = helperText || "Please enter a valid email address.";
          break;

        case "phone":
          if (value && !isPhone.test(value))
            error =
              helperText ||
              "Please enter a valid phone number. i.e: xxx-xxx-xxxx";
          break;

        case "zip":
          if (value && !isZip.test(value))
            error = helperText || "Please enter a valid zip code.";
          break;

        case "checkbox":
          if (!checked) error = helperText || "Please provide a valid value.";
          break;

        case "select":
          if (!value) error = helperText || "Please select a value.";
          break;
        default:
          break;
      }
    }

    dispatch({ type: "form-error", name, error });
  }, []);

  const constextValue = useMemo(
    () => ({
      activeStep,
      formValues,
      handleChange,
      handleNext,
      handleBack,
      variant,
      margin,
    }),
    [activeStep, formValues, handleChange, handleNext, handleBack]
  );

  return (
    <AppContext.Provider value={constextValue}>
      <PreviewModal open={open} setOpen={setOpen}>
        <h1>{fileError}</h1>
      </PreviewModal>
      <div className="mui-step-form">{children}</div>
    </AppContext.Provider>
  );
}
