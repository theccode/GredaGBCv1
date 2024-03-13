import {
  Box,
  Container,
  FormControlLabel,
  useTheme,
  useMediaQuery,
  Checkbox,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { BuildingsContext } from "../../context/variable.context";
import Header from "../Header/index";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { UserDetailsContext } from "../../context/user-data.context";
import { setUserRole, setUserStatus } from "../../utils/firebase/firebase.util";

const Variables = () => {
  const [forceUpdateFlag, setForceUpdateFlag] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { userDetails } = useContext(UserDetailsContext);
  const [currentUserId, setCurrentUserId] = useState(
    localStorage.getItem("userId")
  );
  const [roleUpdate, setRoleUpdate] = useState(false);
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
          isAdmin: userDetails[user].isAdmin,
          isActive: userDetails[user].isActive,
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
    {
      field: "isAdmin",
      headerName: "ROLE",
      renderCell: (params) => {
        const { id, isAdmin } = params.row;
        const handleCheckboxChange = async (event) => {
          const newValue = event.target.checked;
          try {
            await setUserRole(currentUserId, newValue);
            setRoleUpdate(newValue);
            const updatedRows = tableData.map((row) =>
              row.id === id ? { ...row, isAdmin: newValue } : row
            );
            setTableData(updatedRows);
          } catch (error) {
            alert("Error occured while updating assessor role.");
          }
        };
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={isAdmin}
                color="secondary"
                onChange={handleCheckboxChange}
              />
            }
            label={isAdmin ? "Admin" : "User"}
          />
        );
      },
      flex: 0.5,
    },

    {
      field: "isActive",
      headerName: "STATUS",
      renderCell: (params) => {
        const { id, isActive } = params.row;
        const handleCheckboxChange = async (event) => {
          const newValue = event.target.checked;
          try {
            await setUserStatus(currentUserId, newValue);
            // setRoleUpdate(newValue);
            const updatedRows = tableData.map((row) =>
              row.id === id ? { ...row, isActive: newValue } : row
            );
            setTableData(updatedRows);
          } catch (error) {
            alert("Error occured while updating assessor role.");
          }
        };
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                color="secondary"
                onChange={handleCheckboxChange}
              />
            }
            label={isActive ? "Active" : "Disabled"}
          />
        );
      },
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
          style={{ height: isMobile ? "100%" : "75vh", width: "100%" }}
        >
          <DataGrid
            rows={tableData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Container>
    </Box>
  );
};
export default Variables;
