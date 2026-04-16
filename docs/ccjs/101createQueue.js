function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  let length = queue.collection.length;
	queue.collection[length]= element;
}

function dequeue(queue) {
  if (queue.collection.length === 0) {
  	return undefined;
  }
	return queue.collection.splice(0, 1)[0];
}

function front(queue) {
  return queue.collection[0];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return queue.collection.length ===0;
}

let interests = initQueue();
enqueue(interests, "trees");
enqueue(interests, "squirrels");
enqueue(interests, "dinosaurs");
enqueue(interests, "bubbles");
console.log(dequeue(interests));
print(interests);
enqueue(interests, "candy");
enqueue(interests, "math");
console.log(front(interests));
print(interests);
console.log(size(interests));
console.log(isEmpty(interests));