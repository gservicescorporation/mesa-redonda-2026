export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-AO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};