const inputValue = document.querySelector(".enterNumber");
const equal = document.querySelector(".equal");
const outputValue = document.querySelector(".outputValue");
const select = document.querySelector("select"); 

const inputValueStorage = localStorage.getItem("input");
if (inputValueStorage) {
  inputValue.value = inputValueStorage;
}

const storedValue = localStorage.getItem("outputValue");
if (storedValue) {
  outputValue.innerHTML = storedValue;
}

equal.addEventListener("click", (event) => {

  const selectedCurrency = select.value;

  let inputValue1;
  if (selectedCurrency === "tl") {
    inputValue1 = parseFloat(inputValue.value.trim()) / 2;
  } else if (selectedCurrency === "rubl") {
    inputValue1 = parseFloat(inputValue.value.trim()) / 3;
  } else {
    inputValue1 = parseFloat(inputValue.value.trim()) / 5;
  }

  outputValue.innerHTML = inputValue1;
  localStorage.setItem("outputValue", inputValue1);
  localStorage.setItem("input", inputValue.value.trim());
});

select.addEventListener("change", () => {

  equal.click();
});
