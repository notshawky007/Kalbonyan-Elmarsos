const initResult = 0;
let currentResult = initResult;
let logEntries = [];

// Gets input from user input feild
function getUserNumberInput() {
  return parseInt(userInput.value);
}
// Generate and write calcultation log
function creatAndWriteOutput(op, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${op} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(opId, prevResult, opNum, newResult) {
  const logEntery = {
    op: opId,
    prevResult: prevResult,
    number: opNum,
    result: newResult,
  };

  logEntries.push(logEntery);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // console.log("input", enteredNumber, currentResult);
  currentResult += enteredNumber;
  creatAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("add", initResult, enteredNumber, currentResult);

  // logEntries.push(logEntries)
  // console.log(logEntries);
}
function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  creatAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("Sub", initResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  creatAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("Multi", initResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  creatAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("Divid", initResult, enteredNumber, currentResult);
}

// let sum = add(4, 5);
// currentResult = sum;
// currentResult = currentResult * 2 + 3 - (2 / 4) * 2;
// let calculationDescription = `( ${initResult} * 2 ) + 3 - 2 / 4 * 2`;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
