import { useParams } from "react-router-dom";
import { Box, useTheme, Container, Typography, Divider } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Tooltip from "@mui/material/Tooltip";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../Header";
import { tokens } from "../../theme";
import { useContext, useEffect, useState } from "react";
import { BuildingsContext } from "../../context/variable.context";
import PreviewModal from "../Modal/PreviewModal";

const Variable = () => {
  const [buildingName, setBuildingName] = useState("");
  const { category } = useParams();
  const name = category?.split("-").join(" ");
  const { buildingsMap } = useContext(BuildingsContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [indicatorData, setIndicatorData] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [siteAndTransportData, setSiteAndTransportData] = useState([]);
  const [waterEfficiencyData, setWaterEfficiencyData] = useState([]);
  const [energyEfficiencyData, setEnergyEfficiencyData] = useState([]);
  const [indoorEnvironmentalData, setIndoorEnvironmentalData] = useState([]);
  const [materialsAndResourcesData, setMaterialsAndResoucesData] = useState([]);
  const [wasteAndPollutionData, setWasteAndPollutionData] = useState([]);
  const [innovativeData, setInnovativeData] = useState([]);
  const [details, setDetails] = useState("");
  const [openImg, setImgOpen] = useState(false);
  const [previewImgSrc, setPreviewImgSrc] = useState("");
  const [previewVideoSrc, setPreviewVideoSrc] = useState("");
  const [openVideo, setOpenVideo] = useState(false);

  //site and transport columns
  const siteAndTransportColumns = [
    {
      field: "protectOrRestoreHabitat",
      headerName: "Protect or Restore Habitat",
      flex: 1,
    },
    {
      field: "heatIslandReduction",
      headerName: "Heat Island Reduction",
      flex: 1,
    },
    {
      field: "landscapingAndPlanters",
      headerName: "Landscaping And Planters",
      flex: 1,
    },
    {
      field: "accessToPublicTransport",
      headerName: "Access To Public Transport",
      flex: 1,
    },
    {
      field: "facilitiesForCyclingOrWalking",
      headerName: "Facilities For Cycling Or Walking",
      flex: 1,
    },
  ];
  // Water Efficiency
  const waterEfficiencyColumn = [
    {
      field: "waterQuality",
      headerName: "Water Qlty",
      flex: 0.5,
    },
    {
      field: "highEfficiencyWaterFixtures",
      headerName: "High Eff. Water Fixtures",
      flex: 1,
    },
    {
      field: "rainWaterManagement",
      headerName: "Rain Water Mgt",
      flex: 1,
    },
    {
      field: "outdoorWaterUseReduction",
      headerName: "Out. Water Use Reduct.",
      flex: 1,
    },
    {
      field: "surfaceWaterRunOff",
      headerName: "Surf. Water Run Off",
      flex: 1,
    },
    {
      field: "waterRecycling",
      headerName: "Water Recycling",
      flex: 1,
    },
    {
      field: "meteringAndLeakageDetectionSystem",
      headerName: "Met. & Leakage Det. Sys.",
      flex: 1,
    },
    {
      field: "waterEfficientIrrigation",
      headerName: "Water Eff. Irrigation",
      flex: 1,
    },
    {
      field: "waterConservationAndManagementPlan",
      headerName: "Water Cons. & Mgt. Plan.",
      flex: 1,
    },
  ];
  // Energy Efficiency
  const energyEfficiencyColumn = [
    {
      field: "greenHouseGasEmissionReduction",
      headerName: "Greenhouse Gas Em.",
      flex: 1,
    },
    {
      field: "energyEfficientEquipments",
      headerName: "Energy Eff. Equip.",
      flex: 1,
    },
    {
      field: "renewableEnergyUse",
      headerName: "Renewable Energy Use",
      flex: 1.5,
    },
    {
      field: "energyMeteringAndMonitoring",
      headerName: "Energy Met. & Mon.",
      flex: 1,
    },
    {
      field: "lowAndZeroCarbonTechnologies",
      headerName: "Low & Zero",
      flex: 0.7,
    },
    {
      field: "energyEfficientColdStorage",
      headerName: "Energy Eff. Co. St.",
      flex: 1,
    },
    {
      field: "efficientVentitalion",
      headerName: "Eff. Vent.",
      flex: 1,
    },
    {
      field: "alternativePassiveDesign",
      headerName: "Alt. Pass. Des.",
      flex: 1,
    },
    {
      field: "embodiedEnergy",
      headerName: "Embodied Ener.",
      flex: 1,
    },
    {
      field: "ecoFriendly",
      headerName: "Eco-friendly Ref.",
      flex: 1,
    },
  ];
  //Indoor Environmental Quality
  const indoorEnvironmentalQualityColumn = [
    {
      field: "lowEmittingToxicMaterials",
      headerName: "Low Emit. Toxic Materials",
      flex: 1.2,
    },
    {
      field: "optimumInteriorLighting",
      headerName: "Optimum Interior Lighting",
      flex: 1.5,
    },
    {
      field: "daylighting",
      headerName: "Daylighting",
      flex: 0.8,
    },
    {
      field: "qualityViews",
      headerName: "Qlty Views",
      flex: 0.8,
    },
    {
      field: "acousticPerformance",
      headerName: "Acoustic Performance",
      flex: 1.2,
    },
    {
      field: "indoorAirQuality",
      headerName: "Indoor Air Qlty.",
      flex: 1,
    },
    {
      field: "noiseAttenuation",
      headerName: "Noise Attenuation",
      flex: 1,
    },
    {
      field: "indoorPlanters",
      headerName: "Indoor Planters",
      flex: 1,
    },
    {
      field: "roomsWithTenMetersNaturalLightingSource",
      headerName: "Rooms with Nat. Light. Src",
      flex: 1.5,
    },
  ];
  //Materials And Resources
  const materialsAndResourcesColumn = [
    {
      field: "lifeCycleImpactReduction",
      headerName: "Life Cycle Imp. Red.",
      flex: 1,
    },
    {
      field: "environmentalProductDeclaration",
      headerName: "Env. Prod. Dec.",
      flex: 1,
    },
    {
      field: "responsibleSourcingOfRawMaterials",
      headerName: "Resp. Sourc. of Raw Mat.",
      flex: 1.5,
    },
    {
      field: "sustainableGreenProducts",
      headerName: "Sust./Green Prod.",
      flex: 1,
    },
    {
      field: "materialsWithRecycledContent",
      headerName: "Mat. With Rec. Cont.",
      flex: 1.2,
    },
    {
      field: "materialsWithLowEmbodiedEnergy",
      headerName: "Mat. With Low Emb. En.",
      flex: 1.2,
    },
    {
      field: "reusedMaterials",
      headerName: "Reused Materials",
      flex: 1,
    },
    {
      field: "locallySourcedMaterials",
      headerName: "Loc. Sourced Mat.",
      flex: 1,
    },
    {
      field: "materialsWithThirdPartyCertification",
      headerName: "Mat. With 3rd Party Cert.",
      flex: 1.5,
    },
  ];
  //Waste And Pollution
  const wasteAndPollutionColumn = [
    {
      field: "constructionWasteManagement",
      headerName: "Construction Waste Management",
      flex: 1,
    },
    {
      field: "operationalWaste",
      headerName: "Operational Waste",
      flex: 1,
    },
    {
      field: "publicTransportAccess",
      headerName: "Public Transport Access",
      flex: 1.5,
    },
    {
      field: "wasteDisposalFacilities",
      headerName: "Waste Disposal Facilities",
      flex: 1,
    },
    {
      field: "lowEmmittingVehicles",
      headerName: "Low Emmitting Vehicles",
      flex: 1.2,
    },
  ];
  const innovationColumn = [
    {
      field: "innovativeTechnologies",
      headerName: "Innovative Technologies",
      flex: 2,
    },
    {
      field: "innovativeMaterialsAndProducts",
      headerName: "Innovative Materials And Products",
      flex: 2,
    },
    {
      field: "innovativeDesign",
      headerName: "Innovative Design",
      flex: 2,
    },
  ];

  //useEffect for indicators
  useEffect(() => {
    setBuildingName(name);
    const data =
      buildingsMap[name] &&
      buildingsMap[name].map((item) => {
        return item.data;
      });
    setIndicatorData(data);
  }, [buildingsMap]);
  //useEffect for media
  useEffect(() => {
    setBuildingName(name);
    const data =
      buildingsMap[name] &&
      buildingsMap[name].map((item) => {
        return item.media;
      });
    // setTableData(rows);
    setMediaData(data);
  }, [buildingsMap]);
  useEffect(() => {
    if (indicatorData && indicatorData[1]) {
      setSiteAndTransportData([
        {
          id: `getRowId`,
          protectOrRestoreHabitat:
            indicatorData[1]["protect-or-restore-habitat"],
          heatIslandReduction: indicatorData[1]["heat-island-reduction"],
          landscapingAndPlanters: indicatorData[1]["landscaping-and-planters"],
          accessToPublicTransport:
            indicatorData[1]["access-to-public-transport"],
          facilitiesForCyclingOrWalking:
            indicatorData[1]["facilities-for-cycling-or-walking"],
        },
      ]);
    }
    if (indicatorData && indicatorData[2]) {
      setWaterEfficiencyData([
        {
          id: `getRowId`,
          waterQuality: indicatorData[2]["water-quality"],
          highEfficiencyWaterFixtures:
            indicatorData[2]["high-efficiency-water-fixtures"],
          rainWaterManagement: indicatorData[2]["rain-water-management"],
          outdoorWaterUseReduction:
            indicatorData[2]["outdoor-water-use-reduction"],
          surfaceWaterRunOff: indicatorData[2]["surface-water-run-off"],
          waterRecycling: indicatorData[2]["water-recycling"],
          meteringAndLeakageDetectionSystem:
            indicatorData[2]["water-recycling"],
          waterEfficientIrrigation:
            indicatorData[2]["water-efficient-irrigation"],
          waterConservationAndManagementPlan:
            indicatorData[2]["water-conservation-and-management-plan"],
        },
      ]);
    }
    if (indicatorData && indicatorData[3]) {
      setEnergyEfficiencyData([
        {
          id: `getRowId`,
          greenHouseGasEmissionReduction:
            indicatorData[3]["greenhouse-gas-emission-reduction"],
          energyEfficientEquipments:
            indicatorData[3]["energy-efficient-equipments"],
          renewableEnergyUse: indicatorData[3]["renewable-energy-use"],
          energyMeteringAndMonitoring:
            indicatorData[3]["energy-metering-and-monitoring"],
          lowAndZeroCarbonTechnologies:
            indicatorData[3]["low-and-zero-carbon-technologies"],
          energyEfficientColdStorage:
            indicatorData[3]["energy-efficient-cold-storage"],
          efficientVentitalion: indicatorData[3]["efficient-ventilation"],
          alternativePassiveDesign:
            indicatorData[3]["alternative-passive-design"],
          embodiedEnergy:
            indicatorData[3]["embodied-energy-in-building-elements"],
          ecoFriendly: indicatorData[3]["eco-friendly-refrigerants"],
        },
      ]);
    }
    if (indicatorData && indicatorData[4]) {
      setIndoorEnvironmentalData([
        {
          id: `getRowId`,
          lowEmittingToxicMaterials:
            indicatorData[4]["low-emitting-toxic-materials"],
          optimumInteriorLighting:
            indicatorData[4]["optimum-interior-lighting"],
          daylighting: indicatorData[4]["daylighting"],
          qualityViews: indicatorData[4]["quality-views"],
          acousticPerformance: indicatorData[4]["acoustic-performance"],
          indoorAirQuality: indicatorData[4]["indoor-air-quality"],
          noiseAttenuation: indicatorData[4]["noise-attenuation"],
          indoorPlanters: indicatorData[4]["indoor-planters"],
          roomsWithTenMetersNaturalLightingSource:
            indicatorData[4]["rooms-within-ten-natural-lighting-source"],
        },
      ]);
    }
    if (indicatorData && indicatorData[5]) {
      setMaterialsAndResoucesData([
        {
          id: `getRowId`,
          lifeCycleImpactReduction:
            indicatorData[5]["life-cycle-impact-reduction"],
          environmentalProductDeclaration:
            indicatorData[5]["environmental-product-declaration"],
          responsibleSourcingOfRawMaterials:
            indicatorData[5]["responsible-sourcing-of-raw-materials"],
          sustainableGreenProducts:
            indicatorData[5]["sustainable-green-products"],
          materialsWithRecycledContent:
            indicatorData[5]["materials-with-recycled-content"],
          materialsWithLowEmbodiedEnergy:
            indicatorData[5]["materials-with-low-embodied-energy"],
          reusedMaterials: indicatorData[5]["reused-materials"],
          locallySourcedMaterials:
            indicatorData[5]["locally-sourced-materials"],
          materialsWithThirdPartyCertification:
            indicatorData[5]["materials-with-third-party-certification"],
        },
      ]);
    }
    if (indicatorData && indicatorData[6]) {
      setWasteAndPollutionData([
        {
          id: `getRowId`,
          constructionWasteManagement:
            indicatorData[6]["construction-waste-management"],
          operationalWaste: indicatorData[6]["operational-waste"],
          publicTransportAccess: indicatorData[6]["public-transport-access"],
          wasteDisposalFacilities:
            indicatorData[6]["waste-disposal-facilities"],
          lowEmmittingVehicles: indicatorData[6]["low-emmitting-vehicles"],
        },
      ]);
    }
    if (indicatorData && indicatorData[7]) {
      setInnovativeData([
        {
          id: `getRowId`,
          innovativeTechnologies: indicatorData[7]["innovative-technologies"],
          innovativeMaterialsAndProducts:
            indicatorData[7]["innovative-materials-and-products"],
          innovativeDesign: indicatorData[7]["innovative-design"],
        },
      ]);
    }
  }, [buildingsMap, indicatorData]);

  return (
    <>
      <PreviewModal open={openImg} setOpen={setImgOpen} details={details}>
        <img src={previewImgSrc} />
      </PreviewModal>
      <PreviewModal open={openVideo} setOpen={setOpenVideo} details={details}>
        <video width="320" height="240" autoplay controls>
          <source src={previewVideoSrc} type="video/mp4" />
          <source src={previewVideoSrc} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </PreviewModal>
      <Box sx={{ margin: "20px" }}>
        <Header
          title={`${buildingName.toUpperCase()}  DETAILS`}
          subtitle="Click to expand each component in order to view the available data."
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
          >
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Site And Transport (ST)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={siteAndTransportData}
                    columns={siteAndTransportColumns}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container>
                <Box sx={{ display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Landscaping And Planters Attached Photo">
                    <img
                      onClick={() => {
                        setDetails("Landscaping And Planters Attached Photo");
                        setPreviewImgSrc(
                          mediaData[1]["landscaping-and-planters-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[1] &&
                        mediaData[1]["landscaping-and-planters-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Facilities for cycling or walking.">
                    <img
                      onClick={() => {
                        setDetails("Facilities for cycling or walking.");
                        setPreviewImgSrc(
                          mediaData[1]["facilities-for-cycling-or-walking-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[1] &&
                        mediaData[1]["facilities-for-cycling-or-walking-url"]
                      }
                    />
                  </Tooltip>
                </Box>
              </Container>
            </Accordion>
            <Divider />
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Water Efficiency (WE)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={waterEfficiencyData}
                    columns={waterEfficiencyColumn}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Water Quality.">
                    <img
                      onClick={() => {
                        setDetails("Water Quality");
                        setPreviewImgSrc(mediaData[2]["water-quality-url"]);
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[2] &&
                        mediaData[2]["water-quality-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[2] &&
                      mediaData[2]["high-efficiency-water-fixtures-url"] && (
                        <Tooltip title=" Click to expand video for High Efficiency Water Fixtures.">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[2] &&
                                  mediaData[2][
                                    "high-efficiency-water-fixtures-url"
                                  ]
                              );
                              setDetails("High Efficiency Water Fixtures");
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[2] &&
                                mediaData[2][
                                  "high-efficiency-water-fixtures-url"
                                ]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Rain Water Management.">
                    <img
                      onClick={() => {
                        setDetails("Rain Water Management");
                        setPreviewImgSrc(
                          mediaData[2]["rain-water-management-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[2] &&
                        mediaData[2]["rain-water-management-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Energy Metering And Monitorying.">
                    <img
                      onClick={() => {
                        setDetails("Outdoor Water Use Reduction");
                        setPreviewImgSrc(
                          mediaData[2]["outdoor-water-use-reduction-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[2] &&
                        mediaData[2]["outdoor-water-use-reduction-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[2] &&
                      mediaData[2]["high-efficiency-water-fixtures-url"] && (
                        <Tooltip title=" Click to expand video for Surface Water Run Off/Storemwater Mgt..">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[2] &&
                                  mediaData[2]["surface-water-run-off-url"]
                              );
                              setDetails(
                                "Surface Water Run Off/Storemwater Mgt."
                              );
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[2] &&
                                mediaData[2]["surface-water-run-off-url"]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[2] &&
                      mediaData[2]["high-efficiency-water-fixtures-url"] && (
                        <Tooltip title=" Click to expand video for Water Recycling.">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[2] &&
                                  mediaData[2]["water-recycling-url"]
                              );
                              setDetails("Water Recycling.");
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[2] &&
                                mediaData[2]["water-recycling-url"]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Metering & Leakage Detection Sys.">
                    <img
                      onClick={() => {
                        setDetails("Metering & Leakage Detection Sys.");
                        setPreviewImgSrc(
                          mediaData[2][
                            "metering-and-leakage-detection-system-url"
                          ]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[2] &&
                        mediaData[2][
                          "metering-and-leakage-detection-system-url"
                        ]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[2] &&
                      mediaData[2]["high-efficiency-water-fixtures-url"] && (
                        <Tooltip title=" Click to expand video for Water Efficient Irrigation.">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[2] &&
                                  mediaData[2]["water-efficient-irrigation-url"]
                              );
                              setDetails("Water Efficient Irrigation.");
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[2] &&
                                mediaData[2]["water-efficient-irrigation-url"]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Water Conservation & Mgt. Plan">
                    <img
                      onClick={() => {
                        setDetails("Water Conservation & Mgt. Plan");
                        setPreviewImgSrc(
                          mediaData[2][
                            "water-conservation-and-management-plan-url"
                          ]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[2] &&
                        mediaData[2][
                          "water-conservation-and-management-plan-url"
                        ]
                      }
                    />
                  </Tooltip>
                </Box>
              </Container>
            </Accordion>
            <Divider />
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Energy Efficiency and Carbon Emmission Management (EEMR)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={energyEfficiencyData}
                    columns={energyEfficiencyColumn}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Energy Efficient Equipments..">
                    <img
                      onClick={() => {
                        setDetails("Energy Efficient Equipments.");
                        setPreviewImgSrc(
                          mediaData[3]["energy-efficient-equipment-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["energy-efficient-equipment-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[3] &&
                      mediaData[3]["high-efficiency-water-fixtures-url"] && (
                        <Tooltip title=" Click to expand video for Renewable Energy Use.">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[3] &&
                                  mediaData[3]["renewable-energy-use-url"]
                              );
                              setDetails("Renewable Energy Use");
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[2] &&
                                mediaData[2]["renewable-energy-use-url"]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Renewable Energy Use.">
                    <img
                      onClick={() => {
                        setDetails("Renewable Energy Use");
                        setPreviewImgSrc(
                          mediaData[3]["renewable-energy-use-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["renewable-energy-use-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Energy Metering And Monitoring.">
                    <img
                      onClick={() => {
                        setDetails("Energy Metering And Monitoring");
                        setPreviewImgSrc(
                          mediaData[3]["energy-metering-and-monitoring-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["energy-metering-and-monitoring-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Low And Zero Carbon Technologies.">
                    <img
                      onClick={() => {
                        setDetails("Low And Zero Carbon Technologies.");
                        setPreviewImgSrc(
                          mediaData[3]["low-and-zero-carbon-technoligies-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["low-and-zero-carbon-technoligies-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Energy Efficient Cold Storage">
                    <img
                      onClick={() => {
                        setDetails("Efficient Ventilation & A/C Equipment");
                        setPreviewImgSrc(
                          mediaData[3]["energy-efficient-cold-storage-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["energy-efficient-equipment-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Efficient Ventilation & A/C Equipment">
                    <img
                      onClick={() => {
                        setDetails("Efficient Ventilation & A/C Equipment");
                        setPreviewImgSrc(
                          mediaData[3]["energy-efficient-equipment-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["eco-friendly-refrigerants-url"]
                      }
                    />
                  </Tooltip>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[3] &&
                      mediaData[3]["alternative-passive-design-url"] && (
                        <Tooltip title=" Click to expand video for Alternative Passive Design.">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[3] &&
                                  mediaData[3]["alternative-passive-design-url"]
                              );
                              setDetails("Alternative Passive Design.");
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[3] &&
                                mediaData[3]["alternative-passive-design-url"]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <Tooltip title=" Click to expand photo for Eco-friendly Refrigerants.">
                    <img
                      onClick={() => {
                        setDetails("Eco-friendly Refrigerants.");
                        setPreviewImgSrc(
                          mediaData[3]["eco-friendly-refrigerants-url"]
                        );
                        setImgOpen(true);
                      }}
                      width={50}
                      height={50}
                      src={
                        mediaData &&
                        mediaData[3] &&
                        mediaData[3]["eco-friendly-refrigerants-url"]
                      }
                    />
                  </Tooltip>
                </Box>
              </Container>
            </Accordion>
            <Divider />
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Indoor Environmental Quality (IEQ)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={indoorEnvironmentalData}
                    columns={indoorEnvironmentalQualityColumn}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4]["optimum-interior-lighting-url"] && (
                      <Tooltip title=" Click to expand photo for Optimum Interior Lighting.">
                        <img
                          onClick={() => {
                            setDetails("Optimum Interior Lighting.");
                            setPreviewImgSrc(
                              mediaData[4]["optimum-interior-lighting-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[4] &&
                            mediaData[4]["optimum-interior-lighting-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4]["daylighting-url"] && (
                      <Tooltip title=" Click to expand photo for daylighting.">
                        <img
                          onClick={() => {
                            setDetails("Daylighting.");
                            setPreviewImgSrc(mediaData[4]["daylighting-url"]);
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[4] &&
                            mediaData[4]["daylighting-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4]["quality-views-url"] && (
                      <Tooltip title=" Click to expand photo for Quality Views.">
                        <img
                          onClick={() => {
                            setDetails("Energy Quality Views");
                            setPreviewImgSrc(mediaData[4]["quality-views-url"]);
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[4] &&
                            mediaData[4]["quality-views-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4]["acoustic-performance-url"] && (
                      <Tooltip title=" Click the play button to listen to the audio">
                        <audio controls>
                          <source
                            src={
                              mediaData &&
                              mediaData[4] &&
                              mediaData[4]["acoustic-performance-url"]
                            }
                            type="audio/ogg"
                          />
                          <source
                            src={
                              mediaData &&
                              mediaData[4] &&
                              mediaData[4][
                                "low-and-zero-carbon-technoligies-url"
                              ]
                            }
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4]["noise-attenuation-url"] && (
                      <Tooltip title=" Click the play button to listen to the audio for Noise Attenuation">
                        <audio controls>
                          <source
                            src={
                              mediaData &&
                              mediaData[4] &&
                              mediaData[4]["noise-attenuation-url"]
                            }
                            type="audio/ogg"
                          />
                          <source
                            src={
                              mediaData &&
                              mediaData[4] &&
                              mediaData[4]["noise-attenuation-url"]
                            }
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4]["indoor-planters-url"] && (
                      <Tooltip title=" Click to expand photo for Indoor Planters.">
                        <img
                          onClick={() => {
                            setDetails("Indoor Planters");
                            setPreviewImgSrc(
                              mediaData[4]["indoor-planters-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[4] &&
                            mediaData[4]["indoor-planters-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[4] &&
                    mediaData[4][
                      "rooms-within-ten-natural-lighting-source-url"
                    ] && (
                      <Tooltip title=" Click to expand photo for Rooms with ten meters lighting source..">
                        <img
                          onClick={() => {
                            setDetails(
                              "Rooms with ten meters lighting source."
                            );
                            setPreviewImgSrc(
                              mediaData[4][
                                "rooms-within-ten-natural-lighting-source-url"
                              ]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[4] &&
                            mediaData[4][
                              "rooms-within-ten-natural-lighting-source-url"
                            ]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
              </Container>
            </Accordion>
            <Divider />
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Material & Resources (MR)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={materialsAndResourcesData}
                    columns={materialsAndResourcesColumn}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5]["environmental-product-declaration-url"] && (
                      <Tooltip title=" Click to expand photo for Environmental Product Declaration.">
                        <img
                          onClick={() => {
                            setDetails("Environmental Product Declaration.");
                            setPreviewImgSrc(
                              mediaData[5][
                                "environmental-product-declaration-url"
                              ]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5][
                              "environmental-product-declaration-url"
                            ]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5]["sustainable-green-products-url"] && (
                      <Tooltip title=" Click to expand photo for Sustainable Green Products.">
                        <img
                          onClick={() => {
                            setDetails("Sustainable Green Products.");
                            setPreviewImgSrc(
                              mediaData[5]["sustainable-green-products-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5]["sustainable-green-products-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5]["materials-with-recycled-content-url"] && (
                      <Tooltip title=" Click to expand photo for Materials With Recycled Content.">
                        <img
                          onClick={() => {
                            setDetails("Materials With Recycled Content.");
                            setPreviewImgSrc(
                              mediaData[5][
                                "materials-with-recycled-content-url"
                              ]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5]["materials-with-recycled-content-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5]["materials-with-low-embodied-energy-url"] && (
                      <Tooltip title=" Click to expand photo for Materials With Low Embodied Energy.">
                        <img
                          onClick={() => {
                            setDetails("Materials With Low Embodied Energy.");
                            setPreviewImgSrc(
                              mediaData[5][
                                "materials-with-low-embodied-energy-url"
                              ]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5][
                              "materials-with-low-embodied-energy-url"
                            ]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5]["reused-materials-url"] && (
                      <Tooltip title=" Click to expand photo for Reused Materials.">
                        <img
                          onClick={() => {
                            setDetails("Reused Materials.");
                            setPreviewImgSrc(
                              mediaData[5]["reused-materials-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5]["reused-materials-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5]["locally-sourced-materials-url"] && (
                      <Tooltip title=" Click to expand photo for Locally Sourced Materials.">
                        <img
                          onClick={() => {
                            setDetails("Locally Sourced Materials.");
                            setPreviewImgSrc(
                              mediaData[5]["locally-sourced-materials-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5]["locally-sourced-materials-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[5] &&
                    mediaData[5][
                      "materials-with-third-party-certification-url"
                    ] && (
                      <Tooltip title=" Click to expand photo for Materials with Third Party Certification.">
                        <img
                          onClick={() => {
                            setDetails(
                              "Materials with Third Party Certification."
                            );
                            setPreviewImgSrc(
                              mediaData[5][
                                "materials-with-third-party-certification-url"
                              ]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[5] &&
                            mediaData[5][
                              "materials-with-third-party-certification-url"
                            ]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
              </Container>
            </Accordion>
            <Divider />
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Waste And Pollution (WP)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={wasteAndPollutionData}
                    columns={wasteAndPollutionColumn}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[6] &&
                    mediaData[6]["construction-waste-management-url"] && (
                      <Tooltip title=" Click to expand photo for Construction Waste Management.">
                        <img
                          onClick={() => {
                            setDetails("Construction Waste Management.");
                            setPreviewImgSrc(
                              mediaData[6]["construction-waste-management-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[6] &&
                            mediaData[6]["construction-waste-management-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[6] &&
                    mediaData[6]["waste-disposal-facilities-url"] && (
                      <Tooltip title=" Click to expand photo for Waste Disposal Facilities.">
                        <img
                          onClick={() => {
                            setDetails("Waste Disposal Facilities.");
                            setPreviewImgSrc(
                              mediaData[6]["waste-disposal-facilities-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[6] &&
                            mediaData[6]["waste-disposal-facilities-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
              </Container>
            </Accordion>
            <Divider />
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  Innovation (IN)
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <DataGrid
                    rows={innovativeData}
                    columns={innovationColumn}
                    components={{ Toolbar: GridToolbar }}
                    hideFooter
                  />
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  <span>
                    {mediaData &&
                      mediaData[7] &&
                      mediaData[7]["innovative-technologies-url"] && (
                        <Tooltip title=" Click to expand video for Innovative Technologies.">
                          <video
                            onClick={() => {
                              setPreviewVideoSrc(
                                mediaData &&
                                  mediaData[7] &&
                                  mediaData[7]["innovative-technologies-url"]
                              );
                              setDetails("Innovative Technologies.");
                              setOpenVideo(true);
                            }}
                            width="50"
                            height="50"
                            style={{ cursor: "pointer" }}
                          >
                            <source
                              src={
                                mediaData &&
                                mediaData[7] &&
                                mediaData[7]["innovative-technologies-url"]
                              }
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </Tooltip>
                      )}
                  </span>
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[7] &&
                    mediaData[7]["innovative-materials-and-products-url"] && (
                      <Tooltip title=" Click to expand photo for Innovative Materials And Products.">
                        <img
                          onClick={() => {
                            setDetails("Innovative Materials And Products.");
                            setPreviewImgSrc(
                              mediaData[7][
                                "innovative-materials-and-products-url"
                              ]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[7] &&
                            mediaData[7][
                              "innovative-materials-and-products-url"
                            ]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
                <Box sx={{ margin: "5px", display: "inline" }}>
                  {mediaData &&
                    mediaData[7] &&
                    mediaData[7]["innovative-design-url"] && (
                      <Tooltip title=" Click to expand photo for Innovative Design.">
                        <img
                          onClick={() => {
                            setDetails("Innovative Design.");
                            setPreviewImgSrc(
                              mediaData[7]["innovative-design-url"]
                            );
                            setImgOpen(true);
                          }}
                          width={50}
                          height={50}
                          src={
                            mediaData &&
                            mediaData[7] &&
                            mediaData[7]["innovative-design-url"]
                          }
                        />
                      </Tooltip>
                    )}
                </Box>
              </Container>
            </Accordion>
            <Accordion defaultExpanded={false}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  .....
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <span>End of Accordion</span>
                </Box>
              </AccordionDetails>
              <Container sx={{ marginTop: "10px" }}>
                <Divider />
              </Container>
            </Accordion>
            <Divider />
          </Box>
          {/* {getData()} */}
        </Container>
      </Box>
    </>
  );
};
export default Variable;
