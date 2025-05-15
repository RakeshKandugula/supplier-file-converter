// This file contains all supplier data
export const suppliers = [
  "ACC3SS_OY",
  "ACNE_STUDIOS_AB",
  "ADIDAS_SUOMI_OY",
  "GIORGIO_ARMANI_S.P.A.",
  "BESTSELLER_WHOLESALE_FINLAND_OY",
  "C.W.F._CHILDREN_WORLDWIDE_FASHION",
  "DIDRIKSONS_FINLAND_OY",
  "DK_COMPANY_FINLAND_OY",
  "KAIKO_CLOTHING_COMPANY_OY",
  "KNOWLEDGE_COTTON_APPAREL_A/S",
  "LIEWOOD_A/S",
  "MAKIA_CLOTHING_OY",
  "Marc_OPolo_International_GmbH",
  "DEDIMAX_S.R.L.",
  "MARIMEKKO_OYJ",
  "MAYORAL_MODA_INFANTIL_SAU",
  "METSOLA_LIFESTYLE_OY",
  "MINI_RODINI_AB",
  "MODSTROM_APS",
  "MOLO_A/S",
  "MOSS_CPH_A/S",
  "NANSO_GROUP_OY",
  "ONLINE_TEXTILE_SOLUTIONS_A/S",
  "PRO_FASHION_OY",
  "PVH_FINLAND_OY",
  "RALPH_LAUREN_SCANDINAVIA_AB_STOCKHOL",
  "SAND_CPH_A/S",
  "SANETTA,__GEBRUDER_AMMANN_GMBH_&_CO._KG",
  "SECOND_FEMALE_APS",
  "testsupplier1",
  "testsupplier2",
  "VAGABOND_FINLAND_OY",
  "VF_SCANDINAVIA_A/S",
  "VILA_FINLAND_OY",
  "LONGCHAMP_SAS",
  "MULBERRY_GROUP_PLC",
  "REIMA_EUROPE_OY_/_PL_VAT"
];

export const specialSuppliers = [];

export function getSupplierOptions() {
  const standardOptions = suppliers.map(supplier => ({
    value: supplier,
    label: supplier
  }));
  
  return [...standardOptions, ...specialSuppliers].sort((a, b) => a.value.localeCompare(b.value));
}
