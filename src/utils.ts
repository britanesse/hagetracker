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

export function download(filename: string, text: string) {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:application/json;charset=utf-8," + encodeURIComponent(text),
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
