import React, { useContext, useEffect, useId, useState } from "react";
import { Box, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import { AppContext } from "../../context/form.context";
import { tokens } from "../../theme";
import { useCertLevelComputation } from "../../utils/variables/variables.util";
import CircularProgress from "@mui/material/CircularProgress";
import uploadMediaFiles, {
  saveDataToFirestore,
} from "../../utils/firebase/firebase.util";
import SuccessModal from "../Modal/SuccessModal";

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext);
  const [mediaUrls, setMediaUrls] = useState([]);
  const [progress, setProgress] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [success, setSuccces] = useState(false);

  const {
    buildingName,
    buildingLocation,
    digitalAddress,
    phone,
    protectOrRestoreHabitat,
    heatIslandReduction,
    landscapingAndPlanters,
    accessToPublicTransport,
    facilitiesForCyclingOrWalking,
    waterQuality,
    highEfficiencyWaterFixtures,
    rainWaterManagement,
    outdoorWaterUseReduction,
    surfaceWaterRunOff,
    waterRecycling,
    meteringAndLeakageDetectionSystem,
    waterEfficientIrrigation,
    waterConservationAndManagementPlan,
    greenhouseGasEmissionReduction,
    energyEfficientEquipment,
    renewalEnergyUse,
    energyMeteringAndMonitoring,
    lowAndZeroCarbonTechnologies,
    energyEfficientColdStorage,
    efficientVentilationAndACEquipment,
    alternativePassiveDesign,
    emboddiedEnergyInBuildingElement,
    ecofriendlyRefrigerants,
    lowEmittingToxicMaterials,
    optimumInteriorLighting,
    dayLighting,
    qualityViews,
    acousticPerformance,
    indoorAirQuality,
    noiseAttenuation,
    indoorPlanters,
    roomsWithinTenMetersLightingSource,
    lifeCycleImpactReduction,
    environmentalProductDeclaration,
    responsibleSourcingOfRawMaterials,
    sustainableGreenProducts,
    materialsWithRecycledContent,
    materialsWithLowEmbodiedEnergy,
    reusedMaterials,
    locallySourcedMaterials,
    materialsWithThirdpartyCertification,
    constructionWasteManagement,
    operationalWaste,
    publicTransportAccess,
    wasteDisposalFacilities,
    lowEmittingVehicles,
    innovativeTechnologies,
    innovativeMaterialsAndProducts,
    innovativeDesign,
    landscapingAndPlantersUrl,
    accessToPublicTransportCoordinates,
    facilitiesForCyclingOrWalkingUrl,
    waterQualityUrl,
    highEfficiencyWaterFixturesUrl,
    rainWaterManagementUrl,
    outdoorWaterUseReductionUrl,
    surfaceWaterRunOffUrl,
    waterRecyclingUrl,
    meteringAndLeakageDetectionSystemUrl,
    waterEfficientIrrigationUrl,
    waterConservationAndManagementPlanUrl,
    energyEfficientEquipmentUrl,
    renewalEnergyUseUrl,
    energyMeteringAndMonitoringUrl,
    lowAndZeroCarbonTechnologiesUrl,
    energyEfficientColdStorageUrl,
    efficientVentilationAndACEquipmentUrl,
    alternativePassiveDesignUrl,
    emboddiedEnergyInBuildingElementUrl,
    ecofriendlyRefrigerantsUrl,
    optimumInteriorLightingUrl,
    dayLightingUrl,
    qualityViewsUrl,
    acousticPerformanceUrl,
    indoorAirQualityUrl,
    noiseAttenuationUrl,
    indoorPlantersurl,
    roomsWithinTenMetersLightingSourceUrl,
    environmentalProductDeclarationUrl,
    responsibleSourcingOfRawMaterialsUrl,
    sustainableGreenProductsUrl,
    materialsWithRecycledContentUrl,
    materialsWithLowEmbodiedEnergyUrl,
    reusedMaterialsUrl,
    locallySourcedMaterialsUrl,
    materialsWithThirdpartyCertificationUrl,
    constructionWasteManagementUrl,
    publicTransportAccessCoordinate,
    wasteDisposalFacilitiesUrl,
    innovativeTechnologiesUrl,
    innovativeMaterialsAndProductsUrl,
    innovativeDesignUrl,
  } = formValues;
  const certLevelComputation = useCertLevelComputation();
  const {
    siteAndTransportTotalCredit,
    waterEfficiencyTotalCredit,
    energyEfficiencyTotalCredit,
    indoorEnvironQualityTotalCredit,
    materialAndResourcesTotalCredit,
    wasteAndPollutionTotalCredit,
    innovationTotalCredit,
    totalCreditForAllIndicators,
  } = certLevelComputation;
  const totalCreditsForAll =
    Number(siteAndTransportTotalCredit.sum) +
    Number(waterEfficiencyTotalCredit.sum) +
    Number(energyEfficiencyTotalCredit.sum) +
    Number(indoorEnvironQualityTotalCredit.sum) +
    Number(materialAndResourcesTotalCredit.sum) +
    Number(wasteAndPollutionTotalCredit.sum) +
    Number(innovationTotalCredit.sum);
  //compute star ratings
  const computeStarRating = () => {
    if (totalCreditsForAll >= 106 && totalCreditsForAll <= 130) {
      return (
        <ListItem>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </ListItem>
      );
    } else if (totalCreditsForAll >= 80 && totalCreditsForAll <= 105) {
      return (
        <ListItem>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </ListItem>
      );
    } else if (totalCreditsForAll >= 60 && totalCreditsForAll <= 79) {
      return (
        <ListItem>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </ListItem>
      );
    } else if (totalCreditsForAll >= 45 && totalCreditsForAll <= 59) {
      return (
        <ListItem>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </ListItem>
      );
    } else {
      return (
        <ListItem>
          <GradeIcon sx={{ color: "#f7dc0e" }} />
        </ListItem>
      );
    }
  };

  //images to send to firebase storage
  const mediaFiles = [
    landscapingAndPlantersUrl,
    facilitiesForCyclingOrWalkingUrl,
    waterQualityUrl,
    highEfficiencyWaterFixturesUrl,
    rainWaterManagementUrl,
    outdoorWaterUseReductionUrl,
    surfaceWaterRunOffUrl,
    waterRecyclingUrl,
    meteringAndLeakageDetectionSystemUrl,
    waterEfficientIrrigationUrl,
    waterConservationAndManagementPlanUrl,
    energyEfficientEquipmentUrl,
    renewalEnergyUseUrl,
    energyMeteringAndMonitoringUrl,
    lowAndZeroCarbonTechnologiesUrl,
    energyEfficientColdStorageUrl,
    efficientVentilationAndACEquipmentUrl,
    alternativePassiveDesignUrl,
    ecofriendlyRefrigerantsUrl,
    optimumInteriorLightingUrl,
    dayLightingUrl,
    qualityViewsUrl,
    acousticPerformanceUrl,
    noiseAttenuationUrl,
    indoorPlantersurl,
    roomsWithinTenMetersLightingSourceUrl,
    environmentalProductDeclarationUrl,
    sustainableGreenProductsUrl,
    materialsWithRecycledContentUrl,
    materialsWithLowEmbodiedEnergyUrl,
    reusedMaterialsUrl,
    locallySourcedMaterialsUrl,
    materialsWithThirdpartyCertificationUrl,
    constructionWasteManagementUrl,
    wasteDisposalFacilitiesUrl,
    innovativeTechnologiesUrl,
    innovativeMaterialsAndProductsUrl,
    innovativeDesignUrl,
  ];
  //shape of data to send to firestore
  const gredaData = {
    name: buildingName.value,
    items: [
      {
        ratings: totalCreditsForAll,
        date: new Date(),
        phone: phone.value,
        location: buildingLocation.value,
        digitalAddress: digitalAddress.value,
      },
      {
        indicator: "Site And Transport",
        data: {
          "protect-or-restore-habitat": protectOrRestoreHabitat.value,
          "heat-island-reduction": heatIslandReduction.value,
          "landscaping-and-planters": landscapingAndPlanters.value,
          "access-to-public-transport": accessToPublicTransport.value,
          "facilities-for-cycling-or-walking":
            facilitiesForCyclingOrWalking.value,
        },
        media: {
          "landscaping-and-planters-url": mediaUrls[0],
          "facilities-for-cycling-or-walking-url": mediaUrls[1],
        },
        coordinates: {
          transport: accessToPublicTransportCoordinates.coordinate,
        },
      },

      {
        indicator: "Water Efficiency",
        data: {
          "water-quality": waterQuality.value,
          "high-efficiency-water-fixtures": highEfficiencyWaterFixtures.value,
          "rain-water-management": rainWaterManagement.value,
          "outdoor-water-use-reduction": outdoorWaterUseReduction.value,
          "surface-water-run-off": surfaceWaterRunOff.value,
          "water-recycling": waterRecycling.value,
          "metering-and-leakage-detection-system":
            meteringAndLeakageDetectionSystem.value,
          "water-efficient-irrigation": waterEfficientIrrigation.value,
          "water-conservation-and-management-plan":
            waterConservationAndManagementPlan.value,
        },
        media: {
          "water-quality-url": mediaUrls[2],
          "high-efficiency-water-fixtures-url": mediaUrls[3],
          "rain-water-management-url": mediaUrls[4],
          "outdoor-water-use-reduction-url": mediaUrls[5],
          "surface-water-run-off-url": mediaUrls[6],
          "water-recycling-url": mediaUrls[7],
          "metering-and-leakage-detection-system-url": mediaUrls[8],
          "water-efficient-irrigation-url": mediaUrls[9],
          "water-conservation-and-management-plan-url": mediaUrls[10],
        },
      },
      {
        indicator: "Energy Efficiency",
        data: {
          "greenhouse-gas-emission-reduction":
            greenhouseGasEmissionReduction.value,
          "energy-efficient-equipments": energyEfficientEquipment.value,
          "renewable-energy-use": renewalEnergyUse.value,
          "energy-metering-and-monitoring": energyMeteringAndMonitoring.value,
          "low-and-zero-carbon-technologies":
            lowAndZeroCarbonTechnologies.value,
          "energy-efficient-cold-storage": energyEfficientColdStorage.value,
          "efficient-ventilation": efficientVentilationAndACEquipment.value,
          "alternative-passive-design": alternativePassiveDesign.value,
          "embodied-energy-in-building-elements":
            emboddiedEnergyInBuildingElement.value,
          "eco-friendly-refrigerants": ecofriendlyRefrigerants.value,
        },
        media: {
          "energy-efficient-equipment-url": mediaUrls[11],
          "renewable-energy-use-url": mediaUrls[12],
          "energy-metering-and-monitoring-url": mediaUrls[13],
          "low-and-zero-carbon-technoligies-url": mediaUrls[14],
          "energy-efficient-cold-storage-url": mediaUrls[15],
          "efficient-ventilation-url": mediaUrls[16],
          "alternative-passive-design-url": mediaUrls[17],
          "eco-friendly-refrigerants-url": mediaUrls[18],
        },
      },
      {
        indicator: "Indoor Environmental Quality",
        data: {
          "low-emitting-toxic-materials": lowEmittingToxicMaterials.value,
          "optimum-interior-lighting": optimumInteriorLighting.value,
          daylighting: dayLighting.value,
          "quality-views": qualityViews.value,
          "acoustic-performance": acousticPerformance.value,
          "indoor-air-quality": indoorAirQuality.value,
          "noise-attenuation": noiseAttenuation.value,
          "indoor-planters": indoorPlanters.value,
          "rooms-within-ten-natural-lighting-source":
            roomsWithinTenMetersLightingSource.value,
        },
        media: {
          "optimum-interior-lighting-url": mediaUrls[19],
          "daylighting-url": mediaUrls[20],
          "quality-views-url": mediaUrls[21],
          "acoustic-performance-url": mediaUrls[22],
          "noise-attenuation-url": mediaUrls[23],
          "indoor-planters-url": mediaUrls[24],
          "rooms-within-ten-natural-lighting-source-url": mediaUrls[25],
        },
      },

      {
        indicator: "Material And Resources",
        data: {
          "life-cycle-impact-reduction": lifeCycleImpactReduction.value,
          "environmental-product-declaration":
            environmentalProductDeclaration.value,
          "responsible-sourcing-of-raw-materials":
            responsibleSourcingOfRawMaterials.value,
          "sustainable-green-products": sustainableGreenProducts.value,
          "materials-with-recycled-content": materialsWithRecycledContent.value,
          "materials-with-low-embodied-energy":
            materialsWithLowEmbodiedEnergy.value,
          "reused-materials": reusedMaterials.value,
          "locally-sourced-materials": locallySourcedMaterials.value,
          "materials-with-third-party-certification":
            materialsWithThirdpartyCertification.value,
        },
        media: {
          "environmental-product-declaration-url": mediaUrls[26],
          "sustainable-green-products-url": mediaUrls[27],
          "materials-with-recycled-content-url": mediaUrls[28],
          "materials-with-low-embodied-energy-url": mediaUrls[29],
          "reused-materials-url": mediaUrls[30],
          "locally-sourced-materials-url": mediaUrls[31],
          "materials-with-third-party-certification-url": mediaUrls[32],
        },
      },

      {
        indicator: "Waste And Pollution",
        data: {
          "construction-waste-management": constructionWasteManagement.value,
          "operational-waste": operationalWaste.value,
          "public-transport-access": publicTransportAccess.value,
          "waste-disposal-facilities": wasteDisposalFacilities.value,
          "low-emmitting-vehicles": lowEmittingVehicles.value,
        },
        media: {
          "construction-waste-management-url": mediaUrls[33],
          "waste-disposal-facilities-url": mediaUrls[34],
        },
        coordinates: {
          transport: publicTransportAccessCoordinate.value,
        },
      },

      {
        indicator: "Innovation",
        data: {
          "innovative-technologies": innovativeTechnologies.value,
          "innovative-materials-and-products":
            innovativeMaterialsAndProducts.value,
          "innovative-design": innovativeDesign.value,
        },
        media: {
          "innovative-technologies-url": mediaUrls[35],
          "innovative-materials-and-products-url": mediaUrls[36],
          "innovative-design-url": mediaUrls[37],
        },
      },
    ],
  };

  const handleSubmit = async () => {
    // Remove unwanted properties from formValue object
    let form = {};

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value,
      };
      return form;
    });
    // Do whatever with the values
    const urls = await uploadMediaFiles(mediaFiles);
    setMediaUrls(urls);

    if (gredaData) {
      const res = await saveDataToFirestore(buildingName.value, gredaData);
      // Show last component or success message
      if (res) {
        setProgress(!res);
        setModalMessage("Data Successfully Saved!");
        setSuccces(true);
        setOpen(res);
        handleNext();
      } else {
        setProgress(res);
        setModalMessage(
          "There was an error saving the data, Please Try again!"
        );
        setSuccces(false);
        setOpen(!res);
      }
    }
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <SuccessModal open={open} setOpen={setOpen}>
        <h1 style={{ color: `${success ? "green" : "red"}` }}>
          {success && buildingName.value} {modalMessage}
        </h1>
      </SuccessModal>
      <List disablePadding>
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Building Info
        </small>
        <ListItem>
          <ListItemText
            primary="Name of Building:"
            secondary={buildingName.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Building Location"
            secondary={buildingLocation.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Digital Address"
            secondary={digitalAddress.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Telephone Number"
            secondary={phone.value || "Not Provided"}
          />
        </ListItem>

        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Site and Transport (ST) - <h2>{siteAndTransportTotalCredit.sum}</h2>
        </small>
        <ListItem>
          <ListItemText
            primary="Protect Or Restore Habitat"
            secondary={protectOrRestoreHabitat.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Heat Island Reduction"
            secondary={heatIslandReduction.value || "Not Provided"}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Landscaping And Planters"
            secondary={landscapingAndPlanters.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Access to Public Transport"
            secondary={accessToPublicTransport.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Facilities for Cycling or Walking"
            secondary={facilitiesForCyclingOrWalking.value || "Not Provided"}
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Water Efficiency (WE)- <h2>{waterEfficiencyTotalCredit.sum}</h2>
        </small>
        <ListItem>
          <ListItemText
            primary="Water Quality"
            secondary={waterQuality.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="High Efficiency Water Fixtures"
            secondary={highEfficiencyWaterFixtures.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Rain Water Management"
            secondary={rainWaterManagement.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Outdoor Water Use Reduction"
            secondary={outdoorWaterUseReduction.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Surface Water Run Off/Stormwater Management"
            secondary={surfaceWaterRunOff.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Water Recycling"
            secondary={waterRecycling.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Metering and Leakage Detection System"
            secondary={
              meteringAndLeakageDetectionSystem.value || "Not Provided"
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Water Efficient Irrigation"
            secondary={waterEfficientIrrigation.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Water Conservation And Management Plan"
            secondary={
              waterConservationAndManagementPlan.value || "Not Provided"
            }
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Energy Efficiency and Carbon Emission Management (EEMR)-{" "}
          <h2>{energyEfficiencyTotalCredit.sum}</h2>
        </small>
        <ListItem>
          <ListItemText
            primary="Greenhouse Gas Emission Reduction"
            secondary={greenhouseGasEmissionReduction.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Energy Efficient Equipments"
            secondary={energyEfficientEquipment.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Renewable Energy Use"
            secondary={renewalEnergyUse.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Energy Metering and Monitoring"
            secondary={energyMeteringAndMonitoring.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Low and Zero Carbon Technologies"
            secondary={lowAndZeroCarbonTechnologies.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Energy Efficient Cold Storage"
            secondary={energyEfficientColdStorage.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Efficient Ventilation And A/C Equipment"
            secondary={
              efficientVentilationAndACEquipment.value || "Not Provided"
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Alternative Passive Design"
            secondary={alternativePassiveDesign.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Emboddied Energy in Building Elements"
            secondary={emboddiedEnergyInBuildingElement.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Eco-friendly Refrigerants"
            secondary={ecofriendlyRefrigerants.value || "Not Provided"}
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Indoor Environmental Quality(IEQ)-{" "}
          <h2>{indoorEnvironQualityTotalCredit.sum}</h2>
        </small>
        <ListItem>
          <ListItemText
            primary="Low Emitting Toxic Materials"
            secondary={lowEmittingToxicMaterials.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Optimum Interior Lighting"
            secondary={optimumInteriorLighting.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Daylighting"
            secondary={dayLighting.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Quality Views"
            secondary={qualityViews.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Acousting Performance"
            secondary={acousticPerformance.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Indoor Air Quality"
            secondary={indoorAirQuality.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Noise Attenuation"
            secondary={noiseAttenuation.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Indoor Planters"
            secondary={indoorPlanters.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Rooms within 10m Natural Lighting Source"
            secondary={
              roomsWithinTenMetersLightingSource.value || "Not Provided"
            }
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Material And Resources (MR)-{" "}
          <h2>{materialAndResourcesTotalCredit.sum}</h2>
        </small>
        <ListItem>
          <ListItemText
            primary="Life Cycle Impact Reduction"
            secondary={lifeCycleImpactReduction.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Environmental Product Declaration"
            secondary={environmentalProductDeclaration.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Responsible Sourcing of Raw Materials"
            secondary={
              responsibleSourcingOfRawMaterials.value || "Not Provided"
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Sustainable/Green Products"
            secondary={sustainableGreenProducts.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Materials with Recycled Content"
            secondary={materialsWithRecycledContent.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Materials with Low Embodied Energy"
            secondary={materialsWithLowEmbodiedEnergy.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Reused Materials"
            secondary={reusedMaterials.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Locally Sourced Materials"
            secondary={locallySourcedMaterials.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Materials with Third-Party Certification/Verification"
            secondary={
              materialsWithThirdpartyCertification.value || "Not Provided"
            }
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Waste And Pollution (WP)- <h2>{wasteAndPollutionTotalCredit.sum}</h2>
        </small>

        <ListItem>
          <ListItemText
            primary="Construction Waste Management"
            secondary={constructionWasteManagement.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Operational Waste Management"
            secondary={operationalWaste.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Public Transport Access"
            secondary={publicTransportAccess.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Waste Disposal Facilities"
            secondary={wasteDisposalFacilities.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Low Emitting Vehicles"
            secondary={lowEmittingVehicles.value || "Not Provided"}
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Innovation (IN)- <h2>{innovationTotalCredit.sum}</h2>
        </small>
        <ListItem>
          <ListItemText
            primary="Innovative Technologies"
            secondary={innovativeTechnologies.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Innovative Materials and Products"
            secondary={innovativeMaterialsAndProducts.value || "Not Provided"}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Innovative Design"
            secondary={innovativeDesign.value || "Not Provided"}
          />
        </ListItem>
        <Divider />
        <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>
          *Certification Level{": "}
          {"  "}
          <h1 style={{ display: "inline" }}> {totalCreditsForAll}</h1>
        </small>
        <>{computeStarRating()}</>
      </List>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button
          sx={{ mr: 1, backgroundColor: `${colors.primary[100]} !important` }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setProgress(true);
            handleSubmit();
          }}
          disabled={progress}
        >
          {progress && (
            <>
              <CircularProgress
                width="10"
                disableShrink
                sx={{ width: "10px", marginRight: "5px" }}
              />{" "}
              <span>Saving Data...</span>
            </>
          )}
          {!progress && "Confirm & Continue"}
        </Button>
      </Box>
    </>
  );
}
