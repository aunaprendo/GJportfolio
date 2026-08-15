function permuteString(str) {
  if (str.length <= 1) {
    return [str];
  }

  let results = [];

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    let remaining = str.slice(0, i) + str.slice(i + 1);

    let permutations = permuteString(remaining);

    for (let perm of permutations) {
      results.push(current + perm);
    }
  }

  return [...new Set(results)];
}

console.log(permuteString("nuts"));
