import { useContext } from "react";
import { AppContext } from "../../context/form.context";

export const useCertLevelComputation = () => {
  const { formValues } = useContext(AppContext);
  const {
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
    siteAndTransportTotalCredit,
    waterEfficiencyTotalCredit,
    energyEfficiencyTotalCredit,
    indoorEnvironQualityTotalCredit,
    materialAndResourcesTotalCredit,
    wasteAndPollutionTotalCredit,
    innovationTotalCredit,
  } = formValues;

  const certLevelComputation = {
    siteAndTransportTotalCredit: {
      sum:
        Number(protectOrRestoreHabitat.value) +
        Number(heatIslandReduction.value) +
        Number(landscapingAndPlanters.value) +
        Number(accessToPublicTransport.value) +
        Number(facilitiesForCyclingOrWalking.value),
    },
    waterEfficiencyTotalCredit: {
      sum:
        Number(waterQuality.value) +
        Number(highEfficiencyWaterFixtures.value) +
        Number(rainWaterManagement.value) +
        Number(outdoorWaterUseReduction.value) +
        Number(surfaceWaterRunOff.value) +
        Number(waterRecycling.value) +
        Number(meteringAndLeakageDetectionSystem.value) +
        Number(waterEfficientIrrigation.value) +
        Number(waterConservationAndManagementPlan.value),
    },
    energyEfficiencyTotalCredit: {
      sum:
        Number(greenhouseGasEmissionReduction.value) +
        Number(energyEfficientEquipment.value) +
        Number(renewalEnergyUse.value) +
        Number(energyMeteringAndMonitoring.value) +
        Number(lowAndZeroCarbonTechnologies.value) +
        Number(energyEfficientColdStorage.value) +
        Number(efficientVentilationAndACEquipment.value) +
        Number(alternativePassiveDesign.value) +
        Number(emboddiedEnergyInBuildingElement.value) +
        Number(ecofriendlyRefrigerants.value),
    },
    indoorEnvironQualityTotalCredit: {
      sum:
        Number(lowEmittingToxicMaterials.value) +
        Number(optimumInteriorLighting.value) +
        Number(dayLighting.value) +
        Number(qualityViews.value) +
        Number(acousticPerformance.value) +
        Number(indoorAirQuality.value) +
        Number(noiseAttenuation.value) +
        Number(indoorPlanters.value) +
        Number(roomsWithinTenMetersLightingSource.value),
    },
    materialAndResourcesTotalCredit: {
      sum:
        Number(lifeCycleImpactReduction.value) +
        Number(environmentalProductDeclaration.value) +
        Number(responsibleSourcingOfRawMaterials.value) +
        Number(sustainableGreenProducts.value) +
        Number(materialsWithRecycledContent.value) +
        Number(materialsWithLowEmbodiedEnergy.value) +
        Number(reusedMaterials.value) +
        Number(locallySourcedMaterials.value) +
        Number(materialsWithThirdpartyCertification.value),
    },
    wasteAndPollutionTotalCredit: {
      sum:
        Number(constructionWasteManagement.value) +
        Number(operationalWaste.value) +
        Number(publicTransportAccess.value) +
        Number(wasteDisposalFacilities.value) +
        Number(lowEmittingVehicles.value),
    },
    innovationTotalCredit: {
      sum:
        Number(innovativeTechnologies.value) +
        Number(innovativeMaterialsAndProducts.value) +
        Number(innovativeDesign.value),
    },
    totalCreditForAllIndicators: {
      sum:
        siteAndTransportTotalCredit +
        waterEfficiencyTotalCredit +
        energyEfficiencyTotalCredit +
        indoorEnvironQualityTotalCredit +
        materialAndResourcesTotalCredit +
        wasteAndPollutionTotalCredit +
        innovationTotalCredit,
    },
  };
  return certLevelComputation;
};
