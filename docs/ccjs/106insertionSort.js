function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j = i - 1;

		while (j >= 0 && array[j] > current) {
			array[j + 1] = array[j];
			j--;
		}

		array[j + 1] = current;
	}

	return array;

}

const numbers = [10, 4, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
console.log('Sorted array: ');
console.log(insertionSort(numbers));

