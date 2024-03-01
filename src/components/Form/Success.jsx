import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const handleFinish = () => {
    navigate("/home/Variables");
  };
  return (
    <>
      <Typography variant="h2" align="center" sx={{ py: 4 }}>
        Thank you!
      </Typography>
      <Typography component="p" align="center">
        We'll get in touch for further instructions.
      </Typography>
      <Button variant="contained" color="success" onClick={handleFinish}>
        Finish
      </Button>
    </>
  );
}
