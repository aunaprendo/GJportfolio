function fibonacci(n) {
	if (n < 0) return undefined;
	if (n <= 1) return n;

	const sequence = [0, 1];

	for (let i = 2; i <= n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2]);
	}

	return sequence[n];
}
console.log(fibonacci(15));

