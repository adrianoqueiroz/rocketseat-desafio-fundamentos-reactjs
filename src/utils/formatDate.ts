export const formatDate = (value: Date): string => {
  const date = new Date(value);

  return new Intl.DateTimeFormat('pt-br').format(date);
};

export default formatDate;
