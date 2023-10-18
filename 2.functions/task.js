// Работа с массивами

// Задача 1 min, max, sum элементов массива
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0

  if (arr.length != 0) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] <= min) {
              min = arr[i];
          }
          if (arr[i] >= max) {
              max = arr[i];
          }
          sum = arr[i] + sum;
      }
      avg = sum / arr.length;
      avg = parseFloat(avg.toFixed(2));
      return {
          max: max,
          min: min,
          avg: avg
      };
  } else {
      return 0;
  }
}

// Задача 2. Mясорубка с разными насадками

//насадка суммирования элементов
function summElementsWorker(...attachments) {
  if (attachments.length != 0) {
      const initialSumValue = 0;
      const sumOfArrayElements = attachments.reduce((sum, element) => sum + element, initialSumValue);
      return sumOfArrayElements;
  } else {
      return 0;
  }
}

//насадка вычисления разницы максимального и минимального элементов
function differenceMaxMinWorker(...attachments) {
  if (attachments.length != 0) {
      const max = attachments.reduce((a, b) => Math.max(a, b), -Infinity);
      const min = attachments.reduce((a, b) => Math.min(a, b), Infinity);
      return max - min;
  } else {
      return 0;
  }
}

//насадка вычисления разницы сумм чётных и нечётных элементов;
function differenceEvenOddWorker(...attachments) {
  if (attachments.length != 0) {
      let sumOfEvenElement = 0;
      let sumOfOddElement = 0;
      for (let i = 0; i < attachments.length; i++) {
          if (attachments[i] % 2 === 1) {
              sumOfOddElement = sumOfOddElement + attachments[i];
          } else if (attachments[i] % 2 === 0) {
              sumOfEvenElement = sumOfEvenElement + attachments[i];
          }
      }
      return sumOfEvenElement - sumOfOddElement;
  } else {
      return 0;
  }
}

//насадка вычисления среднего значения чётных элементов.
function averageEvenElementsWorker(...attachments) {
  if (attachments.length != 0) {
      let sumEvenElement = 0;
      let countEvenElement = 0;

      for (let i = 0; i < attachments.length; i++) {
          if (attachments[i] % 2 === 0) {
              sumEvenElement = sumEvenElement + attachments[i];
              countEvenElement = countEvenElement + 1;
          }
      }

      if (countEvenElement != 0) {
          return sumEvenElement / countEvenElement;
      } else {
          return 0;
      }
  } else {
      return 0;
  }
}

// Задача 3. Агрегатор преобразований
function makeWork([...arrOfArr], func) {
  let maxWorkerResult = -Infinity;
  let currentMaxWorker = -Infinity;

  if (arrOfArr.length != 0) {
      for (let i = 0; i < arrOfArr.length; i++) {
          currentMaxWorker = func(...arrOfArr[i]);
          if (currentMaxWorker > maxWorkerResult) {
              maxWorkerResult = currentMaxWorker;
          }
      }
  }
  return maxWorkerResult;
}