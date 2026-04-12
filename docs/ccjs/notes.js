

You should have a contains function that accepts a linked list and an element. It should return true if the specified element exists in the linked list, and false otherwise.
You should have a getAt function that accepts a linked list and an index. It should return the element at the given index in the linked list. If the index is out of bounds, it should return undefined.
You should have a insertAt function that accepts a linked list, an index, and an element. It should insert the given element at the specified position in the linked list. If the index is out of bounds, it should not modify the list.
You should have a removeAt function that accepts a linked list and an index. It should remove the node at the given index in the linked list. If the index is out of bounds, it should not modify the list.
You should have a clear function that accepts a linked list. It should remove all elements from the linked list, effectively resetting it to an empty state.
Note: Some later tests rely on earlier methods. For example, if getAt is not implemented correctly, tests for functions like insertAt and removeAt may fail even when those functions are close to correct.