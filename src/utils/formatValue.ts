export const formatValue = (value: number | string): string => {
  const currency = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency);
};

export default formatValue;
