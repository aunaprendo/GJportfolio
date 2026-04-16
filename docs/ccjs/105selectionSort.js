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
