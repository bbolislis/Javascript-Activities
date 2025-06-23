const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const dataObj = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

convertBtn.addEventListener("click", () => {
  result.innerText = convertToRoman(input.value);
  input.value = "";
});

const convertToRoman = (num) => {
  if (input.value === "") {
    return "Please enter a valid number";
  } else if (input.value <= 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    return "Please enter a number less than or equal to 3999";
  } else {
    let roman = "";
    for (const key in dataObj) {
      while (num >= dataObj[key]) {
        roman += key;
        num -= dataObj[key];
      }
    }
    return roman;
  }
};
