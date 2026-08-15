const lunches = [];
function addLunchToEnd(array, string) {
  array.push(string);
  console.log(string + " added to the end of the lunch menu.");
  return array;
}

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(string + " added to the start of the lunch menu.");
  return array;
}

function removeLastLunch(array) {
  if (array.length != 0) {
    let item = array.pop();
    console.log(item + " removed from the end of the lunch menu.");
    return array;
  } else {
    console.log("No lunches to remove.");
  }
}

function removeFirstLunch(array) {
  if (array.length != 0) {
    let item = array.shift();
    console.log(item + " removed from the start of the lunch menu.");
    return array;
  } else {
    console.log("No lunches to remove.");
  }
}

function getRandomLunch(array) {
  if (array.length != 0) {
    let rando = Math.floor(Math.random() * array.length);
    let item = array[rando];
    console.log("Randomly selected lunch: " + item);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(array) {
  if (array.length != 0) {
    console.log("Menu items: " + array.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}
