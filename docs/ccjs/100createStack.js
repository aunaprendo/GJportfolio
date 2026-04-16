function initStack() {
  return {
    collection: []
  };
}

function print(stack) {
  console.log(stack.collection);
}

function push(stack, element) {
	stack.collection.push(element);
}

function pop(stack) {
  if (stack.collection.length === 0) {
  	return undefined;
  }
	return stack.collection.pop();
}

function peek(stack) {
   if (stack.collection.length === 0) {
  	return undefined;
  }
	return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack) {
  return stack.collection.length ===0;
}

function clear(stack) {
  return stack.collection.splice(0);
}

let interests = initStack();
push(interests, "trees");
push(interests, "squirrels");
push(interests, "dinosaurs");
push(interests, "bubbles");
print(interests);
console.log(pop(interests));
print(interests);
push(interests, "candy");
push(interests, "math");
console.log(peek(interests));
print(interests);
console.log(isEmpty(interests));
console.log(clear(interests));
console.log(isEmpty(interests));
print(interests);