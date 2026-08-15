let currentDate = new Date();

let currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(currentDate) {
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let formatDateMMDDYYYY = `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
  return formatDateMMDDYYYY;
}

console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(currentDate) {
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = {
    month: "long",
  };
  let monthLong = currentDate.toLocaleDateString("en-GB", month);
  let formatDateLong = `Formatted Date (Month Day, Year): ${monthLong} ${day}, ${year}`;
  return formatDateLong;
}

console.log(formatDateLong(currentDate));
