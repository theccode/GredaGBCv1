import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { BuildingsContext } from "../../context/variable.context";
import Header from "../Header/index";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import GradeIcon from "@mui/icons-material/Grade";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Variables = () => {
  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  // Function to force a re-render
  const forceUpdate = () => {
    setForceUpdateFlag((prevFlag) => !prevFlag);
  };
  const { buildingsMap } = useContext(BuildingsContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tableData, setTableData] = useState([]);

  //force update
  useEffect(() => {
    forceUpdate();
  }, []);
  //   setRatingsAmount(buildingsMap["ratings"]);
  useEffect(() => {
    const rows = Object.keys(buildingsMap).map((name, idx) => ({
      id: idx,
      name: name,
      date: null,
      score: buildingsMap[name][0].ratings,
      rating: "",
      phone: buildingsMap[name][0].phone,
    }));
    console.log(JSON.stringify(rows));
    setTableData(rows);
  }, [buildingsMap]);
  //   console.log(JSON.stringify(tableData));

  const columns = [
    {
      field: "firstName",
      headerName: "FIRST NAME",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "LAST NAME",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "PHONE",
      flex: 1,
    },
    {
      field: "addressOne",
      headerName: "ADDRESS TWO",
      flex: 0.5,
    },
    {
      field: "addressTwo",
      headerName: "ADDRESS TWO",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="ASSESSORS"
        subtitle="List of Assessors using the app."
      ></Header>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
            },
            "& . MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },

            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
          style={{ height: isMobile ? "100%" : 400, width: "100%" }}
        >
          <DataGrid
            rows={tableData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
        {/* {getData()} */}
      </Container>
    </Box>
  );
};
export default Variables;
