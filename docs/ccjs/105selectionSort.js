function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
	  for (let j = 0; j < array.length - 1 - i; j++) {
	    if (array[j] > array[j + 1]) {
	      let min = array[j + 1];
				array.splice(j+1, 1);
				array.splice(0,0, min);
	    }
	  }
	}
	return array;
}

const numbers = [10, 4, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
console.log('Sorted array: ');
console.log(selectionSort(numbers));
 i← 1
REPEAT UNTIL (i > LENGTH(numbers)) {
  minIndex ← i
  j ← i + 1
  // Find next smallest value
  REPEAT UNTIL (j > LENGTH(numbers)) {
    IF (numbers[j] < numbers[minIndex]) {
      minIndex ← j
    }
    j ← j + 1
  }
  // Swap if new minimum found
  IF (minIndex != i) {
    tempNum ← numbers[minIndex]
    numbers[minIndex] ← numbers[i]
    numbers[i] ← tempNum
  }
  i ← i + 1
}
i 1
1>8
min 4
j 8 
4>8
2<4