function bubbleSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
	  for (let j = 0; j < array.length - 1 - i; j++) {
	    if (array[j] > array[j + 1]) {
	        const temp = array[j];
	        array[j] = array[j + 1];
	        array[j + 1] = temp;
	    }
	  }
	}
	return array;
}


const numbers = [10, 4, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
console.log('Sorted array: ');
console.log(bubbleSort(numbers));


