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
  const computeStarRating = (rating) => {
    if (rating >= 106 && rating <= 130) {
      return (
        <Box>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </Box>
      );
    } else if (rating >= 80 && rating <= 105) {
      return (
        <Box>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </Box>
      );
    } else if (rating >= 60 && rating <= 79) {
      return (
        <Box>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </Box>
      );
    } else if (rating >= 45 && rating <= 59) {
      return (
        <Box>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </Box>
      );
    } else {
      return (
        <Box>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </Box>
      );
    }
  };
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
      date: convertFirestoreTimestamp(buildingsMap[name][0].date),
      score: buildingsMap[name][0].ratings,
      rating: "",
      phone: buildingsMap[name][0].phone,
    }));
    setTableData(rows);
  }, [buildingsMap]);
  const convertFirestoreTimestamp = (timestamp) => {
    if (timestamp) {
      const date = new Date(
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
      );
      return date.toString();
    }
  };

  const columns = [
    {
      field: "name",
      headerName: "NAME OF BUILDING",
      renderCell: (params) => {
        const item = params.row;
        const param = item.name.includes(" ")
          ? item.name.split(" ").join("-")
          : item.name;
        return (
          item && (
            <Link style={{ color: "white" }} to={`/home/variables/${param}`}>
              {item.name}
            </Link>
          )
        );
      },
      flex: 1,
    },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
    },
    {
      field: "score",
      headerName: "SCORE",
      flex: 0.5,
    },
    {
      field: "rating",
      headerName: "RATING",
      renderCell: (params) => computeStarRating(params.row.score),
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="VARIABLES"
        subtitle="The table of data available."
      ></Header>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Box
          m="40px 0 0 0"
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
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            }, // Removed extra space here
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
            overflowX: "auto",
          }}
        >
          <DataGrid
            rows={tableData}
            columns={columns.map((column) => ({
              ...column,
              width: 200, // Set a fixed width for each column
              headerAlign: "center",
              align: "center",
            }))}
            components={{ Toolbar: GridToolbar }}
            autoHeight
            // autoPageSize
          />
        </Box>
      </Container>
    </Box>
  );
};
export default Variables;
