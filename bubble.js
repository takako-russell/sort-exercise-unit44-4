function bubbleSort(arr) {
  let temp;
  let n = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;

        swapped = true;
      }
    }
    n--;
  }

  return arr;
}

module.exports = bubbleSort;
