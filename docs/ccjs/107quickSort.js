function quicksort(array) {
	if (array.length <= 1) return array;

	let pivot = array[0];
	let larger = [];
	let smaller = [];

	for (let i = 1; i < array.length; i++) {
		if (array[i] < pivot) {
			smaller.push(array[i]);
		} else {
			larger.push(array[i]);
		}
	}

	return quicksort(smaller)
		.concat(pivot)
		.concat(quicksort(larger));
}

const numbers = [10, 4, 6, 14, 2, 1, 8, 5];
console.log('Unsorted array: ');
console.log(numbers);
console.log('Sorted array: ');
console.log(quicksort(numbers));


