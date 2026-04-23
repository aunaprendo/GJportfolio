function dfs(graph, root) {
	let visited = [];

	function traverse(node) {
		visited.push(node);

		graph[node].forEach((value, index) => {
			if (value === 1 && !visited.includes(index)) {
				traverse(index);
			}
		});
	}

	traverse(root);
	return visited;
}



console.log(dfs([
[0, 1, 0, 0], 
[1, 0, 0, 0], 
[0, 0, 0, 1], 
[0, 0, 1, 0]], 
3))


returns 3, 2
0->1. 2->3 