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
	    } else {
	    	current = current.next;
	    }
			return false;
	}
		   
}

function getAt(list, index) {
 
}

function insertAt(list, index, element) {
  
}

function removeAt(list, index) {
 
}

function clear(list) {

}

const squirrelList = initList();
add(squirrelList, "acorn");
add(squirrelList, "pecan");
add(squirrelList, "walnut");
console.log(contains(squirrelList, "walnut"));