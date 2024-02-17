import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Profile from '../../assets/profile.png';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';


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
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

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
                                    src={Profile}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "5px 0 0 0" }}
                                >
                                    Assessor
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
                            HR
                        </Typography>
                        <Item
                            title="Manage Assessors"
                            to="/home/assessors"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Contacts Information"
                            to="/home/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Variables
                        </Typography>
                        <Item
                            title="New Building Info"
                            to="/home/NewBuildingInfo"
                            icon={<AddBusinessIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Site And Transport"
                            to="/home/SiteAndTransport"
                            icon={<EmojiTransportationIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Water Efficiency"
                            to="/home/WaterEfficiency"
                            icon={<WaterDropIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Energy Eff.(EEMR)"
                            to="/home/EnergyEfficiecyAndCarbonEmissionMGT"
                            icon={<EnergySavingsLeafIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Indoor Envi. Quality"
                            to="/home/IndoorEnvironmentalQuality"
                            icon={<MeetingRoomIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Material & Resources"
                            to="/home/MaterialAndResources"
                            icon={<CorporateFareIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Innovation"
                            to="/home/Innovation"
                            icon={<HomeMaxIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Gallery
                        </Typography>
                        <Item
                            title="Photos"
                            to="/home/photos"
                            icon={<PhotoSizeSelectActualIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Vidoes"
                            to="/home/videos"
                            icon={<LocalMoviesIcon />}
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

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;