import { useContext, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Profile from "../../assets/profile.png";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import { signUserOut } from "../../utils/firebase/firebase.util";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  useContext(UserContext);
  const navigate = useNavigate();
  const signOut = async () => {
    await signUserOut();
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  console.log(JSON.stringify(localStorage.getItem("currentUser")));
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Assessor
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={
                    localStorage.getItem("photo") === "null"
                      ? "https://i.pravatar.cc/300"
                      : localStorage.getItem("photo")
                  }
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "scale-down",
                  }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "5px 0 0 0" }}
                >
                  {localStorage.getItem("username") === "null"
                    ? "John Doe"
                    : localStorage.getItem("username")}
                </Typography>
              </Box>
            </Box>
          )}
          {/* Menu items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/home/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Users
            </Typography>
            <Item
              title="Add Assessor"
              to="/home/new-assessor"
              icon={<PersonAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Assessors"
              to="/home/assessors"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="New Building Info"
              to="/home/NewBuildingInfo"
              icon={<AddBusinessIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Variables"
              to="/home/variables"
              icon={<EmojiTransportationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Misc.
            </Typography>
            <Item
              title="FAQ Page"
              to="/home/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Settings
            </Typography>
            <MenuItem
              title="Signout"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
              onClick={signOut}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
