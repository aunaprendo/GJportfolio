function generateElement() {
  return Math.floor(Math.random() * 100 + 1);
}

function generateArray() {
  let arr = []
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement())
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(element, array) {

  for (let i = 0; i < 5; i++) {
      let span = element.appendChild(document.createElement("span"))
      span.textContent = `${array[i]}`
  }

}

function isOrdered(int1, int2) {
  return int1 <= int2;
}

function swapElements(array, index) {
  if (!isOrdered(array[index], array[index+1])){
      array.splice(index, 0, array[index+1])
      array.splice(index+2, 1)
  }
}

function highlightCurrentEls(htmlElement, index){
 let child = htmlElement.children[index];
 let secondChild = child.nextElementSibling;

for (const el of [child, secondChild]) {
    el.style.border = '2px dashed red';
}
}

const generateButton = document.getElementById("generate-btn");
const sortButton = document.getElementById("sort-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");

generateButton.addEventListener("click", () => {
  const divs = arrayContainer.querySelectorAll("div")
  divs.forEach((div) => {
    if (div !== startingArray) {
      div.remove()
    }

  })
  sortButton.style.display = ""
  startingArray.innerHTML = ''
  let array = generateArray();
  fillArrContainer(startingArray, array)
})

sortButton.addEventListener("click", () => {


let nodeArray = Array.from(startingArray.querySelectorAll("span"))
let array = nodeArray.map(node => node.textContent)

let count = 0;                  //Used within the loop to count how many pairs are in order

  do {                          //Execute at least once, in case a pre-sorted array is passed
      count = 0;                
      for (let i = 0; i < 4; i++) {
        if (isOrdered(array[i], array[i+1])) {
          count++               //Increment if a number pair is ordered
        }
        swapElements(array, i)              //Will swap two numbers if unordered
        let bubbled = generateContainer(); 
        fillArrContainer(bubbled, array);  
        arrayContainer.appendChild(bubbled);
      }
     
  } while (count < 4)           //If all elements are in order (count === 4), then conclude the loop

  const divs = arrayContainer.querySelectorAll("div")
  for (let i = 0; i < (divs.length/4)-1; i++) {
      for (let e = 0; e < 4; e++) {
        highlightCurrentEls(divs[(e + (4*i))], e)
      }
  } //Maybe a bad way of highlighting steps, but this implementation passes our tests

  const last = arrayContainer.lastElementChild
  last.style.border = "2px solid green"
  sortButton.style.display = "none"
})