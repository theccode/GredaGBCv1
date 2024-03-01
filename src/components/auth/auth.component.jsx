import "./auth.styles.scss";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import GredaLogo from "../../assets/greda.png";
import { useContext, useState } from "react";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.util";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../shared/footer/footer.shared";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

export const Auth = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const errors = {
    "auth/invalid-credential": "Invalid Credentials.",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [loginError, setLoginError] = useState("");

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formFields);

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      setUserDetails(user);
      console.log(user);
      if (user) {
        console.log("user found!");
        navigate("/home/dashboard");
      }
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-credential") {
        setLoginError(errors[error.code]);
      }
    }
  };

  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="auth-container">
      <div className="form-container">
        <img src={GredaLogo} alt="Greda Logo" />
        <h2>Welcome to GREDA GBC</h2>
        <p>Kindly login to your account.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
            <RiLockPasswordFill className="icon" />
          </div>
          <div className="remember-password">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>
          <button className="btn-primary" type="submit">
            Login
          </button>
          <div className="error-container">
            <span className="error">{loginError}</span>
          </div>
        </form>
      </div>
      <Footer />
    </Box>
  );
};
