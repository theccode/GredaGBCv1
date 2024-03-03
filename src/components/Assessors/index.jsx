import { Box, Container, useTheme, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { BuildingsContext } from "../../context/variable.context";
import Header from "../Header/index";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { UserDetailsContext } from "../../context/user-data.context";

const Variables = () => {
  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { userDetails } = useContext(UserDetailsContext);
  // Function to force a re-render
  const forceUpdate = () => {
    setForceUpdateFlag((prevFlag) => !prevFlag);
  };
  const { buildingsMap } = useContext(BuildingsContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const rows =
      userDetails &&
      Object.keys(userDetails).map((user, idx) => {
        return {
          id: idx,
          name: userDetails[user].displayName || "John Doe",
          email: userDetails[user].email,
          photo: userDetails[user].photoURL || "https://i.pravatar.cc/300",
        };
      });
    rows && setTableData(rows);
  }, [buildingsMap]);

  const columns = [
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
    },

    {
      field: "photo",
      headerName: "PHOTO",
      renderCell: (params) => (
        <img src={params.row.photo} width={50} height={50} />
      ),
      flex: 1,
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
          style={{ height: isMobile ? "100%" : 700, width: "100%" }}
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
