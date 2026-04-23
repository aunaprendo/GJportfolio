function dfsNQueens(n) {
	const result = []; 
	
	if (n<1) {
		return result;
	}
	
	function dfs(row, n, column) {
		let lastQ = row-1;
		
		for (let preQ=0; preQ<lastQ; preQ++) {
			if (column[preQ] === column[lastQ]) return;
			
			let rowDiff = Math.abs(preQ-lastQ);
			let columnDiff = Math.abs(column[preQ]-column[lastQ]);
			if (rowDiff === columnDiff) return;
		}
		if (row===n) {
			result.push(column.slice());
			return;
		}
		for (let col=0; col<n; col++) {
			column.push(col);
			dfs(row+1,n,column);
			column.pop();
		}
	}
	dfs(0,n, []);
	return result;
};

console.log(dfsNQueens(4));

 // should return [[1, 3, 0, 2], [2, 0, 3, 1]]
 
 AI version to compare
 function dfsNQueens(n) {
	const result = [];

	if (n < 1) return result;

	function dfs(row, column) {
		const lastQ = column.length - 1;

		// validate last placed queen
		for (let preQ = 0; preQ < lastQ; preQ++) {
			const sameCol = column[preQ] === column[lastQ];
			const sameDiag =
				Math.abs(preQ - lastQ) === Math.abs(column[preQ] - column[lastQ]);

			if (sameCol || sameDiag) return;
		}

		if (row === n) {
			result.push(column.slice());
			return;
		}

		for (let col = 0; col < n; col++) {
			column.push(col);
			dfs(row + 1, column);
			column.pop();
		}
	}

	dfs(0, []);
	return result;
}