const useDate = (): String => {
  const date = new Date();
  const day = date.getDate().toString();
  const month =
    date.getMonth() + 1 > 9
      ? (date.getMonth() + 1).toString()
      : "0" + (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();
  return day + "-" + month + "-" + year;
};
export default useDate;
