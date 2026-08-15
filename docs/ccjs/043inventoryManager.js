let inventory = [];

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

console.log(findProductIndex("Pecan"));

function addProduct(object) {
  object.name = object.name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === object.name) {
      inventory[i].quantity += object.quantity;
      console.log(`${inventory[i].name} quantity updated`);
      return;
    }
  }

  inventory.push(object);
  console.log(`${object.name} added to inventory`);
}

function removeProduct(name, quantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      inventory[i].quantity = inventory[i].quantity - quantity;
      if (inventory[i].quantity === 0) {
        inventory.splice(i, 1);
      } else if (inventory[i].quantity < 0) {
        inventory[i].quantity = inventory[i].quantity + quantity;
        console.log(
          `Not enough ${name.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`,
        );
        return;
      } else {
        console.log(`Remaining ${name.toLowerCase()} pieces: ${inventory[i].quantity}`);
        return;
      }
    }
  }
  console.log(`${name.toLowerCase()} not found`);
}
