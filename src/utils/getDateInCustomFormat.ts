const monthNames = [
  "Jan",
  "Febr",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const getDateInCostumeFormat = (str: string) => {
  const date = new Date(str);

  const month = monthNames[date.getMonth() - 1];
  const year = date.getFullYear();
  const day = date.getDay();
  return { month, day, year };
};
export default getDateInCostumeFormat;
