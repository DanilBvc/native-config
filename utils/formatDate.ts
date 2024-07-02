export const FormatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const parseCustomDate = (dateString: string | null): Date | null => {
  if (!dateString) return null;
  const [day, month, year] = dateString.split('.').map(Number);
  if (!day || !month || !year) {
    return null;
  }
  // Months are 0-based in JavaScript's Date object
  return new Date(year, month - 1, day);
};
