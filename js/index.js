const sum = closure();

function runHW() {
  mainlogic(sum);
}

function mainlogic(closureF) {
  const userInput = prompt("Enter a number");
  document.getElementById("currInput").innerHTML = userInput;
  if (userInput === null) {
    alert("As you wish");
    document.getElementById("currSum").innerHTML = "";
  } else if (!canConvert2Number(userInput)) alert("Invalid numer");
  else closureF(Number(userInput.trim()));
}

function canConvert2Number(el) {
  return el.trim() && Number(el.trim());
}

function closure() {
  let sum = 0;

  return function (value) {
    sum += value;
    document.getElementById("currSum").innerHTML = sum;
    return sum;
  };
}
