// frontend/src/utils/helpers.ts

export const formatCurrency = (amount: number, currency = "BDT") => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency,
  }).format(amount);
};

export const capitalize = (str: string) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
