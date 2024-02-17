import React, { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';
import { AppContext } from "../../context/form.context";
import { tokens } from "../../theme";
import { useCertLevelComputation } from "../../utils/variables/variables.util";

export default function Confirm() {
    const { formValues, handleBack, handleNext } = useContext(AppContext);
    const { buildingName, buildingLocation, digitalAddress, phone, protectOrRestoreHabitat, heatIslandReduction, landscapingAndPlanters, accessToPublicTransport, facilitiesForCyclingOrWalking, waterQuality, highEfficiencyWaterFixtures, rainWaterManagement, outdoorWaterUseReduction, surfaceWaterRunOff, waterRecycling, meteringAndLeakageDetectionSystem, waterEfficientIrrigation, waterConservationAndManagementPlan, greenhouseGasEmissionReduction, energyEfficientEquipment, renewalEnergyUse, energyMeteringAndMonitoring, lowAndZeroCarbonTechnologies, energyEfficientColdStorage, efficientVentilationAndACEquipment, alternativePassiveDesign, emboddiedEnergyInBuildingElement, ecofriendlyRefrigerants, lowEmittingToxicMaterials, optimumInteriorLighting, dayLighting, qualityViews, acousticPerformance, indoorAirQuality, noiseAttenuation, indoorPlanters, roomsWithinTenMetersLightingSource, lifeCycleImpactReduction, environmentalProductDeclaration, responsibleSourcingOfRawMaterials, sustainableGreenProducts, materialsWithRecycledContent, materialsWithLowEmbodiedEnergy, reusedMaterials, locallySourcedMaterials, materialsWithThirdpartyCertification, constructionWasteManagement, operationalWaste, publicTransportAccess, wasteDisposalFacilities, lowEmittingVehicles, innovativeTechnologies, innovativeMaterialsAndProducts, innovativeDesign } = formValues;
    const certLevelComputation = useCertLevelComputation();
    const { siteAndTransportTotalCredit, waterEfficiencyTotalCredit, energyEfficiencyTotalCredit, indoorEnvironQualityTotalCredit, materialAndResourcesTotalCredit, wasteAndPollutionTotalCredit, innovationTotalCredit, totalCreditForAllIndicators } = certLevelComputation;
    const totalCreditsForAll = Number(siteAndTransportTotalCredit.sum) +
        Number(waterEfficiencyTotalCredit.sum) +
        Number(energyEfficiencyTotalCredit.sum) +
        Number(indoorEnvironQualityTotalCredit.sum) +
        Number(materialAndResourcesTotalCredit.sum) +
        Number(wasteAndPollutionTotalCredit.sum) +
        Number(innovationTotalCredit.sum);
    //compute star ratings
    const computeStarRating = () => {
        console.log(totalCreditsForAll);
        if (totalCreditsForAll >= 106 && totalCreditsForAll <= 130) {
            return <ListItem>
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
            </ListItem>
        } else if (totalCreditsForAll >= 80 && totalCreditsForAll <= 105) {
            return <ListItem>
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
            </ListItem>
        } else if (totalCreditsForAll >= 60 && totalCreditsForAll <= 79) {
            return <ListItem>
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
            </ListItem>
        } else if (totalCreditsForAll >= 45 && totalCreditsForAll <= 59) {
            return <ListItem>
                <GradeIcon sx={{ color: "#f7dc0e" }} />
                <GradeIcon sx={{ color: "#f7dc0e" }} />
            </ListItem>
        } else {
            return <ListItem>
                <GradeIcon sx={{ color: "#f7dc0e" }} />
            </ListItem>
        }
    }
    const handleSubmit = () => {

        // Remove unwanted properties from formValue object
        let form = {};

        Object.keys(formValues).map((name) => {
            form = {
                ...form,
                [name]: formValues[name].value
            };
            return form;
        });
        // Do whatever with the values
        console.log(form);
        // Show last component or success message
        handleNext();
    };


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <List disablePadding>
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Building Info</small>
                <ListItem>
                    <ListItemText
                        primary="Name of Building"
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
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Site and Transport (ST) - <h2>{siteAndTransportTotalCredit.sum}</h2></small>
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
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Water Efficiency (WE)- <h2>{waterEfficiencyTotalCredit.sum}</h2></small>
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
                        secondary={meteringAndLeakageDetectionSystem.value || "Not Provided"}
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
                        secondary={waterConservationAndManagementPlan.value || "Not Provided"}
                    />
                </ListItem>
                <Divider />
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Energy Efficiency and Carbon Emission Management (EEMR)- <h2>{energyEfficiencyTotalCredit.sum}</h2></small>
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
                        secondary={efficientVentilationAndACEquipment.value || "Not Provided"}
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
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Indoor Environmental Quality(IEQ)- <h2>{indoorEnvironQualityTotalCredit.sum}</h2></small>
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
                        secondary={roomsWithinTenMetersLightingSource.value || "Not Provided"}
                    />
                </ListItem>
                <Divider />
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Material And Resources (MR)- <h2>{materialAndResourcesTotalCredit.sum}</h2></small>
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
                        secondary={responsibleSourcingOfRawMaterials.value || "Not Provided"}
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
                        secondary={materialsWithThirdpartyCertification.value || "Not Provided"}
                    />
                </ListItem>
                <Divider />
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Waste And Pollution (WP)- <h2>{wasteAndPollutionTotalCredit.sum}</h2></small>
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
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Innovation (IN)- <h2>{innovationTotalCredit.sum}</h2></small>
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
                <small name="variable" style={{ color: `${colors.greenAccent[500]}` }}>*Certification Levels </small>
                <>
                    {computeStarRating()}
                </>
            </List>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
                <Button sx={{ mr: 1, backgroundColor: `${colors.primary[100]} !important` }} onClick={handleBack}>
                    Back
                </Button>
                <Button variant="contained" color="success" onClick={handleSubmit}>
                    Confirm & Continue
                </Button>
            </Box>
        </>
    );
}
