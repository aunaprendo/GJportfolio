function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
	let current = list.head;
	
	while (current !== null) {
	    if (current.element===element) {
	    	return true;
	    }
	    	current = current.next;
		}
	return false;	   
}

function getAt(list, index) {
  let current = list.head;
  let count = 0;

  while (current !== null) {
    if (count === index) {
      return current.element;
    }
    current = current.next;
    count++;
  }
  return undefined;
}

function insertAt(list, index, element) {
  if (index < 0 || index > list.length) return;

  const node = { element, next: null };

  if (index === 0) {
    node.next = list.head;
    list.head = node;
  } else {
    let current = list.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
  }

  list.length++;
}

function removeAt(list, index) {
 if (index < 0 || index > list.length) return;

  if (index === 0) {
    list.head = list.head.next;
  } else {
    let current = list.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
  }

  list.length--;
}

function clear(list) {
	list.head = null;	
	list.length = 0;
	return;
}

const squirrelList = initList();
add(squirrelList, "acorn");
add(squirrelList, "pecan");
add(squirrelList, "walnut");
add(squirrelList, "corn");
add(squirrelList, "sunflower seeds");
insertAt(squirrelList, 2, "almond");
removeAt(squirrelList, 3);
clear(squirrelList);
console.log(squirrelList);