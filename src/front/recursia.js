function printIncreasing(startNumber, endNumber, result) {
  if (startNumber <= endNumber) {
    result.push(startNumber);
    if (startNumber !== endNumber) {
      printIncreasing(startNumber + 1, endNumber, result);
    }
  }
}

function printDecreasing(startNumber, endNumber, result) {
  if (startNumber >= endNumber) {
    result.push(startNumber);
    if (startNumber !== endNumber) {
      printDecreasing(startNumber - 1, endNumber, result);
    }
  }
}

function calculateRecursion() {
  const startNumber = parseInt(document.getElementById("startNumber").value);
  const endNumber = parseInt(document.getElementById("endNumber").value);
  const result = [];

  if (startNumber <= endNumber) {
    printIncreasing(startNumber, endNumber, result);
  } else {
    printDecreasing(startNumber, endNumber, result);
  }

  displayResult(result);
}

function displayResult(result) {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = result.join(", ");
}
