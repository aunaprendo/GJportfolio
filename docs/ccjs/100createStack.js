let interests = ["squirrels", "trees"];

function push(stack, element) {
  stack[stack.length] = element;
  return stack;
}

function pop(stack) {
  if (stack.length === 0) {
    return undefined;
  }

  let top = stack[stack.length - 1];
  stack.length = stack.length - 1;
  return top;
}

function peek(stack) {
  if (stack.length === 0) {
    return undefined;
  }

  return stack[stack.length - 1];
}

function isEmpty(stack) {
  return stack.length === 0;
}

function clear(stack) {
  stack.length = 0;
  return stack;
}

console.log(push(interests, "nuts"));
console.log(pop(interests));
console.log(peek(interests));
console.log(interests);
console.log(clear(interests));