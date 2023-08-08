const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calcResult(calcType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (
    (calcType !== "ADD" &&
      calcType !== "SUBTRACT" &&
      calcType !== "MULTIPLY" &&
      calcType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }
  if (calcType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calcType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calcType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calcType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calcResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calcResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calcResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calcResult.bind(this, "DIVIDE"));
