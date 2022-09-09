const date_picker_element = document.querySelector(".date-picker");
const selected_date_element = document.querySelector(
  ".date-picker .selected-date"
);
const dates_element = document.querySelector(".date-picker .dates");
const mth_element = document.querySelector(".date-picker .dates .month .mth");
const next_mth_element = document.querySelector(
  ".date-picker .dates .month .next-mth"
);
const prev_mth_element = document.querySelector(
  ".date-picker .dates .month .prev-mth"
);
const days_element = document.querySelector(".date-picker .dates .days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let JanuaryImg;
let FebruaryImg;
let MarchImg;
let AprilImg;
let MayImg;
let JuneImg;
let JulyImg;
let AugustImg;
let SeptemberImg;
let OctoberImg;
let NovemberImg;
let DecemberImg;

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate;
let selectedDay;
let selectedMonth;
let selectedYear;

let selectedDateTwo;
let selectedDayTwo;
let selectedMonthTwo;
let selectedYearTwo;

function preload() {
  JanuaryImg = new loadImage("src/Jiraiya_img.png");
  FebruaryImg = new loadImage("src/February_img.png");
  MarchImg = new loadImage("src/March_img.png");
  AprilImg = new loadImage("src/April_img.png");
  MayImg = new loadImage("src/May_img.png");
  JuneImg = new loadImage("src/June_img.png");
  JulyImg = new loadImage("src/July_img.png");
  AugustImg = new loadImage("src/August_img.png");
  SeptemberImg = new loadImage("src/September_img.png");
  OctoberImg = new loadImage("src/October_img.png");
  NovemberImg = new loadImage("src/November_img.png");
  DecemberImg = new loadImage("src/December_img.png");
}

const images = [
  JanuaryImg,
  FebruaryImg,
  MarchImg,
  AprilImg,
  MayImg,
  JuneImg,
  JulyImg,
  AugustImg,
  SeptemberImg,
  OctoberImg,
  NovemberImg,
  DecemberImg,
];

mth_element.textContent = months[month] + " " + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

date_picker_element.addEventListener("click", toggleDatePicker);

next_mth_element.addEventListener("click", goToNextMonth);
prev_mth_element.addEventListener("click", goToPrevMonth);
