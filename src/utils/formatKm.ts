export const formatKm = (km: string): string => {
  const numKm = parseInt(km.replace(/\D/g, ""));
  return numKm.toLocaleString("pt-BR");
};
