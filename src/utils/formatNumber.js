/** @format */

export function formatNumber(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3");
}
