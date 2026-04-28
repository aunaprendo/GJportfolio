function generateElement() {
	return Math.floor(Math.random() * 100 + 1);
};

function generateArray() {
	const arrayOutline = new Array(5).fill(1);
	const arrayNums = arrayOutline.map((num) => num * generateElement());
	return arrayNums;
};

function generateContainer() {
	const container = document.createElement("div");
	return container;
};

function fillArrContainer(element, array) {
	array.forEach((num)=> {
		const span = document.createElement("span");
		span.textContent = num;
		element.appendChild(span);
	})
	return element;
};

function isOrdered(intA, intB) {
	return intA<=intB;
}

let flag = false;
function swapElements(array, i) {
	if (!isOrdered(array[i], array[i+1])) {
		const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
		flag = true;
	};
};

function highlightCurrentEls(element, index) {
	const a = element.children[index];
	const b = element.children[index + 1];

	if (a && b) {
		a.style.border = "1px dashed red";
		b.style.border = "1px dashed red";
	}
}

const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const generateBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");

let unsortedArray = [];

generateBtn.addEventListener("click", () => {
	startingArray.innerHTML = "";
	while (arrayContainer.children.length > 1) {
	  arrayContainer.removeChild(arrayContainer.lastChild);
	}
	unsortedArray = generateArray();
	fillArrContainer(startingArray, unsortedArray);
	sortBtn.style.display = "";
});

sortBtn.addEventListener("click", () => {	
	
	let tempArr = [...unsortedArray];
  let n = tempArr.length;

	
	for (let i = 0; i < n; i++) {
		if (flag === true || i == 0) {
			flag = false;
	  	for (let j = 0; j < n - 1; j++) {
				
				swapElements(tempArr, j);
			
	      let step = generateContainer();
	      fillArrContainer(step, [...tempArr]);
				arrayContainer.appendChild(step);		
							
				const divs = arrayContainer.querySelectorAll("div");
			  for (let x = 0; x < (divs.length/4)-1; x++) {
			      for (let e = 0; e < 4; e++) {
			        highlightCurrentEls(divs[(e + (4*x))], e);
			      }
					} 
		  }
		}
	}
	const result = arrayContainer.lastElementChild;
  result.style.border = "2px solid green";
  sortBtn.style.display = "none";
});
