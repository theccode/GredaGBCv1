export const initialValues = {
  // Building information
  buildingName: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 100,
    helperText: "Custom error message",
  },
  buildingLocation: {
    value: "",
    error: "",
    required: true,
    validate: "text",
    minLength: 2,
    maxLength: 60,
  },
  digitalAddress: {
    value: "",
    error: "",
    required: true,
    validate: "alphaNumeric",
    minLength: 2,
    maxLength: 20,
  },
  // Site And Transport
  protectOrRestoreHabitat: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  heatIslandReduction: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  landscapingAndPlanters: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  accessToPublicTransport: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  facilitiesForCyclingOrWalking: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  // Water Efficiency
  waterQuality: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  highEfficiencyWaterFixtures: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  rainWaterManagement: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  outdoorWaterUseReduction: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  surfaceWaterRunOff: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  waterRecycling: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  meteringAndLeakageDetectionSystem: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  waterEfficientIrrigation: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  waterConservationAndManagementPlan: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  // Energy Efficiency & Carbon Emission mgt
  greenhouseGasEmissionReduction: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  energyEfficientEquipment: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  renewalEnergyUse: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  energyMeteringAndMonitoring: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  lowAndZeroCarbonTechnologies: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  energyEfficientColdStorage: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  efficientVentilationAndACEquipment: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  alternativePassiveDesign: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  emboddiedEnergyInBuildingElement: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  ecofriendlyRefrigerants: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  // Indoor Environmental Quality
  lowEmittingToxicMaterials: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  optimumInteriorLighting: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  dayLighting: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  qualityViews: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  acousticPerformance: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  indoorAirQuality: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  noiseAttenuation: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  indoorPlanters: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  roomsWithinTenMetersLightingSource: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  // Material & Resources
  lifeCycleImpactReduction: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  environmentalProductDeclaration: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  responsibleSourcingOfRawMaterials: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  sustainableGreenProducts: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  materialsWithRecycledContent: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  materialsWithLowEmbodiedEnergy: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  reusedMaterials: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  locallySourcedMaterials: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  materialsWithThirdpartyCertification: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  verifications: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  // Waste And Pollution
  constructionWasteManagement: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  operationalWaste: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  publicTransportAccess: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  wasteDisposalFacilities: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  lowEmittingVehicles: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  //Innovation
  innovativeTechnologies: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  innovativeMaterialsAndProducts: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },
  innovativeDesign: {
    value: "",
    error: "",
    required: true,
    validate: "numeric",
    minLength: 1,
    maxLength: 1,
  },

  email: {
    value: "",
    error: "",
    validate: "email",
  },
  gender: {
    value: "",
    error: "",
    validate: "select",
  },
  date: {
    value: "",
    error: "",
  },
  city: {
    value: "",
    error: "",
    validate: "text",
    minLength: 3,
    maxLength: 20,
  },
  agreenemt: {
    value: false,
    error: "",
    required: true,
    validate: "checkbox",
    helperText: "Please accept our terms and conditions",
  },
  phone: {
    value: "",
    error: "",
    validate: "phone",
    maxLength: 15,
  },
  // Photos, Videos, and Audios
  //*ST
  landscapingAndPlantersUrl: {
    value: null,
    error: "",
    validate: "file",
    required: true,
    helperText: "Please attach a photograph",
  },
  accessToPublicTransportCordinates: {
    lat: "",
    lng: "",
    error: "",
    required: true,
    helperText: "Please Attach a Location from the Map.",
  },
  facilitiesForCyclingOrWalkingUrl: {
    value: null,
    error: "",
    validate: "file",
    required: true,
    helperText: "Please upload a photograph",
  },
  // *WE
  waterQualityUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a photograph",
  },
  highEfficiencyWaterFixturesUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Video.",
  },
  rainWaterManagementUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  outdoorWaterUseReductionUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  surfaceWaterRunOffUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Video.",
  },
  waterRecyclingUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Video.",
  },
  meteringAndLeakageDetectionSystemUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  waterEfficientIrrigationUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Video.",
  },
  waterConservationAndManagementPlanUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  // *EEMR
  energyEfficientEquipmentUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  renewalEnergyUseUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  energyMeteringAndMonitoringUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  lowAndZeroCarbonTechnologiesUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  energyEfficientColdStorageUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  efficientVentilationAndACEquipmentUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  alternativePassiveDesignUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Video.",
  },
  emboddiedEnergyInBuildingElementUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  ecofriendlyRefrigerantsUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  // IEQ
  optimumInteriorLightingUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  dayLightingUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  qualityViewsUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  acousticPerformanceUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload an Audio.",
  },
  noiseAttenuationUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload an Audio.",
  },
  indoorPlantersurl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  roomsWithinTenMetersLightingSourceUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  //MR
  environmentalProductDeclarationUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  sustainableGreenProductsUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  materialsWithRecycledContentUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  materialsWithLowEmbodiedEnergyUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  reusedMaterialsUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  materialsWithThirdpartyCertificationUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  //WP
  constructionWasteManagementUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  publicTransportAccessCoordinate: {
    lat: "",
    lng: "",
    error: "",
    required: true,
    helperText: "Please attach a map.",
  },
  wasteDisposalFacilitiesUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  //IN
  innovativeTechnologiesUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Video.",
  },
  innovativeMaterialsAndProductsUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
  innovativeDesignUrl: {
    value: "",
    error: "",
    required: true,
    helperText: "Please upload a Photograph.",
  },
};
