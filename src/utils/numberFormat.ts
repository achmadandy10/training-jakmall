const currencyFractionDigits = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
}).resolvedOptions().maximumFractionDigits;

export const NumberFormat = (value: number) => {
  return value.toLocaleString('de-DE', {
    maximumFractionDigits: currencyFractionDigits,
  });
};
