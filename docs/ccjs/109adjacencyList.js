function adjacencyListToMatrix(adjacencyList) {
	let adjacencyMatrix = [];
	
	const matrixSize = Object.keys(adjacencyList).length;
	
	Object.values(adjacencyList).forEach(value => {
		let matrixRow = new Array(matrixSize).fill(0);
		value.forEach(node => {
			matrixRow[node]=1;
		})
		console.log(matrixRow);
		adjacencyMatrix.push(matrixRow);
});
	
	return adjacencyMatrix;
}

console.log(adjacencyListToMatrix({0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [1, 2]}))


