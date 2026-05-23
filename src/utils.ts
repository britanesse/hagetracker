export function formatDate(date: Date) {
  let day = `${date.getDate()}`;
  let month = `${date.getMonth() + 1}`;
  const year = date.getFullYear();

  if (day.length === 1) {
    day = "0" + day;
  }
  if (month.length === 1) {
    month = "0" + month;
  }

  return day + "." + month + "." + year;
}
